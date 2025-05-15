import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Codrel - Track Your Reading Journey",
  description:
    "Catalog your reads, share reviews, and connect with fellow book lovers",
};

/**
 * Defines the root layout for the application, applying global styles, font, and notification support.
 *
 * Wraps all page content with the Inter font and includes a global toast notification system.
 *
 * @param children - The page content to render within the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
