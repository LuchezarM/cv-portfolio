// app/cv/CVClient.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { CV_TEXT, type Lang } from "./i18n/cv";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot";
import SectionTitle from "./components/SectionTitle";
import SkillsLoop from "./components/SkillsLoop";
import ProjectsGrid from "./components/ProjectsGrid";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import AnimatedTechLogoBackground from "./components/background/AnimatedTechLogoBackground";
import { skills } from "./data/skills";
import { experience } from "./data/experience";
import { projects } from "./projects"; // ✅ fixed path
import { motion } from "framer-motion"; 
import { container, item } from "./lib/motion";

export default function CVClient() {
  const [lang, setLang] = useState<Lang>("bg");

  useEffect(() => {
    const saved = localStorage.getItem("cv-lang");
    if (saved === "bg" || saved === "en") setLang(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("cv-lang", lang);
  }, [lang]);

  const t = useMemo(() => CV_TEXT[lang], [lang]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 opacity-[0.035] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="pointer-events-none fixed -top-32 right-0 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none fixed -bottom-32 left-0 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
      <AnimatedTechLogoBackground />

      <div className="mx-auto max-w-5xl px-4 py-10 relative z-10">
        <TopBar t={t} lang={lang} setLang={setLang} />

        <motion.div variants={container} initial="hidden" animate="show">
          <motion.section
            variants={item}
            className="grid gap-6 md:grid-cols-[1.15fr_0.85fr]"
          >
            <Hero t={t} />
            <Snapshot t={t} />
          </motion.section>

          <motion.section variants={item} className="mt-14">
            <SectionTitle
              title={t.sections.skills.title}
              subtitle={t.sections.skills.subtitle}
            />
            <SkillsLoop items={skills} />
          </motion.section>

          <motion.section variants={item} className="mt-14">
            <SectionTitle
              title={t.sections.experience.title}
              subtitle={t.sections.experience.subtitle}
            />
            <div className="mt-6 space-y-4">
              {experience.map((e) => (
                <ExperienceCard key={e.period} period={e.period} lang={lang} />
              ))}
            </div>
          </motion.section>

          <motion.section variants={item} className="mt-14">
            <SectionTitle
              title={t.sections.projects.title}
              subtitle={t.sections.projects.subtitle}
            />
            <ProjectsGrid projects={projects} t={t} />
          </motion.section>

          <motion.div variants={item}>
            <Footer name={t.meta.name} built={t.footer.built} />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
