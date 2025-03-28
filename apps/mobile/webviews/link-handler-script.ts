export const linkHandlerScript = `
// Handle links to keep them in the WebView
document.addEventListener("click", function(e) {
  let target = e.target;
  while (target && target.tagName !== "A") {
    target = target.parentNode;
  }
  if (target && target.tagName === "A") {
    e.preventDefault();
    let href = target.getAttribute("href");
    if (href && !href.startsWith("http")) {
      window.ReactNativeBridge.postMessage({
        type: "navigation",
        payload: {path: href}
      });
    } else if (href) {
      window.location.href = href;
    }
  }
}, true);
`;