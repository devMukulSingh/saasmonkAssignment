"use client";

export function LocalStorageProvider() {
  // When initializing, we restore the data from `localStorage` into a map.
  const map =
    typeof window !== "undefined"
      ? new Map(JSON.parse(localStorage.getItem("app-cache") || "[]"))
      : new Map();

  // Before unloading the app, we write back all the data into `localStorage`.
  typeof window !== "undefined"
    ? window.addEventListener("beforeunload", () => {
        const appCache = JSON.stringify(Array.from(map.entries()));
        localStorage.setItem("app-cache", appCache);
      })
    : null;

  // We still use the map for write & read for performance.
  return map;
}
