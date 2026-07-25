export function AboutSection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="sticky top-32 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="mr-3 inline-block h-px w-6 translate-y-[-3px] bg-foreground/40"></span>
            About
          </div>
        </div>
        <div className="md:col-span-7">
          <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.95] tracking-[-0.03em] text-balance">
            Not just marketing.
            <br />A complete{" "}
            <span className="italic text-[color:var(--color-brand-blue)]">
              growth
            </span>{" "}
            partner.
          </h2>
          <div className="mt-10 grid gap-8 text-lg text-foreground/75 md:grid-cols-2">
            <p>
              We sit at the intersection of strategy, design, and technology.
              One team, one plan, every lever you need to move — from your first
              customer to your hundred-thousandth.
            </p>
            <p>
              We're not a checklist agency. We're the people businesses call
              when they want a partner who cares about their P&amp;L as much as
              their pixel grid.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-8 border-t border-foreground/10 pt-10 md:grid-cols-4">
            <div>
              <div className="font-display text-4xl tracking-tight md:text-5xl">
                12+
              </div>
              <div className="mt-2 text-sm text-foreground/60">
                Disciplines under one roof
              </div>
            </div>
            <div>
              <div className="font-display text-4xl tracking-tight md:text-5xl">
                1 Team
              </div>
              <div className="mt-2 text-sm text-foreground/60">
                Strategy to execution
              </div>
            </div>
            <div>
              <div className="font-display text-4xl tracking-tight md:text-5xl">
                100%
              </div>
              <div className="mt-2 text-sm text-foreground/60">
                Founder-led delivery
              </div>
            </div>
            <div>
              <div className="font-display text-4xl tracking-tight md:text-5xl">
                4 wks
              </div>
              <div className="mt-2 text-sm text-foreground/60">
                First growth results
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
