import { baseMetadata } from "@/lib/seo";
import { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { ReactNode } from "react";
import "@/app/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/app/providers/providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export const metadata: Metadata = {
  ...baseMetadata
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"]
});

export default function RootLayout({
                                     children
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={geistSans.className}
      suppressHydrationWarning
      dir="ltr"
    >
    <body className="bg-background text-foreground">
    <Toaster />
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  );
}
