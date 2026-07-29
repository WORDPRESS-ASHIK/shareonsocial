"use client";

import { motion } from "framer-motion";
import { ShoppingBag, TrendingUp, ShoppingCart, DollarSign } from "lucide-react";

export function RetailEcommerce() {
  const cardClass = "relative z-10 w-full max-w-md rounded-2xl border border-white/60 bg-white/70 p-6 shadow-xl shadow-black/5 backdrop-blur-md";

  return (
    <div className="relative flex h-full w-full items-center justify-center p-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={cardClass}
      >
        <div className="mb-6 flex items-start justify-between">
          <div>
            <div className="text-sm font-medium text-[#6B7280] mb-2 uppercase tracking-wider">Live Revenue</div>
            <div className="text-4xl font-bold font-display text-[#111827] flex items-center gap-2">
              $12,489
              <motion.span 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex h-2 w-2 rounded-full bg-emerald-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md">
            <TrendingUp className="h-4 w-4" /> +22%
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-brand-pink)]/10 text-[color:var(--color-brand-pink)]">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold text-[#111827]">482</div>
            <div className="text-xs font-medium text-[#6B7280]">Sales</div>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[color:var(--color-brand-blue)]/10 text-[color:var(--color-brand-blue)]">
              <ShoppingCart className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold text-[#111827]">12</div>
            <div className="text-xs font-medium text-[#6B7280]">Carts</div>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
              <DollarSign className="h-4 w-4" />
            </div>
            <div className="text-xl font-bold text-[#111827]">4.8%</div>
            <div className="text-xs font-medium text-[#6B7280]">Conv.</div>
          </div>
        </div>

        <div className="relative h-24 w-full flex items-end gap-2">
          {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: i * 0.1, type: "spring" }}
              className="w-full rounded-t-sm bg-gradient-to-t from-[color:var(--color-brand-pink)] to-[color:var(--color-brand-blue)] opacity-80"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
