"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Rocket, LineChart, Target } from "lucide-react";
import type { IndustryData } from "@/data/industries";

const processIcons = [SearchIcon, PenTool, MessageSquare, Rocket, LineChart];

// Reusing some lucide icons to act as search/discovery
function SearchIcon(props: any) {
  return <Target {...props} />;
}

export function IndustryProcess({ data }: { data: IndustryData['process'] }) {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Background Decor */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[color:var(--color-brand-pink)]/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 left-0 h-[600px] w-[600px] rounded-full bg-[color:var(--color-brand-blue)]/10 blur-[120px]"
        />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-[15ch] font-display text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-0.02em] text-balance"
          >
            {data.headline}
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Connected Line Background */}
          {/* Desktop: Horizontal, Mobile: Vertical */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-foreground/5 lg:left-0 lg:right-0 lg:top-[60px] lg:bottom-auto lg:h-[2px] lg:w-full" />

          {/* Animated Glow Line */}
          <motion.div
            initial={{ height: 0, width: "2px" }}
            whileInView={{ height: "100%", width: "2px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-8 top-0 bg-gradient-to-b from-[color:var(--color-brand-cyan)] via-[color:var(--color-brand-blue)] to-[color:var(--color-brand-pink)] lg:left-0 lg:top-[60px] lg:bottom-auto lg:h-[2px] lg:bg-gradient-to-r"
            style={{ originY: 0, originX: 0 }}
            onViewportEnter={(entry) => {
              if (window.innerWidth >= 1024) {
                entry?.target.setAttribute("style", "width: 100%; height: 2px; transition: width 2s ease-in-out;");
              }
            }}
          />

          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8 relative z-10">
            {data.steps.map((step, index) => {
              const Icon = processIcons[index % processIcons.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group relative flex flex-col pl-24 lg:pl-0 lg:pt-28"
                >
                  {/* Node Connector (The dot on the line) */}
                  <div className="absolute left-8 top-6 lg:top-[60px] lg:left-1/2 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-background bg-foreground/20 transition-all duration-500 group-hover:scale-125 group-hover:border-[color:var(--color-brand-blue)] group-hover:bg-background shadow-[0_0_15px_rgba(0,0,0,0)] group-hover:shadow-[color:var(--color-brand-blue)]/50" />

                  {/* Gradient Number Badge */}
                  <div className="absolute left-0 top-0 hidden lg:flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 text-2xl font-display font-bold text-foreground/50 backdrop-blur-md transition-all duration-500 group-hover:-translate-y-3/4 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-brand-blue)] group-hover:to-[color:var(--color-brand-pink)] group-hover:text-background group-hover:shadow-lg lg:left-1/2 lg:-translate-x-1/2">
                    0{index + 1}
                  </div>
                  
                  {/* Mobile Number Badge */}
                  <div className="absolute left-0 top-2 flex h-16 w-16 -translate-x-4 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/5 to-foreground/10 text-2xl font-display font-bold text-foreground/50 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[color:var(--color-brand-blue)] group-hover:to-[color:var(--color-brand-pink)] group-hover:text-background lg:hidden">
                    0{index + 1}
                  </div>

                  {/* Premium Process Card */}
                  <div className="relative mt-2 lg:mt-0 min-h-[220px] w-full overflow-hidden rounded-3xl border border-foreground/10 bg-background/40 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-foreground/20 group-hover:bg-background/60 group-hover:shadow-2xl group-hover:shadow-[color:var(--color-brand-blue)]/10">
                    
                    {/* Hover Glow Background inside card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-brand-cyan)]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      {/* Premium Icon Container */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/5 to-transparent border border-foreground/5 text-foreground/70 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:text-[color:var(--color-brand-blue)]">
                        <Icon className="h-7 w-7" />
                      </div>
                      
                      <h3 className="mb-3 text-xl font-medium leading-snug text-foreground/90 transition-colors group-hover:text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-foreground/60 transition-colors group-hover:text-foreground/80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
