"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function ClientVoicesSection() {
  const testimonials = [
    {
      quote:
        "They rebuilt our brand, our website and our funnel in 4 weeks. Revenue followed.",
      author: "Amelia R.",
      role: "Founder, Casa Nova",
      bgColor: "bg-[color:var(--brand-orange)]",
      textColor: "text-[oklch(0.18_0.02_260)]",
      translateY: "",
    },
    {
      quote:
        "Feels like having a CMO, a design studio and an ad team in one Slack channel.",
      author: "Marcus D.",
      role: "CEO, Vertex Health",
      bgColor: "bg-[oklch(0.14_0.02_260)]",
      textColor: "text-background",
      translateY: "md:translate-y-6",
    },
    {
      quote:
        "The kind of partner you'd want in the room when you're planning the next five years.",
      author: "Priya S.",
      role: "Director, Halo Tutors",
      bgColor: "bg-[color:var(--brand-cyan)]",
      textColor: "text-[oklch(0.18_0.02_260)]",
      translateY: "",
    },
  ];

  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="max-w-3xl">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground/50">
          <span className="inline-block h-px w-8 bg-foreground/40"></span>
          Client Voices
        </div>
        <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.03em] text-balance">
          Trust, in their words.
        </h2>
      </div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.figure
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            style={{ willChange: "transform, opacity" }}
            className={`grain relative flex min-h-[360px] flex-col justify-between rounded-[1.75rem] p-8 ${testimonial.bgColor} ${testimonial.textColor} ${testimonial.translateY}`}
          >
            <div className="font-display text-5xl leading-[0.85] tracking-tight opacity-30">
              &quot;
            </div>
            <blockquote className="text-xl leading-snug md:text-2xl">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between text-sm opacity-80">
              <span>
                <div className="font-medium">{testimonial.author}</div>
                <div className="opacity-70">{testimonial.role}</div>
              </span>
              <Sparkles className="h-4 w-4 opacity-60" />
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
