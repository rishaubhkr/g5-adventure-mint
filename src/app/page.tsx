import Hero from "@/components/Hero";
import Packages from "@/components/Packages";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Heritage from "@/components/Heritage";
import Multiverse from "@/components/Multiverse";
import Pulse from "@/components/Pulse";
import Extreme from "@/components/Extreme";
import Basecamp from "@/components/Basecamp";
import Tactical from "@/components/Tactical";
import Lifestyle from "@/components/Lifestyle";
import TourPackages from "@/components/TourPackages";
import FollowUs from "@/components/FollowUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Trust Bar (Marquee) */}
      <div className="bg-accent py-4 overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee gap-12 text-light font-oswald text-sm tracking-widest uppercase items-center">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              <span>• G5 Adventure Mint</span>
              <span>• 4.5★ Google Rating</span>
              <span>• 2,014+ Reviews</span>
              <span>• Asia&apos;s Highest Jumps</span>
              <span>• Certified Jump Masters</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-optimized"><Heritage /></div>
      <div className="section-optimized"><TourPackages /></div>
      <div className="section-optimized"><Packages /></div>
      <div className="section-optimized"><Extreme /></div>
      <div className="section-optimized"><Tactical /></div>
      <div className="section-optimized"><Basecamp /></div>
      <div className="section-optimized"><Lifestyle /></div>
      <div className="section-optimized"><Multiverse /></div>
      <div className="section-optimized"><Pulse /></div>
      <div className="section-optimized"><FollowUs /></div>
      <div className="section-optimized"><Reviews /></div>
      <div className="section-optimized"><FAQ /></div>
    </main>
  );
}
