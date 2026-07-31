"use client";

import React from "react";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { IndustryCardData } from "@/data/industriesCardsData";

const industryImages: Record<string, string> = {
  'restaurants-cafes': '/images/optimized/industry_restaurants.png',
  'hotels-hospitality': 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&q=75&w=800',
  'healthcare-wellness': '/images/optimized/industry_healthcare.png',
  'dental-medical-clinics': '/images/optimized/industry_dental_clinic.png',
  'retail-ecommerce': 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=75&w=800',
  'education-training': 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=75&w=800',
  'real-estate-property': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=75&w=800',
  'construction-trades': 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=75&w=800',
  'home-services': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&q=75&w=800',
  'professional-services': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=75&w=800',
  'finance-accounting': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=75&w=800',
  'legal-services': 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=75&w=800',
  'beauty-personal-care': 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=75&w=800',
  'fitness-sports': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=75&w=800',
  'automotive': 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=75&w=800',
  'travel-tourism': 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=75&w=800',
  'events-entertainment': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=75&w=800',
  'nonprofits-community': 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=75&w=800',
  'manufacturing-wholesale': '/images/optimized/industry_manufacturing_factory.png',
  'logistics-transport': 'https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=75&w=800',
  'technology-saas': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=75&w=800',
  'startups': '/images/optimized/industry_startups_office.png',
  'agriculture-food-production': 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=75&w=800',
  'e-learning-creators': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=75&w=800',
};

interface IndustryCardProps {
  industry: IndustryCardData;
  index: number;
}

export const IndustryCard = React.memo(({ industry, index }: IndustryCardProps) => {
  const isPriority = index < 3;
  const imageSrc = industryImages[industry.slug] || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=75&w=800';
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
