import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDownToLine, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { heroData, imageAssets } from "../data/siteData";

function HeroSection() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 850);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SectionWrapper id="home" className="bg-[#fff] text-slate-900" animateOnView={false}>
      <div className="flex h-full w-full flex-col px-0 py-0">
        <motion.nav
          className="mx-2 mt-2 flex items-center justify-between rounded-full border border-slate-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur sm:mx-3 sm:mt-3 sm:px-6"
          initial={{ opacity: 0, y: -16, filter: "blur(8px)" }}
          animate={showContent ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.65, ease: "easeInOut" }}
        >
          <a href="#home" className="font-heading text-base font-bold tracking-wide text-slate-900 sm:text-lg">
            {heroData.brand}
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-600 lg:flex">
            <a href="#home" className="hover:text-slate-900">
              Home
            </a>
            <a href="#about" className="hover:text-slate-900">
              About Us
            </a>
            <a href="#products" className="hover:text-slate-900">
              Features
            </a>
            <a href="#machines" className="hover:text-slate-900">
              Services
            </a>
            <a href="#quote" className="hover:text-slate-900">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={heroData.brochureHref}
              download
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-800 sm:inline-flex"
            >
              Log in
            </a>
            <a
              href="#quote"
              className="rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-400 sm:px-5 sm:text-sm"
            >
              Get in touch
            </a>
          </div>
        </motion.nav>

        <div className="relative mt-2 flex-1 overflow-hidden rounded-[1.5rem] sm:mt-3 sm:rounded-[2rem]">
          <img
            src={imageAssets.heroBackground}
            alt="Industrial manufacturing landscape"
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(6,12,20,0.58)_14%,rgba(6,12,20,0.28)_45%,rgba(6,12,20,0.48)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.35),transparent_40%)]" />

          <motion.article
            className="relative z-10 flex h-full flex-col justify-end px-5 pb-28 pt-12 sm:px-9 sm:pb-32 lg:max-w-3xl lg:px-14"
            initial={{ opacity: 0 }}
            animate={showContent ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeInOut" }}
          >
            <motion.p
              className="mb-3 text-xs font-medium text-slate-200/90 sm:mb-4 sm:text-base"
              initial={{ opacity: 0, filter: "blur(9px)", y: 12 }}
              animate={showContent ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12, ease: "easeInOut" }}
            >
              {heroData.tag}
            </motion.p>

            <motion.h1
              className="font-heading text-[clamp(2rem,7vw,5.4rem)] font-semibold leading-[0.95] tracking-tight text-white"
              initial={{ opacity: 0, filter: "blur(12px)", y: 18 }}
              animate={showContent ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22, ease: "easeInOut" }}
            >
              {heroData.headingLineOne}
              <br />
              {heroData.headingLineTwo}
            </motion.h1>

            <motion.p
              className="mt-4 max-w-2xl text-sm text-slate-200/90 sm:mt-6 sm:text-base"
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={showContent ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.62, delay: 0.34, ease: "easeInOut" }}
            >
              {heroData.description}
            </motion.p>

            <motion.div
              className="mt-5 flex flex-wrap items-center gap-3 sm:mt-7"
              initial={{ opacity: 0, filter: "blur(8px)", y: 10 }}
              animate={showContent ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.42, ease: "easeInOut" }}
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10"
              >
                {heroData.primaryCta}
                <ArrowUpRight size={15} />
              </motion.a>
              <motion.a
                href="#quote"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/25 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/40"
              >
                {heroData.secondaryCta}
              </motion.a>
              <motion.a
                href={heroData.brochureHref}
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <ArrowDownToLine size={14} />
                {heroData.brochureCta}
              </motion.a>
            </motion.div>
          </motion.article>

          <motion.aside
            className="absolute right-6 top-12 z-20 hidden w-48 rounded-3xl border border-white/25 bg-white/20 p-3 text-white shadow-2xl backdrop-blur-2xl md:block"
            initial={{ opacity: 0, x: 36, filter: "blur(10px)" }}
            animate={showContent ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeInOut" }}
          >
            <img
              src={imageAssets.heroPrimary}
              alt="OEM component production"
              loading="lazy"
              decoding="async"
              className="h-28 w-full rounded-2xl object-cover"
            />
            <p className="mt-3 text-xs text-white/85">Discover Our</p>
            <p className="text-sm font-medium">Recent Project</p>
          </motion.aside>

          <motion.div
            className="absolute bottom-0 right-0 z-20 grid w-full max-w-3xl grid-cols-2 gap-3 rounded-tl-[2rem] bg-white/96 px-4 py-4 text-slate-800 sm:grid-cols-4 sm:px-7 sm:py-5"
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={showContent ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.72, delay: 0.5, ease: "easeInOut" }}
          >
            {heroData.stats.map((stat) => {
              const [value, ...rest] = stat.split(" ");
              return (
                <div key={stat}>
                  <p className="font-heading text-xl font-semibold text-slate-900 sm:text-3xl">{value}</p>
                  <p className="mt-0.5 text-[10px] leading-snug text-slate-500 sm:text-xs">{rest.join(" ")}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default HeroSection;

