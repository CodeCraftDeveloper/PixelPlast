import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import useSmoothScrollProgress from "../hooks/useSmoothScrollProgress";

const phaseSlides = [
  {
    tag: "Phase 01",
    title: "Design Intelligence",
    blurb:
      "Concept validation, DFM alignment, and production-ready engineering before tooling starts.",
    metric: "DFM + CAD Readiness",
    image:
      "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=2000",
    fallback: "/Images/1.jpeg",
  },
  {
    tag: "Phase 02",
    title: "Scaled Production Systems",
    blurb:
      "Structured workflows, machine planning, and throughput balancing for stable volume output.",
    metric: "160T-3000T Capacity",
    image:
      "https://images.pexels.com/photos/162568/pexels-photo-162568.jpeg?auto=compress&cs=tinysrgb&w=2000",
    fallback: "/Images/2.jpeg",
  },
  {
    tag: "Phase 03",
    title: "Verified Quality Delivery",
    blurb:
      "Inspection checkpoints, traceable reports, and dispatch controls to protect quality at scale.",
    metric: "Inspection-First Dispatch",
    image:
      "https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg?auto=compress&cs=tinysrgb&w=2000",
    fallback: "/Images/3.jpeg",
  },
];

function StickyShowcaseSection() {
  const sectionRef = useRef(null);
  const progress = useSmoothScrollProgress({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(progress, [0, 1], [0.98, 1.06]);
  const imageY = useTransform(progress, [0, 1], [40, -40]);
  const slide1Opacity = useTransform(progress, [0, 0.28, 0.38], [1, 1, 0]);
  const slide2Opacity = useTransform(progress, [0.3, 0.38, 0.62, 0.7], [0, 1, 1, 0]);
  const slide3Opacity = useTransform(progress, [0.58, 0.66, 0.92, 1], [0, 1, 1, 0]);
  const text1Opacity = useTransform(progress, [0, 0.28, 0.4], [1, 1, 0]);
  const text2Opacity = useTransform(progress, [0.33, 0.42, 0.64, 0.73], [0, 1, 1, 0]);
  const text3Opacity = useTransform(progress, [0.63, 0.72, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section id="features" ref={sectionRef} className="relative min-h-[260vh] w-full bg-[#f9fafb] sm:min-h-[300vh]">
      <div className="sticky top-0 flex h-[100svh] w-full items-center justify-center overflow-hidden px-4 sm:h-screen sm:px-12 lg:px-20">
        <motion.div style={{ y: imageY }} className="absolute inset-0 [will-change:transform]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.13),transparent_35%)]" />
        </motion.div>

        <motion.div
          style={{ scale: imageScale }}
          className="relative h-[58svh] w-full overflow-hidden rounded-2xl shadow-xl sm:h-[68vh] [will-change:transform]"
        >
          <motion.img
            style={{ opacity: slide1Opacity }}
            src={phaseSlides[0].image}
            alt={phaseSlides[0].title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = phaseSlides[0].fallback;
            }}
          />
          <motion.img
            style={{ opacity: slide2Opacity }}
            src={phaseSlides[1].image}
            alt={phaseSlides[1].title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = phaseSlides[1].fallback;
            }}
          />
          <motion.img
            style={{ opacity: slide3Opacity }}
            src={phaseSlides[2].image}
            alt={phaseSlides[2].title}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = phaseSlides[2].fallback;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/18 to-white/22" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.45),transparent_42%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(15,23,42,0.65),transparent_45%)]" />

          <div className="absolute left-4 top-4 rounded-full border border-white/35 bg-white/15 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur sm:left-6 sm:top-6">
            3-Stage Workflow
          </div>

          <div className="absolute inset-x-4 bottom-4 z-10 rounded-2xl border border-white/25 bg-slate-900/40 p-4 text-white backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-5">
            <motion.div style={{ opacity: text1Opacity }} className="absolute inset-0 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{phaseSlides[0].tag}</p>
              <p className="mt-2 text-2xl font-semibold sm:text-4xl">{phaseSlides[0].title}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-100/92 sm:text-base">
                {phaseSlides[0].blurb}
              </p>
            </motion.div>
            <motion.div style={{ opacity: text2Opacity }} className="absolute inset-0 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{phaseSlides[1].tag}</p>
              <p className="mt-2 text-2xl font-semibold sm:text-4xl">{phaseSlides[1].title}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-100/92 sm:text-base">
                {phaseSlides[1].blurb}
              </p>
            </motion.div>
            <motion.div style={{ opacity: text3Opacity }} className="absolute inset-0 p-4 sm:p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{phaseSlides[2].tag}</p>
              <p className="mt-2 text-2xl font-semibold sm:text-4xl">{phaseSlides[2].title}</p>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-100/92 sm:text-base">
                {phaseSlides[2].blurb}
              </p>
            </motion.div>

            <div className="relative z-10 mt-28 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-3 sm:mt-32 sm:pt-4">
              <motion.p style={{ opacity: text1Opacity }} className="text-xs font-medium tracking-wide text-slate-100/90 sm:text-sm">
                {phaseSlides[0].metric}
              </motion.p>
              <motion.p style={{ opacity: text2Opacity }} className="text-xs font-medium tracking-wide text-slate-100/90 sm:text-sm">
                {phaseSlides[1].metric}
              </motion.p>
              <motion.p style={{ opacity: text3Opacity }} className="text-xs font-medium tracking-wide text-slate-100/90 sm:text-sm">
                {phaseSlides[2].metric}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default StickyShowcaseSection;

