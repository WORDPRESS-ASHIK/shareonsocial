"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectGrid } from "@/components/portfolio/ProjectGrid";
import { MOCK_PROJECTS, Project } from "@/components/portfolio/types";

const SERVICE_MAPPING: Record<string, string[]> = {
  "social-media-management": ["Social Media", "Content"],
  "branding-media-management": ["Branding", "Content"],
  "website-development": ["Website"],
  "seo-aeo": ["SEO", "AEO"],
  "paid-advertising": ["Paid Ads", "Lead Gen"],
  "content-creation": ["Content", "Social Media"],
  "crm-automation": ["CRM", "Automation", "Email"],
  "ai-business-solutions": ["Automation", "Analytics", "CRM"],
};

export function SolutionRelatedWork({ slug }: { slug: string }) {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // 1. Get relevant services for this solution
    const relevantServices = SERVICE_MAPPING[slug] || [];
    
    // 2. Filter pool of projects that match the services
    let pool = MOCK_PROJECTS.filter((project) => 
      project.services.some((service) => relevantServices.includes(service))
    );

    // Fallback if none match: just use all
    if (pool.length === 0) pool = [...MOCK_PROJECTS];

    // 3. Shuffle array to rotate them dynamically
    const shuffled = pool.sort(() => 0.5 - Math.random());

    // 4. Take top 3
    setProjects(shuffled.slice(0, 3));
  }, [slug]);

  // Prevent hydration mismatch by showing nothing until mounted
  if (projects.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background relative z-10 border-t border-foreground/5">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 mb-16 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground"
        >
          Related Case Studies
        </motion.h2>
      </div>

      <ProjectGrid projects={projects} />
    </section>
  );
}
