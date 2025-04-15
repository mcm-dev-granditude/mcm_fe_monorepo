// lib/utils/metadata.ts
import { Metadata, ResolvingMetadata } from "next";
import { appConfig } from "@repo/config";
import { defaultUrl } from "@/lib/utils/default-url";

type MetadataOptions = {
  title?: string;
  description?: string;
  keywords?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: string;
  canonicalPath?: string;
};

export function createMetadata(
  options?: MetadataOptions,
  parent?: ResolvingMetadata
): Metadata {
  const baseTitle = {
    default: appConfig.title,
    template: `%s | ${appConfig.title}`
  };

  const titleConfig = options?.title
    ? {
      default: options.title,
      template: `%s | ${appConfig.title}`
    }
    : baseTitle;

  return {
    metadataBase: new URL(defaultUrl),
    title: titleConfig,
    description: options?.description || appConfig.description,
    keywords: options?.keywords || appConfig.keywords,
    authors: [{name: `${appConfig.title} Team`}],
    creator: appConfig.title,
    publisher: appConfig.title,
    robots: {
      index: !options?.noIndex,
      follow: !options?.noFollow,
      googleBot: {
        index: !options?.noIndex,
        follow: !options?.noFollow
      }
    },
    openGraph: {
      type: "website",
      siteName: appConfig.title,
      title: options?.title || appConfig.title,
      description: options?.description || appConfig.description,
      url: options?.canonicalPath ? `${defaultUrl}${options.canonicalPath}` : defaultUrl,
      images: [
        {
          url: options?.ogImage || "/og-image.png",
          width: 1200,
          height: 630,
          alt: options?.title || appConfig.title
        }
      ],
      locale: "en_US",
      countryName: "Sweden"
    },
    twitter: {
      card: "summary_large_image",
      title: options?.title || appConfig.title,
      description: options?.description || appConfig.description,
      images: [options?.ogImage || "/twitter-image.png"]
    },
    verification: {
      // google: 'google-site-verification-token',
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/icon-32x32.png",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          url: "/icon-32x32.png"
        }
      ]
    },
    manifest: "/manifest.json",
    applicationName: appConfig.title,
    alternates: {
      canonical: options?.canonicalPath ? `${defaultUrl}${options.canonicalPath}` : defaultUrl
    },
    other: {
      "format-detection": "telephone=no",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "apple-mobile-web-app-title": appConfig.title
    }
  };
}