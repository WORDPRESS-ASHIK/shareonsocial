"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function WorkSection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            Selected Work
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Made to{" "}
            <em className="italic text-[color:var(--color-brand-red)]">move</em>{" "}
            metrics.
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="hidden shrink-0 items-center gap-2 rounded-full border border-foreground/15 px-5 py-3 text-sm hover:bg-foreground/5 md:inline-flex"
        >
          View all <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-[repeat(3,minmax(0,1fr))]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-orange)] text-[oklch(0.18_0.02_260)] md:row-span-2 min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              Casa
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              Case study
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Casa Nova
                </div>
                <div className="mt-1 text-sm opacity-70">
                  Restaurant · Brand + Website
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-blue)] text-background min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              Vertex
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              Case study
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Vertex Health
                </div>
                <div className="mt-1 text-sm opacity-70">
                  Healthcare · Digital System
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-pink)] text-[oklch(0.18_0.02_260)] min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              Fjord
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              Case study
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Fjord Skin
                </div>
                <div className="mt-1 text-sm opacity-70">
                  DTC · Ecommerce + Ads
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[oklch(0.92_0.03_80)] text-foreground md:row-span-2 min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              Northline
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              Case study
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Northline
                </div>
                <div className="mt-1 text-sm opacity-70">
                  Real Estate · Positioning
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[color:var(--color-brand-cyan)] text-[oklch(0.18_0.02_260)] min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              Halo
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              Case study
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Halo Tutors
                </div>
                <div className="mt-1 text-sm opacity-70">
                  Education · Reels + CRM
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group relative overflow-hidden rounded-[1.75rem] bg-[oklch(0.14_0.02_260)] text-background min-h-[320px] md:min-h-[380px]"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-90">
            <div className="font-display text-[clamp(3rem,10vw,8rem)] leading-none tracking-[-0.05em]">
              Kite
            </div>
          </div>
          <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
            <div className="text-xs uppercase tracking-[0.25em] opacity-70">
              Case study
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  Kite &amp; Co.
                </div>
                <div className="mt-1 text-sm opacity-70">
                  Retail · Packaging + Store
                </div>
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-current/30 transition group-hover:rotate-45 group-hover:bg-current/10">
                <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
