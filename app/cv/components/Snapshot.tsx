// app/cv/components/Snapshot.tsx
"use client";

import Line from "./ui/Line";

export default function Snapshot({ t }: { t: any }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
      <h2 className="text-lg font-semibold">{t.snapshot.title}</h2>

      <div className="mt-5 space-y-3 text-sm text-zinc-300">
        <Line k={t.snapshot.location} v={t.snapshot.values.location} />
        <Line k={t.snapshot.level} v={t.snapshot.values.level} />
        <Line k={t.snapshot.languages} v={t.snapshot.values.languages} />
        <Line k={t.snapshot.interests} v={t.snapshot.values.interests} />
      </div>

      <div className="mt-7 rounded-2xl border border-white/10 bg-black/30 p-4">
        <p className="text-sm text-zinc-300">
          <span className="text-zinc-200">{t.snapshot.goalLabel}</span>{" "}
          {t.snapshot.goalText}
        </p>
      </div>
    </div>
  );
}
