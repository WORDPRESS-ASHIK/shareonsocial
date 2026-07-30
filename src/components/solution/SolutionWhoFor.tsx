"use client";

import { motion } from "framer-motion";
import type { SolutionData } from "@/data/solutions";

export function SolutionWhoFor({ data }: { data: SolutionData['whoFor'] }) {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
          <div className="relative">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-[15ch] font-display text-[clamp(28px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-balance"
            >
              {data.headline}
            </motion.h2>
          </div>
          
          <div className="relative border-l border-foreground/10 pl-6 md:pl-10">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-light text-foreground/80 leading-relaxed text-balance"
            >
              {data.description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
