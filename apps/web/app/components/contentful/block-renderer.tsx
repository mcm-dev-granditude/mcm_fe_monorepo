import { Suspense } from "react";
import { ContentPageBlocksItem } from "@repo/config/contentful";
import blockRegistry from "./blocks/registry";

interface BlockRendererProps {
  blocks?: ContentPageBlocksItem[];
}

export default function BlockRenderer({blocks = []}: BlockRendererProps) {
  if (!blocks || blocks.length === 0) {
    return null;
  }

  return (
    <div className="blocks">
      {blocks.map((block, index) => {
        const blockType = block?.__typename as keyof typeof blockRegistry;

        if (!blockType) {
          console.warn(`Block missing __typename at index ${index}`);
          return null;
        }

        const BlockComponent = blockRegistry[blockType];


        if (!BlockComponent) {
          console.warn(`No component found for block type: ${blockType}`);
          return null;
        }

        const key = block?.sys?.id || `block-${index}`;

        return (
          <Suspense
            key={key}
            fallback={
              <div className="p-4 w-full h-[100vh] flex items-center justify-center">Loading...</div>}
          >
            {/* eslint-disable-next-line */}
            <BlockComponent block={block as any} />
          </Suspense>
        );
      })}
    </div>
  );
}