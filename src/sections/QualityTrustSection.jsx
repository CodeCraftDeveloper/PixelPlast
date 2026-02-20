import { motion } from "framer-motion";
import { Layers3, ShieldCheck, MessageCircleMore, BookOpenText, PackageCheck, Brain } from "lucide-react";

const partners = [
  "OEM/ODM Partners",
  "Kitchen Appliance Brands",
  "HVAC Manufacturers",
  "Private Label Dealers",
  "Modular Kitchen Solutions",
];

const qualityFeatures = [
  {
    title: "Layered security",
    body: "With layered security, we ensure the safety of every unit we provide.",
    Icon: Layers3,
  },
  {
    title: "Quality control of each part",
    body: "Every unit you send is checked carefully for every detail.",
    Icon: ShieldCheck,
  },
  {
    title: "Reliable customer service",
    body: "Our customer service is available 24 hours a week, with qualified people.",
    Icon: MessageCircleMore,
  },
  {
    title: "Maintenance manual book",
    body: "We provide a guidebook that can be used to ensure maximum care.",
    Icon: BookOpenText,
  },
  {
    title: "Delivered safely",
    body: "Every unit we send arrives safely and quickly, without any obstacles or drama.",
    Icon: PackageCheck,
  },
  {
    title: "Process monitoring & analytics",
    body: "Real-time monitoring and structured analytics help maintain output quality and process stability.",
    Icon: Brain,
  },
];

function QualityTrustSection() {
  return (
    <section id="about" className="w-full bg-[#fff] px-4 pb-16 pt-4 sm:px-6 sm:pt-5 lg:px-8">
      <div className="space-y-12 px-2 pb-12 pt-10 sm:space-y-14 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl font-medium leading-tight tracking-tight text-[#111827] sm:text-5xl"
          >
            Focusing on quality, <span className="text-[#8b929b]">we maintain customer trust</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-relaxed text-[#6b7280] sm:text-lg"
          >
            We ensure that every installation we build has strict quality checks. Sustainable
            solutions for an environmentally friendly and renewable future.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex aspect-square w-full max-w-[10rem] items-center justify-center rounded-full border border-[#e5e7eb] bg-[#f8fafc] text-center text-lg font-medium text-[#22252a] sm:max-w-[11rem] lg:max-w-[12rem]"
            >
              <span className="px-5 text-sm sm:text-base">{partner}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 rounded-t-[2rem] bg-[#f3f4f6] px-4 py-12 text-center sm:px-10 sm:py-14">
        <h3 className="text-3xl font-medium leading-tight tracking-tight text-[#111827] sm:text-6xl">
          We offer quality, <span className="text-[#8b929b]">with the best materials and service</span>
        </h3>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 grid max-w-6xl overflow-hidden rounded-2xl border border-[#e5e7eb] bg-[#fff] text-left sm:mt-10 md:grid-cols-3"
        >
          {qualityFeatures.map(({ title, body, Icon }) => (
            <article key={title} className="border-b border-[#e5e7eb] p-5 last:border-b-0 md:min-h-[190px] md:border-b md:border-r md:p-6 md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0">
              <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#ecfdf5] text-[#22c55e] shadow-sm">
                <Icon size={18} />
              </span>
              <h4 className="text-xl font-medium text-[#111827]">{title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">{body}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default QualityTrustSection;

