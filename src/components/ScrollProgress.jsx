import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress({ containerRef }) {
  const { scrollYProgress } = useScroll(containerRef ? { container: containerRef } : undefined);
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });

  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-50 hidden h-44 w-1.5 -translate-y-1/2 rounded-full bg-[#fff]/70 lg:block">
      <motion.div
        className="h-full w-full origin-top rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-orange-500 shadow-[0_0_18px_rgba(56,189,248,0.8)]"
        style={{ scaleY }}
      />
    </div>
  );
}

export default ScrollProgress;
