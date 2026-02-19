import { motion } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import ParallaxBackground from "./ParallaxBackground";
import { imageAssets, productSegments, sectionVisuals } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

function ProductsSection() {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper id="products" className="noise-overlay bg-[#fff]">
      <div ref={sectionRef} className="absolute inset-0 -z-10">
        <ParallaxBackground
          targetRef={sectionRef}
          src={imageAssets.productsBackground}
          alt="OEM product components"
          opacityClass="opacity-10"
          offset={80}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50/95 via-slate-100/88 to-slate-100/95" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-5 py-10 sm:px-8 md:px-12">
        <motion.div
          className="mb-5 max-w-6xl space-y-3"
          variants={textReveal}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300 sm:text-base">
            Our Products
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900">
            Two Segments. Endless Possibilities.
          </h2>
        </motion.div>

        <motion.div
          className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sectionVisuals.products.map((image) => (
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
          className="grid grid-cols-1 gap-4 xl:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {productSegments.map((segment) => (
            <motion.article
              key={segment.title}
              variants={staggerItem}
              className="rounded-xl border border-slate-200 bg-white/85 p-5 backdrop-blur-xl"
            >
              <h3 className="font-heading text-xl font-semibold uppercase tracking-wide text-slate-900 sm:text-2xl">
                {segment.title}
              </h3>
              <p className="mt-2 text-base text-cyan-700 sm:text-lg">{segment.intro}</p>
              <ul className="mt-3 columns-1 gap-5 space-y-2 text-sm leading-relaxed text-slate-700 sm:text-base lg:columns-2">
                {segment.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default ProductsSection;

