export const linkHandlerScript = `
// Handle links to keep them in the WebView and ensure they use embedded routes
document.addEventListener("click", function(e) {
  let target = e.target;
  while (target && target.tagName !== "A") {
    target = target.parentNode;
  }
  
  if (target && target.tagName === "A") {
    e.preventDefault();
    let href = target.getAttribute("href");
    
    // Handle internal navigation
    if (href && !href.startsWith("http") && !href.startsWith("//")) {
      // Check if it's already an embedded path
      if (!href.startsWith("/embedded/")) {
        // Convert to embedded path
        const embeddedPath = href === "/" ? "/embedded" : "/embedded" + href;
        
        // Notify React Native about navigation
        window.ReactNativeBridge.postMessage({
          type: "navigation",
          payload: { path: embeddedPath }
        });
      } else {
        window.ReactNativeBridge.postMessage({
          type: "navigation",
          payload: { path: href }
        });
      }
    } else if (href) {
      // External link - ONLY send message, don't navigate in WebView
      window.ReactNativeBridge.postMessage({
        type: "externalLink",
        payload: { url: href }
      });
    }
  }
}, true);
`;