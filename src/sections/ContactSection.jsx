import { useState } from "react";
import { motion } from "framer-motion";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({
    loading: false,
    type: "",
    message: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, type: "", message: "" });

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/info@pixelplast.in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _subject: "New PixelPlast Website Query",
            _captcha: "false",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      setStatus({
        loading: false,
        type: "success",
        message: "Your query has been sent. We will get back within 24 hours.",
      });
      setFormData(initialForm);
    } catch {
      setStatus({
        loading: false,
        type: "error",
        message:
          "Submission failed right now. Please retry or email us at info@pixelplast.in.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-[#fff] px-4 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-[1.8rem] border border-[#e5e7eb] bg-white p-4 shadow-xl shadow-slate-100 sm:p-8 lg:p-10"
      >
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-10">
          <article className="relative min-h-[17rem] overflow-hidden rounded-2xl sm:min-h-[22rem]">
            <img
              src="/Images/machine.jpeg"
              alt="PixelPlast manufacturing facility"
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-[#111827]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                Contact Us
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Request a Quote
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/85">
                Share your requirements for sheet metal or injection molded
                plastic components.
              </p>
            </div>
          </article>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
              Contact Us
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#111827] sm:text-2xl">
              Get In Touch With Our Team
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#6b7280]">
              Share your requirement details and we will respond with the best
              manufacturing approach.
            </p>

            <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={onSubmit}>
              <input
                required
                name="name"
                value={formData.name}
                onChange={onChange}
                placeholder="Full Name *"
                className="rounded-xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                placeholder="Work Email *"
                className="rounded-xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={onChange}
                placeholder="Phone Number"
                className="rounded-xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
              />
              <input
                name="company"
                value={formData.company}
                onChange={onChange}
                placeholder="Company Name"
                className="rounded-xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
              />
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={onChange}
                placeholder="Tell us about your project requirements *"
                rows={5}
                className="sm:col-span-2 rounded-xl border border-[#d1d5db] px-4 py-3 text-sm text-[#111827] outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-[#2563eb]/20"
              />
              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#6b7280]">
                  Email destination:{" "}
                  <span className="font-medium text-[#111827]">
                    info@pixelplast.in
                  </span>
                </p>
                <button
                  type="submit"
                  disabled={status.loading}
                  className="inline-flex items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status.loading ? "Sending..." : "Send Query"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {status.message ? (
          <p
            className={`mt-4 text-sm ${
              status.type === "success" ? "text-emerald-600" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </motion.div>
    </section>
  );
}

export default ContactSection;
