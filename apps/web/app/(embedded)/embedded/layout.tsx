import { Metadata } from "next";
import { ReactNode } from "react";
import RootLayoutWrapper from "@/components/layout/root-layout-wrapper";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false
  }
};


export default function EmbeddedLayout({
                                         children
                                       }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayoutWrapper mainClassName="pb-16">
      {children}
    </RootLayoutWrapper>
  );
}
