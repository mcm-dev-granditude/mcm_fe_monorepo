import NavigationBar from "@/app/components/layout/navigation/nav-bar";
import React from "react";
import { cn } from "@repo/ui";

interface RootLayoutWrapperProps extends React.PropsWithChildren {
  withNav?: boolean;
  mainClassName?: string;
}

export default function RootLayoutWrapper({children, withNav, mainClassName}: RootLayoutWrapperProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {withNav && <NavigationBar />}
      <main className={cn(`flex-1 flex w-full max-w-7xl mx-auto p-5 ${withNav ? "pt-16" : ""}`, mainClassName)}>{children}</main>
    </div>
  );
}