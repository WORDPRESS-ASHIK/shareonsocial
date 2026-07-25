"use client";

import { motion } from "framer-motion";

export function SolutionsSection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Growth Solutions
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
          Five practices. One outcome.
        </h2>
      </div>
      <div className="mt-16 space-y-6">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          style={{ willChange: "transform, opacity" }}
          transition={{ duration: 0.5 }}
          className="grain group relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand-orange)] text-[oklch(0.18_0.02_260)] md:min-h-[520px] p-8 md:p-12"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div className="flex items-baseline gap-4">
                <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                  01
                </span>
                <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                  Practice
                </span>
              </div>
              <div>
                <h3 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                  Branding
                </h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Identity
                  </li>
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Naming
                  </li>
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Logo systems
                  </li>
                  <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                    Guidelines
                  </li>
                </ul>
              </div>
            </div>
            <div className="min-h-[220px]">
              <div className="relative flex h-full items-center justify-center">
                <div className="text-center">
                  <div className="font-display text-[clamp(4rem,14vw,10rem)] leading-none tracking-[-0.05em]">
                    B<span className="italic">/</span>S
                  </div>
                  <div className="mt-2 text-sm uppercase tracking-[0.3em] opacity-70">
                    brand systems
                  </div>
                </div>
                <div className="spin-slow absolute right-6 top-6 h-24 w-24 rounded-full border border-current opacity-40 md:h-32 md:w-32"></div>
              </div>
            </div>
          </div>
        </motion.article>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[oklch(0.14_0.02_260)] text-background md:min-h-[440px] p-8 md:p-12"
          >
            <div className="grid gap-8">
              <div className="flex flex-col justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    02
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    Practice
                  </span>
                </div>
                <div>
                  <h3 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Digital
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Website
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Ecommerce
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Landing pages
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      UX/UI
                    </li>
                  </ul>
                </div>
              </div>
              <div className="min-h-[220px]">
                <div className="relative rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/30"></span>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-3 w-1/2 rounded bg-white/20"></div>
                    <div className="h-8 w-full rounded bg-gradient-to-r from-[color:var(--color-brand-blue)]/60 to-[color:var(--color-brand-pink)]/50"></div>
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="h-16 rounded-lg bg-white/10"></div>
                      <div className="h-16 rounded-lg bg-white/10"></div>
                      <div className="h-16 rounded-lg bg-white/10"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand-pink)] text-[oklch(0.18_0.02_260)] md:min-h-[440px] p-8 md:p-12"
          >
            <div className="grid gap-8">
              <div className="flex flex-col justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    03
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    Practice
                  </span>
                </div>
                <div>
                  <h3 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Content
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Reels
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Storyboarding
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Video editing
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      AI reels
                    </li>
                  </ul>
                </div>
              </div>
              <div className="min-h-[220px]">
                <div className="flex items-end justify-center gap-3">
                  <div
                    className="relative aspect-[9/16] w-24 overflow-hidden rounded-2xl bg-black/80 shadow-2xl"
                    style={{ transform: "rotate(-6deg) translateY(8px)" }}
                  >
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
                      <span className="h-1 w-6 rounded-full bg-white/70"></span>
                      <span className="h-1 w-3 rounded-full bg-white/40"></span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-white/10"></div>
                  </div>
                  <div
                    className="relative aspect-[9/16] w-24 overflow-hidden rounded-2xl bg-black/80 shadow-2xl"
                    style={{ transform: "rotate(0deg) translateY(0px)" }}
                  >
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
                      <span className="h-1 w-6 rounded-full bg-white/70"></span>
                      <span className="h-1 w-3 rounded-full bg-white/40"></span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-white/10"></div>
                  </div>
                  <div
                    className="relative aspect-[9/16] w-24 overflow-hidden rounded-2xl bg-black/80 shadow-2xl"
                    style={{ transform: "rotate(6deg) translateY(8px)" }}
                  >
                    <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1">
                      <span className="h-1 w-6 rounded-full bg-white/70"></span>
                      <span className="h-1 w-3 rounded-full bg-white/40"></span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-transparent to-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
        <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[oklch(0.96_0.01_90)] text-foreground md:min-h-[340px] p-8 md:p-12"
          >
            <div className="grid gap-8">
              <div className="flex flex-col justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    04
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    Practice
                  </span>
                </div>
                <div>
                  <h3 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Marketing
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Meta Ads
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Google Ads
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      SEO
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      AEO
                    </li>
                  </ul>
                </div>
              </div>
              <div className="min-h-[220px]">
                <div className="grid h-full grid-cols-2 items-center gap-6">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/50">
                      This quarter
                    </div>
                    <div className="mt-2 font-display text-6xl tracking-tight md:text-7xl">
                      +312%
                    </div>
                    <div className="mt-1 text-sm text-foreground/60">
                      Avg. qualified pipeline
                    </div>
                  </div>
                  <svg viewBox="0 0 200 100" className="h-full w-full">
                    <defs>
                      <linearGradient id="s4" x1="0" x2="0" y1="0" y2="1">
                        <stop
                          offset="0"
                          stopColor="oklch(0.62 0.24 25)"
                          stopOpacity="0.4"
                        ></stop>
                        <stop
                          offset="1"
                          stopColor="oklch(0.62 0.24 25)"
                          stopOpacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 80 Q 40 78, 60 60 T 120 40 T 200 10 L 200 100 L 0 100 Z"
                      fill="url(#s4)"
                    ></path>
                    <path
                      d="M0 80 Q 40 78, 60 60 T 120 40 T 200 10"
                      fill="none"
                      stroke="oklch(0.62 0.24 25)"
                      strokeWidth="2.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </motion.article>
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grain group relative overflow-hidden rounded-[2rem] bg-[color:var(--color-brand-blue)] text-background md:min-h-[440px] p-8 md:p-12"
          >
            <div className="grid gap-8">
              <div className="flex flex-col justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    05
                  </span>
                  <span className="text-xs uppercase tracking-[0.3em] opacity-60">
                    Practice
                  </span>
                </div>
                <div>
                  <h3 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-[-0.03em]">
                    Technology
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      CRM
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Business automation
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      WhatsApp
                    </li>
                    <li className="rounded-full border border-current/20 px-3 py-1 text-xs backdrop-blur">
                      Email
                    </li>
                  </ul>
                </div>
              </div>
              <div className="min-h-[220px]">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-xs">
                      1
                    </span>
                    <span className="opacity-90">New lead → CRM</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-xs">
                      2
                    </span>
                    <span className="opacity-90">→ Segment</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-xs">
                      3
                    </span>
                    <span className="opacity-90">→ WhatsApp reply</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2 text-sm backdrop-blur">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white/20 text-xs">
                      4
                    </span>
                    <span className="opacity-90">→ Follow-up in 3d</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
