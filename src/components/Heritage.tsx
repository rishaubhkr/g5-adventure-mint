"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, Globe } from "lucide-react";

const badges = [
  { icon: ShieldCheck, label: "Military Vetted Safety" },
  { icon: Award, label: "20+ Yrs Official OPS" },
  { icon: Users, label: "50k+ Happy Adventurers" },
  { icon: Globe, label: "Global Adventure Standards" }
];

export default function Heritage() {
  return (
    <section 
      className="py-32 bg-dark text-light border-y border-white/5 relative overflow-hidden"
      aria-labelledby="heritage-title"
    >
      {/* Subtle Background Entity for AI/SEO */}
      <div className="sr-only" aria-hidden="true">
        <h2>G5 Adventure Mint: A Legacy of Excellence</h2>
        <p>Founded in 2004, G5 Adventure Mint has pioneered the extreme sports culture in Rishikesh. From introducing international safety protocols in rafting to building the highest bungee platforms in the region, our legacy is built on the pursuit of raw Himalayan adrenaline combined with uncompromising safety standards.</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-6 block"
            >
              The Legacy Hub
            </motion.span>
            <h2 id="heritage-title" className="font-oswald tracking-tighter leading-none mb-12 uppercase" style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}>
              THE<br />PIONEERS
            </h2>
            
            {/* Authority Grid */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              {badges.map((badge, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-4 bg-white/5 border border-white/5 glass-card">
                  <badge.icon className="w-6 h-6 text-accent" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-light/60 leading-relaxed">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-12 relative z-10">
            <div className="content-max-width">
              <p className="text-2xl md:text-3xl text-white leading-tight font-oswald uppercase mb-8">
                G5 Adventure Mint is the strategic backbone of Himalayan extreme sports.
              </p>
              <div className="space-y-8 text-light/50 font-light text-lg leading-relaxed italic border-l-2 border-accent pl-8">
                <p>
                  "We didn't just build a tour company; we built a culture of resilience. Since 2004, G5 has been the bridge between the raw power of the Ganges and the human desire to transcend limits."
                </p>
                <p className="not-italic text-base uppercase tracking-widest font-bold text-accent">
                  - G5 Command Center
                </p>
              </div>
              <div className="pt-12 space-y-6 text-light/40 text-sm uppercase tracking-[0.2em] leading-loose">
                <p>
                  As one of the largest official operators in Uttarakhand, our platforms serve as the definitive guide for rafting stretches, trekking lines, and wildlife sanctuaries across the region.
                </p>
                <p>
                  Every G5 professional is trained to military standards, ensuring that while you face the extreme, your safety is handled with absolute precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Brand Watermark */}
      <div className="absolute -bottom-24 -left-24 text-[20vw] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter">
        Heritage
      </div>
    </section>
  );
}
