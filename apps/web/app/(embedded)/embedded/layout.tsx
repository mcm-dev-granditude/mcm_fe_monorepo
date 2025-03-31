import { Metadata } from "next";
import { ReactNode } from "react";
import RootLayoutWrapper from "@/components/layout/root-layout-wrapper";
import PageWrapper from "@/components/layout/page-wrapper";

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
    <RootLayoutWrapper>
      <PageWrapper className="min-h-auto pb-6">
        {children}
      </PageWrapper>
    </RootLayoutWrapper>
  );
}
