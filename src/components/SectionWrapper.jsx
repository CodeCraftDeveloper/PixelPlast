import { motion } from "framer-motion";
import { sectionReveal } from "./animationVariants";

function SectionWrapper({
  id,
  className = "",
  children,
  animateOnView = true,
}) {
  return (
    <motion.section
      id={id}
      className={`relative min-h-screen w-full overflow-hidden ${className}`}
      variants={animateOnView ? sectionReveal : undefined}
      initial={animateOnView ? "hidden" : false}
      whileInView={animateOnView ? "visible" : undefined}
      viewport={animateOnView ? { once: true, amount: 0.2 } : undefined}
    >
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
