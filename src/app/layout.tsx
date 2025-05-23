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
 * Provides the global HTML structure and layout for the application, including font styling and notification support.
 *
 * Renders the application's content within a styled `<body>` and includes a notification toaster for UI messages.
 *
 * @param children - The content to be rendered within the layout.
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
