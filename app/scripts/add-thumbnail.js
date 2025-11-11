import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the JSON file
const dataPath = join(__dirname, '..', 'data', 'visual-items.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Add _thumbnail to gallery_image_filename and set it to gallery_image_url_thumbnail
const transformed = data.map(item => ({
  ...item,
  gallery_image_url_thumbnail: item.gallery_image_filename ? `${item.gallery_image_filename}_thumbnail` : ''
}));

// Write back to file
fs.writeFileSync(
  dataPath,
  JSON.stringify(transformed, null, 2)
);

console.log('✅ Done! Added _thumbnail suffix to all gallery_image_url_thumbnail values.');