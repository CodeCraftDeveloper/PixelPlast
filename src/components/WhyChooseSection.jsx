import { motion } from "framer-motion";
import {
  Clock3,
  ShieldCheck,
  FileCheck2,
  Database,
  Truck,
  Boxes,
  Cpu,
  Handshake,
  Timer,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { features, sectionVisuals } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

const iconMap = {
  cycle: Timer,
  defect: ShieldCheck,
  trace: FileCheck2,
  material: Database,
  supply: Truck,
  scale: Boxes,
  tech: Cpu,
  partnership: Handshake,
  materials: Clock3,
};

function WhyChooseSection() {
  return (
    <SectionWrapper id="why-choose-us" className="noise-overlay bg-[#fff]">
      <motion.div
        className="absolute -left-10 top-20 h-48 w-48 rounded-full bg-blue-400/15 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-16 bottom-12 h-56 w-56 rounded-full bg-orange-400/15 blur-3xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
        <motion.div
          className="mb-5 max-w-6xl space-y-3"
          variants={textReveal}
          custom={0.06}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-base">
            The PixelPlast Advantage
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.05em] text-slate-900">
            Precision. Speed. Reliability.
          </h2>
        </motion.div>

        <motion.div
          className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectionVisuals.advantages.map((image) => (
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
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.iconKey];
            return (
              <motion.article
                key={feature.title}
                variants={staggerItem}
                transition={{ duration: 0.7, ease: "easeInOut", delay: index * 0.08 }}
                className="rounded-xl border border-slate-200 bg-white/85 p-5 shadow-[0_8px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/45 bg-cyan-400/10 text-cyan-700 shadow-[0_0_20px_rgba(56,189,248,0.2)] sm:h-11 sm:w-11">
                  <Icon size={18} />
                </div>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wide text-slate-900">
                  {feature.title}
                </h3>
                {feature.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                ) : null}
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default WhyChooseSection;

