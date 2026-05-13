"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight, Target } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const links = [
    { href: "/", label: "Hub", desc: "Main Operations" },
    { href: "/extreme", label: "Extreme", desc: "Bungee & Swing" },
    { href: "/rafting", label: "Rafting", desc: "Ganges Missions" },
    { href: "/camps", label: "Basecamps", desc: "Overnight Stay" },
    { href: "/tactical", label: "Tactical", desc: "Combat Zone" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-dark/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-50">
          <Link href="/" className="text-2xl font-oswald tracking-tighter text-light uppercase group flex items-center gap-2">
            <span>G5 <span className="text-accent">Adventure Mint</span></span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-10">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-[10px] uppercase tracking-[0.4em] font-oswald transition-all hover:tracking-[0.6em] ${
                  pathname === link.href ? "text-accent" : "text-light/40 hover:text-light"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/919639377776?text=Hi, I want to book an adventure missions."
              target="_blank"
              className="hidden sm:flex bg-accent text-light px-8 py-2.5 text-[10px] uppercase tracking-[0.3em] font-oswald hover:bg-white hover:text-dark transition-all border border-accent hover:border-white shadow-lg shadow-accent/20"
            >
              Book Now
            </a>

            {/* Hamburger Trigger */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 text-light hover:text-accent transition-colors"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Tactical Menu Overlay (Bulletproof Native CSS) */}
      <div 
        className={`fixed top-20 left-0 right-0 bottom-0 pt-8 px-6 pb-20 lg:hidden overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 90, backgroundColor: "#0A0F0D" }}
      >
        <div className="flex flex-col gap-2 relative z-10">
          <span className="text-accent font-oswald text-[10px] tracking-[0.5em] uppercase mb-8 block opacity-40">Tactical Navigation</span>
          {links.map((link) => (
            <div key={link.href}>
              <Link 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between py-6 border-b border-white/5 ${
                  pathname === link.href ? "text-accent" : "text-light/60"
                }`}
              >
                <div>
                  <h3 className="text-3xl font-oswald uppercase tracking-tight">{link.label}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/20">{link.desc}</span>
                </div>
                <ChevronRight className={`w-6 h-6 transition-transform group-hover:translate-x-2 ${pathname === link.href ? "text-accent" : "text-white/10"}`} />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 pb-12 relative z-10">
          <a 
            href="https://wa.me/919639377776"
            target="_blank"
            className="w-full bg-accent text-light py-6 flex items-center justify-center font-oswald text-sm tracking-[0.3em] uppercase hover:bg-white hover:text-dark transition-all"
          >
            Start Mission Now
          </a>
        </div>

        {/* Background Brand Element */}
        <div className="absolute bottom-10 right-6 text-[30vw] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter opacity-10">
          G5
        </div>
      </div>
    </>
  );
}
