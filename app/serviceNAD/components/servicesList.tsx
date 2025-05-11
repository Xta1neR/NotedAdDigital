import Image from "next/image";
import React from "react";

const ServicesList = () => {
  const services = [
    {
      index: "01",
      title: "Digital Marketing",
      description:
        "We don't just market — we make your brand magnetic. Targeted, tailored, turbo-charged.",
    },
    {
      index: "02",
      title: "SEO (Search Engine Optimization)",
      description:
        "We speak fluent Google. Climb rankings, crush keywords, conquer SERPs.",
    },
    {
      index: "03",
      title: "App & Software Development",
      description:
        "Ideas into apps. Concepts into code. We build smooth, sleek, scalable tech magic.",
    },
    {
      index: "04",
      title: "Social Media Marketing",
      description:
        "Memes, reels, and algorithms — we master them all to make your brand the talk of every timeline.",
    },
    {
      index: "05",
      title: "Influencer Marketing",
      description:
        "From micro to mega — we link you with voices that actually influence.",
    },
    {
      index: "06",
      title: "Content Marketing",
      description:
        "Words that work, visuals that wow. Blogs, captions, and everything in between.",
    },
    {
      index: "07",
      title: "Video Editing",
      description:
        "Snappy edits, cinematic vibes, viral-worthy cuts. Let your content roll in style.",
    },
    {
      index: "08",
      title: "Podcast Marketing",
      description:
        "Have a voice? Let’s amplify it. From strategy to distribution — we’ve got your audio empire covered.",
    },
    {
      index: "09",
      title: "E-commerce Marketing",
      description:
        "Clicks to carts, carts to conversions. We optimize every digital shelf.",
    },
    {
      index: "10",
      title: "Radio Advertising",
      description:
        "Old-school charm, new-age targeting. Radio still rocks, and we know how to use it.",
    },
    {
      index: "11",
      title: "Print Media Advertising",
      description:
        "Offline isn’t outdated. Smart print campaigns that complement your digital game.",
    },
    {
      index: "12",
      title: "Website Design & Development",
      description:
        "Clean code, cooler designs. Your online HQ, custom-built for performance.",
    },
    {
      index: "13",
      title: "Branding & Creative Services",
      description:
        "Logo to language, colors to campaigns — we give your brand a voice and vibe that sticks.",
    },
    {
      index: "14",
      title: "PPC Advertising",
      description:
        "Get noticed fast. Paid ads with precision, performance, and power-packed ROI.",
    },
  ];

  return (
    <section className="bg-[#111010] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-white/70 text-md md:text-2xl max-w-2xl mx-auto">
          Welcome to our digital playground — where big ideas meet even bigger
          results. We offer a powerhouse of services to help your brand glow up,
          show up, and blow up online.
        </p>
      </div>

      <div className="space-y-16 w-[95%] mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-3xl shadow-xl p-6 md:p-10 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center space-x-4">
                <div className="text-[#D9FF1F] text-2xl md:text-3xl font-bold tracking-tight select-none">
                  {service.index}
                </div>
                <h3 className="text-white font-bold text-2xl md:text-3xl">
                  {service.title}
                </h3>
              </div>
              <button
                aria-label="Target icon button"
                className="bg-[#D9FF1F] rounded-full w-12 h-12 flex items-center justify-center hover:rotate-6 hover:scale-105 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </button>
            </div>

            <div className="mt-6 text-white/90 text-lg md:text-2xl leading-relaxed">
              {service.description}
            </div>

            {/* Optional: highlight tags or CTA */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-[#D9FF1F]/10 text-[#D9FF1F] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Marketing
              </span>
              <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                Strategy
              </span>
            </div>
          </div>
        ))}
        <div className="mt-20 text-center relative max-w-4xl mx-auto px-4 py-12 bg-gradient-to-br from-[#1f1f1f] to-[#2b2b2b] rounded-3xl shadow-2xl overflow-hidden">
          {/* Decorative Image */}
          <Image
            src=""
            alt=""
            className="absolute -top-10 right-6 w-32 h-32 object-cover rounded-full border-4 border-[#D9FF1F] shadow-xl hidden sm:block"
            width={128}
            height={128}
          />

          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Not Sure What You Need?
          </h3>
          <p className="text-white/80 text-md md:text-lg leading-relaxed max-w-xl mx-auto">
            Do not worry — we love mixing and matching. Lets build a custom
            strategy that fits you like your favorite hoodie{" "} <hr className="my-4 opacity-35" />
            <span className="text-[#D9FF1F] font-semibold">
              (but with way more clicks)
            </span>
            .
          </p>

          {/* Optional Call to Action */}
          <div className="mt-8">
            <a href="/Contact">
            <button className="bg-[#D9FF1F] text-black px-6 py-3 rounded-full font-medium shadow-md hover:scale-105 transition-transform">
              Lets Talk Strategy
            </button></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
