"use client";

import Link from "next/link";
import { paths } from "@/config/path";
import { BookOpen } from "lucide-react";
import LoginForm from "@/features/auth/components/login-form";

/**
 * Renders the login page with a sign-in form, navigation links, and site branding.
 *
 * Displays a centered login card with a welcoming message, a form for user authentication, and links to register or return to the home page. Includes a sticky header with site navigation and a footer with copyright.
 */
export default function LoginPage() {
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
                <h1 className="text-2xl font-bold text-gray-900">
                  Sign In to Codrel
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  Welcome back! Please enter your details.
                </p>
              </div>

              <LoginForm />

              <div className="mt-6 text-center text-sm">
                <p className="text-gray-600">
                  Don&apos;t have an account?{" "}
                  <Link
                    href={paths.auth.register.getHref()}
                    className="text-amber-600 hover:text-amber-500 font-medium"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href={paths.home.getHref()}
              className="inline-flex items-center text-sm text-amber-600 hover:text-amber-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to home
            </Link>
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
