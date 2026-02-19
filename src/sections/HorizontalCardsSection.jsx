import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import useSmoothScrollProgress from "../hooks/useSmoothScrollProgress";

const cards = [
  {
    title: "Injection Moulding",
    description:
      "High tonnage capability for industrial, consumer, and logistics-grade components.",
    image:
      "https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "Precision laser, bending, and welding workflows under one integrated manufacturing line.",
    image:
      "https://images.pexels.com/photos/162568/metal-welding-welder-industrial-162568.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Quality Assurance",
    description:
      "Structured inspection checkpoints and traceable reports for every production batch.",
    image:
      "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Automation Ready",
    description:
      "Future-ready manufacturing platform for robotics and data-driven process optimization.",
    image:
      "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

function HorizontalCardsSection() {
  const sectionRef = useRef(null);
  const progress = useSmoothScrollProgress({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(progress, [0, 1], ["6%", "-66%"]);
  const sectionFade = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.55]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-[300vh] w-full bg-[#f9fafb]"
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden px-6 sm:px-12 lg:px-20">
        <motion.div style={{ opacity: sectionFade }} className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
            Capabilities
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Horizontal Narrative of Production
          </h2>
        </motion.div>

        <motion.div
          style={{ x: trackX }}
          className="mt-10 flex gap-8 [will-change:transform]"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="w-[78vw] shrink-0 overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-5 shadow-xl backdrop-blur-xl sm:w-[52vw] lg:w-[36vw]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="h-56 w-full object-cover"
                />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-[#111827]">
                {card.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#6b7280]">
                {card.description}
              </p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HorizontalCardsSection;
