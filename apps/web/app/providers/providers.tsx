"use client";

import { ThemeProvider as NextThemeProvider, ThemeProviderProps } from "next-themes";
import { PropsWithChildren, ReactNode } from "react";
import QueryProvider from "@/app/providers/query-provider";

interface ProvidersProps {
  children: ReactNode;
}

// Create a wrapped version of ThemeProvider that explicitly accepts children
function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & PropsWithChildren) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}