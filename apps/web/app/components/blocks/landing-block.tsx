import Link from "next/link";
import { Button } from "@/components/ui/button";
import FullWidthSection from "@/components/layout/full-width-section";
import { LandingBlock } from "@repo/content";

export interface LandingBlockComponentProps {
  block: LandingBlock;
}

export default function LandingBlockComponent({block}: LandingBlockComponentProps) {
  const {title, img, btn} = block;

  return (
    <FullWidthSection
      id="fw-section"
      className="bg-primary"
    >
      <div
        className="flex flex-col justify-center items-center w-full h-[70vh] md:h-[80vh] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4)), url(${img.url || ""})`
        }}
      >
        <h2 className="w-[90%] max-w-[44rem] mx-auto my-8 text-2xl md:text-4xl leading-tight md:leading-[4.875rem] -tracking-[0.04rem] font-bold text-center text-white z-10">
          {title}
        </h2>

        <div className="flex items-center justify-center">
          <Button
            asChild
            variant="mcm-main"
            size="no-size"
          >
            <Link
              href={btn?.url || ""}
            >
              {btn.text}
            </Link>
          </Button>
        </div>
      </div>
    </FullWidthSection>
  );
}