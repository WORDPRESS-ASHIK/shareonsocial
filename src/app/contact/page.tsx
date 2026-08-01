import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import * as motion from "framer-motion/client";
import { SimpleContactForm } from "@/components/SimpleContactForm";
import { CtaSection } from "@/components/CtaSection";
import { MessageSquare, Users, Shield, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="min-h-dvh">
        
        {/* 1. Hero Section (Two Columns) */}
        <section className="relative overflow-hidden pt-32 md:pt-44 pb-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
             <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl" style={{ background: 'radial-gradient(closest-side, rgba(255,138,0,0.15), transparent)' }} />
          </div>
          
          <div className="mx-auto max-w-[1400px] px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
               {/* Left Column */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="flex flex-col justify-center"
               >
                 <div className="text-xs uppercase tracking-[0.25em] text-[color:var(--brand-orange)] font-semibold">
                   CONTACT
                 </div>
                 <h1 className="mt-6 font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-balance">
                   Let's build what's <em className="italic text-[color:var(--brand-orange)] not-italic font-medium">next</em>.
                 </h1>
                 <p className="mt-8 text-lg text-foreground/70 md:text-xl max-w-xl">
                   Have a project in mind or just exploring ideas? We'd love to hear from you. Fill out the form or reach us directly.
                 </p>
                 
                 <div className="mt-16 flex flex-col gap-8">
                    <div className="flex gap-5">
                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-orange)]/10 text-[color:var(--brand-orange)]">
                         <MessageSquare className="h-5 w-5" />
                       </div>
                       <div>
                         <h3 className="text-lg font-medium text-foreground/90">Fast Response</h3>
                         <p className="text-foreground/60 mt-1 text-sm">We reply within one business day.</p>
                       </div>
                    </div>
                    <div className="flex gap-5">
                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-cyan)]/10 text-[color:var(--brand-cyan)]">
                         <Users className="h-5 w-5" />
                       </div>
                       <div>
                         <h3 className="text-lg font-medium text-foreground/90">Strategy First</h3>
                         <p className="text-foreground/60 mt-1 text-sm">Every conversation starts with understanding your goals.</p>
                       </div>
                    </div>
                    <div className="flex gap-5">
                       <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-pink)]/10 text-[color:var(--brand-pink)]">
                         <Shield className="h-5 w-5" />
                       </div>
                       <div>
                         <h3 className="text-lg font-medium text-foreground/90">No Spam</h3>
                         <p className="text-foreground/60 mt-1 text-sm">Your information stays private.</p>
                       </div>
                    </div>
                 </div>
               </motion.div>
               
               {/* Right Column: Contact Form */}
               <motion.div
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="pt-0 pb-0 px-0 h-full flex flex-col"
               >
                  <SimpleContactForm />
               </motion.div>
            </div>
          </div>
        </section>
        
        {/* 2. Contact Information Section */}
        <section className="pt-16 md:pt-24 mb-[72px]">
           <div className="mx-auto max-w-[1400px] px-6 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                 
                 {/* Left Info Card */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="bg-[#FAFAFA] rounded-[32px] p-8 md:p-12 border border-[rgba(0,0,0,0.04)] h-full"
                 >
                    <h2 className="font-display text-3xl font-medium tracking-tight mb-2 text-foreground/90">Get in touch</h2>
                    <p className="text-foreground/60 mb-12 max-w-sm">We're here to answer your questions and explore how we can grow your business.</p>
                    
                    <div className="flex flex-col gap-8">
                       <div className="flex gap-5 items-center">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[rgba(0,0,0,0.04)] text-foreground/60">
                             <Phone className="h-5 w-5 text-[color:var(--brand-cyan)]" />
                          </div>
                          <div>
                             <h4 className="font-medium text-sm text-foreground/90">Phone & WhatsApp</h4>
                             <p className="text-foreground/70 text-sm mt-0.5">+61 468 680 237</p>
                          </div>
                       </div>
                       
                       <div className="flex gap-5 items-center">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[rgba(0,0,0,0.04)] text-foreground/60">
                             <Mail className="h-5 w-5 text-[color:var(--brand-orange)]" />
                          </div>
                          <div>
                             <h4 className="font-medium text-sm text-foreground/90">Email</h4>
                             <p className="text-foreground/70 text-sm mt-0.5">hello@shareonsocial.com.au</p>
                          </div>
                       </div>
                       
                       <div className="flex gap-5 items-center">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[rgba(0,0,0,0.04)] text-foreground/60">
                             <MapPin className="h-5 w-5 text-[#FF5E62]" />
                          </div>
                          <div>
                             <h4 className="font-medium text-sm text-foreground/90">Office Location</h4>
                             <p className="text-foreground/70 text-sm mt-0.5">Melbourne, Victoria, Australia</p>
                          </div>
                       </div>
                       
                       <div className="flex gap-5 items-center">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm border border-[rgba(0,0,0,0.04)] text-foreground/60">
                             <Clock className="h-5 w-5 text-[color:var(--brand-pink)]" />
                          </div>
                          <div>
                             <h4 className="font-medium text-sm text-foreground/90">Business Hours</h4>
                             <p className="text-foreground/70 text-sm mt-0.5 max-w-[280px]">We Work 24/7 365 Days so your business has support every second</p>
                          </div>
                       </div>
                    </div>
                 </motion.div>
                 
                 {/* Right Map/Location Card */}
                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="relative bg-[#FAFAFA] rounded-[28px] overflow-hidden border border-[rgba(0,0,0,0.04)] min-h-[520px] h-full w-full flex items-center justify-center group"
                 >
                    {/* Google Maps Embed */}
                    <iframe 
                      src="https://maps.google.com/maps?q=Melbourne,%20Victoria,%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-transform duration-1000 ease-in-out group-hover:scale-[1.02]"
                    ></iframe>
                    
                    {/* Location Pin Badge Overlay */}
                    <div className="relative z-10 bg-white/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col items-center text-center max-w-[240px] transition-transform duration-500 group-hover:-translate-y-2 pointer-events-none">
                       <div className="w-12 h-12 bg-[color:var(--brand-orange)]/10 rounded-full flex items-center justify-center mb-4 shadow-sm">
                          <MapPin className="h-6 w-6 text-[color:var(--brand-orange)]" />
                       </div>
                       <h3 className="font-bold text-lg mb-1 text-foreground/90">Share<span className="text-[color:var(--brand-orange)]">On</span>Social</h3>
                       <p className="text-sm text-foreground/60">Melbourne, Victoria<br/>Australia</p>
                    </div>
                 </motion.div>
                 
              </div>
           </div>
        </section>
        
        {/* 3. CTA Section */}
        <div className="pb-16 md:pb-24">
           <CtaSection />
        </div>
        
      </main>
      <Footer />
    </div>
  );
}
