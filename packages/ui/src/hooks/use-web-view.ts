"use client";

import { useEffect, useState } from "react";

export interface WebToNativeEvent<T> {
  type: string;
  payload: T;
}

export const useWebView = () => {
  const [isInWebView, setIsInWebView] = useState(false);

  useEffect(() => {
    const isWebView = typeof window !== "undefined" && "ReactNativeBridge" in window;
    setIsInWebView(isWebView);
  }, []);

  const sendMessageToRN = <T, >(message: WebToNativeEvent<T>) => {
    if (isInWebView) {
      // @ts-expect-error - ReactNativeBridge is injected at runtime
      window.ReactNativeBridge.postMessage(message);
    }
  };

  return {isInWebView, sendMessageToRN};
};