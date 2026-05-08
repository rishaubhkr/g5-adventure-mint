"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, X, ChevronRight, Zap, Shield, Waves, Home, Compass, MapPin } from "lucide-react";

type Step = "thrill" | "scope" | "style" | "result";

export default function MissionWizard() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>("thrill");
  const [selections, setSelections] = useState({
    thrill: "",
    scope: "",
    style: "",
  });

  const resetWizard = () => {
    setStep("thrill");
    setSelections({ thrill: "", scope: "", style: "" });
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) resetWizard();
  };

  const selectThrill = (val: string) => {
    setSelections({ ...selections, thrill: val });
    setStep("scope");
  };

  const selectScope = (val: string) => {
    setSelections({ ...selections, scope: val });
    if (val === "stay") {
      setStep("style");
    } else {
      setStep("result");
    }
  };

  const selectStyle = (val: string) => {
    setSelections({ ...selections, style: val });
    setStep("result");
  };

  const getRecommendation = () => {
    const { thrill, scope, style } = selections;

    if (scope === "rafting") {
      if (thrill === "chill") return { name: "Brahmpuri Expedition", id: "rafting-brahmpuri-to-nim-beach", desc: "A smooth entry into the Ganges. Perfect for elite recruits and families." };
      if (thrill === "tactical") return { name: "Shivpuri Operations", id: "rafting-shivpuri-to-rishikesh", desc: "The gold standard of tactical rafting. High energy, consistent rapids." };
      return { name: "Kaudiyala Extreme", id: "rafting-kaudiyala-to-rishikesh", desc: "For the fearless. Grade IV+ rapids that demand total focus." };
    } else {
      if (thrill === "chill") return { name: "Classic Explorer", id: "stay-plan-1", desc: "Refuel and regroup. A balanced 1N/2D mission with essential comforts." };
      if (thrill === "tactical") return { name: "Adrenaline Master", id: "stay-plan-2", desc: "Maximum deployment. Extended rafting and intensive camp life." };
      return { name: "Ultra Adrenaline", id: "stay-plan-4", desc: "The apex mission. 2N/3D of total Himalayan immersion and extreme rafting." };
    }
  };

  const initiateMission = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      element.classList.add("ring-4", "ring-accent", "ring-offset-4", "ring-offset-dark");
      setTimeout(() => {
        element.classList.remove("ring-4", "ring-accent", "ring-offset-4", "ring-offset-dark");
      }, 3000);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-28 right-8 z-50 w-16 h-16 bg-accent rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(230,126,34,0.5)] border-2 border-white/20 hover:scale-110 transition-transform group"
        aria-label="Toggle Mission Control"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-8 h-8 text-white" />
            </motion.div>
          ) : (
            <motion.div key="open" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.5, opacity: 0 }}>
              <Target className="w-8 h-8 text-white group-hover:animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <div className="absolute -top-12 right-0 bg-white text-dark px-4 py-1 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap rounded-sm shadow-xl pointer-events-none">
            Mission Control
          </div>
        )}
      </button>

      {/* Wizard Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[45] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop Blur */}
            <div className="absolute inset-0 bg-dark/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-dark border border-white/10 p-8 md:p-12 overflow-hidden glass-card"
            >
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-accent" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-accent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-accent" />

              {/* Progress Indicator */}
              <div className="flex gap-2 mb-12">
                {(["thrill", "scope", "style", "result"] as Step[]).map((s, i) => (
                  <div 
                    key={s} 
                    className={`h-1 flex-grow transition-all duration-500 ${
                      (["thrill", "scope", "style", "result"] as Step[]).indexOf(step) >= i ? 'bg-accent shadow-[0_0_10px_#E67E22]' : 'bg-white/5'
                    }`} 
                  />
                ))}
              </div>

              {/* Step Content */}
              <div className="relative min-h-[300px]">
                <AnimatePresence mode="wait">
                  {step === "thrill" && (
                    <motion.div key="thrill" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                      <span className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-4 block">Stage 01: Assessment</span>
                      <h3 className="text-4xl font-oswald uppercase mb-8 leading-tight">Define your<br />thrill threshold.</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: "chill", name: "CHILL", desc: "First-time explorer or family deployment.", icon: <Shield className="w-5 h-5" /> },
                          { id: "tactical", name: "TACTICAL", desc: "Balanced action for seasoned adrenaline hunters.", icon: <Zap className="w-5 h-5" /> },
                          { id: "extreme", name: "EXTREME", desc: "No-compromise, Grade IV+ white-water missions.", icon: <Waves className="w-5 h-5" /> },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => selectThrill(opt.id)}
                            className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 hover:border-accent hover:bg-accent/5 transition-all text-left group"
                          >
                            <div className="p-3 bg-white/5 border border-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                              {opt.icon}
                            </div>
                            <div>
                              <div className="font-oswald text-xl uppercase">{opt.name}</div>
                              <div className="text-xs text-light/40 uppercase tracking-widest">{opt.desc}</div>
                            </div>
                            <ChevronRight className="ml-auto w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === "scope" && (
                    <motion.div key="scope" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                      <span className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-4 block">Stage 02: Logistics</span>
                      <h3 className="text-4xl font-oswald uppercase mb-8 leading-tight">Determine mission<br />duration.</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: "rafting", name: "Day Mission", desc: "Direct rafting strike. In and out in 4-6 hours.", icon: <Compass className="w-5 h-5" /> },
                          { id: "stay", name: "Full Deployment", desc: "Overnight operations with basecamp immersion.", icon: <Home className="w-5 h-5" /> },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => selectScope(opt.id)}
                            className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 hover:border-accent hover:bg-accent/5 transition-all text-left group"
                          >
                            <div className="p-3 bg-white/5 border border-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                              {opt.icon}
                            </div>
                            <div>
                              <div className="font-oswald text-xl uppercase">{opt.name}</div>
                              <div className="text-xs text-light/40 uppercase tracking-widest">{opt.desc}</div>
                            </div>
                            <ChevronRight className="ml-auto w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === "style" && (
                    <motion.div key="style" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
                      <span className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-4 block">Stage 03: Basecamp Style</span>
                      <h3 className="text-4xl font-oswald uppercase mb-8 leading-tight">Select your<br />strategic base.</h3>
                      <div className="grid grid-cols-1 gap-4">
                        {[
                          { id: "beach", name: "Riverside Beach", desc: "Direct Ganges access with white sand floors.", icon: <MapPin className="w-5 h-5" /> },
                          { id: "jungle", name: "Jungle Immersion", desc: "Deep forest sanctuary for stealth and peace.", icon: <Trees className="w-5 h-5" /> },
                          { id: "luxury", name: "Luxury Resort", desc: "Himalayan comfort with elite amenities.", icon: <Sparkles className="w-5 h-5" /> },
                        ].map((opt) => (
                          <button
                            key={opt.id}
                            onClick={() => selectStyle(opt.id)}
                            className="flex items-center gap-6 p-6 bg-white/5 border border-white/5 hover:border-accent hover:bg-accent/5 transition-all text-left group"
                          >
                            <div className="p-3 bg-white/5 border border-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                              {opt.icon}
                            </div>
                            <div>
                              <div className="font-oswald text-xl uppercase">{opt.name}</div>
                              <div className="text-xs text-light/40 uppercase tracking-widest">{opt.desc}</div>
                            </div>
                            <ChevronRight className="ml-auto w-5 h-5 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === "result" && (
                    <motion.div key="result" initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                      <span className="text-accent font-oswald text-xs tracking-[0.4em] uppercase mb-4 block">Final: Mission Briefing</span>
                      <h3 className="text-4xl font-oswald uppercase mb-8 leading-tight">Target Acquired.<br />Begin Mission.</h3>
                      
                      {(() => {
                        const rec = getRecommendation();
                        return (
                          <div className="p-8 border border-accent bg-accent/5 glass-card mb-8">
                            <div className="flex items-center gap-3 text-accent font-bold mb-4">
                              <Target className="w-4 h-4" />
                              <span className="text-xs uppercase tracking-[0.2em]">RECOMMENDED OPERATION</span>
                            </div>
                            <h4 className="text-3xl font-oswald uppercase mb-2">{rec.name}</h4>
                            <p className="text-light/40 text-sm italic mb-8 leading-relaxed">&quot;{rec.desc}&quot;</p>
                            <button
                              onClick={() => initiateMission(rec.id)}
                              className="w-full py-4 bg-accent text-light font-oswald text-sm tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-dark transition-all"
                            >
                              Initiate Mission <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        );
                      })()}

                      <button 
                        onClick={resetWizard}
                        className="w-full py-3 text-center text-[10px] uppercase tracking-widest text-light/20 hover:text-accent transition-colors font-bold"
                      >
                        Reset Assessment Parameters
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Close Info */}
              <div className="mt-12 text-[10px] uppercase tracking-[0.4em] text-light/10 text-center font-bold">
                Elite Intelligence System v2.0 · G5 Tactical Group
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Internal helper icons since I can't guarantee they are all in the project's lucide-react version
const Trees = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10 10v.01" /><path d="M14 10v.01" /><path d="M7 10v.01" /><path d="M17 10v.01" /><path d="m12 2-8 6h16l-8-6Z" /><path d="M12 10v12" /><path d="M9 14v.01" /><path d="M15 14v.01" /><path d="M9 18v.01" /><path d="M15 18v.01" />
  </svg>
);

const Sparkles = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M21 17v4" /><path d="M19 19h4" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);
