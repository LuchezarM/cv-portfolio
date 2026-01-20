"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useCallback } from "react";
import { CV_TEXT, Lang } from "./i18n/cv";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./cv/projects";

/* ---------------------------------------------
   STATIC DATA (language independent)
--------------------------------------------- */

const skills = [
  "React",
  "Next.js (App Router)",
  "TypeScript",
  "Tailwind CSS",
  "REST API",
  "Supabase",
  "Stripe",
  "Git / GitHub",
  "Framer Motion",
];

const experience = [
  {
    period: "2024 — now",
    titleKey: "dev",
    bulletsKey: "dev",
  },
];

/* ---------------------------------------------
   HELPERS
--------------------------------------------- */

function useIsDesktop(breakpointPx = 768) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${breakpointPx}px)`);
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, [breakpointPx]);

  return isDesktop;
}

function openExternal(href: string) {
  if (href.startsWith("mailto:")) {
    window.location.href = href;
    return;
  }
  window.open(href, "_blank", "noopener,noreferrer");
}

/* ---------------------------------------------
   PAGE
--------------------------------------------- */

export default function Page() {
  const [lang, setLang] = useState<Lang>("bg");

  // load saved language
  useEffect(() => {
    const saved = localStorage.getItem("cv-lang");
    if (saved === "bg" || saved === "en") setLang(saved);
  }, []);

  // save language
  useEffect(() => {
    localStorage.setItem("cv-lang", lang);
  }, [lang]);

  const t = useMemo(() => CV_TEXT[lang], [lang]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* subtle background */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="pointer-events-none fixed -top-32 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 left-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      <AnimatedTechLogoBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 relative z-10">
        {/* TOP BAR */}
        <div className="sticky top-4 z-20 mb-8">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md">
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

        {/* HERO */}
        <section className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="relative rounded-3xl border border-white/10 bg-linear-to-b from-white/10 to-white/5 p-6 sm:p-8">
            <h1 className="text-4xl font-semibold md:text-5xl">
              {t.meta.name}
            </h1>

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
                previewTitle="Figma Profile"
                previewText="figma.com/LuchezarM"
              />
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Stat label={t.stats.shipped} value="6+" />
              <Stat label={t.stats.stack} value="Next.js" />
              <Stat label={t.stats.focus} value="UI + APIs" />
            </div>
          </div>

          {/* SNAPSHOT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
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
        </section>

        {/* SKILLS */}
        <section className="mt-14">
          <SectionTitle
            title={t.sections.skills.title}
            subtitle={t.sections.skills.subtitle}
          />
          <SkillsLoop items={skills} />
        </section>

        {/* EXPERIENCE */}
        <section className="mt-14">
          <SectionTitle
            title={t.sections.experience.title}
            subtitle={t.sections.experience.subtitle}
          />

          <div className="mt-6 space-y-4">
            {experience.map((e) => (
              <div
                key={e.period}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex justify-between gap-2">
                  <h3 className="font-semibold">
                    Frontend / Full-stack Web Developer
                  </h3>
                  <span className="text-sm text-zinc-400">{e.period}</span>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                  {(lang === "bg"
                    ? [
                        "Разработка на уеб приложения с Next.js + React.",
                        "Интеграции: REST API, Supabase (Postgres), Stripe плащания.",
                        "UI/UX, responsive дизайн, performance и SEO.",
                      ]
                    : [
                        "Building production web applications using Next.js + React.",
                        "Integrations: REST APIs, Supabase (Postgres), Stripe payments.",
                        "UI/UX, responsive design, performance and SEO.",
                      ]
                  ).map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mt-14">
          <SectionTitle
            title={t.sections.projects.title}
            subtitle={t.sections.projects.subtitle}
          />

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>

                <p className="mt-2 text-sm text-zinc-300">
                  {t.projectsDesc[p.descKey] ?? ""}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <LiveButtonWithPreview href={p.live} label={t.ctas.live} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-400 flex justify-between">
          <span>
            © {new Date().getFullYear()} {t.meta.name}
          </span>
          <span>{t.footer.built}</span>
        </footer>
      </div>
    </main>
  );
}

/* ---------------------------------------------
   COMPONENTS
--------------------------------------------- */

function LangToggle({
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

function SectionTitle({
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

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}

function Line({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-zinc-400">{k}</span>
      <span>{v}</span>
    </div>
  );
}

/* ---------------------------------------------
   Social Link (mobile-first preview sheet)
   - Mobile: tap opens bottom sheet preview (friendly)
   - Desktop: keep your exact hover tooltip styling
   - Clicking "Open" closes preview automatically ✅
--------------------------------------------- */

function SocialLinkWithPreview({
  href,
  label,
  previewTitle,
  previewText,
  accent = "emerald",
}: {
  href: string;
  label: string;
  previewTitle: string;
  previewText: string;
  accent?: "emerald" | "violet" | "blue" | "amber";
}) {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = useState(false);

  // close on desktop when leaving; on mobile only via user action
  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const domain = (() => {
    try {
      const url = new URL(
        href.startsWith("mailto:") ? "https://mail.google.com" : href,
      );
      return url.hostname.replace("www.", "");
    } catch {
      return "";
    }
  })();

  const favicon = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : "";

  const accentMap: Record<typeof accent, string> = {
    emerald: "from-emerald-400/30 via-emerald-300/10 to-transparent",
    violet: "from-fuchsia-400/30 via-violet-300/10 to-transparent",
    blue: "from-sky-400/30 via-blue-300/10 to-transparent",
    amber: "from-amber-400/30 via-yellow-300/10 to-transparent",
  };

  const handleOpenLink = useCallback(() => {
    setOpen(false); // ✅ close automatically
    openExternal(href);
  }, [href]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={isDesktop ? () => setOpen(true) : undefined}
      onMouseLeave={isDesktop ? () => setOpen(false) : undefined}
      onFocus={isDesktop ? () => setOpen(true) : undefined}
      onBlur={isDesktop ? () => setOpen(false) : undefined}
    >
      {/* Desktop: your original link (unchanged) */}
      <Link
        href={href}
        target="_blank"
        className="hidden md:inline-flex rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm transition hover:bg-white/10 hover:scale-105"
      >
        {label}
      </Link>

      {/* Mobile: tap button opens preview sheet */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm transition active:scale-[.98] hover:bg-white/10"
      >
        {label}
      </button>

      {/* Desktop tooltip (kept style) */}
      <AnimatePresence>
        {open && isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="pointer-events-none absolute left-1/2 top-0 z-50 w-64 -translate-x-1/2 -translate-y-[120%]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/80 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <div
                className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accentMap[accent]}`}
              />

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]
                [background-image:linear-gradient(to_right,white_1px,transparent_1px),
                linear-gradient(to_bottom,white_1px,transparent_1px)]
                bg-size-[24px_24px]"
              />

              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <img
                    src={favicon}
                    alt={`${domain} favicon`}
                    className="h-6 w-6"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">
                    {previewTitle}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-zinc-300">
                    {previewText}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 -bottom-1.75 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-black/80" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom sheet preview */}
      <AnimatePresence>
        {open && !isDesktop && (
          <motion.div
            className="fixed inset-0 z-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* overlay */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* sheet */}
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-md px-4 pb-6"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/85 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-md">
                <div
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accentMap[accent]}`}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),
                  linear-gradient(to_bottom,white_1px,transparent_1px)]
                  bg-size-[24px_24px]"
                />

                <div className="relative flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <img
                      src={favicon}
                      alt=""
                      className="h-6 w-6"
                      loading="lazy"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-zinc-100">
                      {previewTitle}
                    </p>
                    <p className="mt-1 text-sm text-zinc-300 break-all">
                      {previewText}
                    </p>
                    {domain ? (
                      <p className="mt-2 text-xs text-zinc-400">{domain}</p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 active:scale-[.98]"
                  >
                    Close
                  </button>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-200 active:scale-[.98]"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenLink}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black active:scale-[.98]"
                  >
                    Open
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ---------------------------------------------
   Live Button (mobile-first preview sheet)
   - Mobile: tap opens sheet, "Open" closes automatically ✅
   - Desktop: keep your tooltip style (unchanged)
--------------------------------------------- */

function LiveButtonWithPreview({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const isDesktop = useIsDesktop();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const domain = (() => {
    try {
      const u = new URL(href);
      return u.hostname.replace("www.", "");
    } catch {
      return "";
    }
  })();

  const favicon = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : "";

  const handleOpenLink = useCallback(() => {
    setOpen(false); // ✅ close automatically
    openExternal(href);
  }, [href]);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={isDesktop ? () => setOpen(true) : undefined}
      onMouseLeave={isDesktop ? () => setOpen(false) : undefined}
      onFocus={isDesktop ? () => setOpen(true) : undefined}
      onBlur={isDesktop ? () => setOpen(false) : undefined}
    >
      {/* Desktop: keep your exact motion.a */}
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="hidden md:inline-flex relative overflow-hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black"
      >
        <span className="pointer-events-none absolute inset-0 opacity-0 hover:opacity-100 transition duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_60%)]" />
        <span className="relative z-10">{label}</span>
      </motion.a>

      {/* Mobile: tap opens sheet */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex relative overflow-hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black active:scale-[.98]"
      >
        {label}
      </button>

      {/* Desktop tooltip (unchanged style) */}
      <AnimatePresence>
        {open && isDesktop && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
            className="pointer-events-none absolute left-1/2 top-0 z-50 w-72 -translate-x-1/2 -translate-y-[130%]"
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/85 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-md">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <img src={favicon} alt="" className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">
                    Live preview
                  </p>
                  <p className="truncate text-xs text-zinc-300">{domain}</p>
                </div>
              </div>

              <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <div className="h-6 border-b border-white/10 bg-black/30 flex items-center gap-1 px-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  <span className="ml-2 text-[10px] text-zinc-300 truncate">
                    {href}
                  </span>
                </div>

                <div className="p-3">
                  <div className="h-2 w-3/4 rounded bg-white/10" />
                  <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-10 rounded bg-white/10" />
                    <div className="h-10 rounded bg-white/10" />
                    <div className="h-10 rounded bg-white/10" />
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 -bottom-1.5 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-black/85" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile bottom sheet */}
      <AnimatePresence>
        {open && !isDesktop && (
          <motion.div
            className="fixed inset-0 z-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 32 }}
              className="absolute inset-x-0 bottom-0 mx-auto w-full max-w-md px-4 pb-6"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/85 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.8)] backdrop-blur-md">
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),
                  linear-gradient(to_bottom,white_1px,transparent_1px)]
                  bg-size-[24px_24px]"
                />

                <div className="relative flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <img src={favicon} alt="" className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-zinc-100">
                      Live preview
                    </p>
                    <p className="mt-1 text-sm text-zinc-300 break-all">
                      {href}
                    </p>
                    {domain ? (
                      <p className="mt-2 text-xs text-zinc-400">{domain}</p>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="shrink-0 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 active:scale-[.98]"
                  >
                    Close
                  </button>
                </div>

                {/* mini preview (mobile friendly) */}
                <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="h-7 border-b border-white/10 bg-black/30 flex items-center gap-1 px-2">
                    <span className="h-2 w-2 rounded-full bg-red-400/60" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
                    <span className="h-2 w-2 rounded-full bg-green-400/60" />
                    <span className="ml-2 text-[10px] text-zinc-300 truncate">
                      {domain || "preview"}
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="h-2 w-3/4 rounded bg-white/10" />
                    <div className="mt-2 h-2 w-2/3 rounded bg-white/10" />
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      <div className="h-10 rounded bg-white/10" />
                      <div className="h-10 rounded bg-white/10" />
                      <div className="h-10 rounded bg-white/10" />
                    </div>
                  </div>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-zinc-200 active:scale-[.98]"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleOpenLink}
                    className="rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black active:scale-[.98]"
                  >
                    Open
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function AnimatedTechLogoBackground() {
  const LOGOS = useMemo(
    () => [
      { name: "React", Svg: ReactLogo },
      { name: "Next.js", Svg: NextLogo },
      { name: "Tailwind", Svg: TailwindLogo },
      { name: "TypeScript", Svg: TypeScriptLogo },
      { name: "Supabase", Svg: SupabaseLogo },
      { name: "Stripe", Svg: StripeLogo },
      { name: "GitHub", Svg: GitHubLogo },
    ],
    [],
  );

  const items = useMemo(() => {
    const count = 18;
    return Array.from({ length: count }).map((_, i) => {
      const logo = LOGOS[i % LOGOS.length];
      const x = (i * 19) % 100;
      const y = (i * 31) % 100;
      const size = 18 + ((i * 7) % 22);
      const duration = 18 + ((i * 3) % 16);
      const delay = (i % 9) * 0.6;
      const drift = 10 + ((i * 5) % 18);
      const rot = i % 2 === 0 ? 7 : -7;
      return { ...logo, x, y, size, duration, delay, drift, rot, i };
    });
  }, [LOGOS]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black/35" />

      {items.map(
        ({ name, Svg, x, y, size, duration, delay, drift, rot, i }) => (
          <motion.div
            key={name + i}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.06, 0.14, 0.06],
              y: [-drift, drift, -drift],
              x: [0, (i % 2 === 0 ? 1 : -1) * (drift * 0.6), 0],
              rotate: [0, rot, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          >
            <div
              className="text-white/80 drop-shadow-[0_0_16px_rgba(255,255,255,0.06)]"
              style={{ width: size, height: size }}
            >
              <Svg />
            </div>
          </motion.div>
        ),
      )}
    </div>
  );
}

/* -----------------------
   SVG LOGOS (monochrome)
------------------------ */

function ReactLogo() {
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

function NextLogo() {
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

function TailwindLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        d="M32 18c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.6 4.6 3.1 2.4 2.4 5.1 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.6-4.6-3.1-2.4-2.4-5.1-5.1-11-5.1ZM20 36c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.6 4.6 3.1 2.4 2.4 5.1 5.1 11 5.1 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.6-4.6-3.1-2.4-2.4-5.1-5.1-11-5.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TypeScriptLogo() {
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

function SupabaseLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        d="M36 6c2.2 0 3.7 2.2 2.8 4.2L26 50h18c2.7 0 4.2 3.1 2.5 5.2l-8.5 10.2c-1.8 2.1-5.1.9-5.1-1.8V54H16c-2.6 0-4.2-2.9-2.7-5l20.6-41C34.4 6.8 35.2 6 36 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StripeLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        d="M32 10c-12.2 0-22 9.8-22 22s9.8 22 22 22 22-9.8 22-22S44.2 10 32 10Zm2.6 33.8c-3.3 0-6.5-1-8.9-2.7l1.3-3.9c2.3 1.5 4.9 2.4 7.6 2.4 2.1 0 3.2-.8 3.2-1.9 0-3.4-12.1-1.2-12.1-9.4 0-3.6 2.9-6.4 8.2-6.4 2.7 0 5.5.7 7.5 1.9l-1.3 3.8c-2.1-1.1-4.3-1.6-6.2-1.6-2.1 0-3 .9-3 1.9 0 3.1 12.1 1.1 12.1 9.3 0 3.6-3 6.6-8.4 6.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubLogo() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
      <path
        fill="currentColor"
        d="M32 6C17.6 6 6 17.8 6 32.4c0 11.7 7.5 21.6 17.9 25.1 1.3.2 1.8-.6 1.8-1.3v-4.6c-7.3 1.6-8.8-3.5-8.8-3.5-1.2-3.1-2.9-3.9-2.9-3.9-2.4-1.7.2-1.7.2-1.7 2.6.2 4 2.7 4 2.7 2.3 4 6 2.8 7.4 2.1.2-1.7.9-2.8 1.6-3.4-5.8-.7-11.9-3-11.9-13.3 0-2.9 1-5.2 2.7-7.1-.3-.7-1.2-3.4.3-7.2 0 0 2.2-.7 7.2 2.7 2.1-.6 4.3-.9 6.5-.9s4.4.3 6.5.9c5-3.4 7.2-2.7 7.2-2.7 1.5 3.8.6 6.5.3 7.2 1.7 1.9 2.7 4.2 2.7 7.1 0 10.4-6.1 12.6-11.9 13.3.9.8 1.7 2.4 1.7 4.8v7.1c0 .7.5 1.5 1.8 1.3C50.5 54 58 44.1 58 32.4 58 17.8 46.4 6 32 6Z"
      />
    </svg>
  );
}

function SkillsLoop({ items }: { items: string[] }) {
  // duplicate to make seamless loop
  const loopItems = [...items, ...items];

  return (
    <div className="mt-6 relative overflow-hidden rounded-3xl">
      {/* subtle fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-zinc-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-zinc-950 to-transparent z-10" />

      <motion.div
        className="flex gap-2 py-4 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopItems.map((s, idx) => (
          <span
            key={`${s}-${idx}`}
            className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm"
          >
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
