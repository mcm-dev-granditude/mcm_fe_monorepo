import { cn } from "@repo/ui";
import MarkdownTextBlockComponent, { MarkdownTextBlock } from "@/components/blocks/markdown-text-block";

export interface TextBlock {
  title: string;
  preamble: string;
  text?: MarkdownTextBlock;
}

export interface TextBlockComponentProps {
  block: TextBlock;
  className?: string;
}

export default function TextBlockComponent({block, className}: TextBlockComponentProps) {
  const {title, preamble, text} = block;

  return (
    <section
      className={cn("w-full px-4 py-8 md:py-12", className)}
      data-testid="text-block"
    >
      <div className="max-w-4xl mx-auto text-foreground">
        {title && (
          <div className="flex flex-col items-center">
            <h2 className={`text-2xl md:text-xl font-bold mb-3 text-center`}>
              {title}
            </h2>
            <div className="border-b-4 border-primary w-[20%] mb-8" />
          </div>
        )}

        {preamble && (
          <div className={`text-lg font-medium mb-6 text-center`}>
            {preamble}
          </div>
        )}

        {text && (
          <MarkdownTextBlockComponent block={text} />
        )}
      </div>
    </section>
  );
}