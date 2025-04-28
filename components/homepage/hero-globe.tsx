import { AuroraText } from "../magicui/aurora-text";
import { Globe } from "../magicui/globe";
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

        <Globe className="absolute mb-20" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div>
    </div>
  );
}
