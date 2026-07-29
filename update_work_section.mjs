const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/WorkSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const cards = [
  {
    label: "SOCIAL",
    title: "Social Media Management",
    desc: "Build a consistent social presence with strategic content, smart scheduling, and ongoing management.",
    services: "Strategy • Content • Scheduling"
  },
  {
    label: "CONTENT",
    title: "Content Creation",
    desc: "Creative, on-brand content designed to capture attention, engage audiences, and keep your brand memorable.",
    services: "Copywriting • Graphics • Engagement"
  },
  {
    label: "PAID ADS",
    title: "Paid Advertising",
    desc: "Targeted campaigns built to reach the right audience, generate quality leads, and drive more conversions.",
    services: "Targeting • Campaigns • Optimization"
  },
  {
    label: "GROWTH",
    title: "Social Media Growth",
    desc: "Turn your social presence into a powerful growth channel with strategies focused on reach and engagement.",
    services: "Strategy • Reach • Engagement"
  },
  {
    label: "BRAND",
    title: "Brand Presence",
    desc: "Create a stronger and more consistent digital presence that keeps your business visible and recognizable.",
    services: "Content • Consistency • Visibility"
  },
  {
    label: "RETARGET",
    title: "Retargeting Campaigns",
    desc: "Reconnect with people who already know your brand and turn their interest into meaningful action.",
    services: "Audiences • Ads • Conversions"
  }
];

// Regex to find each card's inner content
// The cards are <motion.div ...> ... </motion.div>
// We will replace the children of <motion.div> for each card.

const motionDivRegex = /(<motion\.div[^>]*className="group relative overflow-hidden[^>]*>)([\s\S]*?)(<\/motion\.div>)/g;

let matchIndex = 0;
content = content.replace(motionDivRegex, (match, opening, inner, closing) => {
  if (matchIndex >= cards.length) return match;
  const card = cards[matchIndex];
  
  const newInner = `
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              ${card.label}
            </div>
            
            <div className="mt-auto pt-8">
              <div className="font-display text-2xl tracking-tight md:text-3xl">
                ${card.title}
              </div>
              <p className="mt-2 text-sm opacity-80 max-w-[90%] leading-relaxed">
                ${card.desc}
              </p>
              
              <div className="mt-6 flex items-end justify-between">
                <div className="text-[11px] font-medium uppercase tracking-[0.1em] opacity-90">
                  ${card.services}
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        `;
        
  matchIndex++;
  return opening + newInner + closing;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated WorkSection.tsx');
