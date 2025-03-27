import { cva } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    variant: {
      body: "text-base text-foreground",
      title: "text-4xl font-bold text-foreground",
      heading: "text-2xl font-bold text-foreground",
      subheading: "text-xl font-semibold text-foreground",
      caption: "text-sm text-muted-foreground",
      link: "text-base underline text-primary"
    }
  },
  defaultVariants: {
    variant: "body"
  }
});