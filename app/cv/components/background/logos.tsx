// app/cv/components/background/logos.tsx
"use client";

/* Monochrome SVG logos */

export function ReactLogo() {
  return (
    <svg viewBox="0 0 841 595" className="w-full h-full" fill="none">
      <g stroke="currentColor" strokeWidth="28" strokeLinecap="round">
        <ellipse cx="420.5" cy="296.5" rx="165" ry="64" />
        <ellipse
          cx="420.5"
          cy="296.5"
          rx="165"
          ry="64"
          transform="rotate(60 420.5 296.5)"
        />
        <ellipse
          cx="420.5"
          cy="296.5"
          rx="165"
          ry="64"
          transform="rotate(120 420.5 296.5)"
        />
      </g>
      <circle cx="420.5" cy="296.5" r="38" fill="currentColor" />
    </svg>
  );
}

export function NextLogo() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="10" />
      <path
        d="M38 78V42h10l18 24V42h10v36H66L48 54v24H38Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TailwindLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        d="M32 18c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.6 4.6 3.1 2.4 2.4 5.1 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.6-4.6-3.1-2.4-2.4-5.1-5.1-11-5.1ZM20 36c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.6 4.6 3.1 2.4 2.4 5.1 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2-4.4-8.4-3.6-1.8.4-3.1 1.6-4.6 3.1-2.4 2.4-5.1 5.1-11 5.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function TypeScriptLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <rect x="8" y="8" width="48" height="48" rx="10" fill="currentColor" />
      <path
        d="M26 28h-8v-4h20v4h-8v20h-4V28Zm24 4.5c-1-1.7-2.5-2.5-4.7-2.5-2.3 0-3.7 1-3.7 2.4 0 1.7 2 2.4 4.4 3.1 3.5 1 8 2.3 8 7.5 0 4.4-3.5 7.2-8.6 7.2-4.4 0-7.3-1.7-9-4.8l3.6-2.1c1 1.8 2.3 3.1 5.2 3.1 2.5 0 4-1 4-2.8 0-2-2-2.7-5-3.6-3.5-1-7.4-2.4-7.4-7.2 0-4.3 3.3-6.8 8-6.8 3.5 0 6.4 1.5 8 4.2l-3.8 2.3Z"
        fill="#0a0a0a"
      />
    </svg>
  );
}

export function SupabaseLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        d="M36 6c2.2 0 3.7 2.2 2.8 4.2L26 50h18c2.7 0 4.2 3.1 2.5 5.2l-8.5 10.2c-1.8 2.1-5.1.9-5.1-1.8V54H16c-2.6 0-4.2-2.9-2.7-5l20.6-41C34.4 6.8 35.2 6 36 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StripeLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        d="M32 10c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22S44.2 10 32 10Zm2.6 33.8c-3.3 0-6.5-1-8.9-2.7l1.3-3.9c2.3 1.5 4.9 2.4 7.6 2.4 2.1 0 3.2-.8 3.2-1.9 0-3.4-12.1-1.2-12.1-9.4 0-3.6 2.9-6.4 8.2-6.4 2.7 0 5.5.7 7.5 1.9l-1.3 3.8c-2.1-1.1-4.3-1.6-6.2-1.6-2.1 0-3 .9-3 1.9 0 3.1 12.1 1.1 12.1 9.3 0 3.6-3 6.6-8.4 6.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GitHubLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        fill="currentColor"
        d="M32 6C17.6 6 6 17.8 6 32.4c0 11.7 7.5 21.6 17.9 25.1 1.3.2 1.8-.6 1.8-1.3v-4.6c-7.3 1.6-8.8-3.5-8.8-3.5-1.2-3.1-2.9-3.9-2.9-3.9-2.4-1.7.2-1.7.2-1.7 2.6.2 4 2.7 4 2.7 2.3 4 6 2.8 7.4 2.1.2-1.7.9-2.8 1.6-3.4-5.8-.7-11.9-3-11.9-13.3 0-2.9 1-5.2 2.7-7.1-.3-.7-1.2-3.4.3-7.2 0 0 2.2-.7 7.2 2.7 2.1-.6 4.3-.9 6.5-.9s4.4.3 6.5.9c5-3.4 7.2-2.7 7.2-2.7 1.5 3.8.6 6.5.3 7.2 1.7 1.9 2.7 4.2 2.7 7.1 0 10.4-6.1 12.6-11.9 13.3.9.8 1.7 2.4 1.7 4.8v7.1c0 .7.5 1.5 1.8 1.3C50.5 54 58 44.1 58 32.4 58 17.8 46.4 6 32 6Z"
      />
    </svg>
  );
}
