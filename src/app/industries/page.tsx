import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CtaSection } from "@/components/CtaSection";
import * as motion from "framer-motion/client";
import { industries24Data } from "@/data/industries24";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FallbackImage } from "@/components/FallbackImage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Share On Social",
  description: "Explore our specialized digital marketing services across 24 unique industries. We build bespoke growth engines for your specific market.",
};

const industryImages: Record<string, string> = {
  'restaurants-cafes': 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80',
  'hotels-hospitality': 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80',
  'healthcare-wellness': 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80',
  'dental-medical-clinics': 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80',
  'retail-ecommerce': 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80',
  'education-training': 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80',
  'real-estate-property': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80',
  'construction-trades': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  'home-services': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=80',
  'professional-services': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
  'finance-accounting': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
  'legal-services': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80',
  'beauty-personal-care': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80',
  'fitness-sports': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
  'automotive': 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80',
  'travel-tourism': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80',
  'events-entertainment': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
  'nonprofits-community': 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80',
  'manufacturing-wholesale': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
  'logistics-transport': 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
  'technology-saas': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
  'startups': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80',
  'agriculture-food-production': 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
  'e-learning-creators': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Link 
                  href={`/industries/${industry.slug}`} 
                  className="group relative flex flex-col h-full bg-white border border-[rgba(0,0,0,0.08)] rounded-[28px] px-8 pt-8 pb-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-[#FF8A00]"
                >
                  <div>
                    <div className="w-full h-[250px] mb-6 overflow-hidden rounded-[20px] shadow-sm">
                      <FallbackImage 
                        src={industryImages[industry.slug] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80'} 
                        fallbackSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                        alt={industry.hero.headline}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    <h3 className="relative font-display text-2xl tracking-tight">
                      <span className="text-foreground transition-opacity duration-300 group-hover:opacity-0">
                        {industry.hero.subheadline.replace('For ', '').replace('.', '')}
                      </span>
                      <span 
                        className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(90deg, #FF8A00 0%, #FF5E62 35%, #D946EF 70%, #38BDF8 100%)' }}
                        aria-hidden="true"
                      >
                        {industry.hero.subheadline.replace('For ', '').replace('.', '')}
                      </span>
                    </h3>
                    <div className="flex justify-between items-center gap-4 mt-3">
                    <p className="text-sm text-foreground/60 leading-relaxed flex-1 m-0">
                      {industry.hero.headline}
                    </p>
                    <div className="relative flex items-center justify-center w-[44px] h-[44px] shrink-0 rounded-full border border-[rgba(0,0,0,.12)] bg-white transition-all duration-300 group-hover:-translate-y-[2px] group-hover:border-transparent overflow-hidden">
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,#FF8A00_0%,#FF5E62_35%,#D946EF_70%,#38BDF8_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"></div>
                      <ArrowUpRight
                        className="h-5 w-5 text-foreground/40 transition-colors duration-300 group-hover:text-white relative z-10"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  </div>
                </Link>
              </motion.div>
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
