"use client";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import React from "react";
import CreativeExcellence from "./creativeHero";
import { useMediaQuery } from 'react-responsive';
import CreativeExcellenceMobile from "./creativeHeroMobile";

export default function HeroSection() {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <div className="overflow-x-clip z-0">
      <ShootingStars />
      <StarsBackground />
      {isMobileOrTablet ? <CreativeExcellenceMobile /> : <CreativeExcellence />}
    </div>
  );
}

