"use client";

import * as motion from "framer-motion/client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { SolutionData } from "@/data/solutions";

export function SolutionFinalCta({ data }: { data: SolutionData['cta'] }) {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      
      {/* Container Background */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="relative rounded-[3rem] overflow-hidden bg-foreground text-background py-20 px-6 md:px-20 text-center">
          
          {/* Decorative Gradients */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[color:var(--color-brand-orange)]/20 to-[color:var(--color-brand-pink)]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[color:var(--color-brand-blue)]/20 to-[color:var(--color-brand-cyan)]/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6"
            >
              {data.heading}
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-background/80 leading-relaxed mb-12"
            >
              {data.description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link 
                href="/book"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full bg-background px-8 text-sm font-medium text-foreground transition-transform hover:scale-105"
              >
                {data.primaryBtnText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="w-full sm:w-auto inline-flex h-14 items-center justify-center rounded-full border border-background/20 bg-transparent px-8 text-sm font-medium text-background transition-all hover:bg-background/10 hover:border-background/40"
              >
                {data.secondaryBtnText}
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
