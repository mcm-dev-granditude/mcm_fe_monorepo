// apps/web/app/page.tsx
"use client";

import PageWrapper from "@/components/layout/page-wrapper";
import { useWebView } from "@repo/ui";

export default function Home() {
  const {isInWebView, sendMessageToRN} = useWebView();

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
            <button
              className="mt-2 px-4 py-2 bg-primary text-white rounded-md"
              onClick={() => sendMessageToRN({type: "userAction", payload: {action: "buttonClick"}})}
            >
              Send Message to Native App
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}