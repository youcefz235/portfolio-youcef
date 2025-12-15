import React, { useEffect, useMemo, useState } from "react";

export default function App() {
  // ===== DARK MODE (OK) =====
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
  });

  useEffect(() => {
    const root = document.documentElement; // <html>
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  // ✅ CV URL (corrigé pour DEV + GitHub Pages)
  const cvUrl = useMemo(() => {
    // BASE_URL finit par "/" (ex: "/" en dev, "/portfolio-youcef/" en prod)
    return `${import.meta.env.BASE_URL}cv-youcef-zitouni.pdf`;
  }, []);

  // ===== LINKS =====
  const links = useMemo(
    () => ({
      github: "https://github.com/youcefz235",
      linkedin: "https://www.linkedin.com/in/youcef-zitouni-a3b431282/",
      email: "zitouniyouxef@gmail.com",
      cv: cvUrl,
    }),
    [cvUrl]
  );

  // ===== PROJETS (liens GitHub OK) =====
  const projects = useMemo(
    () => [
      {
        title: "Notea — Assistant IA pour notes & résumés (Omeka S)",
        desc: "Assistant IA intégré à Omeka S : génération de fiches, résumés, QCM, CV + création d’items via API + page externe apiOmk.html (iframe).",
        tags: ["Omeka S", "IA", "API", "PHP", "UX"],
        repo: "https://github.com/youcefz235/Notea",
      },
      {
        title: "YOUSEARCH — Moteur de recherche documentaire (TF-IDF + NLP)",
        desc: "Indexation (pdf/docx/txt/html), extraction & nettoyage, recherche AND/OR, scoring TF-IDF, nuage de mots interactif, interface propre.",
        tags: ["Django", "Python", "NLP", "TF-IDF"],
        repo: "https://github.com/youcefz235/yousearch",
      },
      {
        title: "Collab8 — Réseau social académique pour chercheurs",
        desc: "Plateforme web pour publier des problèmes de recherche, trouver des collaborateurs, gérer profils/compétences, échanges orientés collaboration.",
        tags: ["Web", "Back-End", "Auth", "CRUD"],
        repo: "https://github.com/youcefz235/collab8",
      },
      {
        title: "Scooter-Rental — Location de trottinettes",
        desc: "Application full-stack : backend API REST Node/Express/MySQL + frontend React responsive (catalogue, filtres, réservation).",
        tags: ["React", "Node.js", "API REST", "MySQL"],
        repo: "https://github.com/youcefz235/scooter-rental",
      },
      {
        title: "THYP — Formulaire Projet",
        desc: "Mini-projet front : formulaire + page résultat, structure claire et simple pour un rendu propre.",
        tags: ["HTML", "CSS", "JS"],
        repo: "https://github.com/youcefz235/THYP_25-26_formulaireProjet",
      },
      {
        title: "Harmony — The Sound of Us",
        desc: "Plateforme communautaire musicale centrée sur la mémoire sonore et les interactions sociales (projet).",
        tags: ["Web", "Communautaire", "UI"],
        repo: "https://github.com/DaSilvaThomas/harmony-v2",
      },
    ],
    []
  );

  // ===== COMPÉTENCES (inclut SYSTÈMES 3e année) =====
  const skills = useMemo(
    () => [
      {
        title: "Front-End",
        icon: "🖥️",
        items: [
          "HTML5 / CSS3 (Flexbox, Grid)",
          "JavaScript (ES6+)",
          "React (hooks, composants)",
          "UI responsive & accessible",
          "Intégration propre & moderne",
        ],
      },
      {
        title: "Back-End",
        icon: "🛠️",
        items: [
          "Node.js / Express (API REST)",
          "Django (apps, ORM, templates)",
          "Laravel (bases, CRUD, auth)",
          "Conception d’API & endpoints",
          "Bonnes pratiques (structure, refacto)",
        ],
      },
      {
        title: "Data & IA",
        icon: "🧠",
        items: [
          "NLP / TF-IDF (indexation, recherche)",
          "Extraction & nettoyage de texte",
          "Python (scripts, traitement)",
          "WordCloud / visualisation",
          "Intérêt fort pour IA appliquée",
        ],
      },
      {
        title: "Systèmes & DevOps (3ᵉ année)",
        icon: "⚙️",
        items: [
          "Administration Linux / Windows (bases solides)",
          "Réseaux & protocoles (notions + pratique)",
          "Scripting Bash & automatisation",
          "Git / GitHub (workflow, branches)",
          "CI/CD (GitLab CI : découverte & pratique)",
          "Docker (bases) + notions déploiement",
          "Cloud basics (AWS, CloudFormation : stage)",
        ],
      },
      {
        title: "Bases de données",
        icon: "🗄️",
        items: [
          "SQL (modélisation, requêtes)",
          "MySQL / PostgreSQL",
          "Notions MongoDB",
          "Conception (MCD/MLD selon besoins)",
        ],
      },
    ],
    []
  );

  // ===== PARCOURS (structure exacte) =====
  const academicTimeline = useMemo(
    () => [
      {
        title: "Master 2 Technologies Hypermédias — Université Paris 8 (THYP)",
        period: "2025 — 2026",
        desc: "Spécialisation : développement web, UX/UI design, systèmes multimédias et gestion de projets numériques.",
        chips: ["Web", "UX/UI", "Projets"],
      },
      {
        title: "Master 1 Développement & Gestion de Projet Informatique",
        period: "2024 — 2025",
        desc: "Cours : React.js, Laravel, Node.js, APIs REST.",
        chips: ["React", "Laravel", "API"],
      },
      {
        title: "Bachelor Administrateur des Systèmes d’Information",
        period: "2023 — 2024",
        desc: "Administration Linux/Windows, Réseaux & Protocoles, SQL/MySQL/PostgreSQL.",
        chips: ["Systèmes", "Réseaux", "SQL"],
      },
      {
        title: "Classes préparatoires — Sciences & Technologie",
        period: "2020 — 2022",
        desc: "Analyse, Algèbre, Physique, Chimie (cycle préparatoire).",
        chips: ["Analyse", "Physique", "Chimie"],
      },
      {
        title: "Baccalauréat — Sciences Expérimentales",
        period: "2020",
        desc: "Obtention du Bac, spécialité Sciences Expérimentales.",
        chips: ["Sciences"],
      },
    ],
    []
  );

  const experiences = useMemo(
    () => [
      {
        title: "Rabah (Paris) — Stage",
        period: "Mars 2025 — Mai 2025",
        desc: "Scripts Python d’automatisation (nettoyage fichiers, génération rapports), découverte CI/CD (GitLab CI), supervision via scripts shell.",
        chips: ["Python", "DevOps", "CI/CD"],
      },
      {
        title: "EDF (Paris, Île-de-France) — Stage",
        period: "Mars 2024 — Mai 2024",
        desc: "Scripts Bash pour services AWS basiques, pipelines CI/CD GitLab, automatisation infra avec CloudFormation.",
        chips: ["Bash", "AWS", "Cloud"],
      },
      {
        title: "ENSH — Stage",
        period: "Mars 2022 — Avril 2022",
        desc: "Développement Python éducatif & algorithmique : exercices, mini-calculatrice, amélioration de la clarté du code.",
        chips: ["Python", "Algo", "Pédagogie"],
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Header dark={dark} setDark={setDark} />

      {/* HERO */}
      <section id="hero" className="pt-24">
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(56,189,248,0.18),transparent_45%)]" />
          <Container>
            <div className="relative grid items-center gap-10 py-16 md:grid-cols-2 md:py-20">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs tracking-[0.25em] text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                  EN RECHERCHE DE STAGE PFE
                </div>

                <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl">
                  Développeur Full-Stack{" "}
                  <span className="block text-indigo-600 dark:text-indigo-400">
                    Web / Data
                  </span>
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-700 dark:text-slate-200">
                  Je construis des applications web complètes (front moderne, API,
                  base de données) avec un vrai intérêt pour la data et l’IA.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#projects">
                    <Button>Voir mes projets</Button>
                  </a>

                  {/* ✅ CV DOWNLOAD (corrigé) */}
                  <a href={links.cv} download="CV-Youcef-Zitouni.pdf">
                    <Button variant="ghost">Télécharger mon CV</Button>
                  </a>

                  {/* ✅ BONUS PRO : ouvrir le CV */}
                  <a href={links.cv} target="_blank" rel="noreferrer">
                    <Button variant="ghost">Ouvrir le CV</Button>
                  </a>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["React", "Laravel", "Django", "Node.js", "API REST", "Docker", "PostgreSQL", "Python"].map(
                    (t) => (
                      <Chip key={t}>{t}</Chip>
                    )
                  )}
                </div>
              </div>

              <Card className="p-7 md:p-8">
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  En deux phrases
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  Je cherche une équipe où je peux apprendre vite, être utile
                  rapidement et prendre en main de vraies fonctionnalités
                  (développement, corrections, refacto).
                </p>

                <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <InfoRow label="🎓" value="Master 2 — Université Paris 8 (THYP)" />
                  <InfoRow label="🧩" value="Full-Stack : React • Laravel • Django • API" />
                  <InfoRow label="📍" value="France" />
                  <InfoRow label="✉️" value={links.email} />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <Button variant="ghost">GitHub</Button>
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer">
                    <Button variant="ghost">LinkedIn</Button>
                  </a>
                </div>
              </Card>
            </div>
          </Container>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            title="À propos"
            subtitle="Pour situer qui je suis et comment je travaille."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="space-y-4 text-slate-700 dark:text-slate-200">
              <p>
                Je suis <b>Youcef Zitouni</b>, développeur full-stack orienté web / data.
                J’aime partir d’un besoin concret, structurer le projet, et livrer
                une interface claire et agréable.
              </p>
              <p>
                En stage PFE, je veux progresser au contact d’une équipe, prendre
                en charge des tâches réelles et améliorer en continu (features,
                corrections, refacto).
              </p>
            </div>

            <Card className="p-7">
              <div className="grid gap-4 text-sm text-slate-700 dark:text-slate-200">
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-300">
                    Localisation
                  </div>
                  <div className="mt-1 font-semibold">France</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-300">
                    Objectif
                  </div>
                  <div className="mt-1 font-semibold">Stage PFE — Développement Web / Full-Stack / Data</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-300">
                    Points forts
                  </div>
                  <div className="mt-1 font-semibold">
                    Sérieux, persévérant, autonome, amélioration continue
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            title="Compétences"
            subtitle="Ce que j’utilise réellement (aligné avec mes modules et mes projets)."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((s) => (
              <Card key={s.title} className="p-7">
                <div className="flex items-center gap-3">
                  <div className="text-xl">{s.icon}</div>
                  <div className="text-lg font-extrabold">{s.title}</div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-2">
                      <span className="mt-[2px] text-indigo-600 dark:text-indigo-400">•</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            title="Projets"
            subtitle="Un aperçu de projets personnels et universitaires."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <Card key={p.title} className="overflow-hidden">
                <div className="p-7">
                  <div className="text-lg font-extrabold">{p.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                    {p.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </div>

                  <div className="mt-6">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      Voir sur GitHub →
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* TIMELINE (structure exacte) */}
      <section id="timeline" className="py-16 md:py-20">
        <Container>
          <SectionHeader title="Parcours" subtitle="Académique + expériences." />

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {/* Académique */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="text-xl">🎓</span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Parcours académique
                </h3>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-5 top-2 h-full w-px bg-indigo-500/30" />
                <div className="space-y-7">
                  {academicTimeline.map((item) => (
                    <div key={item.title} className="relative">
                      <div className="absolute -left-[34px] top-7 h-4 w-4 rounded-full bg-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
                      <Card className="p-6 md:p-7">
                        <div className="text-2xl font-black leading-tight">
                          {item.title}
                        </div>
                        <div className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                          {item.period}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                          {item.desc}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.chips.map((c) => (
                            <Chip key={c}>{c}</Chip>
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Expériences */}
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="text-xl">💼</span>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                  Expériences
                </h3>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-5 top-2 h-full w-px bg-indigo-500/30" />
                <div className="space-y-7">
                  {experiences.map((item) => (
                    <div key={item.title} className="relative">
                      <div className="absolute -left-[34px] top-7 h-4 w-4 rounded-full bg-indigo-600 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]" />
                      <Card className="p-6 md:p-7">
                        <div className="text-2xl font-black leading-tight">
                          {item.title}
                        </div>
                        <div className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                          {item.period}
                        </div>
                        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                          {item.desc}
                        </p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.chips.map((c) => (
                            <Chip key={c}>{c}</Chip>
                          ))}
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16 md:py-20">
        <Container>
          <SectionHeader
            title="Contact"
            subtitle="Pour parler d’un besoin, d’un projet ou d’un stage PFE."
          />

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="text-slate-700 dark:text-slate-200">
              <p>
                Si mon profil correspond à ce que vous cherchez, je suis disponible
                pour un échange (visio ou sur place).
              </p>

              <div className="mt-6 space-y-3 text-sm">
                <div>
                  <b>Email :</b>{" "}
                  <a
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                    href={`mailto:${links.email}`}
                  >
                    {links.email}
                  </a>
                </div>
                <div>
                  <b>GitHub :</b>{" "}
                  <a
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                    href={links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {links.github}
                  </a>
                </div>
                <div>
                  <b>LinkedIn :</b>{" "}
                  <a
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                    href={links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Voir mon profil
                  </a>
                </div>
                <div>
                  <b>CV :</b>{" "}
                  <a
                    className="text-indigo-600 hover:underline dark:text-indigo-400"
                    href={links.cv}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ouvrir le PDF
                  </a>
                </div>
              </div>
            </div>

            <Card className="p-7">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const name = fd.get("name");
                  const email = fd.get("email");
                  const msg = fd.get("message");
                  window.location.href = `mailto:${links.email}?subject=Contact Portfolio - ${encodeURIComponent(
                    name || ""
                  )}&body=${encodeURIComponent(`Email: ${email}\n\n${msg}`)}`;
                }}
                className="space-y-4"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-300">
                      Nom / Prénom
                    </label>
                    <input
                      name="name"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-white/5"
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-white/5"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-500 dark:text-slate-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm outline-none focus:border-indigo-400 dark:border-white/10 dark:bg-white/5"
                    placeholder="Parlez-moi de votre besoin..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Button type="submit">Envoyer</Button>
                  <span className="text-xs text-slate-500 dark:text-slate-300">
                    Envoi via votre app mail
                  </span>
                </div>
              </form>
            </Card>
          </div>
        </Container>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-300">
        © {new Date().getFullYear()} · Youcef Zitouni · Portfolio
      </footer>
    </div>
  );
}

/* ===================== COMPONENTS ===================== */

function Header({ dark, setDark }) {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-950/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#hero" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 text-white shadow-soft">
              {"</>"}
            </div>
            <div className="leading-tight">
              <div className="font-extrabold">Youcef Zitouni</div>
              <div className="text-xs text-slate-500 dark:text-slate-300">
                Développeur Full-Stack · Web / Données
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex">
            <a className="hover:text-slate-900 dark:hover:text-white" href="#hero">Accueil</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#about">À propos</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#skills">Compétences</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#projects">Projets</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#timeline">Parcours</a>
            <a className="hover:text-slate-900 dark:hover:text-white" href="#contact">Contact</a>
          </nav>

          <button
            onClick={() => setDark((v) => !v)}
            className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            aria-label="Toggle dark mode"
            title="Dark mode"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </Container>
    </div>
  );
}

function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-black tracking-tight md:text-5xl">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
        {subtitle}
      </p>
    </div>
  );
}

function Card({ className = "", children }) {
  return (
    <div
      className={
        "rounded-3xl border border-slate-200 bg-white/70 shadow-soft backdrop-blur dark:border-white/10 dark:bg-white/5 " +
        className
      }
    >
      {children}
    </div>
  );
}

function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
      {children}
    </span>
  );
}

function Button({ children, variant = "solid", type = "button" }) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const solid =
    "bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400";
  const ghost =
    "border border-slate-200 bg-white/70 text-slate-800 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white";
  return (
    <button type={type} className={`${base} ${variant === "ghost" ? ghost : solid}`}>
      {children}
    </button>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-6">{label}</span>
      <span>{value}</span>
    </div>
  );
}
