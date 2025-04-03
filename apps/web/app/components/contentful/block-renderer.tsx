import { Suspense } from "react";
import blockComponents from "./blocks/registry";

interface ContentfulBlock {
  id: string;
  contentType: string;
  rawData: any;
}

interface BlockRendererProps {
  blocks: ContentfulBlock[];
}

export default function BlockRenderer({blocks}: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="blocks">
      {blocks.map((block) => {
        const BlockComponent = blockComponents[block.contentType];

        if (!BlockComponent) {
          console.warn(`No component found for block type: ${block.contentType}`);
          return null;
        }

        return (
          <Suspense
            key={block.id}
            fallback={<div className="p-4">Loading block...</div>}
          >
            <BlockComponent blockData={block.rawData} />
          </Suspense>
        );
      })}
    </div>
  );
}