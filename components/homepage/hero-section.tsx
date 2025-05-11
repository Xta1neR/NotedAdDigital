"use client";
import { StarsBackground } from "@/components/ui/stars-background";
import { ShootingStars } from "@/components/ui/shooting-stars";
import React from "react";

export default function HeroSectionOne() {
  return (
    <div className="overflow-x-clip">
      <ShootingStars />
      <StarsBackground />
      <video
        src="https://res.cloudinary.com/dfvlccffd/video/upload/v1746957854/ccnvryvutvkcli6nvryw.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="md:-mt-24 mt-8 relative w-full h-full object-cover"
      />
    </div>
  );
}
