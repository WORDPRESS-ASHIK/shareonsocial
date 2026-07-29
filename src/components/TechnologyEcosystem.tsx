import React from 'react';
import { motion } from 'framer-motion';
import { Database, Globe, Bot, Mail, MessageSquare, Zap, BarChart3 } from 'lucide-react';

const nodes = [
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'crm', label: 'CRM', icon: Database },
  { id: 'ai', label: 'AI', icon: Bot, isAi: true },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'email', label: 'Email', icon: Mail },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageSquare },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
];

export function TechnologyEcosystem() {
  return (
    <div className="relative w-full mt-8 pt-4 pb-8 flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[100px] bg-cyan-400/10 blur-[40px] rounded-full pointer-events-none z-0"></div>

      <div className="flex items-center justify-between w-full relative z-10">
        {nodes.map((node, i) => (
          <React.Fragment key={node.id}>
            {/* Node */}
            <motion.div
              className="relative group z-10 flex-shrink-0"
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            >
              <div
                className={`relative flex flex-col items-center justify-center p-1.5 md:p-2 rounded-xl backdrop-blur-md border shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 
                  ${
                    node.isAi
                      ? "bg-cyan-500/20 border-cyan-400/50 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                      : "bg-white/10 border-white/20 group-hover:bg-white/20"
                  }
                `}
              >
                <node.icon className={`w-3.5 h-3.5 md:w-4 md:h-4 ${node.isAi ? "text-cyan-300" : "text-white"}`} />
                {node.isAi && (
                  <div className="absolute inset-0 rounded-xl bg-cyan-400/20 animate-pulse pointer-events-none"></div>
                )}
              </div>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] text-white/80 font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                {node.label}
              </span>
              
              {/* Connection Dot Glow */}
              <div className="absolute top-1/2 -right-[3px] md:-right-[4px] -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-400 opacity-50 shadow-[0_0_5px_#22d3ee]"></div>
              <div className="absolute top-1/2 -left-[3px] md:-left-[4px] -translate-y-1/2 w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-cyan-400 opacity-50 shadow-[0_0_5px_#22d3ee]"></div>
            </motion.div>

            {/* Connection Line with Animated Packet */}
            {i < nodes.length - 1 && (
              <div className="flex-1 h-[1px] bg-white/10 relative z-0 min-w-[4px] md:min-w-[8px] mx-0.5 md:mx-1 overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 h-full w-[15px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_8px_#22d3ee]"
                  animate={{ left: ["-20%", "120%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                    delay: i * 0.3,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
