"use client";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import React from "react";

export default function HeroSection() {
  return (
    <div className="overflow-x-clip">
      <ShootingStars />
      <StarsBackground />
      
    </div>
  );
}
