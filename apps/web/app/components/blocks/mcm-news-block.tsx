import { MarkdownTextBlock } from "@/components/blocks/markdown-text-block";

export interface McmNewsBlock {
  id: string
  title: string
  description: string
  content: MarkdownTextBlock
  link: string
  pubDate: string
  source: "MCM",
  img: {
    url: string,
    alt: string
  }
}

export interface McmNewsBlockComponentProps {
  block: McmNewsBlock;
}

export default function McmNewsBlockComponent() {
  return (
    <>
      Not implemented yet (MCM News Block)
    </>
  );
}