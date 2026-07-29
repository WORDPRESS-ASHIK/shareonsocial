"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$45M+", label: "Client Revenue Generated", description: "Across our portfolio in the last 12 months" },
  { value: "3.2M", label: "Qualified Leads Delivered", description: "Through targeted paid & organic campaigns" },
  { value: "98%", label: "Client Retention Rate", description: "Long-term partnerships built on results" },
];

export function ImpactMetrics() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 mb-24 md:mb-32">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground text-background p-10 md:p-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-20 -top-20 h-96 w-96 rounded-full opacity-30 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.62 0.24 25 / 0.7), transparent)",
            }}
          ></div>
        </div>
        
        <div className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="text-xs uppercase tracking-[0.25em] opacity-70 mb-6">
                The Impact
              </div>
              <h2 className="max-w-[18ch] font-display text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05] tracking-tight">
                Numbers that speak for themselves.
              </h2>
            </div>
            <p className="max-w-xs text-background/70">
              We measure our success entirely by the measurable growth of the businesses we partner with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pt-10 border-t border-background/20">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="font-display text-[clamp(3rem,6vw,5rem)] tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-br from-background to-background/50">
                  {metric.value}
                </div>
                <div className="text-lg font-medium mb-2">{metric.label}</div>
                <div className="text-sm text-background/60 leading-relaxed max-w-[250px]">
                  {metric.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
