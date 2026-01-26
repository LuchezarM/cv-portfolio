// app/cv/components/ProjectsGrid.tsx
"use client";

import { motion } from "framer-motion";
import LiveButtonWithPreview from "./links/LiveButtonWithPreview";
import type { Project } from "../projects";

type Props = {
  projects: Project[];
  t: {
    projectsDesc: Record<string, string>;
    ctas: {
      live: string;
      code: string;
      codePrivate: string;
    };
  };
};

export default function ProjectsGrid({ projects, t }: Props) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {projects.map((p) => {
        const hasRepo = Boolean(p.repo && p.repo.trim().length > 0);

        return (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative group rounded-3xl border border-white/10 bg-white/5 p-6 transition shadow-[0_20px_60px_rgba(0,0,0,0.35)] hover:border-white/20 hover:bg-white/10"
          >
            <h3 className="text-lg font-semibold">{p.name}</h3>

            <p className="mt-2 text-sm text-zinc-300">
              {t.projectsDesc[p.descKey] ?? ""}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-6 flex gap-3">
              <LiveButtonWithPreview href={p.live} label={t.ctas.live} />

              {hasRepo ? (
                <LiveButtonWithPreview href={p.repo!} label={t.ctas.code} />
              ) : (
                <button
                  type="button"
                  disabled
                  className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-400 cursor-not-allowed"
                  title="Private repository"
                >
                  {t.ctas.codePrivate}
                </button>
              )}
            </div>

            {/* subtle hover shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 mask-[radial-gradient(220px_140px_at_30%_15%,black,transparent)] bg-white/10 rounded-3xl" />
          </motion.div>
        );
      })}
    </div>
  );
}
