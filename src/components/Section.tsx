"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export default function Section({ children, className, delay = 0 }: SectionProps) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.section
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}



