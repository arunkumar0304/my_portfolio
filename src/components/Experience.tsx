"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type ExperienceItem = {
  company: string;
  location: string;
  role: string;
  period: string;
  details: string;
  website?: string;
};

const experiences: ExperienceItem[] = [
  {
    company: "Hoffensoft",
    location: "Coimbatore",
    role: "Full Stack Developer",
    period: "Oct 2024 – Present",
    details:
      "Content Management Application - A CMS application for configuring content files, generating reports, and tracking content usage. Developed using React JS (18.2.0), MUI, Node JS (20.8.1), & MySQL with Sequelize. Collaborated with UI team, managed Redux store, and developed backend services.",
    website: "https://www.hoffensoft.com",
  },
  {
    company: "CoolDreamers",
    location: "Sivakasi",
    role: "Software Developer & Full Stack Development Trainer",
    period: "Sep 2023 – Aug 2024",
    details:
      "FitPulse Sports Portal - Next.js (12), Tailwind CSS, Node.js, & MongoDB. Zero Paper Application - Angular (9), Bootstrap 4, Nest JS (16) & MongoDB. Developed complete web applications from scratch with SSR, responsive UI, RESTful APIs, and admin dashboards.",
  },
  {
    company: "CloudB Software Solutions",
    location: "Virudhunagar",
    role: "Junior Application Developer",
    period: "Aug 2021 – Aug 2023",
    details:
      "Webcastcloud - React (17.0.2), Tailwind CSS, Redux, & React Hook Form. E-Book Mobile App Admin Portal - MERN Stack (React, Node.js, Express.js, MongoDB). BeeBook - PHP, Bootstrap 4, jQuery, MySQL. Built multiple projects from scratch with complex UI components and full-stack development.",
    website: "https://cloudbsoft.com",
  },
  {
    company: "Selvam Softech",
    location: "Sivakasi",
    role: "PHP Developer",
    period: "Jan 2021 – Jun 2021",
    details:
      "Agricultural E-Commerce Application - PHP, Bootstrap 4, jQuery, MySQL. Developed e-commerce web application for agricultural products with product management, role-based access control, order processing, and invoice generation.",
    website: "https://www.selvamsoftech.com",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      <div className="mt-6 space-y-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${exp.period}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.05 * idx }}
            className="rounded-xl border bg-white/60 p-5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60"
          >
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">
                  {exp.company}
                </h3>
                {exp.website ? (
                  <Link href={exp.website} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 underline">
                    Visit
                  </Link>
                ) : null}
              </div>
              <p className="text-sm text-zinc-500">{exp.period}</p>
            </div>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {exp.role} • {exp.location}
            </p>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-200">{exp.details}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
