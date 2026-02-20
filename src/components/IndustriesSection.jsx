import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { industries, industriesData, sectionVisuals } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

function IndustriesSection() {
  return (
    <SectionWrapper id="industries" className="noise-overlay bg-[#f8fafc]">
      <motion.div
        className="pointer-events-none absolute -left-20 top-24 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ y: [0, 18, 0] }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-14 bottom-12 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-8 md:px-12">
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 sm:text-base"
          variants={textReveal}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industriesData.tag}
        </motion.p>
        <motion.h2
          className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900"
          variants={textReveal}
          custom={0.06}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industriesData.heading}
        </motion.h2>
        <motion.p
          className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base"
          variants={textReveal}
          custom={0.08}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Manufacturing partnerships across high-demand sectors with scalable
          quality systems and delivery discipline.
        </motion.p>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.article
            variants={staggerItem}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/50 lg:col-span-4 lg:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Coverage
            </p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              {industries.length}
            </p>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              Active industry verticals supported by integrated sheet metal and
              injection molding operations.
            </p>
            <div className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50/70 px-4 py-3 text-sm font-medium text-cyan-900">
              OEM & ODM-ready workflow from design collaboration to dispatch.
            </div>
          </motion.article>

          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8"
          >
            {sectionVisuals.industries.map((image, index) => (
              <motion.figure
                key={image.src}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/40"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-56"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      index === 0 ? "/Images/6.jpeg" : "/Images/7.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-slate-900/10 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-medium text-white sm:text-base">
                  {image.alt}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {industries.map((industry, index) => (
            <motion.article
              key={industry}
              variants={staggerItem}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Sector {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-base font-semibold text-slate-800 transition-colors group-hover:text-cyan-700">
                {industry}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default IndustriesSection;
