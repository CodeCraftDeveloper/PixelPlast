import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import useSmoothScrollProgress from "../hooks/useSmoothScrollProgress";

const phaseSlides = [
  {
    tag: "Phase 01",
    title: "Design Intelligence",
    image:
      "https://images.pexels.com/photos/3862627/pexels-photo-3862627.jpeg?auto=compress&cs=tinysrgb&w=2000",
    fallback: "/Images/1.jpeg",
  },
  {
    tag: "Phase 02",
    title: "Scaled Production Systems",
    image:
      "https://images.pexels.com/photos/162568/pexels-photo-162568.jpeg?auto=compress&cs=tinysrgb&w=2000",
    fallback: "/Images/2.jpeg",
  },
  {
    tag: "Phase 03",
    title: "Verified Quality Delivery",
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
  const textY = useTransform(progress, [0, 1], [12, -12]);

  return (
    <section id="features" ref={sectionRef} className="relative min-h-[300vh] w-full bg-[#f9fafb]">
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6 sm:px-12 lg:px-20">
        <motion.div style={{ y: imageY }} className="absolute inset-0 [will-change:transform]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(37,99,235,0.13),transparent_35%)]" />
        </motion.div>

        <motion.div
          style={{ scale: imageScale }}
          className="relative h-[68vh] w-full overflow-hidden rounded-2xl shadow-xl [will-change:transform]"
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
          <div className="absolute inset-0 bg-gradient-to-t from-white/65 via-white/15 to-white/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/50" />
        </motion.div>

        <motion.div
          style={{ opacity: text1Opacity, y: textY }}
          className="absolute inset-x-0 top-[20%] px-6 text-center sm:px-12 lg:px-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#2563eb]">{phaseSlides[0].tag}</p>
          <p className="mt-2 text-3xl font-semibold text-[#111827] sm:text-5xl">{phaseSlides[0].title}</p>
        </motion.div>

        <motion.div
          style={{ opacity: text2Opacity, y: textY }}
          className="absolute inset-x-0 top-[44%] -translate-y-1/2 px-6 text-center sm:px-12 lg:px-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#2563eb]">{phaseSlides[1].tag}</p>
          <p className="mt-2 text-3xl font-semibold text-[#111827] sm:text-5xl">{phaseSlides[1].title}</p>
        </motion.div>

        <motion.div
          style={{ opacity: text3Opacity, y: textY }}
          className="absolute inset-x-0 bottom-[14%] px-6 text-center sm:px-12 lg:px-20"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#2563eb]">{phaseSlides[2].tag}</p>
          <p className="mt-2 text-3xl font-semibold text-[#111827] sm:text-5xl">{phaseSlides[2].title}</p>
        </motion.div>
      </div>
    </section>
  );
}

export default StickyShowcaseSection;

