// apps/web/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import PageWrapper from "@/components/layout/page-wrapper";

export default function Home() {
  const [isInWebView, setIsInWebView] = useState(false);
  const [colorScheme, setColorScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check if running inside WebView by detecting the injected bridge
    const isWebView = typeof window !== "undefined" && "ReactNativeBridge" in window;
    setIsInWebView(isWebView);

    // Get color scheme from WebView if available
    if (isWebView) {
      // @ts-ignore - ReactNativeBridge is injected at runtime
      const scheme = window.ReactNativeBridge.getColorScheme();
      if (scheme === "dark" || scheme === "light") {
        setColorScheme(scheme);
      }
    }
  }, []);

  // Customize your UI based on the environment
  const sendMessageToNative = (message: any) => {
    if (isInWebView) {
      // @ts-ignore - ReactNativeBridge is injected at runtime
      window.ReactNativeBridge.postMessage(message);
    }
  };

  return (
    <PageWrapper>
      {/* Remove padding when in WebView to make it seamless */}
      <div
        className={`
        mt-2 
        bg-background 
        rounded-md 
        w-full 
        hover:bg-surface 
        transition-colors 
        duration-500
        ${isInWebView ? "p-3" : "p-10"}
      `}
      >
        <h1 className="text-xl font-bold mb-4">Welcome to MatchCenterMedia</h1>

        <p className="mb-4">
          This is content that's shared between your web and mobile apps.
          It's rendered as a regular page on web, and embedded in a WebView on mobile.
        </p>

        {/* Shows only on web */}
        {!isInWebView && (
          <div className="p-4 bg-primary/10 rounded-md mb-4">
            <p>This section is only visible on the web version.</p>
          </div>
        )}

        {/* Shows only in WebView */}
        {isInWebView && (
          <div className="p-4 bg-primary/10 rounded-md mb-4">
            <p>This section is only visible in the mobile app's WebView.</p>
            <p>Current theme: {colorScheme}</p>
            <button
              className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
              onClick={() => sendMessageToNative({type: "userAction", payload: {action: "buttonClick"}})}
            >
              Send Message to Native App
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}