"use client";

import { motion } from "framer-motion";
import { Check, Waves, MapPin, ArrowRight } from "lucide-react";
import MedicalDisclaimer from "./MedicalDisclaimer";

const packages = [
  {
    name: "Club House to Neem Beach",
    distance: "9 Kms",
    weekdayPrice: "500",
    weekendPrice: "800",
    features: ["Body Surfing", "Cliff Jumping", "Office Pickup & Drop", "25% Token Deposit", "Online Booking Confirmed"],
    level: "Beginner",
    location: "Brahmpuri Sector"
  },
  {
    name: "Shivpuri to Neem Beach",
    distance: "16 Kms",
    weekdayPrice: "800",
    weekendPrice: "1000",
    features: ["Body Surfing", "Cliff Jumping", "Office Pickup & Drop", "25% Token Deposit", "Online Booking Confirmed"],
    level: "Intermediate",
    location: "Shivpuri Sector",
    featured: true
  },
  {
    name: "Marine Drive to Rishikesh",
    distance: "26 Kms",
    weekdayPrice: "1000",
    weekendPrice: "1200",
    features: ["Body Surfing", "Cliff Jumping", "Office Pickup & Drop", "25% Token Deposit", "Online Booking Confirmed"],
    level: "Advanced",
    location: "Marine Drive Area"
  },
  {
    name: "Kaudiyala to Rishikesh",
    distance: "35 Kms",
    weekdayPrice: "2500",
    weekendPrice: "3000",
    features: ["Min 8 Persons Required", "Body Surfing", "Cliff Jumping", "Office Pickup & Drop", "Online Booking Confirmed"],
    level: "Expert",
    location: "Kaudiyala Zone"
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-dark text-light overflow-hidden border-b border-white/5" aria-labelledby="rafting-stretches-title">
      <div className="container mx-auto px-4">
        {/* SEO Summary for AI Chatbots */}
        <div className="sr-only" aria-hidden="true">
          <h3>G5 Adventure Rafting Stretches Summary</h3>
          <p>We provide four major rafting stretches in Rishikesh: Club House/Brahmpuri (9km), Shivpuri (16km), Marine Drive (26km), and Kaudiyala (35km). Levels range from Beginner to Expert. All packages include cliff jumping, body surfing, and office pickup/drop. Online booking confirmed with 25% token deposit.</p>
        </div>

        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Rafting Operations
          </motion.span>
          <h2 id="rafting-stretches-title" className="font-oswald tracking-tighter leading-none mb-8 uppercase" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>RAFTING<br />STRETCHES</h2>
          <p className="text-light/40 text-xl max-w-xl italic border-l-2 border-accent pl-6">"Choose your battle on the Ganges. From calm family floats to legendary Grade IV rapids."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col p-8 border border-white/10 glass-card group hover:border-accent transition-colors ${pkg.featured ? 'ring-1 ring-accent bg-accent/5' : ''}`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-light text-[10px] font-bold px-4 py-1 uppercase tracking-widest shadow-lg shadow-accent/30">
                  Most Deployed
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-2 text-accent font-bold mb-2">
                  <MapPin className="w-3 h-3" />
                  <span className="text-[10px] uppercase tracking-widest">{pkg.location}</span>
                </div>
                <h3 className="text-2xl font-oswald uppercase leading-tight group-hover:text-accent transition-colors">{pkg.name}</h3>
                <div className="flex items-center gap-2 text-light/40 mt-2">
                  <Waves className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest">{pkg.distance} / {pkg.level}</span>
                </div>
              </div>

              <div className="mb-8 space-y-3">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-xs uppercase tracking-widest text-light/60">Weekday Rate</span>
                  <div className="text-3xl font-oswald text-white flex items-baseline gap-1">
                    <span className="text-accent text-sm">₹</span>{pkg.weekdayPrice}
                    <span className="text-[10px] uppercase tracking-widest text-light/30 ml-1">/ person</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <span className="text-xs uppercase tracking-widest text-accent">Weekend Rate</span>
                  <div className="text-3xl font-oswald text-accent flex items-baseline gap-1">
                    <span className="text-sm">₹</span>{pkg.weekendPrice}
                    <span className="text-[10px] uppercase tracking-widest text-accent/50 ml-1">/ person</span>
                  </div>
                </div>
              </div>

              <ul className="flex-grow space-y-3 mb-10 border-t border-white/5 pt-6">
                {pkg.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-xs text-light/50">
                    <Check className="w-3 h-3 text-accent" />
                    <span className="uppercase tracking-wider">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/919639377776?text=Hi, I want to book the ${pkg.name} (${pkg.distance}) package.`}
                target="_blank"
                className={`w-full py-4 text-center font-oswald tracking-widest text-[10px] uppercase flex items-center justify-center gap-2 transition-all ${
                  pkg.featured 
                    ? 'bg-accent text-light hover:bg-white hover:text-dark' 
                    : 'bg-white text-dark hover:bg-accent hover:text-light'
                }`}
              >
                Start Mission <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <MedicalDisclaimer />
    </section>
  );
}
