"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { paths } from "@/config/path";

/**
 * Handles the client-side password reset flow by processing authentication tokens or errors from the URL hash and managing Supabase authentication state.
 *
 * This hook should be used on pages that handle password reset redirects. It parses the URL hash for authentication tokens or error parameters, sets the Supabase session if tokens are present, and redirects the user to the login page with appropriate messages if errors occur or if no valid session is found.
 *
 * @remark This hook performs navigation and authentication side effects on mount and does not return a value.
 */
export function usePasswordResetHandler() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    const hash = window.location.hash;

    if (hash) {
      const params = new URLSearchParams(hash.substring(1)); // Remove #
      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const error = params.get("error");
      const errorCode = params.get("error_code");
      const errorDescription = params.get("error_description");

      if (error) {
        console.error(
          `Error during password reset redirect: ${errorDescription} (code: ${errorCode})`
        );
        router.replace(
          paths.auth.login.getHref() +
            "?error=" +
            encodeURIComponent(errorDescription || "Password reset link issue")
        );
        return;
      }

      if (accessToken && refreshToken) {
        supabase.auth
          .setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          .then(({ error: sessionError }) => {
            if (sessionError) {
              console.error("Error setting session:", sessionError.message);
              router.replace(
                paths.auth.login.getHref() +
                  "?error=" +
                  encodeURIComponent(
                    "Failed to process password reset. Please try again."
                  )
              );
            } else {
              // Session set, clear the hash from URL for cleanliness
              window.history.replaceState(
                {},
                document.title,
                window.location.pathname + window.location.search
              );
            }
          });
      } else if (
        !params.has("access_token") &&
        !params.has("refresh_token") &&
        !error
      ) {
        supabase.auth.getUser().then(({ data: { user } }) => {
          if (!user) {
            console.log(
              "No session or tokens on reset page, redirecting to login."
            );
            router.replace(
              paths.auth.login.getHref() +
                "?message=" +
                encodeURIComponent(
                  "Please use the password reset link from your email."
                )
            );
          }
        });
      }
    }
  }, [router]);
}
