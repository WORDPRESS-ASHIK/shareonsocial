"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Utensils, Users } from "lucide-react";

export function RestaurantsCafes() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cardClass}
      >
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-brand-orange)]/10 text-[color:var(--color-brand-orange)]">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div>
              <div className="text-base font-semibold text-[#111827]">New Customer Review</div>
              <div className="text-xs font-medium text-[#6B7280]">5 mins ago</div>
            </div>
          </div>
          <div className="flex gap-1 text-[color:var(--color-brand-orange)]">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <div className="text-sm font-medium text-[#6B7280] uppercase tracking-wider mb-2">Live Table Bookings</div>
            <div className="flex items-end justify-between">
              <div className="text-4xl font-bold font-display text-[#111827]">128</div>
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center gap-1 text-sm font-medium text-[color:var(--color-brand-cyan)] bg-[color:var(--color-brand-cyan)]/5 px-2 py-1 rounded-md"
              >
                <TrendingUp className="h-4 w-4" /> +14%
              </motion.div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white/50 border border-white/40 p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
                <Utensils className="h-4 w-4" /> Delivery Orders
              </div>
              <div className="text-lg font-semibold text-[#111827]">892</div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-gray-100 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-[color:var(--color-brand-orange)]"
                />
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="rounded-xl bg-white/50 border border-white/40 p-4 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] mb-2">
                <Users className="h-4 w-4" /> Table Occupancy
              </div>
              <div className="text-lg font-semibold text-[#111827]">84%</div>
              
              <div className="absolute -bottom-2 -right-2 h-16 w-16 opacity-5">
                <Users className="h-full w-full" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
