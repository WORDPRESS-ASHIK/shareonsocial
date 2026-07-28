"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface JourneySectionProps {
  className?: string;
  hideHeader?: boolean;
}

const stages = [
  {
    num: "01",
    eyebrow: "Stage 01",
    title: "Discover",
    desc: "Audits, positioning, opportunity mapping.",
  },
  {
    num: "02",
    eyebrow: "Stage 02",
    title: "Create",
    desc: "Brand, product, content and website.",
  },
  {
    num: "03",
    eyebrow: "Stage 03",
    title: "Activate",
    desc: "Go-to-market, paid media, organic social.",
  },
  {
    num: "04",
    eyebrow: "Stage 04",
    title: "Optimize",
    desc: "Data-driven scaling and performance tuning.",
  },
];

export function JourneySection({ className = "", hideHeader = false }: JourneySectionProps) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 md:px-10 ${className}`}>
      {!hideHeader && (
        <div className="max-w-3xl mb-12 md:mb-16">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            Growth Journey
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Four stages. One trajectory.
          </h2>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-background shadow-sm"
      >
        {/* Subtle glow background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[var(--color-brand-blue)]/5 via-transparent to-[var(--color-brand-orange)]/5 opacity-60"></div>
        
        <div className="relative z-10 grid md:grid-cols-2">
          {stages.map((stage, i) => (
            <div 
              key={stage.num}
              className={`
                group relative p-8 md:p-12 transition-colors duration-500 hover:bg-foreground/[0.03]
                ${i === 0 ? "border-b border-foreground/10 md:border-r" : ""}
                ${i === 1 ? "border-b border-foreground/10" : ""}
                ${i === 2 ? "border-b border-foreground/10 md:border-b-0 md:border-r" : ""}
              `}
            >
              <div className="flex justify-between items-start">
                <div className="font-display text-5xl md:text-6xl text-foreground/20 transition-all duration-300 group-hover:text-foreground/40 group-hover:scale-105 origin-top-left">
                  {stage.num}
                </div>
                <ArrowUpRight className="h-6 w-6 text-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <div className="mt-20 md:mt-32">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/50 mb-3">
                  {stage.eyebrow}
                </div>
                <h3 className="font-display text-3xl md:text-4xl mb-3">
                  {stage.title}
                </h3>
                <p className="text-lg text-foreground/70 max-w-xs">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
