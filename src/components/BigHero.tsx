"use client";

import { motion } from "framer-motion";

export default function BigHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <motion.h1
        className="text-balance text-5xl font-extrabold leading-[0.95] tracking-[-0.02em] sm:text-7xl md:text-8xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        ARUNKUMAR P.
      </motion.h1>
      <motion.p
        className="mt-4 text-xl font-semibold text-zinc-800 dark:text-zinc-100"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
      >
        Full Stack Developer — React, Next.js, Node.js, Express, MySQL, MongoDB
      </motion.p>
      <motion.p
        className="mt-4 max-w-3xl text-lg text-zinc-600 dark:text-zinc-300"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        A dedicated developer with 4.5+ years experience building products end-to-end: CMS platforms, sports portals, educational ERPs and e‑commerce — focused on performance, accessibility, and fluid motion.
      </motion.p>
    </section>
  );
}


