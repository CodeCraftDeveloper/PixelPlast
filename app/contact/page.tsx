import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
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

const PAGE_TITLE = "Contact Us | Pixelplast";

const PAGE_DESCRIPTION =
  "Get a quote from Pixelplast — Plastic Injection Moulding Manufacturer in India. Contact us for industrial plastic injection moulding, product inquiries, custom OEM tooling, and bulk requirement quotes.";

const ORGANIZATION_ID = `${company.website}/#organization`;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    url: "/contact/",
    siteName: company.shortName,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Pixelplast — Plastic Injection Moulding Manufacturer in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/og/home.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${company.website}/contact#webpage`,
      url: `${company.website}/contact`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "en-IN",
      mainEntity: {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: company.shortName,
        legalName: company.legalName,
        url: company.website,
        telephone: company.phone,
        email: company.email,
        taxID: company.gst,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Khasra No. 427, Shed No. 3",
          addressLocality: "Gautam Buddha Nagar",
          addressRegion: "Uttar Pradesh",
          postalCode: "203207",
          addressCountry: "IN",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${company.website}/contact#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${company.website}/` },
        { "@type": "ListItem", position: 2, name: "Contact", item: `${company.website}/contact/` },
      ],
    },
  ],
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
      "Use the enquiry form or contact our team directly. Include the product type, application, expected quantity, drawing or sample status, material requirements, and delivery location so we can review the requirement accurately.",
  },
  {
    question: "Can I enquire about standard products as well as custom components?",
    answer:
      "Yes. Pixelplast manufactures standard pallets, crates, bins, attached-lid totes, and plastic spools, alongside customer-defined OEM components developed from drawings, specifications, and application requirements.",
  },
  {
    question: "Which materials do you manufacture with?",
    answer:
      "Material selection depends on the product and its operating requirements. Our standard ranges include HDPE and PP products, while our plastic spool range includes ABS and PP options. Custom programs are reviewed against the required application and performance criteria.",
  },
  {
    question: "Do you support custom colours and branding on volume orders?",
    answer:
      "Custom colours and branding can be reviewed for volume requirements. Share your colour reference, artwork, expected quantity, and intended application with the enquiry so our team can confirm the suitable manufacturing route.",
  },
  {
    question: "Can Pixelplast develop tooling for a custom OEM component?",
    answer:
      "Yes. Custom OEM programs can include DFM review, material alignment, mould tooling, sampling trials, validation, and production planning. An in-house tool room supports sampling and ongoing mould maintenance.",
  },
  {
    question: "Is a plant visit or technical audit possible before ordering?",
    answer:
      "Plant walk-throughs can be arranged on request. Contact the team in advance with your preferred date and the purpose of the visit so the relevant production, tooling, or quality personnel can be available.",
  },
] as const;

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${company.website}/contact/#faq`,
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, "\\u003c"),
        }}
      />
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
                Get a Quote from<br />our Injection Moulding Team.
              </h1>
              <p className="contact-hero-deck">
                Direct access to our engineering, tooling, and sales teams. Fast
                turnaround for standard product lines — plastic tote bins, spools, crates, pallets — OEM tooling briefs, and
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
                <h2>Speak Directly with Our Injection Moulding Team.</h2>
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
                Injection Moulding Facility Walk-Throughs Available.
              </h2>
              <p>
                Our plant near Delhi NCR houses a full-spectrum plastic injection moulding operation,
                dedicated tooling maintenance, and in-house quality control
                testing — all under one roof. As a plastic injection moulding manufacturer, walk-throughs are available upon
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
                  src="/assets/01_products_photos_composites/08_injection_moulding_factory.webp"
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
        <section className="contact-faq-section" id="faq" aria-labelledby="faq-heading">
          <div className="site-container contact-faq-layout">
            <Reveal className="contact-faq-head">
              <p className="contact-section-tag">Common Questions</p>
              <h2 id="faq-heading">Frequently Asked Questions</h2>
              <p>
                Practical answers for product enquiries, custom tooling programs,
                and factory visits.
              </p>
            </Reveal>

            <Reveal className="contact-faq-list" delay={0.08}>
              {faqs.map((faq, index) => (
                <details className="contact-faq-item" key={faq.question}>
                  <summary>
                    <span className="contact-faq-index" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{faq.question}</span>
                    <span className="contact-faq-toggle" aria-hidden="true" />
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
