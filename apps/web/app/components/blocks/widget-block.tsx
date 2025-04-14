import Image from "next/image";
import MarkdownTextBlockComponent, { MarkdownTextBlock } from "@/components/blocks/markdown-text-block";

export interface WidgetBlock {
  title?: string;
  text?: MarkdownTextBlock;
  img: string;
}

export interface WidgetBlockComponentProps {
  block: WidgetBlock;
}

export default function WidgetBlockComponent({block}: WidgetBlockComponentProps) {
  const {title, text, img} = block;


  return (
    <>
      {title && text && (
        <section
          className="relative flex flex-col w-full"
          data-testid="widget-block"
        >
          <div className="w-[90%] max-w-[90rem] mx-auto">
            {title && (
              <div className="relative text-xl md:text-4xl leading-tight md:leading-[3rem] font-bold text-center text-foreground mb-4 md:mb-8">
                {title}
              </div>
            )}

            <MarkdownTextBlockComponent block={text} />

            {img && (
              <Image
                className="w-full mt-8"
                src={img}
                fill
                alt="Widget illustration"
              />
            )}
          </div>
        </section>
      )}
    </>
  );
}