import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";

const splitImage = "/Images/5.jpeg";

const points = [
  "Integrated sheet metal and plastic component manufacturing",
  "160T to 3000T moulding ecosystem with flexible production ramps",
  "Inspection-first execution with documentation and traceability",
  "OEM-focused engineering collaboration from concept to dispatch",
];

function SplitRevealSection() {
  return (
    <section className="flex min-h-screen w-full items-center bg-[#f9fafb] px-6 py-24 sm:px-12 lg:px-20">
      <div className="grid w-full grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            tag="Integrated Excellence"
            title="Built With Precision. Delivered With Confidence."
            subtitle="Cinematic design language meets industrial manufacturing discipline for modern OEM supply chains."
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
            className="mt-8 space-y-4"
          >
            {points.map((point) => (
              <motion.li
                key={point}
                variants={{
                  hidden: { opacity: 0, y: 26 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-[#e5e7eb] bg-white p-5 text-base text-[#6b7280] shadow-xl"
              >
                {point}
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
            alt="Factory production facility and OEM line"
            className="h-[70vh] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default SplitRevealSection;
