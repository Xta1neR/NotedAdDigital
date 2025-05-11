import React from "react";
import Image from "next/image";

const InfoLife = () => {
  return (
    <div className="p-6 sm:p-10 md:p-16">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-white text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] font-extrabold leading-[1.1] mb-12 relative inline-block">
          We Help You to Launch
          <br />
          Your Ideas 🚀
          <span
            aria-hidden="true"
            className="absolute -top-3 right-[-3.5rem] w-20 h-20 bg-[#f97316] rounded-full z-[-1]"
          ></span>
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* <!-- 1st image --> */}
          <div className="rounded-lg overflow-hidden">
            <Image
              alt="Man recording video with camera on tripod and smartphone in yellow background"
              className="w-full h-full object-cover"
              height="300"
              src="/img1Life.png"
              width="400"
            />
          </div>
          {/* <!-- 1st text block --> */}
          <div className="bg-[#fcd9c3] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-2 leading-tight">
                We do not believe in 9-to-5 clichés. We believe in
                problem-solving, late-night ideas, and coffee-fueled
                breakthroughs. Our team does not clock in — we lock in.
              </h2>
              <p className="text-md leading-snug mb-4 text-[#4a4a4a]">
                • Missions are never aborted; they are accomplished. <br />
                • We do not just hustle, we strategize. <br />• Creativity is
                our habit, not a job description.
              </p>
            </div>
          </div>
          {/* <!-- 2nd image --> */}
          <div className="rounded-lg overflow-hidden">
            <Image
              alt="Camera on tripod with microphone and woman blurred in background"
              className="w-full h-full object-cover"
              height="300"
              src="/img2Life.png"
              width="400"
            />
          </div>
          {/* <!-- 2nd text block --> */}
          <div className="bg-[#f7f8f7] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-2 leading-tight">
                Yes, we work hard — but we meme harder. From casual chaos in the
                break room to spontaneous dance battles, our teams vibe is
                anything but corporate.
              </h2>
              <p className="text-md leading-snug mb-4 text-[#4a4a4a]">
                • Say one funny thing and you all be on a sticker. <br />
                • Office party bloopers? Immortalized. <br />• You walk in
                quiet. You leave quirky.
              </p>
            </div>
          </div>
          {/* <!-- 3rd text block --> */}
          <div className="bg-[#f7f8f7] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-2 leading-tight">
                We do not skip meals. We create them.
              </h2>
              <p className="text-md leading-snug mb-4 text-[#4a4a4a]">
                • Breakfast? Brainstorming. <br />
                • Lunch? Launch planning. <br />• Snacks? Strategy sessions.
              </p>
              <h2 className="font-semibold text-lg mb-2 leading-tight">
                Some agencies offer free coffee. We offer a full-course
                experience.
              </h2>
            </div>
          </div>
          {/* <!-- 3rd image --> */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img3Life.png"
              alt="Smiling man with ring light and makeup products on table"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          {/* <!-- 4th text block --> */}
          <div className="bg-[#fcd9c3] rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h2 className="font-semibold text-lg mb-2 leading-tight">
                Culture is not just talked about, its worn.
              </h2>
              <p className="text-md leading-snug mb-4 text-[#4a4a4a]">
                • From customized tees to slick visiting cards — we drop 4+
                fresh branded accessories every year. <br />• Got a meeting with
                us? You are leaving with a mug.
              </p>
              <h2 className="font-semibold text-lg mb-2 leading-tight">
                Want one? Hit us up. We’ll ship some NAD love your way.
              </h2>
            </div>
            
          </div>
          {/* <!-- 4th image --> */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img4Life.png"
              alt="Young man giving thumbs up in front of camera setup with tripod and glasses on table"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
        </section>
      </section>
    </div>
  );
};

export default InfoLife;
