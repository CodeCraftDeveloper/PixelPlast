import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { textReveal, staggerContainer, staggerItem } from "./animationVariants";
import { aboutData, sectionVisuals } from "../data/siteData";

function AboutSection() {
  return (
    <SectionWrapper id="about-details" className="noise-overlay bg-[#fff]">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-base"
          variants={textReveal}
          custom={0.03}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.tag}
        </motion.p>

        <motion.h2
          className="max-w-6xl font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900"
          variants={textReveal}
          custom={0.06}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.heading}
        </motion.h2>

        <motion.div
          className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.body.map((paragraph) => (
            <motion.p key={paragraph} variants={staggerItem} className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {paragraph}
            </motion.p>
          ))}
        </motion.div>

        <motion.div
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.capabilities.map((capability) => (
            <motion.article
              key={capability}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white/85 p-3 text-sm text-slate-700 backdrop-blur sm:text-base"
            >
              <CheckCircle2 size={16} className="text-cyan-600" />
              <span>{capability}</span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectionVisuals.about.map((image) => (
            <motion.figure
              key={image.src}
              variants={staggerItem}
              className="overflow-hidden rounded-lg border border-slate-200"
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-32 w-full object-cover sm:h-40" />
            </motion.figure>
          ))}
        </motion.div>

      </div>
    </SectionWrapper>
  );
}

export default AboutSection;

