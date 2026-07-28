"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const industries = [
  {
    num: "01",
    title: "Restaurants",
    desc: "Menus, packaging, delivery ads",
    tag: "F&B",
    slug: "restaurants",
  },
  {
    num: "02",
    title: "Healthcare",
    desc: "Clinics, wellness, dental",
    tag: "Care",
    slug: "healthcare",
  },
  {
    num: "03",
    title: "Retail",
    desc: "DTC, boutique, marketplaces",
    tag: "Retail",
    slug: "retail",
  },
  {
    num: "04",
    title: "Education",
    desc: "Schools, tutors, courses",
    tag: "EDU",
    slug: "education",
  },
  {
    num: "05",
    title: "Professional Services",
    desc: "Law, finance, consulting",
    tag: "Pro",
    slug: "professional-services",
  },
  {
    num: "06",
    title: "Real Estate",
    desc: "Developers, brokers, PropTech",
    tag: "RE",
    slug: "real-estate",
  },
  {
    num: "07",
    title: "Startups",
    desc: "Seed to Series B",
    tag: "New",
    slug: "startups",
  },
  {
    num: "08",
    title: "Events",
    desc: "Weddings, festivals, launches",
    tag: "Live",
    slug: "events",
  },
];

export function IndustriesSection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="max-w-5xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Industries
        </div>
        <h2 className="mt-6 font-display text-[clamp(2rem,4.5vw,4.5rem)] leading-[0.95] tracking-[-0.03em]">
          Tailored growth strategies for your industry.
        </h2>
      </div>
      <div className="mt-14 divide-y divide-foreground/10 border-y border-foreground/10">
        {industries.map((industry, index) => (
          <Link href={`/industries/${industry.slug}`} key={industry.num} className="block">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              style={{ willChange: "transform, opacity" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 transition hover:bg-foreground/[0.02] md:grid-cols-[80px_1fr_auto_auto]"
            >
              <span className="font-mono text-xs text-foreground/40">
                {industry.num}
              </span>
              <div>
                <div className="font-display text-3xl tracking-tight md:text-5xl">
                  {industry.title}
                </div>
                <div className="mt-1 text-sm text-foreground/60">
                  {industry.desc}
                </div>
              </div>
              <span className="hidden rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/60 md:inline-flex">
                {industry.tag}
              </span>
              <ArrowUpRight
                className="h-5 w-5 shrink-0 opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                aria-hidden="true"
              />
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
