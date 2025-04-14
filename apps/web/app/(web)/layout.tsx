import { ReactNode } from "react";
import RootLayoutWrapper from "@/components/layout/root-layout-wrapper";
import { createMetadata } from "@/lib/utils/metadata";

export const metadata = createMetadata();


export default function WebLayout({
                                    children
                                  }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <RootLayoutWrapper withNav>
      {children}
    </RootLayoutWrapper>
  );
}
