"use client";

import { motion } from "framer-motion";
import { Scissors, Star, CalendarHeart, Sparkles } from "lucide-react";

export function BeautyPersonalCare() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between border-b border-gray-100 pb-4">
          <div className="flex gap-3">
             <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-brand-pink)]/10 text-[color:var(--color-brand-pink)]">
               <Scissors className="h-6 w-6" />
             </div>
             <div>
               <div className="text-base font-semibold text-[#111827]">Stylist Schedule</div>
               <div className="text-xs font-medium text-[#6B7280]">Today's Appointments</div>
             </div>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          >
            <Sparkles className="h-5 w-5 text-[color:var(--color-brand-orange)]" />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center bg-white border border-gray-100 p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold font-display text-[#111827]">24</div>
            <div className="text-[10px] uppercase font-bold text-[#6B7280]">Bookings</div>
          </div>
          <div className="text-center bg-gradient-to-br from-[color:var(--color-brand-pink)] to-[color:var(--color-brand-orange)] text-white p-4 rounded-xl shadow-sm">
            <div className="text-2xl font-bold font-display">4.9</div>
            <div className="text-[10px] uppercase font-bold text-white/80 flex items-center justify-center gap-1">
               <Star className="h-3 w-3 fill-current" /> Avg Rating
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { client: "Jessica L.", service: "Balayage & Cut", time: "10:30 AM", artist: "Sarah" },
            { client: "Amanda R.", service: "Manicure", time: "11:15 AM", artist: "Chloe" }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              <div className="flex items-center gap-3">
                 <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                   <CalendarHeart className="h-4 w-4 text-[color:var(--color-brand-pink)]" />
                 </div>
                 <div>
                   <div className="text-sm font-semibold text-[#111827]">{item.client}</div>
                   <div className="text-[10px] font-medium text-[#6B7280]">{item.service}</div>
                 </div>
              </div>
              <div className="text-right">
                 <div className="text-xs font-bold text-[#111827]">{item.time}</div>
                 <div className="text-[10px] text-[#6B7280]">with {item.artist}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
