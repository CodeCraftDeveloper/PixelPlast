"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/components/motion/use-prefers-reduced-motion";

export function Reveal({
  children,
  className,
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const shouldReduceMotion = usePrefersReducedMotion();

  if (shouldReduceMotion) {
    return <div id={id} className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      id={id}
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02, margin: "0px 0px 80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
