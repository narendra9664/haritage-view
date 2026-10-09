"use client";

import { motion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
};

// Fades content up the first time it scrolls into view.
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const Component = as === "li" ? motion.li : motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
