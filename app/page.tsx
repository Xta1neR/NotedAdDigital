import HeroSectionOne from "@/components/hero-section";
import Navbar from "@/components/Navbar";
import React from "react";


export default function App() {
  return (
    <div  className="absolute top-0 z-[-2] w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Navbar />
      <HeroSectionOne />
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">NAD VIDEO</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">Coloured Text - 3d Marquee Aceternity UI - Let our work speak</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">Coloured Text - Services We Offer - Featured Section + Animated Model</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">World Map</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">Services</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">Join Us</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
      <h1 className="text-6xl font-bold text-amber-300 text-center">Footer</h1>
      <hr className="border-2 border-white my-4 mx-auto w-1/2 bg-amber-300" />
    </div>
  );
}