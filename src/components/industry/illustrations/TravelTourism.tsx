"use client";

import { motion } from "framer-motion";
import { Plane, Map, Users, Compass } from "lucide-react";

export function TravelTourism() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex justify-between items-start border-b border-gray-100 pb-4">
          <div>
            <div className="text-sm font-semibold text-[#111827]">Active Tours</div>
            <div className="text-xs font-medium text-[#6B7280]">Live Tracker</div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
             <Plane className="h-5 w-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="rounded-xl border border-gray-100 bg-white p-4 text-center">
             <div className="text-2xl font-bold font-display text-[#111827]">12</div>
             <div className="text-[10px] uppercase font-bold text-[#6B7280]">Departures</div>
          </div>
          <div className="rounded-xl border border-gray-100 bg-white p-4 text-center">
             <div className="text-2xl font-bold font-display text-[#111827]">284</div>
             <div className="text-[10px] uppercase font-bold text-[#6B7280]">Passengers</div>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { dest: "Bali Getaway", status: "In Transit", pax: 14, icon: Map },
            { dest: "Euro Explorer", status: "Booking Open", pax: 32, icon: Compass }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 4 }}
              className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl p-3"
            >
               <div className="flex items-center gap-3">
                 <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm text-gray-500">
                   <item.icon className="h-4 w-4" />
                 </div>
                 <div>
                   <div className="text-sm font-semibold text-[#111827]">{item.dest}</div>
                   <div className="flex items-center gap-1 text-[10px] font-medium text-[#6B7280]">
                      <Users className="h-3 w-3" /> {item.pax} Guests
                   </div>
                 </div>
               </div>
               <div className={`text-[10px] font-bold px-2 py-1 rounded-md ${
                 item.status === 'In Transit' ? 'bg-[color:var(--color-brand-blue)]/10 text-[color:var(--color-brand-blue)]' : 'bg-[color:var(--color-brand-cyan)]/5 text-[color:var(--color-brand-cyan)]'
               }`}>
                 {item.status}
               </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
