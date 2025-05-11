import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

export function DraggableCardDemo() {
  const items = [
    {
      title: "Digital Marketing",
      image:
        "/Images/DigitalService.jpg",
      className: "invert absolute top-2 left-[15%] rotate-[-5deg] z-10",
    },
    {
      title: "Search Engine Optimization",
      image:
        "/Images/seoService.jpg",
      className: "invert absolute top-60 left-[15%] rotate-[-7deg] z-0",
    },
    {
      title: "App & Software Development",
      image:
        "/Images/developmentService.jpg",
      className: "invert absolute top-32 left-[10%] rotate-[8deg]",
    },
    {
      title: "Social Media Marketing",
      image:
        "/Images/socialMediaService.jpg",
      className: "invert absolute -top-65 left-[40%] rotate-[10deg]",
    },
    {
      title: "Influencer Marketing",
      image:
        "/Images/influencerService.jpg",
      className: "invert absolute -top-20 right-[10%] rotate-[10deg] z-20",
    },
    {
      title: "Content Marketing",
      image:
        "/Images/contentMarketingService.jpg",
      className: "invert absolute top-60 right-[10%] rotate-[-7deg] z-0",
    },
    {
      title: "Video Editing",
      image:
        "/Images/videoEditingService.jpg",
      className: "invert absolute top-32 right-[15%] rotate-[4deg] z-10",
    },
  ];
  return (
    <DraggableCardContainer className="hidden relative lg:flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-400">
        Thats a lot of Services to offer! <br /> But we are not done yet!
      </p>
      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
            width={400}
            height={400}
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
