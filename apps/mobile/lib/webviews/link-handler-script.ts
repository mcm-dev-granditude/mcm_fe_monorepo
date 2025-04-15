export const linkHandlerScript = `
(function() {
  // Handle all link clicks - using capturing phase for early interception
  document.addEventListener("click", function(e) {
    // Find the anchor element that was clicked
    let target = e.target;
    while (target && target.tagName !== "A") {
      target = target.parentNode;
    }
    
    if (target && target.tagName === "A") {
      const href = target.getAttribute("href");
      
      // Skip empty or JavaScript links
      if (!href || href === "#" || href.startsWith("javascript:")) {
        return;
      }
      
      // Prevent the default navigation
      e.preventDefault();
      e.stopPropagation();
      
      // Handle internal vs external links
      if (!href.startsWith("http") && !href.startsWith("//")) {
        // Internal link - prepare path for routing
        const path = !href.startsWith("/embedded") 
          ? (href === "/" ? "/embedded" : "/embedded" + href)
          : href;
        
        window.ReactNativeBridge.postMessage({
          type: "navigation",
          payload: { path: path }
        });
      } else {
        // External link
        window.ReactNativeBridge.postMessage({
          type: "externalLink",
          payload: { url: href }
        });
      }
      
      return false;
    }
  }, true);
  
  // Override History API to prevent SPA navigation
  if (window.history && window.history.pushState) {
    const originalPushState = window.history.pushState;
    window.history.pushState = function() {
      const url = arguments[2];
      if (url) {
        window.ReactNativeBridge.postMessage({
          type: "navigation",
          url: url
        });
      }
      return originalPushState.apply(this, arguments);
    };
  }
  
  // Prevent form submissions
  document.addEventListener("submit", function(e) {
    e.preventDefault();
    return false;
  }, true);
})();
`;