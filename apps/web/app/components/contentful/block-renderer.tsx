// src/components/contentful/block-renderer.tsx
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
        // Make sure __typename exists and is a valid key in our registry
        const blockType = block?.__typename as keyof typeof blockRegistry;

        console.log("Block in blockrenderer: ", block);

        if (!blockType) {
          console.warn(`Block missing __typename at index ${index}`);
          return null;
        }

        const BlockComponent = blockRegistry[blockType];


        if (!BlockComponent) {
          console.warn(`No component found for block type: ${blockType}`);
          return null;
        }

        // Use sys.id for the key if available, fall back to index
        const key = block?.sys?.id || `block-${index}`;

        return (
          <Suspense
            key={key}
            fallback={<div className="p-4">Loading block...</div>}
          >
            <BlockComponent block={block as any} />
          </Suspense>
        );
      })}
    </div>
  );
}