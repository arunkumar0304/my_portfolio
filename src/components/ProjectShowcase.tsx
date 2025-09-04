"use client";

import ProjectCard, { Project } from "./ProjectCard";

const featured: Project[] = [
  {
    title: "Content Management Application",
    description:
      "CMS to configure content files, generate reports, track usage, with Git pull/push/commit integration and access control.",
    tags: ["React 18.2", "MUI", "Node 20", "MySQL", "Sequelize"],
  },
  {
    title: "FitPulse Sports Portal",
    description:
      "Next.js SSR platform for event registration, progress tracking, and leaderboards with protected routes and admin dashboards.",
    tags: ["Next.js 12", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    title: "Zero Paper Education Portal",
    description:
      "ERP for admissions, academics, exams, OBE reports, and accounts with Angular/Nest.js stack.",
    tags: ["Angular 9", "Nest 16", "MongoDB"],
  },
];

export default function ProjectShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}


