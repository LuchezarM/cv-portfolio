// app/cv/components/ui/Line.tsx
"use client";

export default function Line({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-zinc-400">{k}</span>
      <span>{v}</span>
    </div>
  );
}
