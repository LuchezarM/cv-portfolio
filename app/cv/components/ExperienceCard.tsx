// app/cv/components/ExperienceCard.tsx
"use client";

import type { Lang } from "../i18n/cv";

export default function ExperienceCard({
  period,
  lang,
}: {
  period: string;
  lang: Lang;
}) {
  const bullets =
    lang === "bg"
      ? [
          "Разработка на уеб приложения с Next.js + React.",
          "Интеграции: REST API, Supabase (Postgres), Stripe плащания.",
          "UI/UX, responsive дизайн, performance и SEO.",
        ]
      : [
          "Building production web applications using Next.js + React.",
          "Integrations: REST APIs, Supabase (Postgres), Stripe payments.",
          "UI/UX, responsive design, performance and SEO.",
        ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.25)]">
      <div className="flex justify-between gap-2">
        <h3 className="font-semibold">Frontend / Full-stack Web Developer</h3>
        <span className="text-sm text-zinc-400">{period}</span>
      </div>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
