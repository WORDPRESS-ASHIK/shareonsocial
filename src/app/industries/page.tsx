import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import * as motion from "framer-motion/client";
import { industries24Data } from "@/data/industries24";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Share On Social",
  description: "Explore our specialized digital marketing services across 24 unique industries. We build bespoke growth engines for your specific market.",
};

export default function IndustriesPage() {
  const industries = Object.values(industries24Data);

  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        <section className="relative overflow-hidden pt-32 md:pt-44">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(closest-side, oklch(0.78 0.14 210 / 0.5), transparent)' }}>
            </div>
          </div>
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xs uppercase tracking-[0.25em] text-foreground/50">
                Industries
              </div>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] text-balance">
                Specialized in <em className="italic text-[color:var(--brand-pink)]">your</em> category.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
                We build bespoke growth engines across 24 distinct industries, tuning strategy to how your customer actually decides.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-[1400px] px-6 md:mt-32 md:px-10 pb-32">
          <div className="divide-y divide-foreground/10 border-y border-foreground/10">
            {industries.map((industry, index) => (
              <Link href={`/industries/${industry.slug}`} key={industry.slug} className="block group grid grid-cols-[auto_1fr_auto] items-center gap-6 py-6 transition hover:bg-foreground/[0.02] md:grid-cols-[80px_1fr_auto_auto]">
                <span className="font-mono text-xs text-foreground/40">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <div className="font-display text-3xl tracking-tight md:text-5xl">
                    {industry.hero.subheadline.replace('For ', '').replace('.', '')}
                  </div>
                  <div className="mt-1 text-sm text-foreground/60">
                    {industry.hero.headline}
                  </div>
                </div>
                <span className="hidden rounded-full border border-foreground/10 px-3 py-1 text-xs text-foreground/60 md:inline-flex">
                  Industry
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 opacity-40 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </section>

        <div className="pb-32">
          <CtaSection 
            heading={<>Every business is different. Our strategy is tailored to your goals, customers and stage of growth regardless of industry.</>}
            primaryBtnText="Discuss Your Industry"
            smallHeading={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
