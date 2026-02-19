import { useScroll, useSpring } from "framer-motion";

function useSmoothScrollProgress(options, springOptions = {}) {
  const { scrollYProgress } = useScroll(options);

  return useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.3,
    ...springOptions,
  });
}

export default useSmoothScrollProgress;
