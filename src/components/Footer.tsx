import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="ShareOnSocial Logo" width={200} height={50} className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-sm font-display text-3xl leading-[1.05] tracking-tight md:text-4xl">
              Your partner in{" "}
              <em className="text-[color:var(--brand-orange)]">business growth</em>.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background"
            >
              Start your growth plan →
            </Link>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              Company
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Insights
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              Explore
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/solutions"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Industries
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-foreground/50">
              Legal
            </div>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-[15px] text-foreground/80 hover:text-foreground"
                >
                  Book a call
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-foreground/60 md:flex-row md:items-center">
          <span>
            © 2026 ShareOnSocial — Growth, designed.
          </span>
          <span>Made with intent · Not another agency.</span>
        </div>
      </div>
    </footer>
  );
}
