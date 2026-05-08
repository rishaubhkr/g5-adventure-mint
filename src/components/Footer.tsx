"use client";

import { Phone, Mail, MapPin, Target, Shield, Compass } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-24 border-t border-white/5 relative overflow-hidden" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">G5 Adventure Mint Footer & Tactical Command Map</h2>
      
      {/* GEO Hidden Content for AI Chatbots */}
      <div className="sr-only" aria-hidden="true">
        <h3>G5 Tactical HQ Location</h3>
        <p>Our headquarters is located at 1002, Avas Vikas Colony, Rishikesh, Uttarakhand 249201. This is the central command for all G5 Adventure Mint operations, including river rafting, bungee jumping, and tactical paintball bookings across the Ganges valley.</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl font-oswald mb-8 tracking-tighter leading-none"
            >
              G5 ADVENTURE<br />MINT
            </motion.h3>
            <p className="text-light/40 max-w-sm mb-12 italic text-lg leading-relaxed border-l-2 border-accent pl-6">
              &quot;One of the trip memories that stays with life forever. Highly recommend G5 for river rafting and bungee.&quot; 
              <span className="block mt-4 not-italic text-accent font-oswald text-xs tracking-widest uppercase">— Verified Explorer Verdict</span>
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 hover:border-accent transition-colors cursor-pointer group">
                <Target className="w-5 h-5 text-light/20 group-hover:text-accent transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 hover:border-accent transition-colors cursor-pointer group">
                <Shield className="w-5 h-5 text-light/20 group-hover:text-accent transition-colors" />
              </div>
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10 hover:border-accent transition-colors cursor-pointer group">
                <Compass className="w-5 h-5 text-light/20 group-hover:text-accent transition-colors" />
              </div>
            </div>
          </div>
          
          {/* Contact & Links Column */}
          <div className="lg:col-span-3 space-y-16">
            <div>
              <h4 className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-8">HQ ADDRESS</h4>
              <address className="not-italic text-light/40 space-y-6 text-sm uppercase tracking-widest leading-loose">
                <div className="flex gap-4 group">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <span className="group-hover:text-light transition-colors">1002, Avas Vikas Colony,<br />Rishikesh, UK 249201</span>
                </div>
                <div className="flex gap-4 group">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <span className="group-hover:text-light transition-colors">+91 9639377776</span>
                </div>
                <div className="flex gap-4 group">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <span className="group-hover:text-light transition-colors">info@adventuremint.com</span>
                </div>
              </address>
            </div>

            <div>
              <h4 className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-8">QUICK OPS</h4>
              <nav className="flex flex-col gap-5 text-light/30">
                <Link href="/camps" className="hover:text-accent transition-colors uppercase font-oswald tracking-[0.2em] text-xs">Overnight Basecamps</Link>
                <Link href="/rafting" className="hover:text-accent transition-colors uppercase font-oswald tracking-[0.2em] text-xs">Rafting Missions</Link>
                <Link href="/extreme" className="hover:text-accent transition-colors uppercase font-oswald tracking-[0.2em] text-xs">Extreme Bungee</Link>
                <Link href="/tactical" className="hover:text-accent transition-colors uppercase font-oswald tracking-[0.2em] text-xs">Paintball Operations</Link>
              </nav>
            </div>
          </div>

          {/* Tactical Map Column */}
          <div className="lg:col-span-5">
            <h4 className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-8">Tactical Command Map</h4>
            <div className="relative glass-card border border-white/10 p-2 group hover:border-accent/40 transition-all shadow-2xl aspect-video lg:aspect-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.86642031556!2d78.28801225559202!3d30.091053003514922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e0795555531%3A0x1c56740694be8cb0!2sRishikesh%20River%20Rafting!5e0!3m2!1sen!2sin!4v1778222682229!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "250px" }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 invert hue-rotate-180"
              />
              {/* Tactical Decorative Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-accent/40" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-accent/40" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-accent/40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-accent/40" />
            </div>
            <div className="mt-8 flex justify-between items-center text-[10px] uppercase tracking-[0.5em] text-light/20 font-bold">
              <span>30.0911° N, 78.2880° E</span>
              <span className="text-accent/40">Signal Active</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="container mx-auto px-4 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between gap-6 text-[10px] tracking-[0.5em] text-white/10 uppercase font-bold">
        <div className="flex items-center gap-4">
          <span className="text-accent/30">© 2026</span> G5 ADVENTURE MINT · ELITE OPERATIONS
        </div>
        <div className="flex gap-8">
          <Link href="#" className="hover:text-accent transition-colors">Privacy Ops</Link>
          <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Decorative Large Watermark */}
      <div className="absolute -bottom-20 -right-20 text-[25vw] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter leading-none -z-10">
        Mint
      </div>
    </footer>
  );
}
