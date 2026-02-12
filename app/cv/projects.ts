// app/cv/projects.ts

export type Project = {
  name: string;
  descKey:
   | "leadflow"
    | "ioana"
    | "bookish"
    | "nestx"
    | "godeutschland"
    | "photovoltaik"
    | "premium_cleaning"
    | "the_freeroom"
    | "crm_system";
  tags: string[];
  live: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    name: "LeadFlow (Concept UI)",
    descKey: "leadflow",
    tags: ["Next.js", "SaaS", "UI/UX"],
    live: "https://leadflow-enterprise.vercel.app",
    repo: "",
  },
  {
    name: "Linktree Ioanna",
    descKey: "ioana",
    tags: ["Next.js", "Landing Page", "UI/UX"],
    live: "https://linktree-ioanna.vercel.app",
    repo: "",
  },
  {
    name: "Bookish Flame — E-commerce",
    descKey: "bookish",
    tags: ["Next.js", "Supabase", "Stripe", "Econt API"],
    live: "https://www.bookish-flame.com",
    repo: "",
  },
  {
    name: "NestX Digital Agency",
    descKey: "nestx",
    tags: ["Next.js", "SEO", "UI/UX"],
    live: "https://nestx.agency",
    repo: "",
  },
  {
    name: "GoDeutschland",
    descKey: "godeutschland",
    tags: ["Next.js", "Multi-language", "SEO", "Lead Forms"],
    live: "https://godeutschland.de",
    repo: "",
  },
  {
    name: "Premium Brilliant Cleaning",
    descKey: "premium_cleaning",
    tags: ["Next.js", "Landing Page", "Lead Forms", "Performance"],
    live: "https://www.premium-cleaning.bg",
    repo: "",
  },
  {
    name: "The Free Room",
    descKey: "the_freeroom",
    tags: ["Next.js", "Landing Page", "Lead Forms", "Performance"],
    live: "https://www.thefreeroom.bg/bg",
    repo: "",
  },
  {
    name: "GoEnergy Pro",
    descKey: "crm_system",
    tags: ["Next.js", "Landing Page", "Lead Forms", "Performance"],
    live: "https://www.goenergy.pro/en",
    repo: "",
  },
];
