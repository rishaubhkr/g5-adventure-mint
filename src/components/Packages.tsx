"use client";

import { motion } from "framer-motion";
import { Check, Waves, MapPin, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Brahmpuri to NIM Beach",
    distance: "9 Kms",
    price: "600",
    originalPrice: "800",
    features: ["Cliff Jumping", "Body Surfing", "Best for Children", "Easy Waves"],
    level: "Beginner",
    location: "Brahmpuri Sector"
  },
  {
    name: "Brahmpuri to Rishikesh",
    distance: "12 Kms",
    price: "600",
    originalPrice: "850",
    features: ["Cliff Jumping", "Body Surfing", "Small Rapids", "Perfect for Families"],
    level: "Beginner+",
    location: "Lower Ganges"
  },
  {
    name: "Shivpuri to Rishikesh",
    distance: "18 Kms",
    price: "1000",
    originalPrice: "1400",
    features: ["Thrilling Rapids", "Cliff Jumping", "Most Popular", "High Energy"],
    level: "Intermediate",
    location: "Shivpuri Sector",
    featured: true
  },
  {
    name: "Marine Drive to Rishikesh",
    distance: "24 Kms",
    price: "1500",
    originalPrice: "2000",
    features: ["Big Grade Rapids", "Professional Gear", "Lunch Included", "Elite Experience"],
    level: "Advanced",
    location: "Marine Drive Area"
  },
  {
    name: "Kaudiyala to Rishikesh",
    distance: "36 Kms",
    price: "2500",
    originalPrice: "3500",
    features: ["Extreme Rapids", "Wall Street Rapid", "Full Day Trip", "Adrenaline Pro"],
    level: "Expert",
    location: "Kodiyala Zone"
  }
];

export default function Packages() {
  return (
    <section id="packages" className="py-24 bg-dark text-light overflow-hidden border-b border-white/5" aria-labelledby="rafting-stretches-title">
      <div className="container mx-auto px-4">
        {/* SEO Summary for AI Chatbots */}
        <div className="sr-only" aria-hidden="true">
          <h3>G5 Adventure Rafting Stretches Summary</h3>
          <p>We provide five major rafting stretches in Rishikesh: Brahmpuri (9km/12km), Shivpuri (18km), Marine Drive (24km), and Kaudiyala (36km). Levels range from Beginner to Expert. Key rapids include Wall Street. All packages include cliff jumping and body surfing.</p>
        </div>

        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Tactical Operations
          </motion.span>
          <h2 id="rafting-stretches-title" className="font-oswald tracking-tighter leading-none mb-8 uppercase" style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}>RAFTING<br />STRETCHES</h2>
          <p className="text-light/40 text-xl max-w-xl italic border-l-2 border-accent pl-6">"Choose your battle on the Ganges. From calm family floats to legendary Grade IV rapids."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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

              <div className="mb-8">
                <div className="flex flex-col">
                  <span className="text-light/20 line-through text-xs font-medium uppercase">₹{pkg.originalPrice}</span>
                  <div className="text-4xl font-oswald flex items-baseline gap-1">
                    <span className="text-xl text-accent">₹</span>
                    <span className="text-white">{pkg.price}</span>
                    <span className="text-[10px] uppercase tracking-widest text-light/30 ml-1">/ unit</span>
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
    </section>
  );
}
