import MarkdownTextBlockComponent from "./markdown-text-block";
import { cn } from "@repo/ui";
import { CardItemBlock } from "@repo/content";


export interface CardBlockComponentProps {
  block: CardItemBlock;
  className?: string;
}

export default function CardBlockComponent({block, className}: CardBlockComponentProps) {
  const {
    title,
    img,
    markdown
  } = block;

  const imageStyle = img
    ? {
      backgroundImage: `url(${img})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }
    : {};

  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background rounded-lg  overflow-hidden w-full pb-6 md:max-w-[24rem] mx-auto",
        className
      )}
      data-testid="card-block"
    >
      <div
        className="w-full h-60 relative rounded-lg"
        style={imageStyle}
      />
      <div className="p-6 px-10 pb-10 flex flex-col flex-grow shadow-lg w-[90%] mx-auto mt-[-40px] z-10 rounded-lg bg-background dark:bg-surface">
        <h3 className="text-2xl font-bold mb-6 text-center relative">
          {title}
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12px] w-12 h-1 bg-primary" />
        </h3>

        <MarkdownTextBlockComponent block={markdown} />
      </div>
    </div>
  );
}