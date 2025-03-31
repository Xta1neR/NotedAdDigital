"use client";
import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import Image from "next/image";
import Cover from "../public/cover.png";
import Stamp from "../public/stamp.png";
import React from "react";
import { SparklesText } from "./magicui/sparkles-text";
import HeroBento from "./ui/hero-bento";

export default function HeroSectionOne() {
  const styles = {
    innerWidth: "2xl:max-w-[1280px] w-full",
    innerWidth2: "2xl:max-w-[2200px] w-full",
    interWidth: "lg:w-[80%] w-[100%]",

    paddings: "sm:p-16 xs:p-8 px-6 py-12",
    yPaddings: "sm:py-16 xs:py-8 py-12",
    xPaddings: "sm:px-16 px-6",
    topPaddings: "sm:pt-16 xs:pt-8 pt-12",
    bottomPaddings: "sm:pb-16 xs:pb-8 pb-12",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexEnd: "flex justify-end",
    navPadding: "pt-[98px]",

    // hero section
    heroHeading:
      "font-bold lg:text-[114px] md:text-[100px] sm:text-[40px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-center",
    heroDText:
      "md:w-[212px] sm:w-[80px] w-[60px] md:h-[90px] sm:h-[48px] h-[38px] md:border-[18px] sm:border-[8px] rounded-r-[50px] border-white sm:mx-2 mx-[6px] ",
  };

  return (
    <div className="overflow-x-clip">
      <ShootingStars />
      <StarsBackground />
      <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
          variants={staggerContainer(0.5, 0.25)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth2} mx-auto flex flex-col`}
        >
          <div className="relative z-10 flex flex-col items-center justify-center">
            <motion.div
              variants={textVariant(1.2)}
              className="flex flex-row items-center justify-center text-amber-300"
            >
              <h1 className={`${styles.heroHeading} text-lg`}>
                {" "}
                N &nbsp;A &nbsp;
              </h1>
              <div className={`${styles.heroDText} bg-amber-300 border-4`} />
            </motion.div>
            <motion.h1
              variants={textVariant(1.1)}
              className={`${styles.heroHeading} text-amber-300 pb-10 font-bold`}
            >
              Noted Ad Digital
            </motion.h1>
          </div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="relative w-full lg:-mt-[30px] md:-mt-[18px] -mt-[15px]  2xl:pl-[280px] "
          >
            <Image
              src={Cover}
              alt="cover"
              className="w-full h-[20vh] object-cover object-top rounded-tl-[140px] rounded-bl-[140px] z-10 relative"
            />

            <a href="#explore">
              <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10 2xl:-ml-[100px]">
                <motion.img
                  src={Stamp.src}
                  alt="stamp"
                  className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain "
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 7,
                    repeatType: "loop",
                  }}
                />
              </div>
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          id="explore"
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="flex flex-col my-12 " id="explore">
            <h3 className="text-3xl md:text-8xl p-3 text-white">
              A Digital Powerhouse
            </h3>
            <h3 className="text-3xl md:text-8xl p-3 bg-amber-300 text-gray-900/70 font-bold text-left">
              Fueling the Boldest
            </h3>
            <h3 className="text-3xl md:text-8xl p-3 text-amber-300">
              & Most{" "}
              <span className="font-semibold text-white">Trailblazing</span>
            </h3>
            <h3 className="text-3xl md:text-8xl text-amber-300 p-3 h-full text-left">
              {" "}
              <SparklesText text="Brands" />
            </h3>
          </div>
        </motion.div>

        {/* <h3 className="text-9xl md:text-9xl text-amber-300 p-3 h-full text-left"> <SparklesText text="Brands" /></h3> */}
      </section>
      <HeroBento />
    </div>
  );
}
