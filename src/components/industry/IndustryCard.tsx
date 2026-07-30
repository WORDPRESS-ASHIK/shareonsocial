"use client";

import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { IndustryCardData } from "@/data/industriesCardsData";

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

interface IndustryCardProps {
  industry: IndustryCardData;
  index: number;
}

export const IndustryCard = React.memo(({ industry, index }: IndustryCardProps) => {
  const isPriority = index < 6;
  const imageSrc = industryImages[industry.slug] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80';
  const shortSubheadline = industry.title;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className="group relative flex flex-col h-full bg-white border border-[rgba(0,0,0,0.08)] rounded-[28px] px-8 pt-8 pb-7 shadow-sm transition-all duration-200 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-[#FF8A00] will-change-transform will-change-opacity cursor-default"
      >
        <div>
          <div className="relative w-full h-[250px] mb-6 overflow-hidden rounded-[20px] shadow-sm transform-gpu will-change-transform">
            <Image
              src={imageSrc}
              alt={industry.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={isPriority}
              quality={85}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 will-change-transform"
            />
          </div>

          <h3 className="relative font-display text-2xl tracking-tight">
            <span className="text-foreground transition-opacity duration-200 ease-out group-hover:opacity-0 will-change-opacity">
              {shortSubheadline}
            </span>
            <span
              className="absolute left-0 top-0 opacity-0 transition-opacity duration-200 ease-out group-hover:opacity-100 bg-clip-text text-transparent will-change-opacity"
              style={{ backgroundImage: 'linear-gradient(90deg, #FF8A00 0%, #FF5E62 35%, #D946EF 70%, #38BDF8 100%)' }}
              aria-hidden="true"
            >
              {shortSubheadline}
            </span>
          </h3>
          <div className="mt-3 w-full">
            <p className="text-sm font-medium text-foreground/90 mb-1">
              {industry.supportingLine}
            </p>
            <p className="text-sm text-foreground/60 leading-relaxed m-0">
              {industry.howWeHelp}
            </p>
          </div>
          <div className="mt-6 pt-5 border-t border-foreground/5">
            <span className="text-sm font-semibold text-brand-orange group-hover:text-brand-pink transition-colors duration-200">
              {industry.ctaText} &rarr;
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

IndustryCard.displayName = "IndustryCard";
