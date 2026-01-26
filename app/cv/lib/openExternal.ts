// app/cv/lib/openExternal.ts
"use client";

export function openExternal(href: string) {
  if (href.startsWith("mailto:")) {
    window.location.href = href;
    return;
  }
  window.open(href, "_blank", "noopener,noreferrer");
}
