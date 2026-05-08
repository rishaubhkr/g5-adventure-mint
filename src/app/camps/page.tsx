import TourPackages from "@/components/TourPackages";
import Basecamp from "@/components/Basecamp";

export const metadata = {
  title: "Luxury & Jungle Camps in Rishikesh | G5 Adventure Mint",
  description: "Book your overnight stay in Rishikesh. Choose from raw jungle immersion camps or luxury riverside resorts with DJ & Disco nights.",
};

export default function CampsPage() {
  return (
    <main className="min-h-screen">
      <TourPackages />
      <Basecamp />
    </main>
  );
}
