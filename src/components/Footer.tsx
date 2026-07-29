import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-8">
          
          {/* Column 1: Logo & CTA */}
          <div className="lg:pr-12">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="ShareOnSocial Logo" width={200} height={50} className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-sm font-display text-3xl leading-[1.05] tracking-tight md:text-4xl">
              Your partner in{" "}
              <em className="text-[color:var(--brand-orange)]">business growth</em>.
            </p>
            <Link
              href="/book"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-background transition-transform hover:scale-105 active:scale-95"
            >
              Start Your Growth Plan <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Column 2: Company */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Company
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/solutions"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Solutions
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Industries
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Insights
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Resources
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/case-studies"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Case Studies
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/insights"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Blog
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  FAQs
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Contact
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Legal
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/privacy"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Privacy
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Terms
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="group relative inline-flex items-center text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  Cookies
                  <ArrowRight className="ml-1 h-3 w-3 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/50">
              Contact
            </div>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="mailto:hello@shareonsocial.in"
                  className="group flex items-center gap-3 text-[15px] text-foreground/80 transition-colors hover:text-foreground"
                >
                  <Mail className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  hello@shareonsocial.in
                </a>
              </li>
              <li className="flex items-center gap-5 pt-2">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 transition-all duration-300 hover:scale-110 hover:text-[color:var(--color-brand-orange)]"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-[22px] w-[22px]" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 transition-all duration-300 hover:scale-110 hover:text-[color:var(--color-brand-orange)]"
                  aria-label="LinkedIn"
                >
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 transition-all duration-300 hover:scale-110 hover:text-[color:var(--color-brand-orange)]"
                  aria-label="Instagram"
                >
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 py-8 text-sm text-foreground/60 md:flex-row">
          <span>Powered by Techtorix Technologies</span>
          <span>© 2026 ShareOnSocial. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
