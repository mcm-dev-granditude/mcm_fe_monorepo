import { FC } from "react";
import { cn } from "@repo/ui";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

export type MarkdownTextBlock = string;

interface MarkdownTextBlockComponentProps {
  block: MarkdownTextBlock;
  className?: string;
}


const MarkdownTextBlockComponent: FC<MarkdownTextBlockComponentProps> = ({className, block}) => {
  if (!block) return null;

  return (
    <section
      className={cn("prose max-w-none dark:prose-invert", className)}
      data-testid="Markdown-text-block"
    >
      <ReactMarkdown
        components={{
          a: ({href, children}) => {
            const isInternal = href?.startsWith("/") || href?.startsWith("#");

            if (isInternal && href) {
              return (
                <Link
                  href={href}
                  className="text-chart-3 hover:underline"
                >
                  {children}
                </Link>
              );
            }

            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {children}
              </a>
            );
          },
          p: ({children}) => {
            return <p className="mb-4">{children}</p>;
          }
        }}
      >
        {block}
      </ReactMarkdown>
    </section>
  );
};

export default MarkdownTextBlockComponent;