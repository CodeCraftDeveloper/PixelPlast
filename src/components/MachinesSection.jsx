import { motion } from "framer-motion";
import { Cog, Gauge, Workflow } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { machineImages, machinesData } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

function MachinesSection() {
  return (
    <SectionWrapper id="machines" className="noise-overlay bg-[#f8fafc]">
      <motion.div
        className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ y: [0, 14, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-8 md:px-12">
        <motion.div
          className="max-w-6xl space-y-3"
          variants={textReveal}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 sm:text-base">
            {machinesData.tag}
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900">
            {machinesData.heading}
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Production infrastructure designed for precision throughput, stable
            quality, and scalable OEM & ODM output.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 xl:grid-cols-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.article
            variants={staggerItem}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/45 xl:col-span-4 xl:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Machine Ecosystem
            </p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              160T-3000T
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              End-to-end capability across sheet metal fabrication and injection
              molding with integrated assembly support.
            </p>

            <div className="mt-5 space-y-2 rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
              <p className="text-sm font-medium text-slate-700">
                CNC and press-bending lines
              </p>
              <p className="text-sm font-medium text-slate-700">
                High-capacity molding cell
              </p>
              <p className="text-sm font-medium text-slate-700">
                Dedicated assembly and finishing
              </p>
            </div>
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 xl:col-span-4 xl:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
                <Cog size={18} />
              </span>
              <h3 className="font-heading text-2xl font-semibold text-slate-900">
                {machinesData.sheetMetalTitle}
              </h3>
            </div>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {machinesData.sheetMetalItems.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm font-medium text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            variants={staggerItem}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 xl:col-span-4 xl:p-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-blue-700">
                <Gauge size={18} />
              </span>
              <h3 className="font-heading text-2xl font-semibold text-slate-900">
                {machinesData.mouldingTitle}
              </h3>
            </div>
            <ul className="space-y-2">
              {machinesData.mouldingItems.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2 text-sm leading-relaxed text-slate-700 sm:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {machineImages.map((image, index) => {
            const layoutClass =
              index === 0
                ? "lg:col-span-6 lg:row-span-2"
                : index === 1 || index === 2
                  ? "lg:col-span-3"
                  : index === 3
                    ? "lg:col-span-6"
                    : "lg:col-span-3";

            return (
              <motion.figure
                key={image.src}
                variants={staggerItem}
                className={`group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/35 ${layoutClass}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-48 lg:h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.figure>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-5 flex flex-wrap items-center gap-3 rounded-xl border border-cyan-100 bg-cyan-50/70 px-4 py-3"
          variants={textReveal}
          custom={0.08}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-cyan-700 shadow-sm">
            <Workflow size={16} />
          </span>
          <p className="text-base font-semibold text-cyan-800 sm:text-xl">
            {machinesData.footer}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default MachinesSection;
