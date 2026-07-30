"use client";

import * as motion from "framer-motion/client";
import { SolutionData } from "@/data/solutions";

export function SolutionProblemNew({ data }: { data: SolutionData['problem'] }) {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background overflow-hidden relative">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-gradient-to-bl from-[color:var(--color-brand-orange)]/10 via-[color:var(--color-brand-pink)]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28">
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
            className="text-lg md:text-xl text-background/60 leading-relaxed"
          >
            {data.description}
          </motion.p>
        </div>

        {/* Timeline Style Pain Points */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-background/0 via-background/20 to-background/0 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {data.painPoints.map((point, i) => {
              const isEven = i % 2 === 0;
              
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[24px] md:left-1/2 top-6 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-12 h-12 rounded-full bg-background/5 border border-background/20 flex items-center justify-center backdrop-blur-sm z-10"
                    >
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[color:var(--color-brand-orange)] to-[color:var(--color-brand-pink)]" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-background/5 border border-background/10 rounded-3xl p-8 md:p-10 hover:bg-background/10 transition-colors backdrop-blur-sm"
                    >
                      <h3 className="font-display text-2xl mb-4 text-background">
                        {point.title}
                      </h3>
                      <p className="text-background/60 leading-relaxed text-base md:text-lg">
                        {point.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
