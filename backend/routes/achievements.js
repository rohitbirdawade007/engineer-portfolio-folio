const express = require('express');
const router = express.Router();
const Achievement = require('../models/Achievement');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// @route   GET /api/achievements
// @desc    Get all achievements
// @access  Public
router.get('/', async (req, res) => {
  try {
    const achievements = await Achievement.find().sort({ createdAt: -1 });
    res.json(achievements);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
});

// @route   GET /api/achievements/:id
// @desc    Get single achievement by id or slug
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    let achievement;
    // Try by MongoDB ObjectId first, then by slug
    if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      achievement = await Achievement.findById(req.params.id);
    }
    if (!achievement) {
      achievement = await Achievement.findOne({ slug: req.params.id });
    }
    if (!achievement) return res.status(404).json({ msg: 'Achievement not found' });
    res.json(achievement);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
});

// @route   POST /api/achievements
// @desc    Create an achievement
// @access  Private
router.post('/', [auth, upload.array('images', 5)], async (req, res) => {
  try {
    const data = { ...req.body };
    
    // Handle uploaded files
    if (req.files && req.files.length > 0) {
      data.images = req.files.map(file => `/uploads/${file.filename}`);
    } else if (req.body.image) {
      data.images = [req.body.image];
    }

    // Parse highlights if stringified
    if (typeof data.highlights === 'string') {
      try { data.highlights = JSON.parse(data.highlights); } catch (e) {}
    }

    const achievement = new Achievement(data);
    await achievement.save();
    res.json(achievement);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
});

// @route   PUT /api/achievements/:id
// @desc    Update an achievement
// @access  Private
router.put('/:id', [auth, upload.array('images', 5)], async (req, res) => {
  try {
    const data = { ...req.body };
    
    // Safety: Remove fields that shouldn't be updated via body
    delete data._id;
    delete data.__v;
    delete data.createdAt;
    delete data.updatedAt;
    
    // Handle newly uploaded files
    if (req.files && req.files.length > 0) {
      const newImages = req.files.map(file => `/uploads/${file.filename}`);
      data.images = newImages;
    } else {
      // If no new files, don't let req.body.images overwrite existing ones
      // unless it's explicitly sent as a valid array (e.g. for reordering)
      delete data.images;
    }

    // Parse highlights if stringified
    if (typeof data.highlights === 'string') {
      try { data.highlights = JSON.parse(data.highlights); } catch (e) {}
    }

    const achievement = await Achievement.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true });
    if (!achievement) return res.status(404).json({ msg: 'Achievement not found' });
    res.json(achievement);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
});

// @route   DELETE /api/achievements/:id
// @desc    Delete an achievement
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    await Achievement.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Achievement removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Server Error', error: err.message });
  }
});

module.exports = router;
