const fs = require('fs');
const path = require('path');

const files = ['chunk1.ts', 'chunk2.ts', 'chunk3.ts'].map(f => path.join('src', 'data', f));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Remove process description
  content = content.replace(/process: \{\s*headline: "([^"]+)",\s*description: "[^"]+",/g, 'process: {\n      headline: "$1",');
  
  // Fix CTA
  content = content.replace(/cta: \{\s*headline: "([^"]+)",\s*description: "([^"]+)",\s*buttonText: "([^"]+)"\s*\}/g, 'cta: {\n      headline: "$1",\n      description: "$2",\n      closingText: "No credit card required. Cancel anytime.",\n      ctaButton: "$3"\n    }');

  fs.writeFileSync(file, content);
});
console.log('Fixed fields');
