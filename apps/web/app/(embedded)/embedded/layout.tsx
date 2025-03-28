import { Metadata } from "next";
import { ReactNode } from "react";
import RootLayoutWrapper from "@/components/layout/root-layout-wrapper";

export const metadata: Metadata = {
  title: "Hemsida",
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
    <RootLayoutWrapper>{children}</RootLayoutWrapper>
  );
}
