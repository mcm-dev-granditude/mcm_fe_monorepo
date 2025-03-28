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
    if (href && !href.startsWith("http")) {
      // Check if it's already an embedded path
      if (!href.startsWith("/embedded/")) {
        // Convert to embedded path
        const embeddedPath = href === "/" ? "/embedded" : "/embedded" + href;
        
        // Notify React Native about navigation
        window.ReactNativeBridge.postMessage({
          type: "navigation",
          payload: { path: embeddedPath }
        });
        
        // Navigate within the WebView
        window.location.href = embeddedPath;
      } else {
        // Already an embedded path
        window.ReactNativeBridge.postMessage({
          type: "navigation",
          payload: { path: href }
        });
        
        // Navigate within the WebView
        window.location.href = href;
      }
    } else if (href) {
      // External link - decide if you want to open it in the WebView or external browser
      window.ReactNativeBridge.postMessage({
        type: "externalLink",
        payload: { url: href }
      });
    }
  }
}, true);
`;