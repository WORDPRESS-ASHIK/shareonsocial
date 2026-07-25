import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";

export default function SolutionsPage() {
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
                Solutions
              </div>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] text-balance">
                Every lever, <em className="italic text-[color:var(--brand-blue)]">pulled together</em>.
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
                We combine strategy, creativity, marketing and technology into one integrated growth engine — no silos, no handoffs, no dead ends.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto mt-20 max-w-[1400px] px-6 md:px-10">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8 md:grid-cols-[280px_1fr] md:p-12"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                  0{/* */}1
                </div>
                <div className="mt-3 font-display text-5xl tracking-tight md:text-6xl" style={{ color: 'oklch(0.72 0.18 55)' }}>
                  Branding
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Positioning
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Naming
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Identity
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Guidelines
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Rebrands
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8 md:grid-cols-[280px_1fr] md:p-12"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                  0{/* */}2
                </div>
                <div className="mt-3 font-display text-5xl tracking-tight md:text-6xl" style={{ color: 'oklch(0.56 0.20 255)' }}>
                  Digital
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Website
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Ecommerce
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Landing pages
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  UX/UI
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Design systems
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8 md:grid-cols-[280px_1fr] md:p-12"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                  0{/* */}3
                </div>
                <div className="mt-3 font-display text-5xl tracking-tight md:text-6xl" style={{ color: 'oklch(0.70 0.20 350)' }}>
                  Content
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Reels
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  AI reels
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Video editing
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Storyboarding
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Photography direction
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8 md:grid-cols-[280px_1fr] md:p-12"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                  0{/* */}4
                </div>
                <div className="mt-3 font-display text-5xl tracking-tight md:text-6xl" style={{ color: 'oklch(0.62 0.24 25)' }}>
                  Marketing
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Meta Ads
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Google Ads
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  SEO
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  AEO
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Analytics
                </li>
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 rounded-[2rem] border border-foreground/10 bg-card p-8 md:grid-cols-[280px_1fr] md:p-12"
            >
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-foreground/40">
                  0{/* */}5
                </div>
                <div className="mt-3 font-display text-5xl tracking-tight md:text-6xl" style={{ color: 'oklch(0.78 0.14 210)' }}>
                  Technology
                </div>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:grid-cols-3">
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  CRM
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Business automation
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  WhatsApp automation
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Email automation
                </li>
                <li className="rounded-2xl border border-foreground/10 bg-background/40 px-4 py-4 text-sm font-medium">
                  Consulting
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="mt-16 flex justify-center">
            <a href="/book" className="rounded-full bg-foreground px-7 py-4 text-sm text-background">
              Build your growth plan →
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
