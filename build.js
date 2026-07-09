const fs = require('fs');
const path = require('path');

// Helper to recursively copy directories
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    if (entry.name.startsWith('.')) continue; // skip hidden files like .aistudio
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Clean and recreate dist directory
const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// Files to copy from root
const filesToCopy = [
  'index.html',
  'about.html',
  'admissions.html',
  'contact.html',
  'student-portal.html',
  'teacher-portal.html',
  'admin-portal.html',
  'robots.txt',
  'sitemap.xml',
  '.nojekyll'
];

filesToCopy.forEach(file => {
  const srcPath = path.join(__dirname, file);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, path.join(distDir, file));
    console.log(`Copied ${file} to dist/`);
  }
});

// Copy assets folder
const assetsSrc = path.join(__dirname, 'assets');
const assetsDest = path.join(distDir, 'assets');
if (fs.existsSync(assetsSrc)) {
  copyDirSync(assetsSrc, assetsDest);
  console.log('Copied assets/ to dist/assets/');
}

console.log('Build completed successfully!');
