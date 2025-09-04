"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute left-1/2 top-0 -translate-x-1/2" width="1200" height="1200" viewBox="0 0 1200 1200" fill="none" aria-hidden>
        <defs>
          <radialGradient id="g" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="600"
          cy="400"
          r="300"
          fill="url(#g)"
          animate={{ cy: [380, 420, 380] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="520"
          cy="760"
          r="260"
          fill="url(#g)"
          animate={{ cx: [520, 560, 520] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}



