import { baseMetadata } from "@/lib/seo";
import { Metadata } from "next";
import { ReactNode } from "react";
import RootLayoutWrapper from "@/components/layout/root-layout-wrapper";
import PageWrapper from "@/components/layout/page-wrapper";

export const metadata: Metadata = {
  ...baseMetadata
};


export default function WebLayout({
                                    children
                                  }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayoutWrapper withNav>
      <PageWrapper className="py-6">
        {children}
      </PageWrapper>
    </RootLayoutWrapper>
  );
}
