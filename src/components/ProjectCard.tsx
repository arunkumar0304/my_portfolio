"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Tilt from "./Tilt";

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href?: string;
};

export default function ProjectCard({ title, description, tags, href }: Project) {
  return (
    <Tilt className="group rounded-xl border bg-white/60 p-5 shadow-sm backdrop-blur transition dark:border-zinc-800 dark:bg-zinc-950/60">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          {href ? (
            <Link
              href={href}
              className="rounded-md border px-2 py-1 text-xs opacity-0 transition group-hover:opacity-100 dark:border-zinc-800"
            >
              Visit
            </Link>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border px-2 py-0.5 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-300">
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Tilt>
  );
}


