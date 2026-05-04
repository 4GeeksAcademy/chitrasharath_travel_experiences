import type { Metadata } from "next";
import { Oswald, Source_Serif_4 } from "next/font/google";

import AppShell from "@/components/layout/AppShell";
import "./globals.css";

const headingFont = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Wanderlust",
  description: "Image-led luxury travel planning experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-paper)] text-[var(--color-ink)]">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
