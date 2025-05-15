import { paths } from "@/config/path";
import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

/**
 * Handles authentication callback requests and redirects users based on authentication state and query parameters.
 *
 * If an authorization code is present, exchanges it for a user session using Supabase. If the user signed up via email confirmation, redirects to the email confirmation success page. Otherwise, redirects to a specified path from the "redirect_to" query parameter or defaults to the home page.
 *
 * @param request - The incoming HTTP request containing query parameters for authentication.
 * @returns A redirect response to the appropriate page based on authentication and query parameters.
 */
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data?.user) {
      // Check if this was an email confirmation for a new sign-up
      if (data.user.user_metadata?.signup_flow_type === "email_confirmation") {
        return NextResponse.redirect(
          new URL(paths.auth.confirm.success.getHref(), origin)
        );
      }
    }
  }

  if (redirectTo) {
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  // Default redirect
  return NextResponse.redirect(new URL(paths.home.getHref(), origin));
}
