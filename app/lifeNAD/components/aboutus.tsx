import Image from "next/image";
import React from "react";

const AboutUsFirst = () => {
  return (
    <section className=" text-yellow-400 min-h-screen flex flex-col items-center p-6 my-20">
      <header className="max-w-xl w-full text-center mt-10 px-4">
        <h1 className="text-[2rem] md:text-[5rem] leading-[1.1] font-bold tracking-tight">
          EFFICIENT SINCE THE BEGINING
        </h1>
      </header>
      <main className="max-w-8xl w-full flex flex-col md:flex-row items-center md:items-start justify-center gap-12 mt-20 px-4">
        <section className="flex flex-col items-start max-w-xl md:max-w-md">
          <div className="flex items-center gap-6 mb-6">
            <svg viewBox="0 0 24 24" width="120" height="120" fill="#4285F4">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
            </svg>
            <h3 className="font-bold text-lg md:text-xl text-amber-300">
              Who We Are <br /> (Other Than Awesome)
            </h3>
          </div>
          <blockquote className="text-white text-lg md:text-2xl tracking-wide leading-relaxed relative pl-10">
            <svg
              aria-hidden="true"
              className="absolute left-0 top-0 w-12 h-12 opacity-10"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              viewBox="0 0 24 24"
            >
              <path d="M9 19H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h4v10zm11-10h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4V9z"></path>
            </svg>
            We are Noted ad Digital — part mad scientists, part digital wizards,
            and full-time creative chaos lovers. We turn ideas into
            scroll-stopping, client-wowing, ROI-boosting digital stories. No
            boring boardroom vibes here — think more memes, brainstorms over
            biryani, and whiteboards full of “Wait, what if we tried this…”<br /><strong className="font-bold text-amber-200"> We are not your typical agency. We are the ones who: </strong>
           <br /> • Speak fluent
            algorithm AND sarcasm. <br />• Turn “Umm, I have an idea…” into “WOAH,
            thats brilliant!” <br /> • Believe deadlines are sacred (but dance breaks
            are too). 
          </blockquote>
        </section>
        <section className="max-w-xl w-full rounded-3xl overflow-hidden shadow-lg">
          <div className="relative w-full">
            <Image
              alt="Man with beard wearing mustard shirt working on laptop at a white desk with plants and a glowing lamp in a modern room"
              className="w-full h-full object-cover rounded-3xl"
              height="450"
              src="/about1img.webp"
              width="800"
            />
          </div>
        </section>
      </main>
    </section>
  );
};

export default AboutUsFirst;
