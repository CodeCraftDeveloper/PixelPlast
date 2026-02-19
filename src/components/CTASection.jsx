import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ParallaxBackground from "./ParallaxBackground";
import { ctaData, imageAssets } from "../data/siteData";

function CTASection() {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper id="quote" className="noise-overlay bg-[#fff] text-slate-900">
      <div ref={sectionRef} className="absolute inset-0 -z-10">
        <ParallaxBackground
          targetRef={sectionRef}
          src={imageAssets.ctaBackground}
          alt="Factory production equipment for plastic components"
          opacityClass="opacity-15"
          offset={90}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/85 via-slate-100/78 to-slate-100/88 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col items-center justify-center px-4 py-8 text-center sm:px-6 md:px-10">
        <motion.h2
          className="font-heading text-[clamp(1.4rem,3.2vw,3rem)] font-bold uppercase leading-tight tracking-[0.06em] text-slate-900"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {ctaData.heading}
        </motion.h2>
        <motion.p
          className="mt-3 max-w-3xl text-sm text-slate-700 sm:text-base"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          {ctaData.body}
        </motion.p>
        <motion.a
          href="#home"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border border-blue-300/35 bg-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-shadow hover:shadow-[0_0_45px_rgba(56,189,248,0.9)]"
        >
          {ctaData.button}
          <ArrowUpRight size={20} />
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

export default CTASection;

