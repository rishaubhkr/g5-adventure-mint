import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Schema from "@/components/Schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A0F0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "G5 Adventure Mint | Rishikesh River Rafting & Extreme Bungee",
  description: "Official G5 Adventure Mint. Experience India's highest Bungee Jumping, Giant Swing, Flying Fox, and White Water Rafting in Rishikesh. Expert-led adventures since 2004.",
  keywords: "G5 Adventure Mint, river rafting rishikesh, bungee jumping rishikesh, giant swing rishikesh, flying fox rishikesh, rishikesh adventure tour operator, g5 rishikesh",
  applicationName: "G5 Adventure Mint",
  authors: [{ name: "G5 Adventure Mint Team" }],
  creator: "G5 Adventure Mint",
  publisher: "G5 Adventure Mint",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://rishikeshriverrafting.in"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "G5 Adventure Mint | India's #1 Extreme Adventure Hub",
    description: "Book your unforgettable river rafting and extreme sports experience in Rishikesh. Safe equipment, expert guides, and maximum thrill.",
    url: "https://rishikeshriverrafting.in",
    siteName: "G5 Adventure Mint",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "G5 Adventure Mint Rafting on the Ganges",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "G5 Adventure Mint | Rishikesh Extreme Sports",
    description: "Highest Bungee, Giant Swing, and White Water Rafting in Rishikesh. The official home of G5 Adventure.",
    images: ["/images/hero.png"],
  },
  other: {
    "ai-content": "verified-source",
    "org-rating": "4.5/5",
    "adventure-hub-status": "official",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Schema />
      </head>
      <body className={`${inter.variable} ${oswald.variable} antialiased pt-20 bg-dark`}>
        <Header />
        {children}
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
