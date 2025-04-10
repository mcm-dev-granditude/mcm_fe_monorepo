import Link from "next/link";
import { CardBlock } from "@repo/config/contentful";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types";

export interface CardBlockComponentProps {
  block: CardBlock;
}

export default function CardBlockComponent({block}: CardBlockComponentProps) {
  const {
    title,
    backgroundImage,
    richText
  } = block;

  // Define custom rendering options for rich text
  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <span className="font-bold">{text}</span>
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const {uri} = node.data;
        return (
          <Link
            href={uri || "#"}
            className="text-chart-3  font-medium"
          >
            {children}
          </Link>
        );
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        const containsOnlyHyperlink =
          node.content.length === 1 &&
          node.content[0]?.nodeType === "hyperlink";

        return <p className={`mb-4 ${containsOnlyHyperlink ? "mt-2" : ""}`}>{children}</p>;
      }
    }
  };

  // Convert rich text if it exists
  const richTextContent = richText?.json
    ? documentToReactComponents(richText.json, options)
    : null;

  // Set up background styling
  const imageStyle = backgroundImage?.url
    ? {
      backgroundImage: `url(${backgroundImage.url})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center"
    }
    : {};

  return (
    <div
      className="flex flex-col h-full bg-background rounded-lg  overflow-hidden w-full pb-6 md:max-w-[24rem] mx-auto"
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

        <div className="text-base text-foreground mt-4">
          {richTextContent}
        </div>
      </div>
    </div>
  );
}