import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { machineImages, machinesData } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

function MachinesSection() {
  return (
    <SectionWrapper id="machines" className="noise-overlay bg-[#fff]">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
        <motion.div
          className="mb-5 max-w-6xl space-y-3"
          variants={textReveal}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-base">
            {machinesData.tag}
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900">
            {machinesData.heading}
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 lg:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.article
            variants={staggerItem}
            className="rounded-xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl"
          >
            <h3 className="font-heading text-2xl font-semibold text-slate-900">
              {machinesData.sheetMetalTitle}
            </h3>
            <ul className="mt-3 columns-2 gap-6 space-y-2 text-sm text-slate-700 sm:text-base">
              {machinesData.sheetMetalItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="rounded-xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl"
          >
            <h3 className="font-heading text-2xl font-semibold text-slate-900">
              {machinesData.mouldingTitle}
            </h3>
            <ul className="mt-3 columns-1 gap-6 space-y-2 text-sm text-slate-700 sm:text-base md:columns-2">
              {machinesData.mouldingItems.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </motion.article>
        </motion.div>

        <motion.div
          className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {machineImages.map((image) => (
            <motion.figure
              key={image.src}
              variants={staggerItem}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white/80"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="h-24 w-full object-cover sm:h-28 md:h-32"
              />
            </motion.figure>
          ))}
        </motion.div>

        <motion.p
          className="mt-4 text-lg font-semibold text-cyan-700"
          variants={textReveal}
          custom={0.08}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {machinesData.footer}
        </motion.p>
      </div>
    </SectionWrapper>
  );
}

export default MachinesSection;

