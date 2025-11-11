import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Get current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the JSON file
const dataPath = join(__dirname, 'data', 'music-items.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// Lowercase categories and format values
const transformed = data.map(item => ({
  ...item,
  categories: item.categories ? item.categories.toLowerCase() : item.categories,
  format: item.format ? item.format.toLowerCase() : item.format
}));

// Write back to file
fs.writeFileSync(
  dataPath,
  JSON.stringify(transformed, null, 2)
);

console.log('✅ Done! Lowercased all categories and format values.');