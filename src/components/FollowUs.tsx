"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function FollowUs() {
  return (
    <section className="relative py-32 bg-dark overflow-hidden border-y border-white/5">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-accent font-oswald text-sm tracking-[0.4em] uppercase"
          >
            <div className="w-8 h-[1px] bg-accent" />
            Connect With Us
            <div className="w-8 h-[1px] bg-accent" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl font-oswald mb-12 tracking-tighter leading-[0.9]"
          >
            FOLLOW THE <br />
            <span className="text-accent italic">ADVENTURE</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-light/40 max-w-xl text-lg mb-16 leading-relaxed"
          >
            Join our elite community of explorers. Get real-time mission updates, 
            exclusive behind-the-scenes footage, and the daily dose of adrenaline 
            you crave. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://www.instagram.com/rafting_camping_32"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-6 bg-transparent border border-white/20 overflow-hidden transition-all duration-500 hover:border-accent"
            >
              {/* Button Background Animation */}
              <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              
              <InstagramIcon className="w-6 h-6 relative z-10 group-hover:text-white transition-colors" />
              <span className="relative z-10 font-oswald text-xl tracking-widest uppercase group-hover:text-white transition-colors">
                Visit Our Instagram
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 group-hover:text-white" />
              
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/40 group-hover:border-white" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/40 group-hover:border-white" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative Large Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[20vw] font-oswald text-white/[0.02] select-none pointer-events-none uppercase tracking-tighter leading-none whitespace-nowrap">
        @adventuremint
      </div>
    </section>
  );
}
