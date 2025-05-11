"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
 
export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <p className="text-yellow-300 text-6xl font-extrabold tracking-widest">Wanna Be Part of This Vibe?<br /></p>
        Pull up a seat. Bring your weird, your wild ideas,
        <Highlight className="text-black dark:text-white">
          your “what if” moments.
        </Highlight>
        At Noted, we make room for them all.
      </motion.h1>
    </HeroHighlight>
  );
}
