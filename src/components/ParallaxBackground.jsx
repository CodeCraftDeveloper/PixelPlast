import { motion, useScroll, useTransform } from "framer-motion";

function ParallaxBackground({
  targetRef,
  src,
  alt,
  opacityClass = "opacity-20",
  offset = 70,
  className = "",
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div className={`absolute inset-0 -z-20 overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-[120%] w-full object-cover ${opacityClass}`}
        style={{ y }}
      />
    </div>
  );
}

export default ParallaxBackground;
