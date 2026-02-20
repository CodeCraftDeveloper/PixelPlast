import { motion, useTransform } from "framer-motion";
import { useRef } from "react";
import useSmoothScrollProgress from "../hooks/useSmoothScrollProgress";

const cards = [
  {
    title: "Injection Moulding",
    description:
      "High tonnage capability for industrial, consumer, and logistics-grade components.",
    image: "/Images/4.jpeg",
    fallback: "/Images/5.jpeg",
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "Precision laser, bending, and welding workflows under one integrated manufacturing line.",
    image: "/Images/2.jpeg",
    fallback: "/Images/1.jpeg",
  },
  {
    title: "Quality Assurance",
    description:
      "Structured inspection checkpoints and traceable reports for every production batch.",
    image: "/Images/7.jpeg",
    fallback: "/Images/6.jpeg",
  },
  {
    title: "Automation Ready",
    description:
      "Future-ready manufacturing platform for robotics and data-driven process optimization.",
    image: "/Images/6.jpeg",
    fallback: "/Images/3.jpeg",
  },
];

function HorizontalCardsSection() {
  const sectionRef = useRef(null);
  const progress = useSmoothScrollProgress({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const trackX = useTransform(progress, [0, 1], ["0%", "-75%"]);
  const sectionFade = useTransform(progress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.55]);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-[320vh] w-full bg-[#f9fafb] sm:min-h-[300vh]"
    >
      <div className="sticky top-0 flex h-[100svh] w-full flex-col justify-center overflow-hidden px-4 sm:h-screen sm:px-12 lg:px-20">
        <motion.div style={{ opacity: sectionFade }} className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
            Capabilities
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Horizontal Narrative of Production
          </h2>
        </motion.div>

        <motion.div
          style={{ x: trackX }}
          className="mt-8 flex gap-5 sm:mt-10 sm:gap-8 [will-change:transform]"
        >
          {cards.map((card) => (
            <article
              key={card.title}
              className="w-[86vw] shrink-0 overflow-hidden rounded-2xl border border-white/60 bg-white/60 p-4 shadow-xl backdrop-blur-xl sm:w-[52vw] sm:p-5 lg:w-[36vw]"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  className="h-44 w-full object-cover sm:h-56"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = card.fallback;
                  }}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#111827] sm:mt-5 sm:text-2xl">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7280] sm:mt-3 sm:text-base">
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
