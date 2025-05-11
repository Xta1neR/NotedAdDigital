import React from "react";
import Image from "next/image";
const CreativeExcellence = () => {
  return (
    <div className="mx-auto mt-10 rounded-lg overflow-hidden relative bg-[#3e2e7e];">
      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* <!-- Left top logo --> */}
        <div className="col-span-1 flex items-start">
          <svg
            className="stroke-[rgba(255,255,255,0.3)]"
            fill="none"
            height="24"
            viewBox="0 0 56 24"
            width="56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="8"
              cy="12"
              r="7.5"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            ></circle>
            <circle
              cx="24"
              cy="12"
              r="7.5"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            ></circle>
            <circle
              cx="40"
              cy="12"
              r="7.5"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
            ></circle>
          </svg>
        </div>
        {/* <!-- Left top text --> */}
        <div className="col-span-5 flex flex-col justify-center space-y-1">
          <div className="text-white text-[32px] leading-[36px] font-semibold flex flex-wrap max-w-[280px]">
            <span>YOUR</span>
            <span className="ml-1">JOURNEY</span>
            <span className="ml-1">TO</span>
            <span className="ml-1 text-[rgba(255,255,255,0.5)]">CREATIVE</span>
            <span className="ml-1 text-[rgba(255,255,255,0.5)]">
              EXCELLENCE.
            </span>
            <span className="text-[#f04e00] ml-2 font-bold text-[32px] leading-[36px]">
              *
            </span>
          </div>
          <div className="text-[14px] text-[rgba(255,255,255,0.5)] mt-6">
            Noted Ad Digital
            <br />
          </div>
        </div>
        {/* <!-- Right top content --> */}
        <div className="col-span-6 flex flex-col space-y-4">
          <div className="relative rounded-lg overflow-hidden">
            <Image
              alt="Light gray background with white wavy lines"
              className="w-3/4 h-auto rounded-lg invert"
              height={180}
              src="https://storage.googleapis.com/a1aa/image/1c8a5afa-95d0-44bd-eabd-df56d4c51cdb.jpg"
              width={400}
            />
            <div className="absolute bottom-3 left-3 flex space-x-2">
              <button className="bg-[#f04e00] text-white text-[10px] font-semibold rounded-full px-3 py-1">
                Work Life
              </button>
              <button className="bg-[#3e2e7e] text-white text-[10px] font-semibold rounded-full px-3 py-1">
                Pranks
              </button>
              <button className="bg-[rgba(255,255,255,0.3)] text-white text-[10px] font-semibold rounded-full px-3 py-1">
                Culture
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[64px] font-bold text-[rgba(255,255,255,0.5)] font-anton leading-none">
              100+
            </span>
            <div className="bg-[#f04e00] text-white text-[10px] font-semibold rounded-lg px-3 py-2 uppercase max-w-[160px]">
              Brands Boosted
            </div>
          </div>
          <p className="text-[10px] text-[rgba(255,255,255,0.5)] uppercase max-w-[400px] leading-tight">
            {/* WE THRIVE ON THE CHALLENGE OF TURNING IDEAS INTO REALITY, BLENDING
            CUTTING-EDGE TECHNOLOGY WITH ARTISTIC FLAIR TO PRODUCE TRULY
            REMARKABLE WORK. FROM VISUALLY STUNNING DESIGNS TO IMMERSIVE
            INTERACTIVE EXPERIENCES. */}
          </p>
        </div>
        {/* <!-- Bottom large text and button --> */}
        <div className="col-span-12 flex items-center justify-between bg-yellow-400/80 px-6 py-4 mt-6 rounded-b-lg">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center"></div>
            <span className="text-white font-anton text-[48px] leading-[48px] tracking-tight">
              Want to know what makes us different ?
            </span>
          </div>
          <button className="flex items-center space-x-4 border-4 border-white rounded-full bg-[#3e2e7e] px-8 py-3 text-white font-semibold text-[16px] tracking-widest max-w-full cursor-pointer">
            <span>Explore Now</span>
            <span className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-[#3e2e7e] text-xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/* <!-- Large faint text behind --> */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex justify-center items-center pointer-events-none select-none top-20 translate-y-20"
      >
        <span className="font-anton text-[220px] text-[rgba(255,255,255,0.15)] leading-none whitespace-nowrap">
          Life at NAD
        </span>
      </div>
    </div>
  );
};

export default CreativeExcellence;
