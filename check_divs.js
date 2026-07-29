const fs = require('fs');
const code = fs.readFileSync('src/components/SolutionsSection.tsx', 'utf8');

const startIdx = code.indexOf('<motion.article', code.indexOf('02'));
const endIdx = code.indexOf('</motion.article>', startIdx);

const chunk = code.substring(startIdx, endIdx);

let openCount = 0;
let match;
// match tags including motion.article
const regex = /<\/?(?:div|motion\.article|svg|ul|li|h3|span|circle|path|line|linearGradient|defs)[^>]*>/g;
while ((match = regex.exec(chunk)) !== null) {
  const tag = match[0];
  if (tag.endsWith('/>')) continue;
  if (tag.startsWith('</')) {
    openCount--;
  } else {
    openCount++;
  }
}
console.log('Open tags count (should be 0 since it stops before the closing tag, wait no it should be 1 since </motion.article> is not included):', openCount);
