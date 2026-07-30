import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Bot } from 'lucide-react';

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" style={{ filter: 'drop-shadow(1.5px 1.5px 0px #fe2c55) drop-shadow(-1.5px -1.5px 0px #25f4ee)' }}>
    <path fill="currentColor" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.13-3.92-5.35-.4-1.82-.07-3.79 1.11-5.32 1.11-1.37 2.75-2.22 4.49-2.48 1.11-.14 2.24-.04 3.32.28v4.09c-.43-.1-.88-.13-1.32-.12-.9.03-1.78.43-2.38 1.09-.64.71-.97 1.72-.88 2.68.13 1.06.82 2.02 1.77 2.45.89.41 1.95.42 2.85.03.96-.44 1.63-1.35 1.79-2.39.06-.41.07-.84.07-1.26V.02z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="url(#ig-grad)" strokeWidth="2.5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="url(#ig-grad)" strokeWidth="2.5"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="url(#ig-grad)" strokeWidth="2.5" strokeLinecap="round"></line>
  </svg>
);

const GoogleBusinessIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#4285F4" d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12V14.51H18.5849C18.3049 15.99 17.4849 17.24 16.2349 18.08V21.02H20.1949C22.5049 18.88 23.7449 15.86 23.7449 12.27Z"/>
    <path fill="#34A853" d="M12 24C15.3 24 18.06 22.91 20.19 21.02L16.23 18.08C15.08 18.85 13.66 19.33 12 19.33C8.79 19.33 6.06 17.16 5.11 14.25H1.05V17.4C3.06 21.4 7.2 24 12 24Z"/>
    <path fill="#FBBC05" d="M5.11 14.25C4.87 13.52 4.73 12.77 4.73 12C4.73 11.23 4.87 10.48 5.11 9.75V6.6H1.05C0.38 7.93 0 9.42 0 12C0 14.58 0.38 16.07 1.05 17.4L5.11 14.25Z"/>
    <path fill="#EA4335" d="M12 4.67C13.8 4.67 15.4 5.29 16.67 6.5L20.28 2.89C18.05 0.82 15.3 0 12 0C7.2 0 3.06 2.6 1.05 6.6L5.11 9.75C6.06 6.84 8.79 4.67 12 4.67Z"/>
  </svg>
);

const platforms = [
  { name: "Facebook", color: "#1877F2", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" /></svg> },
  { name: "Instagram", isInsta: true, color: "#E1306C" },
  { name: "YouTube", color: "#FF0000", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
  { name: "Threads", color: "#000000", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.896-5.748c1.378 0 2.455-.41 3.208-1.213.722-.767 1.054-1.815 1.054-3.328 0-1.464-.325-2.527-1.025-3.29-.714-.775-1.745-1.183-3.134-1.183-1.455 0-2.518.437-3.235 1.25-.715.807-1.096 1.948-1.096 3.242 0 1.272.35 2.392 1.037 3.19.704.815 1.776 1.233 3.19 1.233zm3.76-4.524v.266c0 1.93-.53 3.328-1.528 4.316-.963.953-2.316 1.45-4.062 1.45-1.895 0-3.376-.56-4.436-1.666-1.05-1.096-1.583-2.617-1.583-4.524 0-1.92.518-3.463 1.545-4.596 1.037-1.14 2.518-1.727 4.394-1.727 1.764 0 3.133.518 4.095 1.543.93 9.988 1.39 2.375 1.39 4.14v.273h-7.61c.075 1.133.374 1.96.88 2.466.5.498 1.173.747 2.01.747 1.39 0 2.112-.663 2.193-1.98H13.864zM9.99 9.387c-.854 0-1.485.257-1.89.763-.406.498-.647 1.18-.704 2.034h4.942c-.066-1.004-.332-1.718-.788-2.142-.448-.423-1.012-.655-1.56-.655z" /></svg> },
  { name: "Website", color: "#3B82F6", icon: <Globe className="w-5 h-5" strokeWidth={2} /> },
  { name: "WordPress", color: "#21759b", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.83 15.65l-3.32-9.45c1.03-.49 2.33-.86 3.69-.86.44 0 .8.03 1.08.06l-2.4 8.78c.18.57.47 1.07.95 1.47zm3.17 1.16c-1.2.22-2.39.22-3.5 0l1.75-5.91 1.75 5.91zm1.74-1.47c.48-.4.77-.9.95-1.47l-2.4-8.78c.28-.03.64-.06 1.08-.06 1.36 0 2.66.37 3.69.86l-3.32 9.45z"/></svg> },
  { name: "AI", color: "#7C3AED", icon: <Bot className="w-5 h-5" strokeWidth={2} /> },
  { name: "Shopify", color: "#96bf48", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M20.25 10.74l-2.22-5.75c-.24-.6-.82-.99-1.47-.99h-9.1c-.65 0-1.23.39-1.47.99l-2.22 5.75c-.17.44-.09.95.21 1.32.31.37.77.58 1.25.58h14.55c.48 0 .94-.21 1.25-.58.31-.37.38-.88.22-1.32zM7.25 14.25v3c0 1.24 1.01 2.25 2.25 2.25h5c1.24 0 2.25-1.01 2.25-2.25v-3H7.25z"/></svg> },
  { name: "WhatsApp", color: "#25D366", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.576-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg> },
  { name: "Google Business", isGoogle: true, color: "#EA4335" },
  { name: "LinkedIn", color: "#0A66C2", icon: <svg viewBox="0 0 24 24" className="w-5 h-5"><path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: "TikTok", color: "#000000", isTiktok: true }
];

export function MarketingEcosystem() {
  return (
    <div className="relative w-full mt-4 flex flex-col items-center justify-center">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150px] bg-gradient-to-r from-[color:var(--color-brand-blue)]/5 via-[color:var(--color-brand-purple)]/5 to-[color:var(--color-brand-orange)]/5 blur-[30px] rounded-full pointer-events-none z-0"></div>
      
      {/* Dotted connecting line */}
      <div className="absolute top-1/2 left-4 right-4 h-[1px] border-b border-dashed border-black/10 z-0"></div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-5 relative z-10 w-[95%] max-w-none">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            className="group relative"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 3 + (i % 2),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.15,
            }}
          >
            {/* Hover colored glow */}
            <div 
              className="absolute inset-0 rounded-full blur-[10px] opacity-0 group-hover:opacity-60 transition-opacity duration-300"
              style={{ backgroundColor: p.color }}
            />
            
            <div 
              className="relative flex items-center justify-center w-[52px] h-[52px] md:w-[56px] md:h-[56px] bg-white/95 backdrop-blur-sm rounded-full border border-black/5 shadow-sm text-black/70 transition-all duration-[300ms] cursor-default group-hover:scale-[1.08] group-hover:-translate-y-[6px]"
              style={{ 
                color: p.color,
              }}
            >
              <div className="group-hover:rotate-[4deg] transition-transform duration-[300ms] ease-out">
                {p.isTiktok ? <TiktokIcon /> : p.isInsta ? <InstagramIcon /> : p.isGoogle ? <GoogleBusinessIcon /> : p.icon}
              </div>
            </div>
            
            {/* Particles on hover */}
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:animate-ping" style={{ backgroundColor: p.color }}></div>
            <div className="absolute -bottom-2 -left-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300 group-hover:animate-pulse" style={{ backgroundColor: p.color }}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
