import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { EnquiryForm } from "@/app/home/EnquiryForm";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Us | Pixelplast",
  description:
    "Get in touch with Pixelplast for industrial plastic injection moulding, product inquiries, custom OEM tooling, and bulk requirement quotes.",
};

const contactChannels = [
  {
    icon: Phone,
    title: "Call Direct",
    value: company.phone,
    href: company.phoneHref,
    label: "Mon–Sat, 9:00 AM – 6:30 PM",
  },
  {
    icon: Mail,
    title: "Email Inquiries",
    value: company.email,
    href: company.emailHref,
    label: "Guaranteed reply within 24 hours",
  },
] as const;

const faqs = [
  {
    question: "How do I request a quote and what details should I share?",
    answer:
      "Use the enquiry form or contact us directly. Sharing the product type, application, expected quantity, drawing or sample status, and delivery location helps our team return an accurate price and production estimate faster.",
  },
  {
    question: "Do you support custom colours and branding on volume orders?",
    answer:
      "Yes. We offer custom masterbatch colour matching, screen printing, hot stamping, and mould-insert brand embossing for corporate identities across volume programs.",
  },
  {
    question: "Can we develop custom tooling for our proprietary components?",
    answer:
      "Absolutely. Our dedicated in-house tool room handles complete DFM analysis, mould design alignment, sampling trials, and mass manufacturing for custom OEM programs.",
  },
  {
    question: "Is a plant visit or technical audit possible before ordering?",
    answer:
      "Yes. We welcome OEM procurement and engineering teams to tour our production floor, inspect tooling maintenance, and review quality control testing procedures. Schedule a visit via phone and we will arrange the walk-through.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="contact-page">
        {/* HERO SECTION */}
        <section className="contact-hero" aria-labelledby="contact-heading">
          <div className="site-container contact-hero-inner">
            <Reveal className="contact-hero-copy">
              <nav className="contact-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Contact Us</span>
              </nav>
              <p className="contact-kicker">GET IN TOUCH</p>
              <h1 id="contact-heading">
                Let&apos;s build the right<br />plastic solution together.
              </h1>
              <p className="contact-hero-deck">
                Direct access to our engineering, tooling, and sales teams. Fast
                turnaround for standard product lines, OEM tooling briefs, and
                volume RFQs.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MAIN CONTACT & RFQ SECTION */}
        <section className="contact-main-section" aria-labelledby="form-heading">
          <div className="site-container contact-main-grid">
            {/* Left Column: Direct Info & Facility Details */}
            <div className="contact-info-col">
              <Reveal>
                <p className="contact-section-tag">Direct Channels</p>
                <h2>Speak directly with our team.</h2>
                <p className="contact-info-lead">
                  Whether you need immediate catalogue dispatches or engineering
                  consultation for a new mould program, our specialists are ready
                  to assist.
                </p>
              </Reveal>

              {/* Direct Contact & Registered Office */}
              <Reveal className="contact-details-card" id="map-directions" delay={0.1}>
                <div className="contact-channels-grid">
                  {contactChannels.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <div className="contact-channel-item" key={channel.title}>
                        <div className="channel-icon-wrap" aria-hidden="true">
                          <Icon />
                        </div>
                        <div className="channel-info">
                          <span className="channel-title">{channel.title}</span>
                          <a href={channel.href} className="channel-value">
                            {channel.value}
                          </a>
                          <small className="channel-label">{channel.label}</small>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="contact-address-block">
                  <div className="address-card-header">
                    <span className="address-eyebrow">Factory &amp; Registered Office</span>
                    <Image
                      className="address-brand-logo"
                      src="/assets/pixelplast-logo.webp"
                      alt={company.legalName}
                      width={283}
                      height={100}
                    />
                  </div>
                  <p className="address-text"><strong>{company.address}</strong></p>
                  <p className="address-registration">
                    <span>GSTIN</span>
                    <strong>{company.gst}</strong>
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Right Column: RFQ Form Card */}
            <Reveal className="contact-form-col" delay={0.1}>
              <div className="contact-form-card">
                <div className="contact-form-head">
                  <div className="form-head-icon" aria-hidden="true">
                    <MessageSquare />
                  </div>
                  <div>
                    <span className="form-head-kicker">Request a Quote / RFQ</span>
                    <h2 id="form-heading">Send Your Requirement</h2>
                  </div>
                </div>
                <p className="form-head-desc">
                  Fill in your details below and our technical sales team will review
                  your requirements and get back to you with pricing, specifications,
                  and production timelines.
                </p>

                <EnquiryForm />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FACILITY OVERVIEW SECTION */}
        <section className="contact-facility-section" id="facility-info" aria-labelledby="facility-heading">
          <div className="site-container contact-facility-grid">
            <Reveal className="facility-copy">
              <p className="contact-section-tag">Plant Visit &amp; Audits</p>
              <h2 id="facility-heading">
                Facility walk-throughs available.
              </h2>
              <p>
                Our plant houses a full-spectrum injection moulding operation,
                dedicated tooling maintenance, and in-house quality control
                testing—all under one roof. Walk-throughs are available upon
                request.
              </p>

              <div className="facility-stats-grid">
                <div className="facility-stat">
                  <Factory aria-hidden="true" />
                  <div>
                    <strong>160 – 3000</strong>
                    <span>Tonnes Press Capacity</span>
                  </div>
                </div>
                <div className="facility-stat">
                  <Wrench aria-hidden="true" />
                  <div>
                    <strong>In-House</strong>
                    <span>Tool Room &amp; CNC Maintenance</span>
                  </div>
                </div>
                <div className="facility-stat">
                  <ShieldCheck aria-hidden="true" />
                  <div>
                    <strong>24 / 7</strong>
                    <span>Plant Operations &amp; Dispatch</span>
                  </div>
                </div>
              </div>

            </Reveal>

            <Reveal className="facility-art" delay={0.1}>
              <div className="facility-img-frame">
                <Image
                  src="/assets/01_products_photos_composites/08_injection_moulding_factory.png"
                  alt="Pixelplast manufacturing facility and injection moulding machinery"
                  fill
                  sizes="(max-width: 900px) 95vw, 50vw"
                />
                <div className="facility-badge">
                  <span>Manufacturing Plant</span>
                  <strong>Pixel Technoplast Pvt. Ltd.</strong>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="contact-faq-section" aria-labelledby="faq-heading">
          <div className="site-container">
            <Reveal className="contact-faq-head">
              <p className="contact-section-tag">Common Questions</p>
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>
                Everything you need to know about placing orders, tooling trials,
                and technical compliance with Pixelplast.
              </p>
            </Reveal>

            <div className="contact-faq-grid">
              {faqs.map((faq, index) => (
                <Reveal className="contact-faq-card" delay={index * 0.05} key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
