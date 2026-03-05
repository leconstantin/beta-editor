"use client";
import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "./theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
      <Analytics />
    </>
  );
}
