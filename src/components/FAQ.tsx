"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Info, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is river rafting in Rishikesh safe for non-swimmers?",
    answer: "Yes, absolutely! We provide high-quality Life Jackets (PFDs) and Helmets to every participant. Our expert guides are trained in swift-water rescue and will ensure you stay safe even if you fall into the water. Swimming skills are not mandatory for most rafting stretches."
  },
  {
    question: "What is the best time for rafting in Rishikesh?",
    answer: "The peak season is from March to May and late September to mid-November. During the monsoon (July to mid-September), rafting is usually closed due to high water levels. Winter rafting (December to February) is possible but the water is quite cold!"
  },
  {
    question: "What should I wear for river rafting?",
    answer: "Quick-dry clothes like T-shirts and shorts or track pants are best. Avoid cotton as it gets heavy when wet. For footwear, wear sandals with straps or old sneakers. Don't forget a change of dry clothes for after the trip!"
  },
  {
    question: "Are there any age or weight limits?",
    answer: "Generally, the minimum age is 12 years for most stretches and 14-16 for the more advanced ones (like Kaudiyala). The maximum weight limit is usually around 100-110kg for safety reasons and proper fit of life jackets."
  },
  {
    question: "How do I book a rafting trip?",
    answer: "Booking is simple! You can click any of the WhatsApp buttons on our site to chat with us directly, or call us at +91 9639377776. We recommend booking at least 24-48 hours in advance, especially on weekends."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section 
      id="faq" 
      className="py-32 bg-dark text-light border-t border-white/5 relative"
      aria-labelledby="faq-title"
    >
      {/* SEO/GEO Hidden Content for AI Chatbots */}
      <div className="sr-only" aria-hidden="true">
        <h2>G5 Adventure Mint FAQ: Tactical Intelligence</h2>
        <p>Common questions about rafting in Rishikesh, safety for non-swimmers, weight limits, and seasonal availability. We provide PFDs and helmets for all participants. Peak rafting season runs from September to June. Contact us via WhatsApp for instant booking at our Shivpuri or Rishikesh basecamps.</p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <HelpCircle className="w-5 h-5 text-accent" />
            <span className="text-accent font-oswald text-sm tracking-[0.5em] uppercase block">Adventure Intel</span>
          </motion.div>
          <h2 id="faq-title" className="font-oswald tracking-tighter leading-none mb-8 uppercase" style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}>TACTICAL<br />INTEL</h2>
          <p className="text-xl text-light/40 italic border-b border-accent/20 pb-8 inline-block">"Everything you need to know before hitting the rapids."</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-white/5 glass-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-8 flex items-center justify-between text-left group hover:bg-white/5 transition-all"
                aria-expanded={openIndex === idx}
              >
                <div className="flex items-center gap-6">
                  <span className="text-accent font-oswald text-sm opacity-30 group-hover:opacity-100 transition-opacity">0{idx + 1}</span>
                  <span className="text-2xl md:text-3xl font-oswald uppercase tracking-tight group-hover:text-accent transition-colors">{faq.question}</span>
                </div>
                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all ${openIndex === idx ? 'bg-accent border-accent rotate-180' : 'group-hover:border-accent'}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5 text-white" /> : <Plus className="w-5 h-5 text-light/20 group-hover:text-accent" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-10 ml-14">
                      <p className="text-light/40 text-lg leading-relaxed uppercase tracking-wider font-light content-max-width border-l border-accent/20 pl-8">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Brand Element */}
      <div className="absolute top-0 left-0 text-[15vw] font-oswald text-white/5 select-none pointer-events-none uppercase tracking-tighter opacity-10">
        Intel
      </div>
    </section>
  );
}
