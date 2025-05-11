import React from "react";
import Image from "next/image";

const CreativeExcellenceMobile = () => {
  return (
    <div className="max-w-[1024px] mx-auto my-5 md:my-10 px-4 md:px-0 z-0">
      {/* Main Container */}
      <div className="relative rounded-xl md:rounded-2xl overflow-hidden p-6 md:p-10">
        
        {/* Background Decoration (Mobile-optimized) */}
        <div 
          aria-hidden="true" 
          className="absolute mx-auto p-5 top-[35%] opacity-50 z-10"
        >
          <span className="font-anton text-[80px] md:text-[150px] text-white leading-none text-center ">
            Contact Us
          </span>
        </div>

        {/* Logo & Main Headline */}
        <div className="flex items-start mb-6 md:mb-10">
          {/* Logo SVG (simplified for mobile) */}
          <div className="mr-4">
            <svg
              className="stroke-white opacity-30"
              fill="none"
              height="24"
              viewBox="0 0 56 24"
              width="36" // Smaller on mobile
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="12" r="7.5" strokeWidth="1"></circle>
              <circle cx="24" cy="12" r="7.5" strokeWidth="1"></circle>
              <circle cx="40" cy="12" r="7.5" strokeWidth="1"></circle>
            </svg>
          </div>
          
          {/* Headline (stacked on mobile) */}
          <div>
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight">
              <span className="block uppercase">We are </span>
              <span className="block uppercase">Just</span>
              <span className="text-[#f04e00] uppercase">Few Clicks away</span>
            </h1>
            <p className="text-white opacity-50 text-sm mt-2">Noted Ad Digital</p>
          </div>
        </div>

        {/* Content Grid (stacked on mobile) */}
        <div className="flex flex-col md:flex-row gap-6 mb-6 md:mb-10">
          {/* Image Card (full width on mobile) */}
          <div className="relative rounded-lg overflow-hidden border border-white/15 w-full">
            <Image
              alt="Creative work example"
              className="w-full h-auto invert z-0"
              height={180}
              src="https://storage.googleapis.com/a1aa/image/1c8a5afa-95d0-44bd-eabd-df56d4c51cdb.jpg"
              width={400}
            />
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              {['Work Life', 'Pranks', 'Culture'].map((tag, i) => (
                <button 
                  key={i}
                  className={`text-xs font-semibold rounded-full px-3 py-1 ${
                    i === 0 ? 'bg-[#f04e00]' : 
                    i === 1 ? 'bg-[#3e2e7e]' : 'bg-white/30'
                  } text-white`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Social Proof (full width on mobile) */}
          
        </div>

        {/* CTA Section (stacked on mobile) */}
        <div className="flex flex-col md:flex-row mx-auto items-center justify-between bg-yellow-400/80 px-4 md:px-6 py-4 rounded-lg gap-4">
          <div className="flex items-center">
            <span className="text-white font-anton text-3xl tracking-wider leading-none mx-auto">
              Got a project? A wild idea? Or just want to say hi?
            </span>
          </div>
          
          <button
            className="flex items-center gap-2 border-2 md:border-4 border-white rounded-full bg-[#3e2e7e] px-4 md:px-6 py-2 md:py-3 text-white font-semibold text-sm md:text-base"
          >
            <span className="uppercase">Explore Now</span>
            <span className="bg-yellow-400 rounded-full w-6 h-6 md:w-8 md:h-8 flex items-center justify-center text-[#3e2e7e]">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreativeExcellenceMobile;