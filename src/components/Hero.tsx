"use client";

import { motion, useMotionValue, useTransform, useSpring, type Variants } from "framer-motion";
import Image from "next/image";
import { MessageCircle, ChevronDown, Shield, Target, Zap } from "lucide-react";

const WORD_1 = "WILD".split("");
const WORD_2 = "RIVER".split("");

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 120, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 0.4 + i * 0.08,
      duration: 1,
      ease: easing,
    },
  }),
};

const line2Variants: Variants = {
  hidden: { opacity: 0, y: 120, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: 1.0 + i * 0.08,
      duration: 1,
      ease: easing,
    },
  }),
};

const stats = [
  { value: "4.5★", label: "Google Rating", icon: Shield },
  { value: "2,014+", label: "Reviews", icon: Target },
  { value: "20+ Yrs", label: "Experience", icon: Zap },
];

export default function Hero() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rawBgX = useTransform(mouseX, [0, 1], [-25, 25]);
  const rawBgY = useTransform(mouseY, [0, 1], [-12, 12]);
  const bgX = useSpring(rawBgX, { stiffness: 40, damping: 20 });
  const bgY = useSpring(rawBgY, { stiffness: 40, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX / width);
    mouseY.set(clientY / height);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-dark"
      onMouseMove={handleMouseMove}
      aria-label="G5 Adventure Mint Hero Section"
    >
      {/* SEO Hidden Content for AI Chatbots */}
      <div className="sr-only" aria-hidden="true">
        <h1>G5 Adventure Mint Rishikesh</h1>
        <p>India's leading extreme adventure hub. We specialize in wild white water rafting on the Ganges, bungee jumping, giant swing, and tactical camping experiences. Founded in 2004 with over 20 years of expert-led adventure history.</p>
      </div>

      {/* === PARALLAX BACKGROUND === */}
      <motion.div
        className="absolute inset-[-6%] z-0"
        style={{ x: bgX, y: bgY }}
      >
        <Image
          src="/images/hero.png"
          alt="Official G5 Adventure Mint: Extreme white-water rafting on the Ganges river, Rishikesh, Uttarakhand, India"
          fill
          className="object-cover opacity-60 scale-110"
          priority
        />
      </motion.div>

      {/* === CINEMATIC VIGNETTE LAYERS === */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-dark via-dark/40 to-transparent" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,_transparent_40%,_rgba(10,15,13,0.9)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark/80 via-transparent to-transparent" />

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 w-full container mx-auto px-4 text-center pb-24">

        {/* Location Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-10 bg-accent/50" />
          <span className="text-accent font-oswald text-xs md:text-sm tracking-[0.5em] uppercase">
            G5 ADVENTURE MINT · RISHIKESH
          </span>
          <div className="h-px w-10 bg-accent/50" />
        </motion.div>

        {/* WILD — white letters staggered in */}
        <div
          className="overflow-hidden"
          style={{ perspective: "800px" }}
        >
          <div
            className="flex justify-center gap-[0.01em] font-oswald leading-[0.82] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 17vw, 14rem)" }}
          >
            {WORD_1.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-light"
                style={{ transformOrigin: "50% 100%" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* RIVER — accent-colored letters staggered in with delay */}
        <div
          className="overflow-hidden mb-6"
          style={{ perspective: "800px" }}
        >
          <div
            className="flex justify-center gap-[0.01em] font-oswald leading-[0.82] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 17vw, 14rem)" }}
          >
            {WORD_2.map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={line2Variants}
                initial="hidden"
                animate="visible"
                className="inline-block text-accent"
                style={{ transformOrigin: "50% 100%" }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          className="max-w-xl mx-auto text-light/50 text-base md:text-xl mb-12 leading-relaxed font-inter font-light"
        >
          Command the Ganges. India&apos;s #1 Extreme Adventure Hub.
          <br />
          <span className="text-light/90 font-medium tracking-wide">EST. 2004 · ELITE EQUIPMENT · EXPERT OPS</span>
        </motion.p>

        {/* Primary CTA — shimmer sweep on hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/919639377776?text=Hi, I want to book a rafting trip in Rishikesh!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 px-10 py-5 bg-accent text-light font-oswald text-base tracking-[0.2em] uppercase cursor-pointer overflow-hidden group shadow-[0_0_30px_rgba(230,126,34,0.3)]"
          >
            <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12 pointer-events-none" />
            <MessageCircle className="w-5 h-5 shrink-0" />
            Engage via WhatsApp
          </motion.a>
          
          <motion.a
            href="#tour-packages"
            whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
            className="px-10 py-5 border border-white/10 text-light/60 font-oswald text-base tracking-[0.2em] uppercase transition-colors"
          >
            Explore Basecamps
          </motion.a>
        </motion.div>
      </div>

      {/* === BOTTOM STATS BAR === */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/5 backdrop-blur-xl bg-dark/60"
      >
        <div className="container mx-auto px-4 py-4 md:py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center py-2 sm:py-0 sm:px-4 group">
              <div className="flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-1">
                <Icon className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" />
                <div className="text-white font-oswald text-xl md:text-3xl tracking-tighter">{value}</div>
                <div className="text-light/30 text-[10px] uppercase tracking-[0.3em]">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* === SCROLL INDICATOR === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute right-6 bottom-32 z-20 hidden lg:flex flex-col items-center gap-4"
      >
        <span
          className="text-accent/30 text-[10px] uppercase tracking-[0.4em] font-bold"
          style={{ writingMode: "vertical-rl" }}
        >
          STRIKE DOWN
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
