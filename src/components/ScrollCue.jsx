import { motion } from "framer-motion";

function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 text-sm text-[#6b7280]"
    >
      <span className="uppercase tracking-[0.16em]">Scroll</span>
      <div className="relative h-9 w-6 rounded-full border border-[#d1d5db]">
        <motion.span
          className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-[#2563eb]"
          animate={{ y: [0, 14, 0], opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

export default ScrollCue;
