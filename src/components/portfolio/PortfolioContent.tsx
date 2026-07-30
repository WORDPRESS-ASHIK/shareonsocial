"use client";

import { ProjectGrid } from "./ProjectGrid";
import { PORTFOLIO_PROJECTS } from "@/data/portfolioData";
import { MarqueeSection } from "@/components/MarqueeSection";

export function PortfolioContent() {
  const marqueeItems = [
    "Restaurants",
    "Healthcare",
    "Retail",
    "Real Estate",
    "Education",
    "Construction",
    "Home Services",
    "Beauty",
    "Professional",
    "Startups",
  ];

  return (
    <>
      <MarqueeSection items={marqueeItems} />
      <div className="mt-20 md:mt-24">
        <ProjectGrid projects={PORTFOLIO_PROJECTS} />
      </div>
    </>
  );
}
