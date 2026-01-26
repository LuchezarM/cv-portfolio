// app/cv/components/Footer.tsx
"use client";

export default function Footer({ name, built }: { name: string; built: string }) {
  return (
    <footer className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-400 flex justify-between">
      <span>© {new Date().getFullYear()} {name}</span>
      <span>{built}</span>
    </footer>
  );
}
