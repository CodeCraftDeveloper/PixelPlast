import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { industries, industriesData, sectionVisuals } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

function IndustriesSection() {
  return (
    <SectionWrapper id="industries" className="noise-overlay bg-[#fff]">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-base"
          variants={textReveal}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industriesData.tag}
        </motion.p>
        <motion.h2
          className="mb-5 font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900"
          variants={textReveal}
          custom={0.06}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industriesData.heading}
        </motion.h2>

        <motion.div
          className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectionVisuals.industries.map((image) => (
            <motion.figure
              key={image.src}
              variants={staggerItem}
              className="overflow-hidden rounded-lg border border-slate-200"
            >
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-32 w-full object-cover sm:h-40" />
            </motion.figure>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry) => (
            <motion.article
              key={industry}
              variants={staggerItem}
              className="rounded-lg border border-slate-200 bg-white/85 p-3 text-center text-sm font-semibold text-slate-700 backdrop-blur sm:text-base"
            >
              {industry}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default IndustriesSection;

