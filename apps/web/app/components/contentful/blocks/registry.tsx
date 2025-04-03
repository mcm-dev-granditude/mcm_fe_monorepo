// components/BlockRegistry.ts
import dynamic from "next/dynamic";
import { ContentfulComponent } from "@repo/config";

/**
 * Registry of all block components
 * - Keys are Contentful content type IDs
 * - Values are dynamic imports of React components
 */
const blockComponents: Record<string, ContentfulComponent> = {
  landingBlock: dynamic(() => import("./landing-block")),
  textBlock: dynamic(() => import("./text-block"))
  // Add more block types as needed
};

export default blockComponents;