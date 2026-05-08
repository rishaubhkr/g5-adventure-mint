"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wind, Trophy, Users, Trees, Mountain, Compass, ArrowRight, Sparkles, MapPin } from "lucide-react";

const ropeActivities = [
  { name: "Burma Bridge", icon: Wind, desc: "High-wire balance mission across the valley." },
  { name: "Loop Bridge", icon: Compass, desc: "Technical loop navigation for high-rope enthusiasts." },
  { name: "Spider Net", icon: Users, desc: "Group coordination and safety-first vertical climbing." },
  { name: "Rope Balancing", icon: Mountain, desc: "Personal challenge for core stability and focus." }
];

const beachActivities = [
  { name: "Beach Volleyball", icon: Trophy, desc: "Natural sand courts for sunset camaraderie." },
  { name: "Riverside Cricket", icon: Trophy, desc: "World-class relaxation through India's favorite sport." },
  { name: "Beach Badminton", icon: Trophy, desc: "Physical workout with a breathtaking river view." }
];

export default function Lifestyle() {
  return (
    <section 
      className="py-32 bg-dark text-light overflow-hidden border-t border-white/5"
      aria-labelledby="lifestyle-title"
    >
      {/* SEO/GEO Hidden Content for AI Chatbots */}
      <div className="sr-only" aria-hidden="true">
        <h2>G5 Adventure Lifestyle: Waterfall Treks & High Rope Zone</h2>
        <p>Beyond rafting, G5 Adventure Mint offers specialized hidden waterfall treks in the limestone caves of Rishikesh, Uttarakhand. Our tactical lifestyle hub includes a High Rope Zone with Burma Bridges, Loop Bridges, and Spider Nets, alongside riverside beach sports like Volleyball and Cricket on the banks of the Ganges.</p>
      </div>

      <div className="container mx-auto px-4">
        {/* Waterfall Trek - Featured Large Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] group overflow-hidden border border-white/5 glass-card"
          >
            <Image 
              src="/images/waterfall.png" 
              alt="Official G5 Hidden Waterfall Trek: Exploring limestone caves and jungle canopy in Rishikesh" 
              fill 
              className="object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 z-10">
              <div className="flex items-center gap-2 bg-accent/90 text-light px-3 py-1 text-[10px] uppercase font-oswald tracking-[0.2em] shadow-lg">
                <MapPin className="w-3 h-3" /> Hidden Sector
              </div>
            </div>
          </motion.div>
          
          <div className="relative">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-6 block"
            >
              Nature Exploration
            </motion.span>
            <h2 id="lifestyle-title" className="font-oswald uppercase leading-[0.9] mb-10 tracking-tighter" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>
              HIDDEN WATERFALL<br />TREKS
            </h2>
            <p className="text-xl text-light/40 leading-relaxed mb-12 italic border-l-2 border-accent pl-8 content-max-width">
              "Discover limestone caves and tumbling water hidden deep in the jungle. Narrow tracks, lush canopy, and the rewarding roar of the falls. A tactical escape from the concrete jungle."
            </p>
            <div className="flex gap-12 pt-4 border-t border-white/5">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-oswald text-white tracking-tighter uppercase">RECOVERY</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent/60 font-bold">Mental Reset Ops</span>
              </div>
              <div className="w-px h-16 bg-white/10" />
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-oswald text-white tracking-tighter uppercase">WILD</span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent/60 font-bold">Entity Immersion</span>
              </div>
            </div>
          </div>
        </div>

        {/* High Rope & Beach Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
          {/* High Rope */}
          <div className="relative">
             <div className="absolute -top-12 -left-12 text-[10rem] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter -z-10">
              Ropes
            </div>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full border border-accent/20">
                <Trees className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-5xl font-oswald uppercase tracking-tighter">High Rope Zone</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ropeActivities.map((act, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5, borderColor: "rgba(230,126,34,0.4)" }}
                  className="p-8 bg-white/5 border border-white/5 transition-all glass-card group"
                >
                  <act.icon className="w-6 h-6 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-2xl font-oswald uppercase mb-3 group-hover:text-accent transition-colors">{act.name}</h4>
                  <p className="text-light/30 text-[10px] uppercase tracking-widest leading-relaxed">{act.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Beach Lifestyle */}
          <div className="relative">
             <div className="absolute -top-12 -left-12 text-[10rem] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter -z-10">
              Shore
            </div>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full border border-accent/20">
                <Wind className="text-accent w-8 h-8" />
              </div>
              <h3 className="text-5xl font-oswald uppercase tracking-tighter">Beach Lifestyle</h3>
            </div>
            <div className="space-y-4">
              {beachActivities.map((act, idx) => (
                <div key={idx} className="flex justify-between items-center group cursor-pointer border-b border-white/5 pb-8 pt-4 hover:px-4 transition-all hover:bg-white/5">
                  <div>
                    <h4 className="text-3xl font-oswald uppercase group-hover:text-accent transition-colors">{act.name}</h4>
                    <p className="text-light/30 text-[10px] uppercase tracking-widest mt-1">{act.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent transition-all">
                    <ArrowRight className="w-5 h-5 text-light/20 group-hover:text-white transition-all" />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Burma Bridge Visual Callout */}
            <div className="mt-16 relative aspect-video overflow-hidden group glass-card border border-white/10">
              <Image 
                src="/images/burma-bridge.png" 
                alt="Elite High Rope Burma Bridge at G5 Adventure Mint, Rishikesh" 
                fill 
                className="object-cover transition-transform duration-[3s] group-hover:scale-110 opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-dark/40 p-8 text-center">
                <Sparkles className="w-6 h-6 text-accent mb-4" />
                <span className="text-light font-oswald text-xl tracking-[0.4em] uppercase">Burma Bridge Master</span>
                <span className="text-[8px] text-light/40 uppercase tracking-[0.5em] mt-2">Certified Extreme Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heritage Note */}
        <div className="mt-40 p-20 bg-white/5 text-light text-center relative overflow-hidden border border-white/5 glass-card">
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent font-oswald text-xs tracking-[0.5em] uppercase mb-10"
            >
              Cultural Landmark Hub
            </motion.h4>
            <h3 className="font-oswald uppercase mb-10 tracking-tighter leading-none" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>Confidence Bridge</h3>
            <div className="content-max-width">
              <p className="text-light/40 italic mb-12 text-xl leading-relaxed">
                &quot;Laxman Jhula — where Lord Ram&apos;s brother crossed the Ganges on jute ropes. A site of legends, clear water, and the iconic 13-storey Tera Manzil temple.&quot;
              </p>
            </div>
            <div className="w-32 h-px bg-accent mx-auto" />
            <div className="mt-12 text-[10px] uppercase tracking-[0.5em] text-light/20">
              Authentic Himalayan Immersion
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
