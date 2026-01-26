// app/cv/components/SkillsLoop.tsx
"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

export default function SkillsLoop({ items }: { items: string[] }) {
  const reduced = usePrefersReducedMotion();
  const loopItems = [...items, ...items];

  return (
    <div className="mt-6 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-zinc-950 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-zinc-950 to-transparent z-10" />

      <motion.div
        className="flex gap-2 py-4 w-max"
        animate={reduced ? undefined : { x: ["0%", "-50%"] }}
        transition={
          reduced
            ? undefined
            : { duration: 18, ease: "linear", repeat: Infinity }
        }
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
