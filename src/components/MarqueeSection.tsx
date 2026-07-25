export function MarqueeSection() {
  const items = [
    "Strategy",
    "Branding",
    "Website",
    "SEO",
    "AEO",
    "Advertising",
    "CRM",
    "Automation",
    "Creative",
    "Reels",
    "Growth",
  ];

  // We duplicate the items to create a seamless marquee effect
  const marqueeItems = [...items, ...items];

  return (
    <section className="relative mt-24 overflow-hidden border-y border-foreground/10 bg-foreground py-8 text-background md:py-10">
      <div className="marquee-track flex whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-8 pr-8 font-display text-5xl tracking-tight md:text-7xl"
          >
            {item}
            <span className="text-[color:var(--color-brand-orange)]">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
