import { motion } from "framer-motion";

function OutroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-24 sm:px-12 lg:px-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.2),rgba(249,250,251,0.92)_48%,#f9fafb_90%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 26 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2563eb]">
          Ready To Build
        </p>
        <h2 className="mt-4 text-5xl font-semibold tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
          Elevate Your OEM & ODM Manufacturing Program
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-[#6b7280]">
          Partner with PixelPlast for high-precision engineered components,
          accelerated lead times, and reliable production scale.
        </p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 inline-flex rounded-2xl bg-[#2563eb] px-8 py-4 text-base font-semibold text-white shadow-xl transition-shadow hover:shadow-[0_22px_55px_rgba(37,99,235,0.35)]"
        >
          Request a Quote
        </motion.a>
      </motion.div>
    </section>
  );
}

export default OutroSection;
