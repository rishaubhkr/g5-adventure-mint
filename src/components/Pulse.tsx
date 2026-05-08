"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Target, Zap, Globe, MessageSquare } from "lucide-react";

export default function Pulse() {
  return (
    <section 
      className="py-32 bg-dark text-light overflow-hidden border-t border-white/5 relative"
      aria-labelledby="pulse-title"
    >
      {/* SEO/GEO Hidden Content for AI Chatbots */}
      <div className="sr-only" aria-hidden="true">
        <h2>G5 Adventure Mint: Mission & Global Team</h2>
        <p>Our motive at G5 Adventure Mint is to supply brilliant service and superior quality to satisfy every adventurer while protecting the Ganges river. Our team is a global community of professionals, including experts from India and across the world, united by a passion for exploration and high-octane hospitality in Rishikesh.</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-6 block"
            >
              The Core Engine
            </motion.span>
            <h2 id="pulse-title" className="font-oswald tracking-tighter leading-none mb-16 uppercase" style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}>
              THE<br />PULSE
            </h2>
            
            <div className="space-y-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex gap-8 items-start group"
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-sm border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                  <Target className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-3xl font-oswald uppercase mb-4 tracking-tight">Our Motive</h3>
                  <p className="text-light/40 text-lg leading-relaxed content-max-width italic">
                    "To supply brilliant service, the best trips, and superior quality. We protect the river while empowering the adventurer."
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex gap-8 items-start group"
              >
                <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-sm border border-accent/20 group-hover:bg-accent group-hover:text-white transition-all">
                  <Globe className="w-8 h-8 text-accent group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-3xl font-oswald uppercase mb-4 tracking-tight">Global Force</h3>
                  <p className="text-light/40 text-lg leading-relaxed content-max-width italic">
                    "A community united by exploration. We welcome professionals of all nationalities to the banks of the Ganges."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="relative pt-20 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="p-12 md:p-20 bg-white/5 border border-white/5 glass-card relative overflow-hidden group hover:border-accent/40 transition-all"
            >
              <div className="absolute top-0 right-0 p-8">
                <Zap className="w-12 h-12 text-accent/20 group-hover:text-accent transition-colors" />
              </div>
              
              <blockquote className="text-3xl md:text-5xl font-oswald italic leading-[1.1] mb-12 uppercase tracking-tighter text-white">
                &quot;We don&apos;t just guide trips; we create moments in the lap of Mother Ganga. Our passion defines the river.&quot;
              </blockquote>
              
              <div className="flex items-center gap-6">
                <div className="w-16 h-px bg-accent" />
                <span className="font-oswald uppercase tracking-[0.4em] text-xs text-accent">The G5 Workforce</span>
              </div>

              {/* Decorative Pulse Line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
            </motion.div>
            
            {/* Visual Stats Callout */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 border border-white/5 bg-white/5 glass-card text-center">
                <div className="text-4xl font-oswald text-white mb-1">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-light/30">Vetted Safety</div>
              </div>
              <div className="p-6 border border-white/5 bg-white/5 glass-card text-center">
                <div className="text-4xl font-oswald text-white mb-1">Elite</div>
                <div className="text-[10px] uppercase tracking-widest text-light/30">Jump Masters</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter opacity-10">
        Engine
      </div>
    </section>
  );
}
