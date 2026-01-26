import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const thumbnailsDir = path.join(__dirname, '../../public/images/visual/thumbnails');

// Read all files in the directory
const files = fs.readdirSync(thumbnailsDir);

let renamedCount = 0;

files.forEach(file => {
  const lowerCaseFile = file.toLowerCase();

  // Check if the filename has any uppercase characters
  if (file !== lowerCaseFile) {
    const oldPath = path.join(thumbnailsDir, file);
    const newPath = path.join(thumbnailsDir, lowerCaseFile);

    // Check if target file already exists
    if (fs.existsSync(newPath)) {
      console.log(`⚠️  Skipping ${file} - ${lowerCaseFile} already exists`);
    } else {
      fs.renameSync(oldPath, newPath);
      console.log(`✓ Renamed: ${file} → ${lowerCaseFile}`);
      renamedCount++;
    }
  }
});

console.log(`\n✅ Done! Renamed ${renamedCount} file(s).`);
