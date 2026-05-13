"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Activity, Target } from "lucide-react";

export default function MedicalDisclaimer() {
  return (
    <div className="py-24 bg-dark text-light border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-red-900/5 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-red-500 font-oswald text-sm tracking-[0.5em] uppercase mb-4 flex items-center justify-center gap-2"
          >
            <AlertTriangle className="w-4 h-4" /> Mandatory Check
          </motion.span>
          <h2 className="text-4xl md:text-6xl tracking-tighter uppercase font-oswald mb-6">Medical Condition</h2>
          <p className="text-light/40 italic max-w-2xl mx-auto">
            For your safety, strict medical and physical criteria apply to all extreme activities. 
            Participants with any of the following conditions are strictly prohibited from jumping or rafting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Conditions List */}
          <div className="p-8 border border-red-500/20 bg-red-500/5 glass-card relative">
            <div className="flex items-center gap-4 mb-8 border-b border-red-500/20 pb-4">
              <Activity className="text-red-500 w-6 h-6" />
              <h3 className="text-2xl font-oswald uppercase text-red-500">Prohibited Conditions</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Back or Neck injuries",
                "Recent Fracture",
                "Any Dislocation",
                "High Blood Pressure",
                "Asthma",
                "Neurological Disorders",
                "Epilepsy",
                "Heart Conditions",
                "Pregnancy",
                "Osteoporosis"
              ].map((condition, idx) => (
                <li key={idx} className="flex items-center gap-3 text-xs uppercase tracking-wider text-light/70">
                  <span className="w-6 h-6 bg-red-500/10 text-red-500 flex items-center justify-center font-bold text-[10px] shrink-0 border border-red-500/20">
                    {idx + 1}
                  </span>
                  {condition}
                </li>
              ))}
            </ul>
          </div>

          {/* Limits */}
          <div className="p-8 border border-white/10 bg-white/5 glass-card">
            <div className="flex items-center gap-4 mb-8 border-b border-white/10 pb-4">
              <Target className="text-accent w-6 h-6" />
              <h3 className="text-2xl font-oswald uppercase">Age & Weight Limits</h3>
            </div>
            <div className="space-y-6">
              {[
                { label: "Age Limit", value: "12 to 55yrs" },
                { label: "Bungy Weight Limit", value: "40kg to 110kg" },
                { label: "Valley Rope Jump", value: "35kg to 160kg" },
                { label: "Flying Fox (Tandem)", value: "35kg to 230kg" },
                { label: "Couple Valley Rope Jump", value: "Max 160 kg" },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-white/5 pb-3">
                  <span className="text-[10px] text-light/40 uppercase tracking-[0.2em]">{item.label}</span>
                  <span className="text-sm font-oswald uppercase text-white tracking-wider">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
