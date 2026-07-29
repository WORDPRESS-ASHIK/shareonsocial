import fs from 'fs';

const file = 'src/components/portfolio/types.ts';
let code = fs.readFileSync(file, 'utf8');

// Use a regex to find all "outcomes": [ ... ] arrays and replace them with a new array of 4 metrics.
// We can use a simple replace callback.

const METRICS_POOL = [
  { label: "Revenue Growth", value: "+45%" },
  { label: "ROAS", value: "3.2x" },
  { label: "New Leads", value: "1,200+" },
  { label: "Conversion Rate", value: "+18%" },
  { label: "Cost Per Lead", value: "-24%" },
  { label: "Organic Traffic", value: "+125%" },
  { label: "Engagement", value: "5x" },
  { label: "Active Users", value: "10k+" },
];

let counter = 0;
code = code.replace(/"outcomes": \[\s*\{\s*"label"[^\]]+\]/g, () => {
  const m1 = METRICS_POOL[(counter++) % METRICS_POOL.length];
  const m2 = METRICS_POOL[(counter++) % METRICS_POOL.length];
  const m3 = METRICS_POOL[(counter++) % METRICS_POOL.length];
  const m4 = METRICS_POOL[(counter++) % METRICS_POOL.length];
  
  return `"outcomes": [
      {
        "label": "${m1.label}",
        "value": "${m1.value}"
      },
      {
        "label": "${m2.label}",
        "value": "${m2.value}"
      },
      {
        "label": "${m3.label}",
        "value": "${m3.value}"
      },
      {
        "label": "${m4.label}",
        "value": "${m4.value}"
      }
    ]`;
});

fs.writeFileSync(file, code);
console.log('Successfully updated metrics in types.ts');
