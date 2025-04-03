import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  " max-w-[200px] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium" +
  " ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default: "rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80",
        outline: "border border-neutral-200 bg-background text-foreground hover:background-surface" +
          " active:bg-surface/80",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/80",
        ghost: "hover:bg-surface hover:text-foreground active:bg-primary/80",
        link: "text-foreground underline-offset-4 hover:underline",
        "mcm-main": "w-fit font-bold text-base md:text-xl text-center text-primary-foreground rounded-lg bg-primary" +
          " px-10 py-4 md:py-6 z-10 hover:bg-primary-light transition-colors max-w-auto"
      },
      size: {
        "no-size": "",
        default: "px-4 h-16",
        sm: "h-9 rounded-md px-3",
        lg: "rounded-md px-8 h-20",
        icon: "h-10 w-10 rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
