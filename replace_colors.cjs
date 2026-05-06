const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src', 'admin');

const replacements = [
  { regex: /text-\[#6C63FF\]/g, replacement: 'text-primary' },
  { regex: /bg-\[#6C63FF\]/g, replacement: 'bg-primary' },
  { regex: /border-\[#6C63FF\]/g, replacement: 'border-primary' },
  { regex: /shadow-\[#6C63FF\]/g, replacement: 'shadow-primary' },
  { regex: /ring-\[#6C63FF\]/g, replacement: 'ring-primary' },
  { regex: /from-\[#6C63FF\]/g, replacement: 'from-primary' },
  { regex: /to-\[#6C63FF\]/g, replacement: 'to-primary' },
  { regex: /bg-\[#1DDBA8\]/g, replacement: 'bg-secondary' },
  { regex: /text-\[#1DDBA8\]/g, replacement: 'text-secondary' },
  { regex: /border-\[#1DDBA8\]/g, replacement: 'border-secondary' },
  { regex: /from-\[#1DDBA8\]/g, replacement: 'from-secondary' },
  { regex: /to-\[#1DDBA8\]/g, replacement: 'to-secondary' },
  { regex: /hover:text-\[#5B54E6\]/g, replacement: 'hover:text-primary/90' },
  { regex: /hover:bg-\[#5B54E6\]/g, replacement: 'hover:bg-primary/90' },
  { regex: /text-\[#5B54E6\]/g, replacement: 'text-primary/90' },
  { regex: /bg-slate-900/g, replacement: 'bg-foreground' },
  { regex: /text-slate-900/g, replacement: 'text-foreground' },
  { regex: /bg-white\/\[0\.03\]/g, replacement: 'bg-card' },
  { regex: /bg-white\/\[0\.04\]/g, replacement: 'bg-card' },
  { regex: /bg-white\/\[0\.05\]/g, replacement: 'bg-card' },
  { regex: /bg-white\/\[0\.06\]/g, replacement: 'bg-muted' },
  { regex: /border-white\/\[0\.06\]/g, replacement: 'border-border' },
  { regex: /border-white\/\[0\.08\]/g, replacement: 'border-border' },
  { regex: /text-white\/30/g, replacement: 'text-muted-foreground' },
  { regex: /text-white\/40/g, replacement: 'text-muted-foreground' },
  { regex: /text-white\/50/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-400/g, replacement: 'text-muted-foreground' },
  { regex: /text-slate-500/g, replacement: 'text-muted-foreground' },
  { regex: /dark:text-white/g, replacement: 'text-foreground' },
  { regex: /dark:bg-[#060610]/g, replacement: 'bg-background' },
  { regex: /bg-[#f4f4f8]/g, replacement: 'bg-background' }
];

function processDirectory(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;
      
      replacements.forEach(({ regex, replacement }) => {
        content = content.replace(regex, replacement);
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${file}`);
      }
    }
  });
}

processDirectory(directoryPath);
console.log('Done replacing colors.');
