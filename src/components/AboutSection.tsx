import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="mx-auto mt-20 max-w-[1400px] px-6 md:mt-32 md:px-10">
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
              We bring strategy, design, and technology together to help businesses grow. From your first campaign to long-term success, our team works with you every step of the way.
            </p>
            <p>
              We're more than a service provider—we're your growth partner. We focus on building stronger brands, generating better results, and helping your business grow with confidence.
            </p>
          </div>
          <div className="mt-10">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-background px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Learn More
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
