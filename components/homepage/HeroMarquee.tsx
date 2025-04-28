"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";
import { Testimonial } from "./testimonials";

export function HeroMarquee() {
  return (
    <div className="mx-auto my-10 max-w-full rounded-3xl p-2 ring-1 ">
      <div className="flex sm:flex-row items-center justify-center text-center md:py-10 gap-4 m-5">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-xl font-bold tracking-tighter md:text-5xl uppercase text-center text-white/80 "
        >
          Let our work
        </TextAnimate>
        <AuroraText className="text-xl font-bold tracking-tighter md:text-5xl uppercase text-center">
          Speak
        </AuroraText>
      </div>

      {/* --------------- Achievements ------------------- */}
      <section>
        
      </section>

      {/* -------------- Awards --------------- */}
      <section className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden">
        {/* Background Trophy Image */}
        <div className="absolute inset-0 opacity-40">
          <Image src="/awards_bg.jpg" alt="Golden Trophy" width={1000} height={1000} className="object-cover"/>
        </div>

        {/* Main Content */}
        <main className="relative z-10 max-w-[1200px] w-full flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-0">
          {/* Left Section */}
          <section className="flex flex-col gap-6 md:max-w-[480px]">
            <div className="flex items-center gap-2 text-[14px] font-semibold tracking-widest uppercase text-red-500">
              <span>\\</span>
              <span className="text-gray-200">Awards</span>
            </div>
            <h1 className="text-[48px] font-extrabold leading-[1.1] text-gray-200 max-w-[480px] hover:text-amber-300 transition-colors duration-300">
              We are honored
            </h1>
            <h2 className="text-[36px] font-normal leading-[1.1] text-gray-200 max-w-[480px] hover:text-amber-300 transition-colors duration-300">
              with amazing awards
            </h2>
          </section>

          {/* Right Section */}
          <section className="flex flex-col gap-8 md:max-w-[600px] w-full">
            {/* Award item 1 */}
            <article className="flex items-center border border-gray-400 rounded-full px-8 py-6 gap-6 hover:text-amber-300 transition-colors duration-300">
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-[20px] font-semibold text-gray-200 leading-tight">
                Top Digital Disruptor - 2024
                </h3>
                <div className="flex gap-3">
                  <button
                    className="text-[12px] font-semibold text-gray-200 border border-gray-400 rounded-full px-3 py-1"
                    type="button"
                  >
                    Nominated
                  </button>
                  <button
                    className="text-[12px] font-semibold text-gray-200 border border-gray-400 rounded-full px-3 py-1"
                    type="button"
                  >
                    Winner
                  </button>
                </div>
              </div>
              <button
                aria-label="Go to award details"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-gray-700 transition"
                type="button"
              >
                🎗️
              </button>
            </article>

            {/* Award item 2 */}
            <article className="flex items-center border border-gray-400 rounded-full px-8 py-6 gap-6 hover:text-amber-300 transition-colors duration-300">
              
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-[20px] font-semibold text-gray-200 leading-tight">
                Best Social Media Marketing Agency
                </h3>
                <div className="flex gap-3">
                  <button
                    className="text-[12px] font-semibold text-gray-200 border border-gray-400 rounded-full px-3 py-1"
                    type="button"
                  >
                    Nominated
                  </button>
                  <button
                    className="text-[12px] font-semibold text-gray-200 border border-gray-400 rounded-full px-3 py-1"
                    type="button"
                  >
                    Winner
                  </button>
                </div>
              </div>
              <button
                aria-label="Go to award details"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-gray-700 transition"
                type="button"
              >
                🏆
              </button>
            </article>

            {/* Award item 3 */}
            <article className="flex items-center border border-gray-400 rounded-full px-8 py-6 gap-6 hover:text-amber-300 transition-colors duration-300">
              
              <div className="flex-1 flex flex-col gap-3">
                <h3 className="text-[20px] font-semibold text-gray-200 leading-tight">
                Branding Brilliance Award
                </h3>
                <div className="flex gap-3">
                  <button
                    className="text-[12px] font-semibold text-gray-200 border border-gray-400 rounded-full px-3 py-1"
                    type="button"
                  >
                    Nominated
                  </button>
                  <button
                    className="text-[12px] font-semibold text-gray-200 border border-gray-400 rounded-full px-3 py-1"
                    type="button"
                  >
                    Winner
                  </button>
                </div>
              </div>
              <button
                aria-label="Go to award details"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-white hover:bg-gray-700 transition"
                type="button"
              >
                🥇
              </button>
            </article>
          </section>
        </main>
      </section>

      {/* -------------- Testimonials --------------- */}
      <Testimonial />
    </div>
  );
}
