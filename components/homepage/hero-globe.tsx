import Image from "next/image";
import { AuroraText } from "../magicui/aurora-text";
import { TextAnimate } from "../magicui/text-animate";

export function HeroGlobe() {
  return (
    <div>
      <div className="flex flex-col md:py-10 gap-4 justify-center items-center max-w-7xl mx-auto">
        <TextAnimate
          animation="blurInUp"
          by="character"
          once
          className="text-xl font-bold tracking-tighter md:text-5xl  uppercase text-center text-white/80"
        >
          We Provide Services
        </TextAnimate>
        <AuroraText className="text-xl font-bold tracking-tighter md:text-5xl uppercase text-center">
          Across the Globe
        </AuroraText>
      </div>

      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
        <div className="flex md:flex-row flex-col md:py-10 gap-4 justify-center items-center max-w-7xl mx-auto">
          <TextAnimate
            animation="blurInUp"
            by="character"
            once
            className="text-xl font-bold tracking-tighter md:text-5xl  uppercase text-center text-white/10 md:hidden"
          >
            We Provide Services
          </TextAnimate>
          <AuroraText className="text-xl font-bold tracking-tighter md:text-5xl uppercase text-center sm:text-white/10 md:hidden">
            Across the Globe
          </AuroraText>
        </div>
        <Image
          src="/Images/hero-globe.png"
          alt="hero-globe"
          width={800}
          height={800}
          className="absolute m-32 pt-20 opacity-80 md:mt-96 md:mb-0 md:ml-0 md:mr-0"
        />
      </div>
    </div>
  );
}
