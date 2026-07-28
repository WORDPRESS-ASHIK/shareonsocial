import Image from "next/image";

export function AboutSection() {
  return (
    <section className="mx-auto mt-32 max-w-[1400px] px-6 md:mt-48 md:px-10">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5 flex flex-col">
          <div className="mb-12 text-xs uppercase tracking-[0.25em] text-foreground/50">
            <span className="mr-3 inline-block h-px w-6 translate-y-[-3px] bg-foreground/40"></span>
            About
          </div>
          <div className="hidden flex-1 md:block">
            <div className="relative h-full min-h-[250px] w-full max-w-[450px] overflow-hidden rounded-2xl bg-foreground/5">
              <Image
                src="/about-growth-3d.png"
                alt="3D Business Growth Analytics"
                fill
                className="object-contain opacity-90 transition-transform duration-700 hover:scale-105"
                sizes="(min-width: 768px) 30vw"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-7 pt-0 md:pt-[60px]">
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.1] tracking-[-0.03em]">
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
              customer to your <span className="whitespace-nowrap">Hundreds And Thousands .</span>
            </p>
            <p>
              We're not just another service provider. We're the team businesses
              call when they want a dedicated partner who cares as much about
              their long-term success as the daily details.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
