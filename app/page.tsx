import HeroSectionOne from "@/components/homepage/hero-section";
import Navbar from "@/components/ui/Navbar";
import React from "react";
import HeroVideo from "@/components/homepage/hero-video";
import { HeroMarquee } from "@/components/homepage/HeroMarquee";
import { HeroServices } from "@/components/homepage/hero-services";
import { HeroGlobe } from "@/components/homepage/hero-globe";
import HeroBento from "@/components/homepage/hero-bento";
import ClientsSection from "@/components/homepage/hero-client";
import Footer from "@/components/ui/Footer";



export default function App() {
  return (
    <div  className="absolute top-0 overflow-x-clip w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <HeroSectionOne />
      <HeroVideo />
      <HeroBento />
      <ClientsSection />
      <HeroMarquee />
      <HeroServices />
      <HeroGlobe />
      <Footer />
    </div>
  );
}