// app/cv/components/TopBar.tsx
"use client";

import LangToggle from "./LangToggle";
import type { Lang } from "../i18n/cv";

export default function TopBar({
  t,
  lang,
  setLang,
}: {
  t: any;
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  return (
    <div className="sticky top-4 z-20 mb-8">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-2 text-xs">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 blur-[6px] opacity-80" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.9)]" />
          </span>
          {t.meta.available}
        </div>

        <div className="flex items-center gap-4 sm:gap-8">
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </div>
    </div>
  );
}
