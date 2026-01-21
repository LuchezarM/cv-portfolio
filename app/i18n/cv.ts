// app/i18n/cv.ts

export type Lang = "bg" | "en";

export const CV_TEXT: Record<
  Lang,
  {
    meta: {
      name: string;
      role: string;
      intro: string;
      available: string;
    };
    top: {
      download: string;
    };
    sections: {
      skills: { title: string; subtitle: string };
      experience: { title: string; subtitle: string };
      projects: { title: string; subtitle: string };
    };
    snapshot: {
      title: string;
      location: string;
      level: string;
      languages: string;
      interests: string;
      goalLabel: string;
      goalText: string;
      values: {
        location: string;
        level: string;
        languages: string;
        interests: string;
      };
    };
    stats: {
      shipped: string;
      stack: string;
      focus: string;
    };
    ctas: {
      live: string;
      code: string;
      codePrivate: string;
      featured: string;
    };
    footer: {
      built: string;
    };

    // ✅ NEW
    projectsDesc: Record<string, string>;
  }
> = {
  bg: {
    meta: {
      name: "Luchezar Mitov",
      role: "Frontend Developer (React / Next.js)",
      intro:
        "Правя бързи и модерни уеб приложения. Харесвам чист UI, добър UX и интеграции (Supabase, Stripe, REST APIs).",
      available: "Отворен за работа",
    },
    top: { download: "Свали PDF" },
    sections: {
      skills: {
        title: "Умения",
        subtitle: "Технологии, с които работя комфортно",
      },
      experience: {
        title: "Опит",
        subtitle: "Какво реално съм правил",
      },
      projects: {
        title: "Проекти",
        subtitle: "",
      },
    },
    snapshot: {
      title: "Snapshot",
      location: "Локация",
      level: "Ниво",
      languages: "Езици",
      interests: "Фокус",
      goalLabel: "Цел:",
      goalText:
        "работа като Frontend Developer, с възможност да допринасям и по API/интеграции.",
      values: {
        location: "България / дистанционно",
        level: "Junior → Mid",
        languages: "BG / EN",
        interests: "E-commerce, performance, clean UI",
      },
    },
    stats: {
      shipped: "Проекти",
      stack: "Основен стек",
      focus: "Фокус",
    },
    ctas: {
      live: "Live",
      code: "Code",
      codePrivate: "Code (private)",
      featured: "Featured",
    },
    footer: {
      built: "Built with Next.js + Tailwind",
    },

    // ✅ NEW
    projectsDesc: {
      bookish:
        "Онлайн магазин с количка, checkout, admin панел, Stripe плащания и Еконт интеграция.",
      nestx:
        "Сайт за дигитална агенция с фокус върху дизайн, performance и SEO структура.",
      godeutschland:
        "Мултиезичен корпоративен сайт с форми за запитвания и SEO оптимизация.",
      photovoltaik:
        "Страница/конфигуратор за фотоволтаици с динамични форми и логика за оферти.",
      premium_cleaning:
        "Лендинг страница за услуги с фокус върху конверсии, скорост и lead generation.",
      the_freeroom:
        "Лендинг страница за услуга с фокус върху UX, performance и lead generation.",
      crm_system:
        "Лендинг страница за услуга с фокус върху UX, performance и lead generation.",
    },
  },

  en: {
    meta: {
      name: "Luchezar Mitov",
      role: "Frontend Developer (React / Next.js)",
      intro:
        "I build modern, fast and scalable web applications. I care about clean UI, strong UX and integrations (Supabase, Stripe, REST APIs).",
      available: "Available for work",
    },
    top: { download: "Download PDF" },
    sections: {
      skills: {
        title: "Skills",
        subtitle: "Technologies I’m comfortable with",
      },
      experience: {
        title: "Experience",
        subtitle: "What I’ve shipped in practice",
      },
      projects: {
        title: "Projects",
        subtitle: "",
      },
    },
    snapshot: {
      title: "Snapshot",
      location: "Location",
      level: "Level",
      languages: "Languages",
      interests: "Focus",
      goalLabel: "Goal:",
      goalText:
        "a Frontend Developer role with room to contribute to APIs and integrations.",
      values: {
        location: "Bulgaria / remote",
        level: "Junior → Mid",
        languages: "BG / EN",
        interests: "E-commerce, performance, clean UI",
      },
    },
    stats: {
      shipped: "Projects shipped",
      stack: "Primary stack",
      focus: "Focus",
    },
    ctas: {
      live: "Live",
      code: "Code",
      codePrivate: "Code (private)",
      featured: "Featured",
    },
    footer: {
      built: "Built with Next.js + Tailwind",
    },

    // ✅ NEW
    projectsDesc: {
      bookish:
        "E-commerce platform with cart, checkout, admin panel, Stripe payments and Econt integration.",
      nestx:
        "Modern agency website focused on design, performance and SEO structure.",
      godeutschland:
        "Multilingual corporate site with lead forms and SEO optimization.",
      photovoltaik:
        "Solar/photovoltaik landing + configurator with dynamic forms and offer flow.",
      premium_cleaning:
        "Service landing page focused on conversions, speed and lead generation.",
      the_freeroom:
        "Landing page for a service with focus on UX, performance and lead generation.",
      crm_system:
        "Landing page for a service with focus on UX, performance and lead generation.",
    },
  },
};
