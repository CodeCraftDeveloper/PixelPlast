import { motion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

function SectionHeading({ tag, title, subtitle }) {
  return (
    <div className="space-y-4">
      {tag ? (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: easing }}
          className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]"
        >
          {tag}
        </motion.p>
      ) : null}
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: easing }}
        className="text-4xl font-semibold leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.08, ease: easing }}
          className="max-w-3xl text-base text-[#6b7280] sm:text-lg"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
