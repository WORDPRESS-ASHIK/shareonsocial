import fs from 'fs';

function generateSlug(client) {
  return client
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const file = 'src/components/portfolio/types.ts';
let code = fs.readFileSync(file, 'utf8');

// The file has MOCK_PROJECTS = [ { "id": "1", "title": "...", "client": "..." }, ... ]
// We need to replace "id": "1" with "id": "<slug>"

// First let's parse out all the clients and replace their IDs.
// Wait, a regex might be tricky if we don't know the exact order.
// Let's just use string replace.
const matches = [...code.matchAll(/"id": "(\d+)",\s+"title": "([^"]+)",\s+"client": "([^"]+)"/g)];

for (const match of matches) {
  const fullMatch = match[0];
  const oldId = match[1];
  const title = match[2];
  const client = match[3];
  
  const slug = generateSlug(client) + '-' + oldId;
  const newText = `"id": "${slug}",\n    "title": "${title}",\n    "client": "${client}"`;
  
  code = code.replace(fullMatch, newText);
}

fs.writeFileSync(file, code);
console.log('Successfully updated slugs in types.ts');
