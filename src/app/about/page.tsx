import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JourneySection } from "@/components/JourneySection";
import { ClientVoicesSection } from "@/components/ClientVoicesSection";
import { WhyChooseUs } from "@/components/about/WhyChooseUs";
import * as motion from "framer-motion/client";
import Image from "next/image";

export default function AboutPage() {
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
                About
              </div>
              <h1 className="mt-6 max-w-[16ch] font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.9] tracking-[-0.04em] text-balance">
                Not another agency. <em className="italic text-[color:var(--brand-blue)]">A partner.</em>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-foreground/70 md:text-xl">
                One team that cares about your business growth as much as your brand&apos;s design.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-stretch">
            <div className="md:col-span-5 flex flex-col">
              <div className="mb-12 text-xs uppercase tracking-[0.25em] text-foreground/50">
                <span className="mr-3 inline-block h-px w-6 translate-y-[-3px] bg-foreground/40"></span>
                About
              </div>
              <div className="hidden flex-1 md:block">
                <div className="relative h-full min-h-[250px] w-full max-w-[450px] overflow-hidden rounded-2xl bg-foreground/5">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2800&auto=format&fit=crop"
                      alt="Business Growth and Collaboration"
                      fill
                      className="object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                      sizes="(min-width: 768px) 30vw"
                  />
                </div>
              </div>
            </div>
            <motion.div 
              className="md:col-span-7 pt-0 md:pt-[60px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.1] tracking-[-0.03em]">
                Not just marketing.<br/>
                A complete <span className="italic text-[color:var(--brand-blue)]">growth</span> partner.
              </h2>
              <div className="mt-10 grid gap-8 text-lg text-foreground/75 md:grid-cols-2">
                <p>
                  We bring strategy, design, and technology together to help businesses grow. From your first campaign to long-term success, our team works with you every step of the way.
                </p>
                <p>
                  We're more than a service provider we're your growth partner. We focus on building stronger brands, generating better results, and helping your business grow with confidence.
                </p>
              </div>

            </motion.div>
          </div>
        </section>

        <JourneySection />
        
        <WhyChooseUs />
        
        <ClientVoicesSection />

      </main>
      <Footer />
    </div>
  );
}
