import { motion } from "framer-motion";

const heroImage = "/Images/factory.jpeg";

const miniCardImage =
  "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=900";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex h-[calc(100vh-0.25rem)] w-full items-start bg-[#fff] px-3 pb-3 pt-[4.5rem] sm:px-4 sm:pt-[4.75rem]"
    >
      <div className="relative flex h-full w-full flex-col">
        <motion.figure
          className="relative flex flex-1 flex-col overflow-hidden rounded-[1.8rem] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(16,24,39,0.42), rgba(16,24,39,0.2), rgba(16,24,39,0.42)), url(" +
              heroImage +
              ")",
          }}
        >
          {/* Text Content */}
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex h-full flex-col justify-end px-8 pb-24 pt-16 sm:px-12 lg:max-w-3xl"
          >
            <p className="text-xs text-white/85 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-sm">
              OEM & ODM Manufacturing Solutions
            </p>

            <h1 className="mt-3 text-4xl font-medium leading-[0.98] tracking-tight text-white [text-shadow:0_6px_24px_rgba(0,0,0,0.55)] sm:text-6xl">
              Precision Engineering.
              <br />
              Moulded for the Future.
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.45)] sm:text-base">
              PixelPlast is a full-spectrum OEM & ODM manufacturing company
              delivering high-precision sheet metal components and large-scale
              injection molded plastic parts — engineered to spec, built to
              perform, and designed to last.
            </p>

            <p className="mt-6 flex items-center gap-4 text-xs text-white/90 [text-shadow:0_2px_12px_rgba(0,0,0,0.55)] sm:text-sm">
              <a
                href="#services"
                className="rounded-full border border-white/60 px-4 py-2 transition-colors hover:bg-white/10"
              >
                Explore Our Products
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/60 px-4 py-2 transition-colors hover:bg-white/10"
              >
                Request a Quote
              </a>
            </p>
          </motion.article>

          {/* Glass Card */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute right-8 top-12 hidden w-56 rounded-2xl border border-white/35 bg-white/22 p-3 text-white backdrop-blur-xl lg:block"
          >
            <img
              src={miniCardImage}
              alt="Wind turbine project"
              loading="lazy"
              decoding="async"
              className="h-32 w-full rounded-xl object-cover"
            />
            <p className="mt-3 text-[13px] text-white/80">Discover Our</p>
            <p className="text-[1.35rem] font-medium leading-tight">
              Recent Project
            </p>
          </motion.aside>

          {/* Stats Panel */}
          <motion.footer
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute -bottom-px -right-px z-10 grid w-full max-w-3xl grid-cols-2 gap-6 overflow-hidden rounded-tl-[2rem] rounded-br-[1.8rem] bg-[#fff] px-8 py-5 text-[#111827] sm:px-10 sm:py-6"
          >
            <article>
              <p className="text-3xl font-medium tracking-tight">Original Equipment Manufacturer</p>
              <p className="mt-1 text-[11px] text-[#6b7280]">
                End-to-end manufacturing partnership support
              </p>
            </article>

            <article>
              <p className="text-3xl font-medium tracking-tight">Original Design Manufacturer</p>
              <p className="mt-1 text-[11px] text-[#6b7280]">
                Design-to-delivery product development programs
              </p>
            </article>
          </motion.footer>
        </motion.figure>
      </div>
    </section>
  );
}

export default HeroSection;
