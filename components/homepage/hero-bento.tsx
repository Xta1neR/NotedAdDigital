import React from "react";
import Rocket from "@/public/Rocket.png";
import Connect from "@/public/Connect.png";
import Image from "next/image";
import { SparklesText } from "../magicui/sparkles-text";

const HeroBento = () => {
  return (
    <div className="grid grid-cols-10 gap-4 p-4 w-full lg:w-11/12 mx-auto mt-10 mb-10">
      {/* Desktop & Tablet View */}
      {/* First Row */}
      <div className="hidden md:block col-span-3 md:col-span-3 p-4 bg-blue-500/60 rounded-2xl">
        <Image
          src={Rocket}
          alt="Rocket"
          className="w-full h-full rounded-2xl "
          width={400}
          height={400}
        />
      </div>
      <div className="hidden md:block col-span-4 md:col-span-4 bg-red-500/50 rounded-4xl p-4">
        <h3 className="text-3xl font-extrabold tracking-widest text-white/70 py-20 md:text-5xl text-center my-auto mx-auto ">
          We are a perfect{" "}
          <SparklesText text="MATCH" className="text-yellow-300" /> if You are
        </h3>
      </div>
      <div className="hidden md:block col-span-3 md:col-span-3 p-4 bg-amber-400/60 rounded-2xl ">
        <Image
          src={Connect}
          alt="Connect"
          className="w-full h-full rounded-2xl scale-x-[-1]"
          width={500}
          height={500}
        />
      </div>

      {/* Second Row */}
      <div className="hidden md:block col-span-4 md:col-span-4 bg-yellow-300/70 rounded-2xl p-4">
        <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          An Ambitious Startup
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Whether bootstrapped or funded, we scale your brand from zero to
            hero
          </p>
        </h4>
      </div>
      <div className="hidden md:block col-span-6 md:col-span-6 bg-purple-500/70 rounded-2xl p-4">
        <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          Personal Brands & Influencers
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Elevate your online presence with a standout digital identity
          </p>
        </h4>
      </div>

      {/* Third Row */}
      <div className="hidden md:block col-span-6 md:col-span-6 bg-pink-500/70 rounded-2xl p-4">
        <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          Legacy Brands
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Modernize and dominate the digital space with a bold new strategy.
          </p>
        </h4>
      </div>
      <div className="hidden md:block col-span-4 md:col-span-4 bg-gray-500/70 rounded-2xl p-4">
        <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          Creative-First Businesses
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Need killer branding, ads, or content? We bring the magic.
          </p>
        </h4>
      </div>

      {/* Mobile View (Reordering using flex and order utilities) */}

      <div className="col-span-10 md:hidden bg-purple-500/50 rounded-4xl p-4 order-1">
        <h3 className="text-3xl font-extrabold tracking-widest text-white/70 py-20 md:text-5xl text-center my-auto mx-auto ">
          We are a perfect{" "}
          <SparklesText text="MATCH" className="text-yellow-300" /> if You are
        </h3>
      </div>
      <div className="col-span-5 md:hidden bg-blue-500/60 rounded-2xl p-4 order-2">
        <Image
          src={Rocket}
          alt="Rocket"
          className="w-full h-full rounded-2xl "
          width={400}
          height={400}
        />
      </div>
      <div className="col-span-5 md:hidden bg-amber-400/60 rounded-2xl p-4 order-3">
        <Image
          src={Connect}
          alt="Connect"
          className="w-full h-full rounded-2xl scale-x-[-1]"
          width={500}
          height={500}
        />
      </div>
      <div className="col-span-10 md:hidden bg-red-500/70 rounded-2xl p-4 order-4">
        <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          An Ambitious Startup
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Whether bootstrapped or funded, we scale your brand from zero to
            hero
          </p>
        </h4>
      </div>
      <div className="col-span-10 md:hidden bg-yellow-500/70 rounded-2xl p-4 order-5">
        <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          Personal Brands & Influencers
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Elevate your online presence with a standout digital identity
          </p>
        </h4>
      </div>
      <div className="col-span-10 md:hidden bg-pink-500/70 rounded-2xl p-4 order-6">
      <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          Legacy Brands
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Modernize and dominate the digital space with a bold new strategy.
          </p>
        </h4>
      </div>
      <div className="col-span-10 md:hidden bg-gray-500/70 rounded-2xl p-4 order-7">
      <h4 className="text-2xl font-extrabold tracking-wide text-black/80 py-20 md:text-4xl text-center my-auto mx-auto ">
          Creative-First Businesses
          <p className="text-lg font-semibold tracking-widest text-white pt-5 md:text-3xl text-center my-auto mx-auto">
            Need killer branding, ads, or content? We bring the magic.
          </p>
        </h4>
      </div>
    </div>
  );
};

export default HeroBento;
