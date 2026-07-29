const fs = require('fs');
const path = require('path');

const files = ['chunk1.ts', 'chunk2.ts', 'chunk3.ts'].map(f => path.join('src', 'data', f));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content.replace(/steps: \[\s*\{([\s\S]*?)\},\s*\{([\s\S]*?)\},\s*\{([\s\S]*?)\},\s*\{([\s\S]*?)\}\s*\]/g, (match, s1, s2, s3, s4) => {
    return `steps: [\n        {\n          number: "01",${s1}},\n        {\n          number: "02",${s2}},\n        {\n          number: "03",${s3}},\n        {\n          number: "04",${s4}}\n      ]`;
  });
  fs.writeFileSync(file, newContent);
});
console.log('Fixed numbers');
