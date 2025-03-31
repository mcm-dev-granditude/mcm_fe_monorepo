export const noBounceScript = `
  const style = document.createElement('style');
  style.textContent = 'html, body { overscroll-behavior: none; -webkit-overflow-scrolling: auto; }';
  document.head.appendChild(style);
`;