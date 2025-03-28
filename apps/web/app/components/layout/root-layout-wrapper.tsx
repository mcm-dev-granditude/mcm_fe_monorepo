import NavigationBar from "@/app/components/layout/navigation/nav-bar";
import React from "react";

interface RootLayoutWrapperProps extends React.PropsWithChildren {
  withNav?: boolean;
}

export default function RootLayoutWrapper({children, withNav}: RootLayoutWrapperProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {withNav && <NavigationBar />}
      <main className={`flex-1 flex w-full max-w-7xl mx-auto p-5 ${withNav ? "pt-16" : ""}`}>{children}</main>
    </div>
  );
}