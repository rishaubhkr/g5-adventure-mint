"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Coffee, Shield, Music, ArrowRight, Bed, CheckCircle2, Calendar, MessageSquare, Palmtree, Trees, Sparkles, MapPin } from "lucide-react";

const beachCamps = [
  { 
    name: "G5 Beach Camp", 
    location: "Kodiyala", 
    p1: "1999", p2: "2199", p3: "3499", p4: "3699", 
    special: "Waterfall Trek & Grade V Rapids",
    tag: "High Octane"
  },
  { 
    name: "River Zone", 
    location: "Shivpuri", 
    p1: "1500", p2: "1700", p3: "2400", p4: "2600", 
    special: "Finest Shore & Large Group Hub",
    tag: "Massive Base"
  },
  { 
    name: "Camp Sandpiper", 
    location: "Rishikesh", 
    p1: "1700", p2: "1900", p3: "2600", p4: "2800", 
    special: "Yoga Retreat & Ancient Trek",
    tag: "Zen Adventure"
  },
  { 
    name: "Rapid Action", 
    location: "Shivpuri", 
    p1: "1600", p2: "1800", p3: "2450", p4: "2650", 
    special: "Marine Drive & Near Landmarks",
    tag: "Strategic Base"
  }
];

const jungleCamps = [
  { 
    name: "Chinkara Camp", 
    location: "Shivpuri", 
    p1: "1600", p2: "1800", p3: "2550", p4: "2750",
    special: "Waterfall Jungle Trek & Safari",
    tag: "Wilderness Pro"
  },
  { 
    name: "Dream Land", 
    location: "Shivpuri", 
    p1: "1650", p2: "1850", p3: "2650", p4: "2850",
    special: "River Hyule Banks & Wildlife Sanctuary",
    tag: "Nature Tryst"
  },
  { 
    name: "Real Adventure", 
    location: "Shivpuri", 
    p1: "1700", p2: "1900", p3: "2700", p4: "2900",
    special: "Fruit Orchards & Bio-Vegetables",
    tag: "Best Rated"
  },
  { 
    name: "Nature Encounter", 
    location: "Kodiyala", 
    p1: "2000", p2: "2300", p3: "3500", p4: "3800",
    special: "Waterfall Trek & Alpine Luxury",
    tag: "Wild Coast"
  }
];

const luxuryResorts = [
  { name: "Phool Chatti", location: "Rishikesh", p1: "2150", p2: "2400", p3: "3850", p4: "4200" },
  { name: "Him River", location: "Rishikesh", p1: "2450", p2: "2750", p3: "4500", p4: "4800" },
  { name: "Birds Deluxe", location: "Rishikesh", p1: "2500", p2: "2800", p3: "4600", p4: "4900" },
  { name: "Mohanchatti", location: "Mohanchatti", p1: "2200", p2: "2500", p3: "4000", p4: "4300" },
];

const allPackages = {
  "1night": [
    {
      id: "plan-1",
      name: "Classic Explorer",
      rafting: "16 Kms",
      price: "1500",
      meals: "4 Meals",
      duration: "1N / 2D",
      description: "The essential overnight escape with standard rafting and jungle walk.",
      featured: false
    },
    {
      id: "plan-2",
      name: "Adrenaline Master",
      rafting: "26 Kms",
      price: "1700",
      meals: "4 Meals",
      duration: "1N / 2D",
      description: "For those who want more. Extended rafting and full activity access.",
      featured: true
    }
  ],
  "2night": [
    {
      id: "plan-3",
      name: "Classic Odyssey",
      rafting: "16 Kms",
      price: "2400",
      meals: "8 Meals",
      duration: "2N / 3D",
      description: "A deeper immersion. Perfect for families seeking a relaxed mountain pace.",
      featured: false
    },
    {
      id: "plan-4",
      name: "Ultra Adrenaline",
      rafting: "26 Kms",
      price: "2600",
      meals: "8 Meals",
      duration: "2N / 3D",
      description: "The ultimate G5 experience. High-mileage rafting and maximum camp life.",
      featured: true
    }
  ]
};

export default function TourPackages() {
  const [duration, setDuration] = useState<"1night" | "2night">("1night");

  const getWhatsAppLink = (campName: string, price: string, plan: string) => {
    const durLabel = duration === "1night" ? "1 Night / 2 Days" : "2 Nights / 3 Days";
    return `https://wa.me/919639377776?text=Hi, I want to book the ${durLabel} package at ${campName} (${plan}) for ₹${price} per person.`;
  };

  return (
    <section 
      className="py-24 bg-dark text-light overflow-hidden border-t border-white/5" 
      id="tour-packages"
      aria-labelledby="packages-title"
    >
      <div className="container mx-auto px-4">
        {/* SEO Summary for AI Chatbots */}
        <div className="sr-only" aria-hidden="true">
          <h3>G5 Adventure Mint Package Overview</h3>
          <p>We offer 1 Night / 2 Days and 2 Night / 3 Days packages across three distinct hubs: Riverside Beach Hub, Jungle Immersion, and Luxury Escapes. Rafting options include 16KM and 26KM tiers. Prices range from ₹1500 to ₹4900 depending on location and duration.</p>
        </div>

        <div className="mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-4 block"
          >
            Adventure Bundles
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            id="packages-title"
            className="font-oswald tracking-tighter leading-none mb-12"
            style={{ fontSize: "clamp(3rem, 10vw, 6rem)" }}
          >
            ULTIMATE<br />STAY PACKS
          </motion.h2>
          
          {/* Duration Toggle */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <button 
              onClick={() => setDuration("1night")}
              className={`px-8 py-3 font-oswald text-xs tracking-widest uppercase transition-all border ${duration === "1night" ? 'bg-accent border-accent text-light shadow-[0_0_20px_rgba(230,126,34,0.3)]' : 'border-white/10 text-light/40 hover:text-light'}`}
            >
              1 Night / 2 Days
            </button>
            <button 
              onClick={() => setDuration("2night")}
              className={`px-8 py-3 font-oswald text-xs tracking-widest uppercase transition-all border ${duration === "2night" ? 'bg-accent border-accent text-light shadow-[0_0_20px_rgba(230,126,34,0.3)]' : 'border-white/10 text-light/40 hover:text-light'}`}
            >
              2 Nights / 3 Days
            </button>
          </div>
          
          <p className="text-light/40 text-lg max-w-2xl mx-auto italic">
            "Where the deep forest meets the copper river. Select your strategic base for Himalayan immersion."
          </p>
        </div>

        {/* Top Tier Baseline Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {allPackages[duration].map((plan) => (
              <motion.div 
                key={`${duration}-${plan.id}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                id={`stay-${plan.id}`}
                className={`p-10 border ${plan.featured ? 'border-accent bg-accent/5' : 'border-white/10 bg-white/5'} relative overflow-hidden group glass-card`}
              >
                {plan.featured && <div className="absolute top-0 right-0 bg-accent text-light text-[10px] uppercase font-oswald tracking-widest px-4 py-1">Best Value</div>}
                
                <div className="mb-8">
                  <div className="flex items-center gap-2 text-accent font-bold mb-2">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[10px] uppercase tracking-[0.2em]">{plan.duration}</span>
                  </div>
                  <h3 className="text-3xl font-oswald uppercase mb-2">{plan.name}</h3>
                  <p className="text-light/40 text-sm">{plan.description}</p>
                </div>

                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-5xl font-oswald tracking-tighter text-white">₹{plan.price}</span>
                    <span className="text-[10px] uppercase tracking-widest text-light/40 block mt-2">Starts from / Per Person</span>
                  </div>
                  <div className="text-right">
                    <span className="text-accent font-oswald text-xl uppercase block mb-1">{plan.rafting}</span>
                    <span className="text-[10px] uppercase tracking-widest text-light/40 block">Rafting Included</span>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3 text-sm text-light/60">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>{plan.meals} Full Meals Included</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-light/60">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Body Surfing & Cliff Jumping</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-light/60">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <span>Village Jungle Trek</span>
                  </div>
                </div>

                <a 
                  href={getWhatsAppLink(plan.name, plan.price, `${plan.rafting} Rafting`)}
                  target="_blank"
                  className={`w-full py-4 font-oswald text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-colors ${plan.featured ? 'bg-accent text-light hover:bg-white hover:text-dark shadow-lg shadow-accent/20' : 'bg-white text-dark hover:bg-accent hover:text-light'}`}
                >
                  Book This Package <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Triple Section Detailed Selection */}
        <div className="space-y-32">
          
          {/* Section 1: Riverside Beach Hub */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full border border-accent/20">
                <Palmtree className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-5xl font-oswald uppercase tracking-tighter">Riverside Beach Hub</h3>
                <p className="text-light/40 text-sm italic">Direct Ganges access. White sand. Absolute thrill.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beachCamps.map((camp, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-white/5 hover:border-accent/40 transition-all group relative glass-card">
                  {camp.tag && <div className="absolute top-0 right-0 bg-accent text-light text-[8px] uppercase font-oswald tracking-widest px-3 py-1">{camp.tag}</div>}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 text-accent font-bold mb-1">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] uppercase tracking-widest">{camp.location}</span>
                    </div>
                    <h4 className="text-2xl font-oswald uppercase leading-tight group-hover:text-accent transition-colors">{camp.name}</h4>
                  </div>
                  <div className="flex flex-col gap-4 mb-8">
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-sm border border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-light/40">16KM Plan</span>
                      <span className="text-xl font-oswald text-white">₹{duration === "1night" ? camp.p1 : camp.p3}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-white/5 rounded-sm border border-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-light/40">26KM Plan</span>
                      <span className="text-xl font-oswald text-white">₹{duration === "1night" ? camp.p2 : camp.p4}</span>
                    </div>
                  </div>
                  <div className="mb-6 h-12">
                    <p className="text-[10px] text-light/40 uppercase tracking-widest leading-relaxed">
                      {camp.special}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    <a 
                      href={getWhatsAppLink(camp.name, duration === "1night" ? camp.p1 : camp.p3, "16KM Beach Plan")}
                      target="_blank"
                      className="w-full py-3 bg-accent text-light text-center font-oswald text-[10px] tracking-widest uppercase hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3 h-3" /> Book 16KM
                    </a>
                    <a 
                      href={getWhatsAppLink(camp.name, duration === "1night" ? camp.p2 : camp.p4, "26KM Beach Plan")}
                      target="_blank"
                      className="w-full py-3 border border-white/10 text-light/40 hover:text-light hover:border-white transition-all text-center font-oswald text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3 h-3" /> Book 26KM
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Jungle Immersion */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full border border-accent/20">
                <Trees className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-5xl font-oswald uppercase tracking-tighter">Jungle Immersion</h3>
                <p className="text-light/40 text-sm italic">Deep forest sanctuaries. Wilderness at your doorstep.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jungleCamps.map((camp, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-white/5 hover:border-accent/40 transition-all group relative glass-card">
                   {camp.tag && <div className="absolute top-0 right-0 bg-accent text-light text-[8px] uppercase font-oswald tracking-widest px-3 py-1">{camp.tag}</div>}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-accent font-bold mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-widest">{camp.location}</span>
                      </div>
                      <h4 className="text-2xl font-oswald uppercase group-hover:text-accent transition-colors">{camp.name}</h4>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-widest text-light/20 block">16KM</span>
                        <span className="text-xl font-oswald text-white">₹{duration === "1night" ? camp.p1 : camp.p3}</span>
                      </div>
                      <div className="text-right border-l border-white/10 pl-4">
                        <span className="text-[10px] uppercase tracking-widest text-light/20 block">26KM</span>
                        <span className="text-xl font-oswald text-white">₹{duration === "1night" ? camp.p2 : camp.p4}</span>
                      </div>
                    </div>
                  </div>
                  {camp.special && <p className="text-[10px] text-light/40 uppercase tracking-widest mb-6">{camp.special}</p>}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={getWhatsAppLink(camp.name, duration === "1night" ? camp.p1 : camp.p3, "16KM Jungle Plan")}
                      target="_blank"
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-light/60 hover:bg-accent hover:text-light hover:border-accent transition-all text-center font-oswald text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3 h-3" /> Book 16KM
                    </a>
                    <a 
                      href={getWhatsAppLink(camp.name, duration === "1night" ? camp.p2 : camp.p4, "26KM Jungle Plan")}
                      target="_blank"
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-light/60 hover:bg-accent hover:text-light hover:border-accent transition-all text-center font-oswald text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3 h-3" /> Book 26KM
                    </a>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* Section 3: Luxury Escapes */}
          <div className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-accent/10 flex items-center justify-center rounded-full border border-accent/20">
                <Music className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-5xl font-oswald uppercase tracking-tighter">Luxury Escapes</h3>
                <p className="text-light/40 text-sm italic">High-end comfort. Private baths. Mountain luxury.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {luxuryResorts.map((resort, idx) => (
                <div key={idx} className="p-8 bg-white/5 border border-white/5 hover:border-accent/40 transition-all group glass-card">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 text-accent font-bold mb-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[10px] uppercase tracking-widest">{resort.location}</span>
                      </div>
                      <h4 className="text-2xl font-oswald uppercase leading-tight group-hover:text-accent transition-colors">{resort.name}</h4>
                    </div>
                    <div className="flex gap-4">
                      <div className="text-right">
                        <span className="text-[10px] uppercase tracking-widest text-light/20 block">16KM</span>
                        <span className="text-xl font-oswald text-white">₹{duration === "1night" ? resort.p1 : resort.p3}</span>
                      </div>
                      <div className="text-right border-l border-white/10 pl-4">
                        <span className="text-[10px] uppercase tracking-widest text-light/20 block">26KM</span>
                        <span className="text-xl font-oswald text-white">₹{duration === "1night" ? resort.p2 : resort.p4}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a 
                      href={getWhatsAppLink(resort.name, duration === "1night" ? resort.p1 : resort.p3, "16KM Luxury Plan")}
                      target="_blank"
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-light/60 hover:bg-accent hover:text-light hover:border-accent transition-all text-center font-oswald text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3 h-3" /> Book 16KM
                    </a>
                    <a 
                      href={getWhatsAppLink(resort.name, duration === "1night" ? resort.p2 : resort.p4, "26KM Luxury Plan")}
                      target="_blank"
                      className="flex-1 py-3 bg-white/5 border border-white/10 text-light/60 hover:bg-accent hover:text-light hover:border-accent transition-all text-center font-oswald text-[10px] tracking-widest uppercase flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-3 h-3" /> Book 26KM
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Guarantee */}
        <div className="mt-32 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-white/20">
          <div className="flex items-center gap-3">
            <Shield className="w-4 h-4" /> <span>Military Grade Discipline</span>
          </div>
          <div className="flex items-center gap-3">
            <Coffee className="w-4 h-4" /> <span>Himalayan Hospitality</span>
          </div>
          <div className="flex items-center gap-3">
            <Bed className="w-4 h-4" /> <span>Rested & Ready for Action</span>
          </div>
        </div>
      </div>
    </section>
  );
}
