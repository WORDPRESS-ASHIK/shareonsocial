"use client";

import { useState } from "react";
import { IndustryFilter } from "./IndustryFilter";
import { ProjectGrid } from "./ProjectGrid";
import { MOCK_PROJECTS } from "./types";

const TABS = [
  { label: "Restaurants", value: "Restaurants & Hospitality" },
  { label: "Healthcare", value: "Healthcare & Wellness" },
  { label: "Retail", value: "Retail & E-commerce" },
  { label: "Real Estate", value: "Real Estate & Property" },
  { label: "Education", value: "Education & Training" },
  { label: "Construction", value: "Construction & Trades" },
  { label: "Home Services", value: "Home Services" },
  { label: "Beauty", value: "Beauty & Personal Care" },
  { label: "Professional", value: "Professional Services" },
  { label: "Startups", value: "Technology & Startups" },
];

export function PortfolioContent() {
  const [activeIndustry, setActiveIndustry] = useState(TABS[0].value);

  const filteredProjects = MOCK_PROJECTS.filter((p) => p.industry === activeIndustry);

  return (
    <>
      <IndustryFilter 
        industries={TABS} 
        activeIndustry={activeIndustry} 
        onSelect={setActiveIndustry} 
      />
      <ProjectGrid projects={filteredProjects} />
    </>
  );
}
