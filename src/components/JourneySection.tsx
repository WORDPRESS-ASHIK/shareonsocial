"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Link2, TrendingUp } from "lucide-react";

interface JourneySectionProps {
  className?: string;
}

const stages = [
  {
    num: "01",
    eyebrow: "Stage 01",
    title: "Discover",
    desc: "Audits, positioning, opportunity mapping.",
    color: "var(--brand-cyan)",
    glow: "oklch(78% 0.14 210 / 0.15)",
    icon: Search,
  },
  {
    num: "02",
    eyebrow: "Stage 02",
    title: "Create",
    desc: "Brand, product, content and website.",
    color: "var(--brand-pink)",
    glow: "oklch(70% 0.2 350 / 0.15)",
    icon: PenTool,
  },
  {
    num: "03",
    eyebrow: "Stage 03",
    title: "Connect",
    desc: "Ads, SEO, CRM and automation wired.",
    color: "var(--brand-orange)",
    glow: "oklch(72% 0.18 55 / 0.15)",
    icon: Link2,
  },
  {
    num: "04",
    eyebrow: "Stage 04",
    title: "Grow",
    desc: "Compound results, measured monthly.",
    color: "var(--brand-blue)",
    glow: "oklch(56% 0.2 255 / 0.15)",
    icon: TrendingUp,
  },
];

export function JourneySection({ className = "" }: JourneySectionProps) {
  return (
    <section className={`mx-auto max-w-[1400px] px-6 md:px-10 py-32 md:py-48 ${className}`}>
      
      {/* Top-left aligned headers */}
      <div className="w-full mb-32">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Growth Journey
        </div>
        <h2 className="mt-6 font-display text-[clamp(3rem,6vw,5rem)] leading-[1] tracking-[-0.03em] text-balance">
          Four stages.<br />One trajectory.
        </h2>
      </div>

      {/* Main content container */}
      <div className="relative w-full">
        
        {/* Central Vertical Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-foreground/10 -translate-x-1/2"></div>

        {/* Large vertical spacing between rows */}
        <div className="flex flex-col gap-32 md:gap-48 relative z-10">
          {stages.map((stage, i) => {
            const isContentLeft = i % 2 === 0;
            const Icon = stage.icon;
            
            return (
              <div key={stage.num} className="grid grid-cols-2 gap-8 md:gap-24 items-center group">
                
                {/* LEFT COLUMN */}
                <div className="flex w-full justify-center">
                  {isContentLeft ? (
                    /* Content on Left */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full flex flex-col items-start text-left pl-0 md:pl-12"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">
                        {stage.eyebrow}
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground/90">{stage.title}</h3>
                      <p className="text-lg md:text-xl text-foreground/60 max-w-[280px] leading-relaxed">{stage.desc}</p>
                    </motion.div>
                  ) : (
                    /* Icon on Left */
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-[1.5px] bg-background transition-all duration-500"
                      style={{ 
                        borderColor: stage.color, 
                        boxShadow: `0 0 60px 10px ${stage.glow}`,
                      }}
                    >
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex w-full justify-center">
                  {!isContentLeft ? (
                    /* Content on Right */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.7 }}
                      className="w-full flex flex-col items-start text-left pl-4 md:pl-12"
                    >
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/40 mb-4">
                        {stage.eyebrow}
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground/90">{stage.title}</h3>
                      <p className="text-lg md:text-xl text-foreground/60 max-w-[280px] leading-relaxed">{stage.desc}</p>
                    </motion.div>
                  ) : (
                    /* Icon on Right */
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full border-[1.5px] bg-background transition-all duration-500"
                      style={{ 
                        borderColor: stage.color, 
                        boxShadow: `0 0 60px 10px ${stage.glow}`,
                      }}
                    >
                      <Icon className="h-8 w-8 md:h-10 md:w-10 text-foreground" strokeWidth={1.5} />
                    </motion.div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
