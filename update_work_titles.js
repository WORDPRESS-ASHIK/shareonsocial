const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/WorkSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  { from: 'Social Media Management', to: 'Social Media<br />Management' },
  { from: 'Content Creation', to: 'Content<br />Creation' },
  { from: 'Paid Advertising', to: 'Paid<br />Advertising' },
  { from: 'Social Media Growth', to: 'Social Media<br />Growth' },
  { from: 'Brand Presence', to: 'Brand<br />Presence' },
  { from: 'Retargeting Campaigns', to: 'Retargeting<br />Campaigns' }
];

// First update the styling
content = content.replace(/className="font-display text-2xl tracking-tight md:text-3xl"/g, 'className="font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-[-0.03em] mb-4"');
content = content.replace(/className="mt-2 text-sm opacity-80 max-w-\[90%\] leading-relaxed"/g, 'className="mt-1 text-sm opacity-80 max-w-[90%] leading-relaxed"');

// Then update the text content with line breaks
replacements.forEach(r => {
  content = content.replace(`\n                ${r.from}\n`, `\n                ${r.to}\n`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated typography');
