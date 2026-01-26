// app/cv/components/LangToggle.tsx
"use client";

import type { Lang } from "../i18n/cv";

export default function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-white/10 bg-white/5 p-1">
      {(["bg", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 text-sm rounded-lg transition cursor-pointer ${
            lang === l
              ? "bg-white text-black"
              : "text-white/70 hover:bg-white/10"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
