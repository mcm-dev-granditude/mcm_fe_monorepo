import { cssVariables } from '../index'

/**
 * Generates CSS content from the token system
 * @returns {string} The generated CSS content
 */
export const generateCSSContent = (): string => {
  return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    ${Object.entries(cssVariables.light)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n    ')}
  }

  .dark {
    ${Object.entries(cssVariables.dark)
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n    ')}
  }
}

@layer base {
  * {
    @apply border-border;
  }

  body {
    @apply bg-background text-foreground;
  }
}`;
};

export default generateCSSContent;