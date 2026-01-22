import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the highres images directory
const highresDir = path.join(__dirname, '../../public/images/visual/highres');

// Read all files in the directory
const files = fs.readdirSync(highresDir);

let renameCount = 0;

files.forEach(file => {
  // Get file extension
  const ext = path.extname(file);
  const nameWithoutExt = path.basename(file, ext);

  // Create new filename: lowercase, replace spaces and non-alphanumeric (except underscores) with underscores
  const newNameWithoutExt = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9_]+/g, '_')
    .replace(/_+/g, '_') // Replace multiple underscores with single
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores

  const newFile = newNameWithoutExt + ext.toLowerCase();

  // Only rename if the filename has changed
  if (file !== newFile) {
    const oldPath = path.join(highresDir, file);
    const newPath = path.join(highresDir, newFile);

    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${newFile}`);
      renameCount++;
    } catch (error) {
      console.error(`Error renaming ${file}:`, error.message);
    }
  }
});

console.log(`\nTotal files renamed: ${renameCount}`);
