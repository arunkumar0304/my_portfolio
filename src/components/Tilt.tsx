"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type TiltProps = {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
};

export default function Tilt({ children, className, maxTilt = 8, scale = 1.02 }: TiltProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [ -0.5, 0.5 ], [ maxTilt, -maxTilt ]);
  const rotateY = useTransform(x, [ -0.5, 0.5 ], [ -maxTilt, maxTilt ]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }

  function handleMouseLeave() {
    animate(x, 0, { duration: 0.4 });
    animate(y, 0, { duration: 0.4 });
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}



