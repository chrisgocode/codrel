"use client";

import Link from "next/link";
import { paths } from "@/config/path";
import { BookOpen, KeyRound } from "lucide-react";
import ResetPasswordForm from "@/features/auth/components/reset-password-form";
import { usePasswordResetHandler } from "@/features/auth/hooks/usePasswordResetHandler";

/**
 * Renders the password reset page with a form for setting a new password.
 *
 * Displays a header with site branding, a centered card containing instructions and the password reset form, a link to the login page, and a footer with copyright.
 */
export default function ResetPasswordPage() {
  usePasswordResetHandler();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link
            href={paths.home.getHref()}
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
            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <KeyRound className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-gray-900">
                  Set a New Password
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  Enter and confirm your new password below.
                </p>
              </div>

              <ResetPasswordForm />

              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600">
                  Remembered your password?{" "}
                  <Link
                    href={paths.auth.login.getHref()}
                    className="text-amber-600 hover:text-amber-500 font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
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
