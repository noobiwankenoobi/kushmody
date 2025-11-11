import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the JSON file
const dataPath = join(__dirname, 'data', 'visual-items.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Reorder properties
const transformed = data.map(item => {
  const {
    gallery_image_filename,
    gallery_image_url,
    gallery_image_url_thumbnail,
    ...rest
  } = item;

  const reordered = {};

  for (const [key, value] of Object.entries(rest)) {
    reordered[key] = value;

    // Insert gallery image properties right after categories
    if (key === 'categories') {
      reordered.gallery_image_filename = gallery_image_filename || '';
      reordered.gallery_image_url = gallery_image_url || '';
      reordered.gallery_image_url_thumbnail = gallery_image_url_thumbnail || '';
    }
  }

  return reordered;
});

// Write back to file
fs.writeFileSync(
  dataPath,
  JSON.stringify(transformed, null, 2)
);

console.log('✅ Done! Moved gallery_image properties right after categories.');