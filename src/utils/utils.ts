import { redirect } from "next/navigation";

/**
 * Redirects to the given path, appending an encoded message as a query parameter named after the specified type.
 *
 * @param type - The message type, either "error" or "success".
 * @param path - The destination path for the redirect.
 * @param message - The message to encode and include as a query parameter.
 *
 * @remark This function never returns, as it immediately triggers a navigation redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
