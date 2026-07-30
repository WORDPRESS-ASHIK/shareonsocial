"use client";

import { motion } from "framer-motion";
import { Project } from "./types";
import { CaseStudyContent } from "./caseStudyData";
import { 
  LayoutTemplate, 
  Search, 
  Target, 
  Users
} from "lucide-react";

const frameworkCards = [
  { icon: LayoutTemplate, title: "Website Experience", description: "Frictionless UI/UX designed to seamlessly convert traffic into highly qualified leads." },
  { icon: Search, title: "SEO & AEO", description: "Targeted dominance across traditional organic search and modern AI discovery engines." },
  { icon: Target, title: "Paid Advertising", description: "High-ROI performance campaigns targeting local and commercial intent precisely." },
  { icon: Users, title: "CRM & Automation", description: "Automated nurturing pipelines to engage prospects and close deals significantly faster." }
];



export function CaseStudyResults({ 
  project, 
  content 
}: { 
  project: Project, 
  content: CaseStudyContent['strategy'] 
}) {
  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden text-white"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,138,0,.12), transparent 35%),
          radial-gradient(circle at bottom right, rgba(59,130,246,.10), transparent 40%),
          #111318
        `
      }}
    >
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}
      ></div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        
        {/* 01. Strategy Overview */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-xs uppercase tracking-[0.25em] text-[rgba(255,255,255,0.55)] mb-6">
              01. Strategy Overview
            </div>
            <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-tight mb-8 text-white">
              A blueprint for growth.
            </h2>
            <p className="text-xl md:text-2xl text-[rgba(255,255,255,0.78)] font-light leading-relaxed">
              {content.implementation}
            </p>
          </motion.div>
        </div>

        <hr className="border-[rgba(255,255,255,0.06)] my-12 md:my-16" />

        {/* 02. Growth Framework */}
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[rgba(255,255,255,0.55)] mb-10 text-center">
            02. Growth Framework
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {frameworkCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#1A1D24] border border-[rgba(255,255,255,0.08)] rounded-[24px] p-10 overflow-hidden transition-all duration-500 shadow-md hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] hover:-translate-y-2 hover:border-[rgba(255,255,255,0.15)]"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 mix-blend-overlay"
                  style={{ backgroundColor: project.color }}
                ></div>
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-inner">
                  <card.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl mb-4 text-white group-hover:text-[rgba(255,255,255,0.95)] transition-colors">{card.title}</h3>
                <p className="text-[rgba(255,255,255,0.78)] leading-relaxed text-lg">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <hr className="border-[rgba(255,255,255,0.06)] my-12 md:my-16" />



        {/* 03. Growth Results */}
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-[rgba(255,255,255,0.55)] mb-10 text-center">
            03. Growth Results
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {project.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#1A1D24] rounded-[24px] p-8 lg:p-10 text-center border border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-500 shadow-md hover:shadow-[0_0_30px_rgba(255,255,255,0.04)] hover:-translate-y-2 hover:border-[rgba(255,255,255,0.15)]"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 mix-blend-overlay bg-white"
                ></div>
                <div 
                  className="relative font-display text-[clamp(2.5rem,4vw,4rem)] tracking-tight mb-3 text-transparent bg-clip-text"
                  style={{ 
                    backgroundImage: "linear-gradient(90deg, #FF8A00 0%, #FF5E62 20%, #FF4FA3 40%, #9B5CF6 60%, #4F8DFF 80%, #22D3EE 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {outcome.value}
                </div>
                <div className="relative text-xs font-semibold text-[rgba(255,255,255,0.55)] uppercase tracking-widest group-hover:text-[rgba(255,255,255,0.75)] transition-colors">
                  {outcome.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
