import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/****
 * Combines and merges CSS class names, resolving Tailwind CSS class conflicts.
 *
 * Accepts any number of class values, conditionally joins them into a single string, and merges Tailwind CSS classes to ensure the final class string is optimized and conflict-free.
 *
 * @param inputs - Class values to combine and merge.
 * @returns A single string of merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
