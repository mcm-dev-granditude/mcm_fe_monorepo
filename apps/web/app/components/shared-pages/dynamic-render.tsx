"use client";

import type { FC } from "react";
import { useWebView } from "@repo/ui";

const DynamicRender: FC = () => {
  const {isInWebView, sendMessageToRN} = useWebView();

  return (
    <>
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
    </>
  );
};

export default DynamicRender;
