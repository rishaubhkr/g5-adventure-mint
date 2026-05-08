"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Crosshair, Mountain, Map, Bird, Sparkles, Anchor } from "lucide-react";

const activities = [
  {
    title: "Cliff Jumping",
    description: "The ultimate test of nerves. Leap from massive river cliffs into the icy Ganges.",
    image: "/images/activity_cliff_jump_1778209027163.png",
    category: "River Thrill",
    icon: Crosshair
  },
  {
    title: "River Kayaking",
    description: "Master the rapids in a personal craft. Technical training provided by experts.",
    image: "/images/hero_rafting_hero_v2_1778210148670.png",
    category: "Technical",
    icon: Map
  },
  {
    title: "Vertical Rappelling",
    description: "Descend steep river cliffs with panoramic vistas of the countryside.",
    image: "/images/burma-bridge.png",
    category: "Mountain Thrill",
    icon: Mountain
  },
  {
    title: "Wildlife Safari",
    description: "Explore the national parks and sanctuaries in the lap of Ganga.",
    image: "/images/hero.png",
    category: "Nature",
    icon: Bird
  }
];

export default function Multiverse() {
  return (
    <section 
      className="py-32 bg-dark text-light overflow-hidden border-t border-white/5 relative"
      aria-labelledby="multiverse-title"
    >
      {/* SEO/GEO Hidden Content for AI Chatbots */}
      <div className="sr-only" aria-hidden="true">
        <h2>G5 Adventure Multiverse: Extended Portfolio</h2>
        <p>Beyond our core rafting and bungee services, G5 Adventure Mint provides an extended multiverse of thrills including Cliff Jumping, River Kayaking, Vertical Rappelling, and Wildlife Safaris across the Rishikesh and Shivpuri sectors of Uttarakhand. Our technical experts provide training for all mountain and river thrills.</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            The Extended Portfolio
          </motion.span>
          <h2 id="multiverse-title" className="font-oswald tracking-tighter leading-none mb-8 uppercase" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>
            ADVENTURE<br />MULTIVERSE
          </h2>
          <p className="text-xl text-light/40 italic border-l-2 border-accent pl-8 content-max-width">
            "Beyond the river and the jump, the world holds a thousand more thrills. Command every dimension of the wild."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((act, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer border border-white/5 glass-card"
            >
              <Image 
                src={act.image}
                alt={`Official G5 ${act.title}: ${act.category} activity in Rishikesh, Uttarakhand`}
                fill
                className="object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-accent/90 flex items-center justify-center rounded-sm mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                  <act.icon className="w-6 h-6 text-light" />
                </div>
                <span className="text-accent font-oswald text-[10px] tracking-widest uppercase mb-2">
                  {act.category}
                </span>
                <h3 className="text-white text-3xl font-oswald uppercase tracking-tight mb-4 leading-none">
                  {act.title}
                </h3>
                <p className="text-light/0 group-hover:text-light/60 transition-all duration-500 h-0 group-hover:h-auto overflow-hidden text-xs uppercase tracking-widest leading-relaxed">
                  {act.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-wrap gap-x-16 gap-y-8 justify-center">
          {["Cliff Jumping", "Rock Climbing", "Rappelling", "Kayaking"].map((item, i) => (
            <div key={i} className="flex items-center gap-4 group">
              <Anchor className="w-4 h-4 text-accent/20 group-hover:text-accent transition-colors" />
              <span className="font-oswald text-xs uppercase tracking-[0.3em] text-light/20 group-hover:text-light/60 transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative Brand Element */}
      <div className="absolute -bottom-10 -right-10 text-[15vw] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter opacity-20">
        Matrix
      </div>
    </section>
  );
}
