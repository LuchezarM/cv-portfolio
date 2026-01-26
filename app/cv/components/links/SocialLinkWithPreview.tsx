// app/cv/components/links/SocialLinkWithPreview.tsx
"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsDesktop } from "../../hooks/useIsDesktop";
import { openExternal } from "../../lib/openExternal";

export default function SocialLinkWithPreview({
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

  useEffect(() => {
    if (isDesktop) setOpen(false);
  }, [isDesktop]);

  const domain = useMemo(() => {
    try {
      const url = new URL(href.startsWith("mailto:") ? "https://mail.google.com" : href);
      return url.hostname.replace("www.", "");
    } catch {
      return "";
    }
  }, [href]);

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
    setOpen(false);
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
      {/* Desktop link */}
      <Link
        href={href}
        target="_blank"
        className="hidden md:inline-flex rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm transition hover:bg-white/10 hover:scale-105"
        onClick={() => setOpen(false)}
      >
        {label}
      </Link>

      {/* Mobile tap */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm transition active:scale-[.98] hover:bg-white/10"
      >
        {label}
      </button>

      {/* Desktop tooltip */}
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
              <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accentMap[accent]}`} />
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]
                [background-image:linear-gradient(to_right,white_1px,transparent_1px),
                linear-gradient(to_bottom,white_1px,transparent_1px)]
                bg-size-[24px_24px]"
              />

              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center">
                  <img src={favicon} alt={`${domain} favicon`} className="h-6 w-6" loading="lazy" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-semibold text-zinc-100">{previewTitle}</p>
                  <p className="mt-0.5 truncate text-xs text-zinc-300">{previewText}</p>
                </div>
              </div>

              <div className="absolute left-1/2 -bottom-1.75 h-3.5 w-3.5 -translate-x-1/2 rotate-45 border-b border-r border-white/10 bg-black/80" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile sheet */}
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
                <div className={`pointer-events-none absolute inset-0 bg-linear-to-br ${accentMap[accent]}`} />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.06]
                  [background-image:linear-gradient(to_right,white_1px,transparent_1px),
                  linear-gradient(to_bottom,white_1px,transparent_1px)]
                  bg-size-[24px_24px]"
                />

                <div className="relative flex items-start gap-3">
                  <div className="h-11 w-11 shrink-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                    <img src={favicon} alt="" className="h-6 w-6" loading="lazy" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-base font-semibold text-zinc-100">{previewTitle}</p>
                    <p className="mt-1 text-sm text-zinc-300 break-all">{previewText}</p>
                    {domain ? <p className="mt-2 text-xs text-zinc-400">{domain}</p> : null}
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
