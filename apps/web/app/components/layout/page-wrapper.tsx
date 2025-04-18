import { cn } from "@repo/ui";
import React from "react";

interface PageWrapperProps {
  className?: string,
  children: React.ReactNode
}

export default function PageWrapper({className, children}: PageWrapperProps) {
  return (
    <div
      id="page-wrapper"
      className={cn("flex flex-col w-full mx-auto max-w-7xl min-h-[calc(100vh-4rem)]",
        " bg-background", className)}
    >
      {children}
    </div>
  );
}