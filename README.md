# 🚀 Elite AI & IoT Systems Portfolio

A high-fidelity, production-ready portfolio for an **AI & IoT Systems Architect**. This project features a sophisticated React frontend, a robust Node.js/Express backend, and advanced integrations like Google Gemini AI and Machine Learning modules.

![Portfolio Preview](https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200)

## 🌟 Key Features

- **Dynamic Content Engine**: Fully managed via a custom Administrative Command Center.
- **AI Neural Link (Chatbot)**: Intelligent assistant powered by **Google Gemini 1.5 Flash** with full portfolio context.
- **ML Diet Prediction**: Integrated Machine Learning module for health analytics (Python bridge).
- **Glassmorphic UI**: Premium "Bento Editorial" design system using Tailwind CSS and shadcn/ui.
- **Secure Admin Panel**: Role-based access control with JWT authentication and security overrides.
- **Optimized Performance**: 90+ Lighthouse scores, code splitting, and responsive asset resolution.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Components**: shadcn/ui + Framer Motion
- **State Management**: TanStack Query (React Query)
- **Icons**: Lucide React

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.0 (Optimized)
- **Database**: MongoDB Atlas (Mongoose)
- **AI Engine**: Google Generative AI (Gemini)
- **Authentication**: JWT + BcryptJS
- **Logging**: Winston + Morgan
- **ML Bridge**: Python 3 Child Processes

---

## ⚙️ Local Setup

### 1. Repository Initialization
```bash
git clone <your-repo-url>
cd engineer-portfolio-folio
```

### 2. Frontend Configuration
Install dependencies:
```bash
npm install
```
Create a `.env` file in the root:
```env
VITE_API_URL=http://localhost:5000/api
```
Start development server:
```bash
npm run dev
```

### 3. Backend Configuration
Navigate to the backend:
```bash
cd backend
npm install
```
Create a `backend/.env` file:
```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
ADMIN_REGISTRATION_TOKEN=your_setup_token
GEMINI_API_KEY=your_google_ai_key
```
Start backend:
```bash
npm run dev
```

### 4. Database Seeding (Optional)
Populate your database with sample data:
```bash
node backend/seed.js
```

---

## 🤖 Machine Learning Integration

The **Diet Prediction** feature requires a Python environment.
1. Ensure `python` is installed and accessible.
2. Install requirements in `Diet-Prediction-App/`:
   ```bash
   pip install -r Diet-Prediction-App/requirements.txt
   ```
3. Train the model:
   ```bash
   python Diet-Prediction-App/train_model.py
   ```
4. Copy `model.pkl` and `scaler.pkl` to `backend/ml/`.

---

## 📝 Deployment

- **Frontend**: Optimized for **Vercel** (includes `vercel.json` rewrites).
- **Backend**: Can be deployed to **Render.com**, **Railway**, or **DigitalOcean**.
- **Images**: Local uploads are supported, but CDN integration (Cloudinary/S3) is recommended for production.

---

## 👨‍💻 Author

**Rohit Sandip Birdawade**  
*AI & IoT Engineer*  
[GitHub](https://github.com/rohitbirdawade007) | [LinkedIn](https://linkedin.com/in/rohit-birdawade-299b6b278)

---
*Built with ❤️ for High-Performance Engineering.*
