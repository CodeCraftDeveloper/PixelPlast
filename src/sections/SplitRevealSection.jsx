/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const splitImage = "/Images/5.jpeg";

const points = [
  "Integrated sheet metal and plastic component manufacturing",
  "160T to 3000T moulding ecosystem with flexible production ramps",
  "Inspection-first execution with documentation and traceability",
  "OEM & ODM-focused engineering collaboration from concept to dispatch",
];

function SplitRevealSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-[#f9fafb] px-4 py-16 sm:px-12 sm:py-24 lg:px-20">
      <div className="grid w-full grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            tag="Integrated Excellence"
            title="Built With Precision. Delivered With Confidence."
            subtitle="Where sophisticated design aesthetics converge with manufacturing rigor to serve today's OEM & ODM supply ecosystems."
          />

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
            className="mt-6 grid grid-cols-1 gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4"
          >
            {points.map((point, index) => (
              <motion.li
                key={point}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[#e5e7eb] bg-linear-to-b from-white to-[#f8fafc] p-4 shadow-xl sm:min-h-[9rem] sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#e0e7ff] text-xs font-semibold text-[#3730a3]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[#6b7280] sm:text-base">
                    {point}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="overflow-hidden rounded-2xl shadow-xl"
        >
          <img
            src={splitImage}
            alt="Factory production facility and OEM & ODM line"
            className="h-[52vh] w-full object-cover sm:h-[70vh]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SplitRevealSection;
