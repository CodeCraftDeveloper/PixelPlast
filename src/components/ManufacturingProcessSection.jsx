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
    <SectionWrapper id="process" className="noise-overlay bg-[#fff]">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
        <motion.div
          className="mb-5 max-w-5xl space-y-3"
          variants={textReveal}
          custom={0.04}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-base">
            How We Work
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900">
            From Drawing to Delivery
          </h2>
        </motion.div>

        <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {sectionVisuals.process.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-lg border border-slate-200">
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" className="h-32 w-full object-cover sm:h-40" />
            </figure>
          ))}
        </div>

        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-orange-500/0 lg:block" />
          {processSteps.map((step, index) => {
            const Icon = iconMap[step.iconKey];
            return (
              <motion.article
                key={step.title}
                className="relative flex flex-col items-center rounded-xl border border-slate-200 bg-white/85 p-5 text-center backdrop-blur-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <div className="absolute -top-1 left-1/2 hidden h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.7)] lg:block" />
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-400/10 text-cyan-700 shadow-[0_0_16px_rgba(56,189,248,0.25)] sm:h-11 sm:w-11">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ManufacturingProcessSection;

