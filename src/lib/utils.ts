import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/****
 * Combines and merges class names, optimizing for Tailwind CSS.
 *
 * Accepts any number of class name values, conditionally concatenates them, and merges Tailwind CSS classes to prevent conflicts and duplicates.
 *
 * @param inputs - Class name values to combine and merge.
 * @returns A single optimized class name string.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
