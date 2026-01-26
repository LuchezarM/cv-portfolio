// app/cv/components/background/AnimatedTechLogoBackground.tsx
"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import {
  ReactLogo,
  NextLogo,
  TailwindLogo,
  TypeScriptLogo,
  SupabaseLogo,
  StripeLogo,
  GitHubLogo,
} from "./logos";

export default function AnimatedTechLogoBackground() {
  const reduced = usePrefersReducedMotion();

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

      {items.map(({ name, Svg, x, y, size, duration, delay, drift, rot, i }) => (
        <motion.div
          key={name + i}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0 }}
          animate={
            reduced
              ? { opacity: 0.08 }
              : {
                  opacity: [0.06, 0.14, 0.06],
                  y: [-drift, drift, -drift],
                  x: [0, (i % 2 === 0 ? 1 : -1) * (drift * 0.6), 0],
                  rotate: [0, rot, 0],
                }
          }
          transition={
            reduced
              ? { duration: 0.2 }
              : {
                  duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }
          }
        >
          <div
            className="text-white/80 drop-shadow-[0_0_16px_rgba(255,255,255,0.06)]"
            style={{ width: size, height: size }}
          >
            <Svg />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
