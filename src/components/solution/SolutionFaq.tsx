"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { SolutionData } from "@/data/solutions";

export function SolutionFaq({ data }: { data: SolutionData['faq'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[1400px] px-6 md:px-10 mb-[72px]">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
        <div className="md:w-1/3 shrink-0">
          <h2 className="font-display text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {data.headline || "Frequently asked questions"}
          </h2>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="flex justify-end mb-6">
             <Link href="/faqs" className="flex items-center gap-2 text-sm font-medium text-[#FF8A00] transition-colors hover:text-[#38BDF8] group">
                View all FAQs
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Link>
          </div>
          <div className="flex flex-col gap-4">
            {data.items.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className="rounded-2xl border border-[rgba(0,0,0,0.08)] bg-white overflow-hidden transition-colors hover:border-[rgba(0,0,0,0.12)]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-foreground/90">{faq.question}</span>
                    <ChevronDown 
                      className={`h-5 w-5 shrink-0 text-[#FF8A00] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
