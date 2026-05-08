"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Crosshair, ShieldAlert, Zap, Users, Target, ArrowRight } from "lucide-react";

const paintballPricing = [
  { balls: "50 Paintballs", price: "550", detail: "Introductory Mission" },
  { balls: "100 Paintballs", price: "850", detail: "Pro Combat Mission" },
];

export default function Tactical() {
  return (
    <section className="bg-dark text-light overflow-hidden border-t border-white/5">
      <div className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/paintball.png" 
            alt="Tactical Paintball Rishikesh" 
            fill 
            className="object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-dark via-dark/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <span className="text-accent font-oswald text-sm tracking-[0.5em] uppercase mb-6 block">
                Combat Zone
              </span>
              <h2 className="font-oswald tracking-tighter leading-none mb-8 uppercase" style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}>
                TACTICAL<br />PAINTBALL
              </h2>
              <p className="text-xl text-light/60 leading-relaxed mb-12 max-w-xl">
                The ultimate test of sand, guts, and strategy. Experience the &quot;Heroic&quot; play of real combat with none of the aches. Speedball version at high-altitude Rishikesh.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex gap-4 items-start">
                  <Target className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h3 className="text-lg font-oswald uppercase mb-1">Stealth & Speed</h3>
                    <p className="text-light/40 text-sm">Brain to think, eye to aim, and the courage to shoot.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <ShieldAlert className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h3 className="text-lg font-oswald uppercase mb-1">Elite Safety</h3>
                    <p className="text-light/40 text-sm">Approved masks mandatory. Strictly enforced combat rules.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 p-8 border border-white/10">
                <h3 className="font-oswald text-xs tracking-widest uppercase text-accent mb-6">Combat Rates</h3>
                <div className="space-y-4 mb-8">
                  {paintballPricing.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-end border-b border-white/10 pb-4">
                      <div>
                        <h4 className="text-xl font-oswald uppercase">{item.balls}</h4>
                        <span className="text-[10px] text-light/40 uppercase tracking-widest">{item.detail}</span>
                      </div>
                      <div className="text-2xl font-oswald">₹{item.price}</div>
                    </div>
                  ))}
                </div>
                <a 
                  href="https://wa.me/919639377776?text=Hi, I want to book a Paintball session."
                  target="_blank"
                  className="w-full py-4 bg-accent text-light font-oswald text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-dark transition-colors"
                >
                  Mobilize on WhatsApp <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="hidden lg:block relative aspect-square bg-dark border border-white/5 p-12 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-accent/5 pointer-events-none" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-oswald uppercase mb-6 tracking-tight">The Mission</h3>
                  <p className="text-light/40 leading-relaxed italic mb-8">
                    &quot;Capture the flag, mix in hidden emotions, and add the adrenaline of cardiac arrest—but 100% safe. This is the thrill of the hunt.&quot;
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Users className="text-accent" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Team Camaraderie & Teamwork</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Zap className="text-accent" />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium">Stress Alleviation through Action</span>
                  </div>
                </div>
                <div className="pt-8 mt-8 border-t border-white/10">
                  <p className="text-[10px] uppercase tracking-widest text-light/20">
                    Est. in Rishikesh for the first time by G5 experts.
                  </p>
                </div>
              </div>
              
              {/* Decorative Crosshair */}
              <div className="absolute -bottom-20 -right-20 w-60 h-60 border-[40px] border-accent/5 rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
