"use client";

import Link from "next/link";
import { paths } from "@/config/path";
import { BookOpen, MailCheck } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

export default function EmailConfirmationPendingPage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" || event === "USER_UPDATED") {
          if (session?.user && session.user.email_confirmed_at) {
            // User's email is confirmed
            router.push(paths.app.root.getHref());
          }
        }
      }
    );

    const checkInitialStatus = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user && data.user.email_confirmed_at) {
        router.push(paths.app.root.getHref());
      }
    };
    checkInitialStatus();

    return () => {
      authListener.subscription?.unsubscribe();
    };
  }, [supabase, router]);

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
            <div className="p-6 sm:p-8 text-center">
              <div className="flex justify-center mb-6">
                <MailCheck className="h-16 w-16 text-amber-500" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                Confirm Your Email
              </h1>
              <p className="text-gray-600 mb-8">
                We&apos;ve sent a confirmation link to your email address.
                Please check your inbox (and spam folder!) and click the link to
                complete your registration.
              </p>
              <p className="text-gray-600 mb-2 text-sm">
                This page will automatically redirect once your email is
                confirmed.
              </p>
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
