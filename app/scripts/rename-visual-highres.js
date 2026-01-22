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
  // Get file extension
  const ext = path.extname(filename);
  const nameWithoutExt = path.basename(filename, ext);

  // Convert to lowercase and replace spaces and non-letter characters with hyphens
  const newNameWithoutExt = nameWithoutExt
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '');      // Remove leading/trailing hyphens

  const newFilename = newNameWithoutExt + ext.toLowerCase();

  // Only rename if the filename changed
  if (filename !== newFilename) {
    const oldPath = path.join(visualHighresDir, filename);
    const newPath = path.join(visualHighresDir, newFilename);

    console.log(`Renaming: ${filename} -> ${newFilename}`);
    fs.renameSync(oldPath, newPath);
  } else {
    console.log(`Skipping: ${filename} (already formatted)`);
  }
});

console.log('Done!');
