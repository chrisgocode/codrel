"use client";

import Link from "next/link";
import { paths } from "@/config/path";
import { BookOpen, PartyPopper } from "lucide-react";

/**
 * Renders a static confirmation page indicating successful email verification.
 *
 * Displays a celebratory message and instructions for the user after confirming their email address, with navigation to the home page and branding elements.
 */
export default function EmailConfirmationSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link
            href={paths.home.getHref()} // Or perhaps paths.auth.login.getHref() if user is not yet fully in app
            className="flex items-center space-x-2"
          >
            <BookOpen className="h-6 w-6 text-amber-500" />
            <span className="inline-block font-bold text-xl">Codrel</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-xl shadow-lg border border-amber-100 overflow-hidden">
            <div className="p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-6">
                <PartyPopper className="h-16 w-16 text-green-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Email Confirmed Successfully!
              </h1>
              <p className="text-gray-600 mb-8">
                Your email address has been verified. You can now close this tab
                and return to the application.
              </p>
              <p className="text-sm text-gray-500">
                If the other tab doesn&apos;t automatically redirect, you might
                need to log in again.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 bg-white border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <p className="text-sm text-gray-600">
            © 2025 Codrel. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
