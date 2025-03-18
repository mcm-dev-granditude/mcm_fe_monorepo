import { baseMetadata } from '@/lib/seo';
import { Metadata, Viewport } from 'next';
import { Geist } from 'next/font/google';
import { ReactNode } from 'react';
import './styles/globals.css';
import RootLayoutWrapper from '@/components/layout/root-layout-wrapper'
import { Toaster } from '@/components/ui/toaster'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  ...baseMetadata,
};

const geistSans = Geist({
  display: 'swap',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning dir="ltr">
      <body className="bg-background text-foreground">
        <Toaster />
        <RootLayoutWrapper>{children}</RootLayoutWrapper>
      </body>
    </html>
  );
}
