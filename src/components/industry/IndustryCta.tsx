"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function IndustryCta({ data }: { data: any }) {
  return (
    <section className="relative px-6 py-24 md:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Massive Full-Width Banner */}
        <div className="relative overflow-hidden rounded-[3rem] bg-foreground px-6 py-24 text-center text-background md:px-16 md:py-32 lg:px-24">
          
          {/* Abstract Glowing Orbs & Background */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 h-full w-full opacity-[0.03]" aria-hidden="true">
              <defs>
                <pattern id="cta-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="currentColor" strokeWidth="1"></path>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-pattern)"></rect>
            </svg>
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full opacity-40 blur-[100px]"
              style={{ background: "radial-gradient(closest-side, oklch(0.72 0.18 55 / 0.8), transparent)" }}
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-1/4 -right-1/4 h-[800px] w-[800px] rounded-full opacity-30 blur-[100px]"
              style={{ background: "radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.8), transparent)" }}
            />
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-[20ch] font-display text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-0.03em] text-balance text-background"
            >
              {data.headline}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-8 max-w-[50ch] text-lg text-background/80 md:text-xl text-balance"
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12"
            >
              <Link
                href="/book"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-background px-10 py-5 text-base font-semibold text-foreground transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[color:var(--color-brand-cyan)]/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-brand-cyan)]/10 to-[color:var(--color-brand-pink)]/10 opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="relative z-10">{data.buttonText}</span>
                <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform group-hover:rotate-45" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
