import React from "react";
import HeroVideoDialog from "../magicui/hero-video-dialog";

const HeroVideo = () => {
  return (
    <div className="md:w-4/5 mx-auto border-b-5 border-l-5 border-r-5 p-5 border-amber-300/50 rounded-b-2xl">
      <h4 className="text-center text-3xl font-bold py-10">
        <span className="text-sky-300">Know Our </span>
        <span className="text-white">Vision</span>
      </h4>
      <div className="relative w-full mx-auto ">
        <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/bPLY8QyBlBE"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
};

export default HeroVideo;
