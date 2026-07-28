"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function InsightsSection() {
  const insights = [
    {
      category: "Search",
      readTime: "6 min",
      title: "Why AEO is the new SEO — and what to do this quarter.",
      link: "/insights",
      gradient:
        "conic-gradient(from 210deg at 50% 50%, oklch(0.56 0.2 255), oklch(0.7 0.2 350), oklch(0.72 0.18 55), oklch(0.56 0.2 255))",
    },
    {
      category: "Advertising",
      readTime: "8 min",
      title: "Ad creative that converts: the four-hook framework.",
      link: "/insights",
      gradient:
        "radial-gradient(circle at 30% 30%, oklch(0.72 0.18 55) 0, oklch(0.62 0.24 25) 60%, oklch(0.18 0.02 260) 100%)",
    },
    {
      category: "Ecommerce",
      readTime: "12 min",
      title: "Ecom growth loops: from first click to lifetime value.",
      link: "/insights",
      gradient:
        "linear-gradient(135deg, oklch(0.78 0.14 210), oklch(0.56 0.2 255))",
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="inline-block h-px w-8 bg-foreground/40"></span>
            Insights
          </div>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.05] tracking-[-0.03em] text-balance pb-3">
            Field notes from the growth desk.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-foreground/70 md:text-xl">
            Actionable insights, proven marketing tips, and practical growth strategies to help business owners scale smarter.
          </p>
        </div>
        <Link
          href="/insights"
          className="hidden shrink-0 rounded-full border border-foreground/15 px-5 py-3 text-sm hover:bg-foreground/5 md:inline-flex"
        >
          All insights →
        </Link>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {insights.map((insight, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-card p-8 transition hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="mb-6 aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <div
                className="h-full w-full"
                style={{ background: insight.gradient }}
              ></div>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground/50">
              <span>{insight.category}</span>
              <span>·</span>
              <span>{insight.readTime}</span>
            </div>
            <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight md:text-[26px]">
              {insight.title}
            </h3>
            <div className="mt-auto flex items-center justify-between pt-6 text-sm">
              <span>Read essay</span>
              <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
