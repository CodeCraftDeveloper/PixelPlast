import { motion } from "framer-motion";
import { Building2, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { textReveal, staggerContainer, staggerItem } from "./animationVariants";
import { aboutData, sectionVisuals } from "../data/siteData";

function AboutSection() {
  return (
    <SectionWrapper id="about-details" className="noise-overlay bg-[#f8fafc]">
      <motion.div
        className="pointer-events-none absolute -left-16 top-16 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-8 md:px-12">
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 sm:text-base"
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

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/45 lg:col-span-5 lg:p-6"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
              <Building2 size={18} />
            </div>
            <div className="space-y-4">
              {aboutData.body.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Capacity
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">160T-3000T</p>
              </div>
              <div className="rounded-xl border border-cyan-100 bg-cyan-50/70 px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Workflow
                </p>
                <p className="mt-1 text-base font-semibold text-slate-900">End-to-End</p>
              </div>
            </div>
          </motion.article>

          <motion.figure
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/40 lg:col-span-7"
          >
            <img
              src={sectionVisuals.about[0].src}
              alt={sectionVisuals.about[0].alt}
              loading="lazy"
              decoding="async"
              className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/68 via-slate-900/14 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-medium text-white sm:p-6 sm:text-base">
              Integrated operations for sheet metal and injection molding under one roof.
            </figcaption>

            <div className="absolute right-4 top-4 grid gap-2 sm:right-6 sm:top-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <ShieldCheck size={14} />
                Quality Focused
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/18 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Zap size={14} />
                OEM Speed
              </span>
            </div>
          </motion.figure>
        </div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.capabilities.map((capability, index) => (
            <motion.article
              key={capability}
              variants={staggerItem}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-200/35"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-[11px] font-semibold text-cyan-700">
                {String(index + 1).padStart(2, "0")}
              </span>
              <CheckCircle2 size={16} className="text-cyan-600" />
              <span className="text-sm font-medium text-slate-700 sm:text-base">{capability}</span>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectionVisuals.about.map((image, index) => {
            const layoutClass = index === 0 ? "lg:col-span-6" : "lg:col-span-3";
            return (
              <motion.figure
                key={image.src}
                variants={staggerItem}
                className={`group overflow-hidden rounded-xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/30 ${layoutClass}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-44"
                />
              </motion.figure>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default AboutSection;
