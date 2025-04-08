import { WidgetBlock } from "@repo/config/contentful";
import Image from "next/image";

export interface WidgetBlockComponentProps {
  block: WidgetBlock;
}

export default function WidgetBlockComponent({block}: WidgetBlockComponentProps) {
  const {title, text, image, addRedBoxToTitle} = block;

  const firstTitleWord = title ? title.split(" ")[0] : "";
  const restTitle = title ? title.split(" ").slice(1).join(" ") : "";

  // Process the text content
  const renderText = () => {
    if (!text) return null;

    return text.split("\n\n").map((paragraph, index) => (
      <p
        key={index}
        className="mb-4 last:mb-0"
      >
        {paragraph.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < paragraph.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
  };

  return (
    <>
      {title && text && (
        <section
          className="relative flex flex-col w-full"
          data-testid="widget-block"
        >
          <div className="w-[90%] max-w-[90rem] mx-auto">
            {title && !addRedBoxToTitle && (
              <div className="relative text-xl md:text-4xl leading-tight md:leading-[3rem] font-bold text-center text-foreground mb-4 md:mb-8">
                {title}
              </div>
            )}

            {title && addRedBoxToTitle && (
              <div className="relative text-xl md:text-4xl leading-tight md:leading-[3rem] font-bold text-center text-foreground mb-4 md:mb-8">
                <span className="bg-primary mr-2 py-1 px-2 text-white uppercase rounded-sm">
                  {firstTitleWord}
                </span>
                <span>{restTitle}</span>
              </div>
            )}

            <div className="max-w-[44rem] mx-auto text-center prose">
              {renderText()}
            </div>

            {image?.url && (
              <Image
                className="w-full mt-8"
                src={image.url}
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