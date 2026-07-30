"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart, Activity, CheckCircle2 } from "lucide-react";
import type { SolutionData } from "@/data/solutions";

const outcomeIcons = [TrendingUp, BarChart, Activity, CheckCircle2];

export function SolutionOutcomes({ data }: { data: SolutionData['outcomes'] }) {
  return (
    <section className="relative overflow-hidden bg-foreground py-24 lg:py-32 text-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[20ch] font-display text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-balance"
          >
            {data.headline}
          </motion.h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => {
            const Icon = outcomeIcons[index % outcomeIcons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative flex flex-col min-h-[160px] rounded-3xl border border-background/10 bg-background/5 p-6 shadow-sm transition-all hover:-translate-y-1 hover:bg-background/10 z-10"
              >
                <div className="mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background/10 text-background transition-colors group-hover:bg-[color:var(--color-brand-cyan)]/20 group-hover:text-[color:var(--color-brand-cyan)]">
                  <Icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-lg font-medium leading-snug text-background/90 group-hover:text-background">
                  {item}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
