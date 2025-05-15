"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { paths } from "@/config/path";

/**
 * Handles password reset flows by processing authentication tokens or errors from the URL hash and managing user session state.
 *
 * This React hook inspects the URL hash for password reset tokens or error parameters on mount. It sets the authentication session if valid tokens are present, redirects to the login page with an error message if an error is detected, or prompts the user to use the password reset email link if no session or tokens are found.
 *
 * @remark Intended for use in client-side Next.js pages involved in password reset flows.
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
