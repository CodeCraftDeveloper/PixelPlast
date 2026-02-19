import { motion, useMotionValue, useSpring } from "framer-motion";

function TiltCard({ className = "", children, maxTilt = 8, ...props }) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, { stiffness: 140, damping: 16 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 140, damping: 16 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * (maxTilt * 2));
    rotateX.set((0.5 - py) * (maxTilt * 2));
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onBlur={resetTilt}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 900,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.article>
  );
}

export default TiltCard;
