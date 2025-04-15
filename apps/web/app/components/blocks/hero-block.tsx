import FullWidthSection from "@/components/layout/full-width-section";
import { MarkdownTextBlock } from "@/components/blocks/markdown-text-block";

export interface HeroBlock {
  img: string;
  paragraph: MarkdownTextBlock;
  title: string;
}

export interface HeroBlockComponentProps {
  block: HeroBlock;
}

export default function HeroBlockComponent({block}: HeroBlockComponentProps) {
  const {img, paragraph, title} = block;

  const backgroundStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 80%, rgba(0, 0, 0, 0) 100%), url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <FullWidthSection
      id="hero-section"
      className="relative"
    >
      {img && paragraph && (
        <section
          className="relative flex items-center justify-center w-full h-[50vh]"
          style={backgroundStyle}
          data-testid="hero-block"
        >
          <div className="relative z-20 px-2 md:px-4">
            <h2 className="text-xl md:text-4xl leading-tight uppercase text-center max-w-[44rem] font-bold tracking-tight text-foreground">
              {paragraph}
            </h2>

            {title && (
              <h3 className="mt-4 text-lg md:text-2xl text-center text-foreground">
                {title}
              </h3>
            )}
          </div>
        </section>
      )}
    </FullWidthSection>
  );
}