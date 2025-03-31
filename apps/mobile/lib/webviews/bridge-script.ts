export const bridgeScript = (theme: string) => `
window.ReactNativeBridge = {
  postMessage: (data) => {
    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  },
  getColorScheme: () => "${theme}"
};

// Inject color scheme class for Tailwind
document.documentElement.classList.add("${theme}");
`;