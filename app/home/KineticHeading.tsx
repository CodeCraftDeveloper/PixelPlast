"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.08 } },
};

const word: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function KineticHeading() {
  const reduceMotion = useReducedMotion();
  const lines = ["Plastic moulding.", "Built for industry."];

  return (
    <motion.h1
      className="hero-title"
      variants={reduceMotion ? undefined : container}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
    >
      {lines.map((line) => (
        <span className="hero-title-line" key={line}>
          {line.split(" ").map((item) => (
            <motion.span className="hero-word" variants={word} key={item}>
              {item}&nbsp;
            </motion.span>
          ))}
        </span>
      ))}
    </motion.h1>
  );
}
