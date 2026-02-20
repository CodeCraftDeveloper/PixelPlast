import { motion } from "framer-motion";
import { useRef } from "react";
import { Layers3, PackageOpen, ShieldCheck } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import ParallaxBackground from "./ParallaxBackground";
import { imageAssets, productSegments, sectionVisuals } from "../data/siteData";
import { staggerContainer, staggerItem, textReveal } from "./animationVariants";

const segmentMeta = [
  {
    tag: "Segment 01",
    icon: Layers3,
    accent: "from-cyan-500 to-blue-500",
    badge: "Precision Fabrication",
  },
  {
    tag: "Segment 02",
    icon: PackageOpen,
    accent: "from-indigo-500 to-cyan-500",
    badge: "High-Volume Moulding",
  },
];

function ProductsSection() {
  const sectionRef = useRef(null);

  return (
    <SectionWrapper id="products" className="noise-overlay bg-[#f8fafc]">
      <div ref={sectionRef} className="absolute inset-0 -z-10">
        <ParallaxBackground
          targetRef={sectionRef}
          src={imageAssets.productsBackground}
          alt="OEM & ODM product components"
          opacityClass="opacity-12"
          offset={70}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-slate-50/92 to-slate-100/95" />
      </div>

      <motion.div
        className="pointer-events-none absolute -left-16 top-20 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl"
        animate={{ y: [0, 16, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -right-16 bottom-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl"
        animate={{ y: [0, -18, 0] }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-4 py-12 sm:px-8 md:px-12">
        <motion.div
          className="max-w-6xl space-y-3"
          variants={textReveal}
          custom={0.05}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-500 sm:text-base">
            Our Products
          </p>
          <h2 className="font-heading text-[clamp(2rem,4.4vw,4rem)] font-bold uppercase tracking-[0.06em] text-slate-900">
            Two Segments. Endless Possibilities.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Built for OEM & ODM speed and quality consistency across metal and
            plastic component ecosystems.
          </p>
        </motion.div>

        <motion.div
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.figure
            variants={staggerItem}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/45 md:col-span-7"
          >
            <img
              src={sectionVisuals.products[0].src}
              alt={sectionVisuals.products[0].alt}
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] sm:h-72"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/Images/1.jpeg";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/68 via-slate-900/18 to-transparent" />
            <figcaption className="absolute bottom-0 left-0 p-4 text-sm font-medium text-white sm:p-6 sm:text-base">
              Product engineering for precision-led OEM & ODM manufacturing.
            </figcaption>
          </motion.figure>

          <motion.div
            variants={staggerItem}
            className="grid grid-cols-1 gap-4 md:col-span-5"
          >
            {sectionVisuals.products.slice(1).map((image, index) => (
              <motion.figure
                key={image.src}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg shadow-slate-200/35"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-26 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04] sm:h-34"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src =
                      index === 0 ? "/Images/2.jpeg" : "/Images/3.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/12 to-transparent" />
                <figcaption className="absolute bottom-0 left-0 p-3 text-xs font-medium text-white sm:text-sm">
                  {image.alt}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {productSegments.map((segment, index) => {
            const meta = segmentMeta[index];
            const Icon = meta.icon;

            return (
              <motion.article
                key={segment.title}
                variants={staggerItem}
                className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 sm:p-6"
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${meta.accent}`}
                />
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        {meta.tag}
                      </p>
                      <p className="text-sm font-medium text-cyan-700">
                        {meta.badge}
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                    <ShieldCheck size={14} />
                    OEM & ODM Ready
                  </span>
                </div>

                <h3 className="font-heading text-3xl font-semibold uppercase tracking-wide text-slate-900">
                  {segment.title}
                </h3>
                <p className="mt-2 text-base text-cyan-700 sm:text-lg">
                  {segment.intro}
                </p>

                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {segment.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-slate-200 bg-slate-50/70 px-3 py-2 text-sm leading-relaxed text-slate-700 sm:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default ProductsSection;
