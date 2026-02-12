// app/cv/components/Hero.tsx
"use client";

import SocialLinkWithPreview from "./links/SocialLinkWithPreview";
import Stat from "./ui/Stat";

export default function Hero({ t }: { t: any }) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-6 sm:p-8 shadow-[0_30px_100px_rgba(0,0,0,0.35)]">
      {/* subtle top shine */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl mask-[radial-gradient(350px_160px_at_20%_0%,black,transparent)] bg-white/10" />

      <h1 className="text-4xl font-semibold md:text-5xl">{t.meta.name}</h1>
      <p className="mt-2 text-lg text-zinc-300">{t.meta.role}</p>
      <p className="mt-5 max-w-2xl text-zinc-300">{t.meta.intro}</p>

      <div className="mt-7 flex flex-wrap gap-3">
        <SocialLinkWithPreview
          href="mailto:mitovluchezar@gmail.com"
          label="Email"
          previewTitle="Send me an email"
          previewText="mitovluchezar@gmail.com"
        />

        <SocialLinkWithPreview
          href="https://github.com/LuchezarM"
          label="GitHub"
          previewTitle="GitHub Profile"
          previewText="github.com/LuchezarM"
          accent="violet"
        />

        <SocialLinkWithPreview
          href="https://www.linkedin.com/in/luchezar-mitov-aa2a5b2a0"
          label="LinkedIn"
          previewTitle="LinkedIn"
          previewText="luchezar-mitov"
          accent="blue"
        />

        <SocialLinkWithPreview
          href="https://www.figma.com/design/93lNizPrBoHwLDpZRGUgA6/%D0%B2%D0%BE%D0%B4%D0%B0-%D0%91%D0%B0%D1%87%D0%BA%D0%BE%D0%B2%D0%BE?node-id=0-1&t=w1iAzHyo1DfSZVxP-1"
          label="Figma"
          previewTitle="Figma"
          previewText="figma.com/LuchezarM"
        />
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <Stat label={t.stats.shipped} value="10+" />
        <Stat label={t.stats.stack} value="Next.js" />
        <Stat label={t.stats.focus} value="UI + APIs" />
      </div>
    </div>
  );
}
