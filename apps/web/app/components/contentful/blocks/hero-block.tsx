import { HeroBlock } from "@repo/config/contentful";
import FullWidthSection from "@/components/layout/full-width-section";

export interface HeroBlockComponentProps {
  block: HeroBlock;
}

export default function HeroBlockComponent({block}: HeroBlockComponentProps) {
  const {image, paragraph, opacity, title} = block;

  let backgroundStyle = {};
  let opacityOverlay = null;

  if (image?.url) {
    if (opacity === 0 || (opacity && opacity > 0 && opacity <= 100)) {
      backgroundStyle = {
        backgroundImage: `url(${image.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      };

      opacityOverlay = (
        <div
          className="absolute inset-0 z-10"
          style={{backgroundColor: `rgba(0, 0, 0, ${opacity / 100})`}}
        />
      );
    } else {
      backgroundStyle = {
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%), url(${image.url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      };
    }
  }

  return (
    <FullWidthSection
      id="hero-section"
      className="relative"
    >
      {image?.url && paragraph && (
        <section
          className="relative flex items-center justify-center w-full h-[50vh]"
          style={backgroundStyle}
          data-testid="hero-block"
        >
          {opacityOverlay}

          <div className="relative z-20">
            <h2 className="text-xl md:text-4xl leading-tight uppercase text-center max-w-[44rem] font-bold tracking-tight">
              {paragraph}
            </h2>

            {title && (
              <h3 className="mt-4 text-lg md:text-2xl text-center">
                {title}
              </h3>
            )}
          </div>
        </section>
      )}
    </FullWidthSection>
  );
}