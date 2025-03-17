import { defaultUrl } from '@/lib/utils/default-url';
import { Metadata } from 'next';
import { appConfig } from '@repo/config'


export const baseMetadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: `${appConfig.title}`,
    template: `%s | ${appConfig.title}`,
  },
  description: appConfig.description,
  keywords: appConfig.keywords,
  authors: [{ name: `${appConfig.title} Team` }],
  creator: `${appConfig.title}`,
  publisher: `${appConfig.title}`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: 'website',
    siteName: `${appConfig.title}`,
    title: `${appConfig.title}`,
    description: appConfig.description,
    url: defaultUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${appConfig.title}`,
      },
    ],
    locale: 'en_US',
    countryName: 'Sweden',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${appConfig.title}`,
    description: appConfig.description,
    images: ['/twitter-image.png'],
  },
  verification: {
    // google: 'google-site-verification-token', // todo - Add Google Verification
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/icon-32x32.png',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/icon-32x32.png',
      },
    ],
  },
  manifest: '/manifest.json',
  applicationName: `${appConfig.title}`,
  alternates: {
    canonical: defaultUrl,
  },
  other: {
    'format-detection': 'telephone=no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': appConfig.title,
  },
};
