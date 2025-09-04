"use client";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur dark:bg-zinc-950/70">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <Link href="/" className="font-semibold">Arunkumar</Link>
        </motion.div>
        <nav className="flex items-center gap-4 text-sm">
          {[
            { href: "#about", label: "About" },
            { href: "#experience", label: "Experience" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((item, index) => (
            <motion.div key={item.href} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.05 * index }}>
              <Link href={item.href} className="hover:underline">
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: 0.25 }}>
            <ThemeToggle />
          </motion.div>
        </nav>
      </div>
    </header>
  );
}
