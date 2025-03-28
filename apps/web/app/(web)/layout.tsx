import { baseMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { ReactNode } from "react";
import RootLayoutWrapper from "@/components/layout/root-layout-wrapper";

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Hemsida"
};


export default function WebLayout({
                                    children
                                  }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayoutWrapper withNav>{children}</RootLayoutWrapper>
  );
}
