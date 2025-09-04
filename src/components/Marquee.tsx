"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="overflow-hidden py-6">
      <motion.div
        className="flex gap-8 whitespace-nowrap text-2xl font-semibold opacity-80"
        animate={{ x: [0, -600] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i}>React · Next.js · Node.js · Express · MySQL · MongoDB ·</span>
        ))}
      </motion.div>
    </div>
  );
}


