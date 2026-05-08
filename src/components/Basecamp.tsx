"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Star, Flame, Wind } from "lucide-react";

const camps = [
  {
    name: "G5 Beach Camp",
    location: "Kodiyala",
    type: "Premium Beach",
    image: "/images/camping.png",
    description: "Our signature camp in the lap of Mother Ganga. Pure white sand beaches and elite hospitality.",
    features: ["Attached Washrooms", "Power Backup", "Evening Bonfire"]
  },
  {
    name: "Camp Sandpipper",
    location: "Shivpuri",
    type: "Jungle Luxury",
    image: "/images/hero_rafting_hero_v2_1778210148670.png", // Reusing a high-quality landscape
    description: "Nestled in the lush greenery of the Shivpuri hills. Wake up to the sound of the forest.",
    features: ["Swimming Pool", "Trekking Access", "Buffet Meals"]
  },
  {
    name: "Rapid Action Camp",
    location: "Marine Drive",
    type: "Adventure Base",
    image: "/images/activity_cliff_jump_1778209027163.png",
    description: "The tactical base for serious rafters. Wake up at the river's edge, ready for the rapids.",
    features: ["Rafting Ready", "Cliff Jump Access", "Wild Vibe"]
  }
];

export default function Basecamp() {
  return (
    <section className="py-24 bg-dark text-light border-y border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-4 block">The Basecamps</span>
            <h2 className="font-oswald tracking-tighter leading-none mb-6 uppercase" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>LIVE IN THE<br />WILD</h2>
            <p className="text-light/40 text-lg">From pure white sand beaches to lush jungle hills. We offer the best camping in Rishikesh.</p>
          </div>
          <div className="flex gap-4">
            <div className="px-6 py-3 border border-white/10 flex items-center gap-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-xs uppercase tracking-widest font-oswald">Top Rated</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {camps.map((camp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-8">
                <Image 
                  src={camp.image}
                  alt={camp.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-2 bg-accent text-light font-oswald text-[10px] uppercase tracking-[0.2em]">
                  {camp.type}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-oswald uppercase tracking-tight">{camp.name}</h3>
                    <div className="flex items-center gap-2 text-accent mt-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-xs uppercase tracking-widest font-bold">{camp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-light/60 text-sm leading-relaxed">
                  {camp.description}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {camp.features.map((feat, i) => (
                    <span key={i} className="text-[10px] border border-white/10 px-3 py-1 uppercase tracking-widest text-light/40 group-hover:text-light/80 transition-colors">
                      {feat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
