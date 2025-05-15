import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { paths } from "@/config/path";

/**
 * Handles email OTP verification and redirects based on the verification result.
 *
 * Extracts `token_hash` and `type` from the request's query parameters, verifies the OTP using Supabase, and redirects the user to a success or error page depending on the outcome.
 *
 * @param request - The incoming Next.js request containing OTP verification parameters.
 * @returns A redirect response to either the email verification success page or the home page with an appropriate message.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (token_hash && type) {
    const supabase = await createClient();

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });
    if (!error) {
      // Email verified, redirect to the new success page
      return encodedRedirect(
        "success",
        paths.auth.confirm.success.getHref(),
        "Email verified successfully!"
      );
    }
  }

  return encodedRedirect(
    "error",
    paths.home.getHref(),
    "Email verification failed. Please try again or contact support."
  );
}
