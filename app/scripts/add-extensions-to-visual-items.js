import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const visualItemsPath = path.join(__dirname, '../data/visual-items.json');
const visualHighresDir = path.join(__dirname, '../../public/images/visual/highres');

// Read the JSON file
const visualItems = JSON.parse(fs.readFileSync(visualItemsPath, 'utf8'));

// Get all files in highres directory
const highresFiles = fs.readdirSync(visualHighresDir);

// Create a map of filename (without extension) to full filename (with extension)
const filenameMap = {};
highresFiles.forEach(file => {
  const ext = path.extname(file);
  const nameWithoutExt = path.basename(file, ext);
  filenameMap[nameWithoutExt] = file;
});

console.log('Found', Object.keys(filenameMap).length, 'files in highres directory');

// Update each item in visual-items.json
let updatedCount = 0;
visualItems.forEach(item => {
  if (item.type === 'image' && item.gallery_image_filename) {
    const filename = item.gallery_image_filename;
    if (filenameMap[filename]) {
      const ext = path.extname(filenameMap[filename]);
      item.file_extension = ext;
      console.log(`Updated ${filename} with extension ${ext}`);
      updatedCount++;
    } else {
      console.log(`⚠️  No matching file found for: ${filename}`);
    }
  }
});

// Write back to file
fs.writeFileSync(visualItemsPath, JSON.stringify(visualItems, null, 2));

console.log(`\nDone! Updated ${updatedCount} items with file extensions.`);
