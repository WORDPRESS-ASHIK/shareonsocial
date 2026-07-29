"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Project } from "./types";

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-44 pb-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div 
          className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-30 blur-3xl" 
          style={{ background: `radial-gradient(closest-side, ${project.color}, transparent)` }}
        ></div>
      </div>
      
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-xs font-medium text-foreground/50 mb-6 uppercase tracking-[0.2em]">
              <span className="text-foreground/80">{project.industry.split(' &')[0]}</span>
              <span className="h-1 w-1 rounded-full bg-foreground/20"></span>
              <span>{project.client}</span>
            </div>
            
            <h1 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-tight text-balance">
              {project.title}
            </h1>
            
            <p className="mt-8 max-w-lg text-lg text-foreground/70 md:text-xl">
              {project.summary}
            </p>

            <div className="mt-12">
              <h3 className="text-xs uppercase tracking-[0.25em] text-foreground/50 mb-4">Services Provided</h3>
              <div className="flex flex-wrap gap-2">
                {project.services.map((service, i) => (
                  <span key={i} className="px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-lg border border-foreground/10 text-foreground/70 bg-foreground/[0.02]">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* KPI Cards Overlay */}
            <div className="absolute -bottom-8 -left-8 right-8 grid grid-cols-2 gap-4 z-20">
              {project.outcomes.map((outcome, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  className="bg-background/90 backdrop-blur-xl border border-foreground/5 rounded-2xl p-6 shadow-xl"
                >
                  <div className="font-display text-4xl text-foreground mb-1">{outcome.value}</div>
                  <div className="text-xs font-medium text-foreground/60 uppercase tracking-wider">{outcome.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
