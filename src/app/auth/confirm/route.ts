import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest } from "next/server";

import { createClient } from "@/utils/supabase/server";
import { encodedRedirect } from "@/utils/utils";
import { paths } from "@/config/path";

/**
 * Handles email OTP verification for authentication via a GET request.
 *
 * Extracts `token_hash` and `type` from the query parameters, verifies the OTP using Supabase, and redirects the user to a success or error page based on the verification result.
 *
 * @param request - The incoming HTTP request containing OTP verification parameters.
 * @returns A redirect response to either the success or error page, with an appropriate message.
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
