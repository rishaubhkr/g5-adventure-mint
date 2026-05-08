import Tactical from "@/components/Tactical";
import Lifestyle from "@/components/Lifestyle";
import Multiverse from "@/components/Multiverse";

export const metadata = {
  title: "Tactical Paintball & Lifestyle Activities | G5 Adventure Mint",
  description: "Engage in tactical paintball combat, waterfall treks, and high-rope activities at G5 Adventure Mint in Rishikesh.",
};

export default function TacticalPage() {
  return (
    <main className="min-h-screen">
      <Tactical />
      <Lifestyle />
      <Multiverse />
    </main>
  );
}
