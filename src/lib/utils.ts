import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string) {
  return text
    .normalize("NFD") // Breaks "é" into "e" + "´"
    .replace(/[\u0300-\u036f]/g, "") // Removes the accent marks
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Removes special characters like &
    .replace(/\s+/g, "_"); // Replaces spaces with _
}
