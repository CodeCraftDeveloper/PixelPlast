import { motion } from "framer-motion";

function OutroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-16 sm:px-12 sm:py-24 lg:px-20">
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
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
          Elevate Your OEM & ODM Manufacturing Program
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base text-[#6b7280] sm:text-lg">
          Partner with PixelPlast for high-precision engineered components,
          accelerated lead times, and reliable production scale.
        </p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 inline-flex rounded-2xl bg-[#2563eb] px-7 py-3.5 text-sm font-semibold text-white shadow-xl transition-shadow hover:shadow-[0_22px_55px_rgba(37,99,235,0.35)] sm:mt-10 sm:px-8 sm:py-4 sm:text-base"
        >
          Request a Quote
        </motion.a>
      </motion.div>
    </section>
  );
}

export default OutroSection;
