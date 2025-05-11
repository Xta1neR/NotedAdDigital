"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import { AuroraText } from "@/components/magicui/aurora-text";
import Link from "next/link";
import StarButton from "@/components/ui/star-button";

export function HeroServices() {
  const features = [
    {
      title: "Digital Marketing",
      description:
        "We don't just market — we make your brand magnetic. Targeted, tailored, turbo-charged",
      icon: <IconTerminal2 />,
      link: "/services",
    },
    {
      title: "SEO (Search Engine Optimization)",
      description:
        "We speak fluent Google. Climb rankings, crush keywords, conquer SERPs.",
      icon: <IconEaseInOut />,
      link: "/services/ease-of-use",
    },
    {
      title: "App & Software Development",
      description:
        "Ideas into apps. Concepts into code. We build smooth, sleek, scalable tech magic.",
      icon: <IconCurrencyDollar />,
      link: "/services/pricing",
    },
    {
      title: "Social Media Marketing",
      description: "Memes, reels, and algorithms — we master them all to make your brand the talk of every timeline.",
      icon: <IconCloud />,
      link: "/serviceNAD",
    },
    {
      title: "Influencer Marketing",
      description: "From micro to mega — we link you with voices that actually influence.",
      icon: <IconRouteAltLeft />,
      link: "/services/multi-tenant",
    },
    {
      title: "Content Marketing",
      description:
        "Words that work, visuals that wow. Blogs, captions, and everything in between.",
      icon: <IconHelp />,
      link: "/services/support",
    },
    {
      title: "Podcast Marketing",
      description:
        "Have a voice? Let's amplify it. From strategy to distribution — we've got your audio empire covered.",
      icon: <IconAdjustmentsBolt />,
      link: "/services/guarantee",
    },
    {
      title: "Website Design & Development",
      description: "Clean code, cooler designs. Your online HQ, custom-built for performance.",
      icon: <IconHeart />,
      link: "/services/misc",
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-row md:py-10 gap-4 justify-center items-center max-w-7xl mx-auto">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-xl font-bold tracking-tighter md:text-5xl uppercase text-center text-white/80 "
        >
          Customized
        </TextAnimate>
        <AuroraText className="text-xl font-bold tracking-tighter md:text-5xl uppercase text-center">
          Services
        </AuroraText>
      </div>
      <p className="text-white md:text-2xl text-center">
        Your{" "}
        <span className="font-bold text-amber-300/80">one stop solution</span>{" "}
        for all your needs
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto sm:px-12 px-8 gap-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>

      <div className="mt-4 px-10 z-10 ">
        <Link
          href={'/serviceNAD'}
        >
          <StarButton />
        </Link>
      </div>
    </div>
  );
};
