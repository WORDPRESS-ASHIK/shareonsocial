"use client";

import { motion } from "framer-motion";
import { Activity, CheckCircle2, Heart, MessageCircle, Share2, TrendingUp, Users } from "lucide-react";

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
            <div className="relative min-h-[280px] w-full flex items-center justify-center mt-4">
              {/* Main Brand Book / Guidelines Card */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative z-10 w-[85%] max-w-[300px] rounded-2xl bg-white/20 p-6 shadow-xl backdrop-blur-md border border-white/30"
              >
                <div className="mb-5 flex items-center justify-between border-b border-current/10 pb-4">
                  <div className="font-display text-2xl tracking-tight">Brand Identity</div>
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-current/20"></span>
                    <span className="h-2 w-2 rounded-full bg-current/20"></span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-wider opacity-50">Primary Type</div>
                    <div className="font-display text-5xl">Aa</div>
                    <div className="mt-2 text-xs opacity-70">Outfit & Inter</div>
                  </div>
                  <div>
                    <div className="mb-2 text-[10px] uppercase tracking-wider opacity-50">Core Colors</div>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-6 w-6 rounded-full bg-[#111827] border border-white/30 shadow-sm" />
                      <div className="h-6 w-6 rounded-full bg-white border border-white/30 shadow-sm" />
                      <div className="h-6 w-6 rounded-full bg-[#3B82F6] border border-white/30 shadow-sm" />
                      <div className="h-6 w-6 rounded-full bg-[#F43F5E] border border-white/30 shadow-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Logo Asset */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute right-[5%] top-[5%] z-20 flex h-24 w-24 items-center justify-center rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl"
              >
                <div className="font-display text-4xl font-bold italic">S<span className="opacity-50">/</span>S</div>
              </motion.div>

              {/* Floating Component Asset */}
              <motion.div 
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-[5%] bottom-[10%] z-20 flex items-center gap-3 rounded-full bg-[#111827] px-4 py-2 text-white shadow-xl"
              >
                <div className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-xs font-medium tracking-wide">Primary Button</span>
              </motion.div>

              <div className="absolute right-[10%] bottom-[10%] spin-slow h-32 w-32 rounded-full border border-current/20 border-dashed" />
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
              <div className="relative min-h-[300px] w-full mt-4">
                {/* Main Dashboard Window */}
                <div className="relative z-10 h-full w-full overflow-hidden rounded-2xl border border-white/40 bg-white/95 backdrop-blur-md shadow-2xl flex flex-col">
                  {/* Browser/OS Header */}
                  <div className="flex h-10 items-center gap-2 border-b border-black/10 bg-black/5 px-4">
                    <span className="h-2.5 w-2.5 rounded-full bg-black/20"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-black/20"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-black/20"></span>
                    <div className="ml-4 h-4 w-32 rounded bg-black/10"></div>
                  </div>
                  
                  {/* Dashboard Content */}
                  <div className="flex flex-1 p-4 gap-4">
                    {/* Sidebar */}
                    <div className="w-16 hidden sm:flex flex-col gap-3">
                      <div className="h-4 w-full rounded bg-black/20"></div>
                      <div className="h-4 w-3/4 rounded bg-black/10"></div>
                      <div className="h-4 w-5/6 rounded bg-black/10"></div>
                      <div className="h-4 w-full rounded bg-black/10"></div>
                    </div>
                    
                    {/* Main Area */}
                    <div className="flex-1 flex flex-col gap-4">
                      {/* KPI Row */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-lg bg-white p-3 border border-black/5 shadow-sm">
                          <div className="mb-2 h-2 w-12 rounded bg-black/20"></div>
                          <div className="h-4 w-full rounded bg-black/80"></div>
                        </div>
                        <div className="rounded-lg bg-white p-3 border border-black/5 shadow-sm">
                          <div className="mb-2 h-2 w-12 rounded bg-black/20"></div>
                          <div className="h-4 w-3/4 rounded bg-black/80"></div>
                        </div>
                        <div className="rounded-lg bg-[color:var(--color-brand-blue)]/10 p-3 border border-[color:var(--color-brand-blue)]/20 shadow-sm">
                          <div className="mb-2 h-2 w-12 rounded bg-[color:var(--color-brand-blue)]/60"></div>
                          <div className="h-4 w-full rounded bg-[color:var(--color-brand-blue)]"></div>
                        </div>
                      </div>
                      
                      {/* Chart Area */}
                      <div className="flex-1 rounded-lg border border-black/5 bg-gradient-to-b from-black/5 to-transparent p-4 flex flex-col justify-end relative overflow-hidden">
                        {/* Fake grid lines */}
                        <div className="absolute inset-0 flex flex-col justify-between p-4">
                          <div className="h-px w-full bg-black/5"></div>
                          <div className="h-px w-full bg-black/5"></div>
                          <div className="h-px w-full bg-black/5"></div>
                        </div>
                        {/* Chart Area Gradient */}
                        <div className="relative h-20 w-full rounded-t-lg bg-gradient-to-t from-[color:var(--color-brand-blue)]/30 to-transparent">
                          {/* Chart line SVG */}
                          <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="absolute bottom-0 h-full w-full overflow-visible">
                            <path d="M0 40 Q 20 30, 40 35 T 70 15 T 100 5" fill="none" stroke="var(--color-brand-blue)" strokeWidth="2.5" strokeLinecap="round" className="drop-shadow-sm" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Notification */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -right-4 top-16 z-20 flex items-center gap-3 rounded-xl border border-white/20 bg-[#111827]/90 px-4 py-3 shadow-2xl backdrop-blur-xl"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white shadow-sm">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Campaign Live</div>
                    <div className="text-[10px] text-white/70">Optimizing delivery</div>
                  </div>
                </motion.div>
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
              <div className="relative min-h-[300px] w-full flex items-center justify-center mt-4">
                <div className="relative flex items-center justify-center w-full max-w-[340px]">
                  {/* Phone 1 (Left - Background) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute left-0 z-10 aspect-[9/19] w-28 overflow-hidden rounded-[20px] bg-white/90 shadow-2xl border border-white/40 backdrop-blur-md"
                    style={{ transform: "rotate(-12deg) scale(0.9) translateX(20px)" }}
                  >
                    {/* Header */}
                    <div className="absolute top-0 w-full px-3 py-4 flex items-center gap-2 border-b border-black/5">
                       <div className="h-5 w-5 rounded-full bg-black/10" />
                       <div className="h-2 w-12 rounded bg-black/10" />
                    </div>
                    {/* Post Image */}
                    <div className="absolute top-14 left-2 right-2 aspect-square rounded-lg bg-[color:var(--color-brand-blue)]/20 border border-black/5" />
                    <div className="absolute top-[170px] left-3 space-y-1.5">
                      <div className="h-1.5 w-16 rounded bg-black/20" />
                      <div className="h-1 w-10 rounded bg-black/10" />
                    </div>
                    <div className="absolute inset-x-0 bottom-2 flex justify-center">
                      <span className="h-1 w-8 rounded-full bg-black/20"></span>
                    </div>
                  </motion.div>

                  {/* Phone 2 (Center - Foreground) */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-30 aspect-[9/19] w-36 overflow-hidden rounded-[24px] bg-white shadow-2xl border border-white/50"
                  >
                    {/* Reel/TikTok Style UI */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--color-brand-pink)]/10 to-[color:var(--color-brand-orange)]/10" />
                    
                    {/* Floating Text blocks */}
                    <div className="absolute bottom-16 left-3 right-12 space-y-2">
                      <div className="h-3 w-3/4 rounded bg-black/80 shadow-sm" />
                      <div className="h-2 w-1/2 rounded bg-black/60" />
                      <div className="flex gap-1 pt-1">
                        <span className="h-3 w-10 rounded-full bg-black/10" />
                        <span className="h-3 w-12 rounded-full bg-black/10" />
                      </div>
                    </div>

                    {/* Right Action Bar */}
                    <div className="absolute bottom-16 right-2 flex flex-col items-center gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm">
                          <Heart className="h-4 w-4 text-pink-500" fill="currentColor" />
                        </div>
                        <span className="text-[9px] font-medium text-black/80">12k</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm">
                          <MessageCircle className="h-4 w-4 text-blue-500" />
                        </div>
                        <span className="text-[9px] font-medium text-black/80">342</span>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm">
                          <Share2 className="h-4 w-4 text-black/70" />
                        </div>
                      </div>
                    </div>

                    {/* Profile Overlay */}
                    <div className="absolute top-4 left-3 flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-black/10 border border-white" />
                      <div className="h-2 w-16 rounded bg-black/40" />
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute inset-x-0 bottom-2 flex justify-center">
                      <span className="h-1 w-10 rounded-full bg-black/20"></span>
                    </div>
                  </motion.div>

                  {/* Phone 3 (Right - Background) */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute right-0 z-20 aspect-[9/19] w-28 overflow-hidden rounded-[20px] bg-white/90 shadow-2xl border border-white/40 backdrop-blur-md"
                    style={{ transform: "rotate(12deg) scale(0.9) translateX(-20px)" }}
                  >
                    {/* Carousel Style */}
                    <div className="absolute top-8 left-2 right-[-20px] flex gap-2">
                      <div className="aspect-[4/5] w-20 shrink-0 rounded-lg bg-[color:var(--color-brand-orange)]/20 border border-black/5" />
                      <div className="aspect-[4/5] w-20 shrink-0 rounded-lg bg-black/5 border border-black/5" />
                    </div>
                    <div className="absolute bottom-10 left-3 space-y-1.5">
                      <div className="h-1.5 w-14 rounded bg-black/20" />
                      <div className="h-1 w-12 rounded bg-black/10" />
                    </div>
                    <div className="absolute inset-x-0 bottom-2 flex justify-center">
                      <span className="h-1 w-8 rounded-full bg-black/20"></span>
                    </div>
                  </motion.div>
                </div>
                
                {/* Floating Notification */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-4 -left-4 z-40 flex items-center gap-2 rounded-full border border-white/50 bg-white px-3 py-2 shadow-xl backdrop-blur-md"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-orange-500 text-white shadow-inner">
                    <Heart className="h-3.5 w-3.5" fill="currentColor" />
                  </div>
                  <span className="text-xs font-bold text-black">Viral Reach</span>
                </motion.div>
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
              <div className="relative min-h-[250px] mt-4 flex flex-col justify-end">
                {/* Background ambient glow for the chart */}
                <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-[color:var(--color-brand-orange)]/10 blur-[40px]"></div>
                
                <div className="grid h-full grid-cols-2 items-center gap-6 relative z-10">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-foreground/50">
                      This quarter
                    </div>
                    <div className="mt-2 flex items-baseline gap-2">
                      <div className="font-display text-6xl tracking-tight md:text-7xl">
                        +312%
                      </div>
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="mt-1 text-sm text-foreground/60">
                      Avg. qualified pipeline
                    </div>
                  </div>
                  
                  <div className="relative h-32 w-full">
                    {/* Live indicator badge */}
                    <div className="absolute -top-4 right-0 flex items-center gap-2 rounded-full bg-white px-2 py-1 shadow-md border border-black/5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-black">Live ROI</span>
                    </div>

                    <svg viewBox="0 0 200 100" className="h-full w-full overflow-visible">
                      <defs>
                        <linearGradient id="s4" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0" stopColor="oklch(0.62 0.24 25)" stopOpacity="0.4"></stop>
                          <stop offset="1" stopColor="oklch(0.62 0.24 25)" stopOpacity="0"></stop>
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
                        strokeWidth="3"
                        strokeLinecap="round"
                      ></path>
                      {/* Data points */}
                      <circle cx="60" cy="60" r="4" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="2" />
                      <circle cx="120" cy="40" r="4" fill="white" stroke="oklch(0.62 0.24 25)" strokeWidth="2" />
                      <circle cx="200" cy="10" r="5" fill="oklch(0.62 0.24 25)" className="shadow-lg" />
                    </svg>
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
              <div className="relative min-h-[250px] w-full mt-4 flex items-center">
                {/* Automated Pipeline Visual */}
                <div className="relative w-full rounded-2xl bg-black/10 p-5 backdrop-blur-sm border border-white/10 shadow-inner">
                  {/* Connection Line */}
                  <div className="absolute left-[39px] top-8 bottom-8 w-[2px] bg-white/20"></div>

                  <div className="space-y-4 relative z-10">
                    {/* Node 1 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 border border-white/30 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <Users className="h-5 w-5" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/10 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/20">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-90">Lead Capture</span>
                          <span className="text-[10px] uppercase tracking-wider opacity-50 text-green-300">Active</span>
                        </div>
                        <div className="mt-0.5 text-xs opacity-60">Syncs to main CRM database</div>
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <Activity className="h-5 w-5 opacity-80" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-80">Smart Routing</span>
                        </div>
                        <div className="mt-0.5 text-xs opacity-50">Tags & assigns to sales rep</div>
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="group flex items-center gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/20 text-white shadow-lg backdrop-blur-md transition-transform group-hover:scale-110">
                        <MessageCircle className="h-5 w-5 opacity-80" />
                      </div>
                      <div className="flex-1 rounded-xl bg-white/5 px-4 py-2.5 backdrop-blur-sm border border-white/5 transition-colors group-hover:bg-white/10">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium opacity-80">Instant WhatsApp</span>
                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white/20 text-[8px]">&lt;1m</span>
                        </div>
                        <div className="mt-1 h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                          <motion.div 
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-white" 
                          />
                        </div>
                      </div>
                    </div>
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
