import { redirect } from "next/navigation";

/**
 * Redirects to the given path, appending an encoded message as a query parameter named after the specified type.
 *
 * @param type - The message type, either "error" or "success", used as the query parameter key.
 * @param path - The destination URL path.
 * @param message - The message to encode and include as a query parameter value.
 *
 * @remark This function does not return; it immediately triggers a navigation redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}
