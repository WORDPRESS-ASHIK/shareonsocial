import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 md:mt-32 border-t border-foreground/10 bg-background">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 md:pt-20 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-8">
          
          {/* Column 1: Logo & CTA */}
          <div className="lg:pr-12">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="ShareOnSocial Logo" width={200} height={50} className="h-10 w-auto" />
            </div>
            <p className="mt-6 max-w-sm font-display text-2xl leading-[1.1] tracking-tight md:text-4xl">
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
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="Facebook"
                >
                  <svg className="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.12 5.32H17V2.14A26.11 26.11 0 0014.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.29-1.77 1.8-1.77z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="Instagram"
                >
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0a66c2] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="LinkedIn"
                >
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
                  aria-label="WhatsApp"
                >
                  <svg className="h-[22px] w-[22px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
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
