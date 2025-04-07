import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { LandingBlockComponentProps } from "@/components/contentful/blocks/landing-block";
import { TextBlockComponentProps } from "@/components/contentful/blocks/text-block";


type BlockComponentProps = {
  LandingBlock: LandingBlockComponentProps;
  TextBlock: TextBlockComponentProps;
  // Add more as needed
};

const blockRegistry: {
  [K in keyof BlockComponentProps]?: ComponentType<BlockComponentProps[K]>;
} = {
  LandingBlock: dynamic(() => import("./landing-block")),
  TextBlock: dynamic(() => import("./text-block"))
  // Add more block components as needed
};

export default blockRegistry;