'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';
import QueryProvider from '@/app/providers/query-provider'

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
