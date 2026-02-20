import { motion } from "framer-motion";
import { PencilRuler, Wrench, Factory, ShieldCheck, Truck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { processSteps, sectionVisuals } from "../data/siteData";
import { textReveal } from "./animationVariants";

const iconMap = {
  design: PencilRuler,
  tool: Wrench,
  fabrication: Factory,
  quality: ShieldCheck,
  delivery: Truck,
};

function ManufacturingProcessSection() {
  return (
    <SectionWrapper id="process" className="noise-overlay bg-[#f8fafc]">
      <motion.div
        className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-12 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-8 md:px-12">
        <motion.div
          className="max-w-5xl space-y-3"
          variants={textReveal}
          custom={0.04}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 sm:text-base">
            How We Work
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900">
            From Blueprint to Completion
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            A disciplined five-stage system built for repeatable quality,
            traceable execution, and on-time delivery.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-12">
          <motion.figure
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/45 lg:col-span-8"
          >
            <img
              src={sectionVisuals.process[0].src}
              alt={sectionVisuals.process[0].alt}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-72"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/68 via-slate-900/18 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-medium text-white sm:p-6 sm:text-base">
              Integrated manufacturing cell with synchronized process control.
            </figcaption>
          </motion.figure>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/45 lg:col-span-4 lg:p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-600">
              Execution Stack
            </p>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              5 Steps
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Clear hand-offs and validation checkpoints at every phase to keep
              projects stable from kickoff to dispatch.
            </p>

            <div className="mt-5 space-y-2 rounded-xl border border-cyan-100 bg-cyan-50/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700">
                Process Signals
              </p>
              <p className="text-sm font-medium text-slate-700">
                Engineering readiness
              </p>
              <p className="text-sm font-medium text-slate-700">
                In-process quality control
              </p>
              <p className="text-sm font-medium text-slate-700">
                JIT-ready delivery planning
              </p>
            </div>
          </motion.aside>
        </div>

        <div className="relative mt-6">
          <div className="pointer-events-none absolute left-0 top-[2.1rem] hidden h-px w-full bg-gradient-to-r from-cyan-400/0 via-cyan-500/55 to-orange-500/0 xl:block" />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = iconMap[step.iconKey];
              return (
                <motion.article
                  key={step.title}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-200/40"
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                    delay: index * 0.07,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon size={18} />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {step.description.trim()}
                  </p>

                  <div className="mt-4 h-1 w-full rounded-full bg-slate-100">
                    <div
                      className="h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      style={{ width: `${(index + 1) * 20}%` }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ManufacturingProcessSection;
