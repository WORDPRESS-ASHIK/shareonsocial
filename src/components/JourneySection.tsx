"use client";

import { motion } from "framer-motion";
import { Compass, PenTool, Share2, TrendingUp } from "lucide-react";

export function JourneySection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Growth Journey
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
          Four stages. One trajectory.
        </h2>
      </div>
      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="absolute left-6 top-6 hidden h-[calc(100%-3rem)] w-px bg-foreground/10 md:left-1/2 md:block"
        ></div>
        <div className="space-y-10 md:space-y-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 md:items-center"
          >
            <div className="md:pr-16 md:text-right">
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/40">
                Stage 01
              </div>
              <h3 className="mt-2 font-display text-6xl tracking-[-0.03em] md:text-7xl">
                Discover
              </h3>
              <p className="mt-4 max-w-sm text-lg text-foreground/70 md:ml-auto">
                Audits, positioning, opportunity mapping.
              </p>
            </div>
            <div className="relative">
              <div
                className="mx-auto flex h-56 w-56 items-center justify-center rounded-full md:h-72 md:w-72"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.25), transparent)",
                }}
              >
                <div
                  className="flex h-32 w-32 items-center justify-center rounded-full bg-background shadow-xl md:h-40 md:w-40"
                  style={{
                    borderColor: "oklch(0.78 0.14 210)",
                    borderWidth: "1px",
                  }}
                >
                  <Compass
                    strokeWidth={1.3}
                    className="h-10 w-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 md:items-center md:[&>*:first-child]:order-2"
          >
            <div className="md:pl-16 md:text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/40">
                Stage 02
              </div>
              <h3 className="mt-2 font-display text-6xl tracking-[-0.03em] md:text-7xl">
                Create
              </h3>
              <p className="mt-4 max-w-sm text-lg text-foreground/70">
                Brand, product, content and website.
              </p>
            </div>
            <div className="relative">
              <div
                className="mx-auto flex h-56 w-56 items-center justify-center rounded-full md:h-72 md:w-72"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.70 0.20 350 / 0.25), transparent)",
                }}
              >
                <div
                  className="flex h-32 w-32 items-center justify-center rounded-full bg-background shadow-xl md:h-40 md:w-40"
                  style={{
                    borderColor: "oklch(0.70 0.20 350)",
                    borderWidth: "1px",
                  }}
                >
                  <PenTool
                    strokeWidth={1.3}
                    className="h-10 w-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 md:items-center"
          >
            <div className="md:pr-16 md:text-right">
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/40">
                Stage 03
              </div>
              <h3 className="mt-2 font-display text-6xl tracking-[-0.03em] md:text-7xl">
                Connect
              </h3>
              <p className="mt-4 max-w-sm text-lg text-foreground/70 md:ml-auto">
                Ads, SEO, CRM and automation wired.
              </p>
            </div>
            <div className="relative">
              <div
                className="mx-auto flex h-56 w-56 items-center justify-center rounded-full md:h-72 md:w-72"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.72 0.18 55 / 0.25), transparent)",
                }}
              >
                <div
                  className="flex h-32 w-32 items-center justify-center rounded-full bg-background shadow-xl md:h-40 md:w-40"
                  style={{
                    borderColor: "oklch(0.72 0.18 55)",
                    borderWidth: "1px",
                  }}
                >
                  <Share2
                    strokeWidth={1.3}
                    className="h-10 w-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 md:items-center md:[&>*:first-child]:order-2"
          >
            <div className="md:pl-16 md:text-left">
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/40">
                Stage 04
              </div>
              <h3 className="mt-2 font-display text-6xl tracking-[-0.03em] md:text-7xl">
                Grow
              </h3>
              <p className="mt-4 max-w-sm text-lg text-foreground/70">
                Compound results, measured monthly.
              </p>
            </div>
            <div className="relative">
              <div
                className="mx-auto flex h-56 w-56 items-center justify-center rounded-full md:h-72 md:w-72"
                style={{
                  background:
                    "radial-gradient(closest-side, oklch(0.56 0.20 255 / 0.25), transparent)",
                }}
              >
                <div
                  className="flex h-32 w-32 items-center justify-center rounded-full bg-background shadow-xl md:h-40 md:w-40"
                  style={{
                    borderColor: "oklch(0.56 0.20 255)",
                    borderWidth: "1px",
                  }}
                >
                  <TrendingUp
                    strokeWidth={1.3}
                    className="h-10 w-10"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
