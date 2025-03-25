export function hexToHSL(hex: string): string {
  hex = hex.replace(/^#/, "");

  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  // Find min and max values for chroma calculation
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const chroma = max - min;

  // Calculate lightness
  const l = (max + min) / 2;

  // Calculate saturation
  let s = 0;
  if (chroma !== 0) {
    s = chroma / (1 - Math.abs(2 * l - 1));
  }

  // Calculate hue
  let h = 0;
  if (chroma !== 0) {
    if (max === r) {
      h = ((g - b) / chroma) % 6;
    } else if (max === g) {
      h = (b - r) / chroma + 2;
    } else {
      h = (r - g) / chroma + 4;
    }
    h = Math.round(h * 60);
    if (h < 0) h += 360;
  }

  // Round values for HSL string
  const hRounded = Math.round(h);
  const sRounded = Math.round(s * 100);
  const lRounded = Math.round(l * 100);

  return `${hRounded} ${sRounded}% ${lRounded}%`;
}