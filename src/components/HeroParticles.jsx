import { motion } from "framer-motion";

const particles = [
  { x: "8%", y: "22%", size: 5, duration: 8.5, delay: 0.3 },
  { x: "16%", y: "68%", size: 4, duration: 10.2, delay: 0.8 },
  { x: "30%", y: "40%", size: 6, duration: 9.6, delay: 1.2 },
  { x: "45%", y: "78%", size: 5, duration: 11, delay: 0.4 },
  { x: "58%", y: "28%", size: 4, duration: 8.8, delay: 0.1 },
  { x: "72%", y: "55%", size: 6, duration: 10.5, delay: 0.6 },
  { x: "84%", y: "35%", size: 5, duration: 9.2, delay: 1.5 },
  { x: "91%", y: "72%", size: 4, duration: 10.8, delay: 0.9 },
];

function HeroParticles() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={`${particle.x}-${particle.y}-${index}`}
          className="absolute rounded-full bg-cyan-300/70 blur-[1px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            boxShadow: "0 0 18px rgba(56, 189, 248, 0.75)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            opacity: [0.3, 1, 0.35],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default HeroParticles;
