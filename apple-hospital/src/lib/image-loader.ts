"use client";

type LoaderArgs = { src: string; width: number; quality?: number };

// Unsplash resizes on its own CDN, so we ask it for the exact width instead of
// routing images through Next's optimizer. Local files pass straight through.
export default function imageLoader({ src, width, quality }: LoaderArgs) {
  if (src.startsWith("https://images.unsplash.com/")) {
    const url = new URL(src);
    url.searchParams.set("auto", "format");
    url.searchParams.set("fit", "max");
    url.searchParams.set("w", String(width));
    url.searchParams.set("q", String(quality ?? 75));
    return url.href;
  }
  return `${src}?w=${width}`;
}
