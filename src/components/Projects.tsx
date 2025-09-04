"use client";

import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "Content Management Application",
    description: "A CMS application for configuring content files, generating reports, and tracking content usage. Integrates Git management for pull, push, and commit actions with access control.",
    tags: ["React JS 18.2.0", "MUI", "Node JS 20.8.1", "MySQL", "Sequelize"],
    href: "#",
  },
  {
    title: "FitPulse Sports Portal",
    description: "A responsive web application for sports competition platform supporting marathon, running, and cycling events. Features event registration, real-time progress tracking, and leaderboards.",
    tags: ["Next.js 12", "Tailwind CSS", "Node.js", "MongoDB", "SSR"],
  },
  {
    title: "Zero Paper Application",
    description: "A web portal automating student admissions, academics, exams, faculty management, OBE reports, infrastructure, and accounts for educational institutions.",
    tags: ["Angular 9", "Bootstrap 4", "Nest JS 16", "MongoDB"],
  },
  {
    title: "Webcastcloud",
    description: "A cloud-based video library platform similar to Netflix and Amazon Prime, automating management of events, users, videos, infrastructure, reports, and accounts.",
    tags: ["React 17.0.2", "Tailwind CSS", "Redux", "React Hook Form"],
  },
  {
    title: "E-Book Mobile App Admin Portal",
    description: "Admin portal for a mobile app designed for CA students, featuring modules for book management, discounts, category organization, order staging, and invoice generation.",
    tags: ["MERN Stack", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "BeeBook",
    description: "B2C web application for bill and account management, encompassing product, purchase, and sales management, bill generation, and comprehensive account reporting.",
    tags: ["PHP", "Bootstrap 4", "jQuery", "MySQL"],
  },
  {
    title: "Agricultural E-Commerce",
    description: "E-commerce web application for agricultural products with product management, role-based access control, order processing, and invoice generation.",
    tags: ["PHP", "Bootstrap 4", "jQuery", "MySQL"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Featured Projects</h2>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}



