// app/cv/components/SectionTitle.tsx
"use client";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex justify-between items-end gap-2">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-sm text-zinc-400">{subtitle}</p>
    </div>
  );
}
