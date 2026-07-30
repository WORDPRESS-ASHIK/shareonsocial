"use client";

import { motion } from "framer-motion";
import { Briefcase, LineChart, Code, Smartphone, Rocket, Target, Users, Bot } from "lucide-react";

export function SolutionIllustration({ slug }: { slug: string }) {
  const illustrations: Record<string, React.ReactNode> = {
    'social-media-management': <Users className="w-48 h-48 text-[color:var(--color-brand-blue)] opacity-80" />,
    'branding-media-management': <Briefcase className="w-48 h-48 text-[color:var(--color-brand-purple)] opacity-80" />,
    'website-development': <Code className="w-48 h-48 text-[color:var(--color-brand-cyan)] opacity-80" />,
    'seo-aeo': <Target className="w-48 h-48 text-[color:var(--color-brand-pink)] opacity-80" />,
    'paid-advertising': <LineChart className="w-48 h-48 text-[color:var(--color-brand-orange)] opacity-80" />,
    'content-creation': <Smartphone className="w-48 h-48 text-[color:var(--color-brand-green)] opacity-80" />,
    'crm-automation': <Rocket className="w-48 h-48 text-[color:var(--color-brand-yellow)] opacity-80" />,
    'ai-business-solutions': <Bot className="w-48 h-48 text-[color:var(--color-brand-teal)] opacity-80" />,
  };

  const currentIllustration = illustrations[slug] || <Briefcase className="w-48 h-48 text-foreground/50" />;

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-foreground/10 border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-foreground/5"
      />
      
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex items-center justify-center w-64 h-64 rounded-3xl bg-background/80 backdrop-blur-xl border border-foreground/10 shadow-2xl"
      >
        {currentIllustration}
      </motion.div>
    </div>
  );
}
