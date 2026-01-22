import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const visualHighresDir = path.join(__dirname, '../../public/images/visual/highres');

// Read all files in the directory
const files = fs.readdirSync(visualHighresDir);

console.log(`Found ${files.length} files in visual/highres directory`);

files.forEach(filename => {
  // Replace hyphens with underscores
  const newFilename = filename.replace(/-/g, '_');

  // Only rename if the filename changed
  if (filename !== newFilename) {
    const oldPath = path.join(visualHighresDir, filename);
    const newPath = path.join(visualHighresDir, newFilename);

    console.log(`Renaming: ${filename} -> ${newFilename}`);
    fs.renameSync(oldPath, newPath);
  } else {
    console.log(`Skipping: ${filename} (no hyphens)`);
  }
});

console.log('Done!');
