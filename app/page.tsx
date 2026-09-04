import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  MoveRight,
  Phone,
} from "lucide-react";

import { KineticHeading } from "@/app/home/KineticHeading";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import {
  certifications,
  company,
  processSteps,
  proofPoints,
  services,
} from "@/data/company";

const industryDetails = [
  {
    name: "Automotive",
    desc: "Wire harness spools, sub-assembly bins, under-hood components",
  },
  {
    name: "Pharmaceutical",
    desc: "Cleanroom-compatible totes, hygienic storage & logistics crates",
  },
  {
    name: "Food & Beverage",
    desc: "Food-grade nesting containers, durable distribution trays",
  },
  {
    name: "Chemical",
    desc: "Impact & chemical-resistant polymer storage and handling bins",
  },
  {
    name: "Retail & Logistics",
    desc: "Standardized automated conveyor totes & high-density nesting",
  },
  {
    name: "Wire & Cable",
    desc: "Precision ABS/PP plastic spools for high-speed continuous winding",
  },
];

const productFlowStages = [
  {
    step: "01",
    stage: "Bulk Storage & Racking",
    title: "Industrial Pallets",
    slug: "pallets",
    image: "/assets/01_products_photos_composites/05_green_pallet.png",
    alt: "Pixelplast heavy duty industrial plastic pallet",
    tagline: "Heavy-duty foundation for automated warehouse racking systems.",
    features: ["Up to 6000 kg static load", "Conveyor & ASRS ready", "Hygienic & pest-free"],
  },
  {
    step: "02",
    stage: "Plant Sorting & Movement",
    title: "Crates & Bins",
    slug: "crates",
    image: "/assets/01_products_photos_composites/04_crate_and_bin.png",
    alt: "Pixelplast heavy-duty plastic crate",
    tagline: "Solid & perforated crates for internal shopfloor material flow.",
    features: ["Perforated & solid walls", "Reinforced ribbed base", "Ergonomic hand-grips"],
  },
  {
    step: "03",
    stage: "Line Picking & Kitting",
    title: "Modular Part Bins",
    slug: "bins",
    image: "/assets/01_products_photos_composites/07_storage_bin.png",
    alt: "Pixelplast modular front-hopper parts bin",
    tagline: "High-density front-hopper bins for assembly and lean inventory.",
    features: ["Front-hopper instant access", "Stackable & panel-mount", "6 modular sizes"],
  },
  {
    step: "04",
    stage: "Conveyance & Secure Transit",
    title: "Attached-Lid Totes",
    slug: "tote-bins",
    image: "/assets/01_products_photos_composites/03_attached_lid_tote.png",
    alt: "Pixelplast attached lid tote container",
    tagline: "Tamper-evident nesting containers for automated closed-loop transit.",
    features: ["Interlocking lid design", "Up to 70% nesting return", "Zip-seal security slots"],
  },
  {
    step: "05",
    stage: "Continuous Winding",
    title: "Precision Spools",
    slug: "spools",
    image: "/assets/01_products_photos_composites/06_industrial_spool.png",
    alt: "Pixelplast precision plastic spool",
    tagline: "Dynamically balanced spools for wire, cable & 3D filament winding.",
    features: ["High-speed dynamic balance", "ABS & PP formulations", "Flange deflection tested"],
  },
] as const;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero-section" aria-labelledby="hero-title">
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/assets/pixelplast-hero-resin-poster.webp"
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src="/assets/pixelplast-hero-resin.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay" aria-hidden="true" />

          <div className="hero-cutouts" aria-hidden="true">
            <div className="hero-cutout hero-cutout--blue" />
            <div className="hero-cutout hero-cutout--green" />
            <div className="hero-cutout hero-cutout--paper" />
          </div>

          <div className="site-container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow eyebrow--light">
                Pixel Technoplast Private Limited / Smart Plastic Solutions
              </p>
              <div id="hero-title">
                <KineticHeading />
              </div>
              <p className="hero-deck">
                Manufacturing heavy-duty tote bins, precision ABS &amp; PP
                plastic spools, and custom OEM components for industrial
                programs.
              </p>
              <div className="hero-actions">
                <Button asChild variant="light" size="lg">
                  <Link href="#products-heading">
                    Explore Products <ArrowDownRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    Request a Quote <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            <div
              className="hero-range"
              aria-label="Injection moulding machine range from 160 to 3000 Tonnes"
            >
              <p>Machine range</p>
              <div>
                <div className="hero-range-value">
                  <span>160</span>
                  <strong>TONNE</strong>
                </div>
                <MoveRight aria-hidden="true" />
                <div className="hero-range-value">
                  <span>3000</span>
                  <strong>TONNE</strong>
                </div>
              </div>
              <p>
                Versatile tonnage for varied part weights, mould formats, and
                production scale.
              </p>
            </div>
          </div>

          <svg
            className="hero-bottom-curves"
            viewBox="0 0 1440 190"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="hero-curve hero-curve--blue"
              d="M0 24C328 111 760 58 1440 133V190H0V24Z"
            />
            <path
              className="hero-curve hero-curve--green"
              d="M0 103C353 158 773 91 1440 159V176C778 110 354 176 0 122V103Z"
            />
            <path
              className="hero-curve hero-curve--navy"
              d="M0 121C366 174 817 106 1440 175V190H0V121Z"
            />
            <path
              className="hero-curve hero-curve--paper"
              d="M0 174C427 202 982 148 1440 185V190H0V174Z"
            />
          </svg>
        </section>

        {/* PROOF POINTS STRIP */}
        <section
          className="proof-strip"
          aria-label="Manufacturing capability overview"
        >
          <div className="site-container proof-grid">
            {proofPoints.map((point, index) => (
              <article key={point.label}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{point.value}</strong>
                <p>{point.label}</p>
              </article>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE PIXELPLAST / ABOUT US SECTION */}
        <section
          id="why-choose-us"
          className="section why-choose-section"
          aria-labelledby="why-choose-heading"
        >
          {/* Subtle background technical grid accents */}
          <div className="why-choose-bg-pattern why-choose-bg-pattern--left" aria-hidden="true" />
          <div className="why-choose-bg-pattern why-choose-bg-pattern--right" aria-hidden="true" />

          <div className="site-container">
            <div className="why-choose-grid">
              {/* Left Column: Factory Production Plant Image */}
              <Reveal className="why-choose-media-wrap">
                <div className="why-choose-image-card">
                  <Image
                    src="/assets/01_products_photos_composites/08_injection_moulding_factory.png"
                    alt="Pixelplast modern injection moulding production plant"
                    width={900}
                    height={580}
                    className="why-choose-img"
                    priority
                  />
                </div>
              </Reveal>

              {/* Right Column: Content Block */}
              <Reveal className="why-choose-content" delay={0.08}>
                <div className="why-choose-header-row">
                  <h2 id="why-choose-heading" className="why-choose-title">
                    Why Choose Pixelplast?
                  </h2>
                  <span className="why-choose-line" aria-hidden="true" />
                </div>

                <p className="why-choose-description">
                  <strong>Pixel Technoplast Private Limited</strong>, operating under the <strong>Pixelplast</strong> brand, is a leading manufacturer of high-quality plastic material handling solutions, pallets, crates, tote bins, and precision ABS &amp; PP spools, serving automotive, agriculture, pharmaceutical, and manufacturing sectors. With specialized in-house tooling inspection and advanced injection moulding technology, we deliver reliable, durable, and cost-effective solutions tailored to client requirements.
                </p>

                {/* Verified Stats Banner */}
                <div className="why-choose-stats-banner">
                  <div className="why-choose-stat-item">
                    <strong className="why-choose-stat-num">160–3000</strong>
                    <span className="why-choose-stat-label">Tonnes Machine Range</span>
                  </div>
                  <div className="why-choose-stat-item">
                    <strong className="why-choose-stat-num">In-House</strong>
                    <span className="why-choose-stat-label">Tool Room &amp; Automation</span>
                  </div>
                  <div className="why-choose-stat-item">
                    <strong className="why-choose-stat-num">ISO 14001</strong>
                    <span className="why-choose-stat-label">Certified Systems</span>
                  </div>
                </div>

                {/* CTA Action */}
                <div className="why-choose-actions">
                  <Link href="/about" className="why-choose-cta-btn">
                    <span>Learn More About Us</span>
                    <span className="why-choose-cta-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          className="section services-section"
          aria-labelledby="services-heading"
        >
          <div className="site-container services-head">
            <Reveal>
              <p className="eyebrow">Capabilities &amp; Services</p>
              <h2 id="services-heading">
                From initial mould design to high-volume production.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="services-intro">
                Specialized injection-moulding solutions for standard
                material-handling products and custom industrial OEM
                manufacturing programs.
              </p>
            </Reveal>
          </div>

          <Reveal className="site-container services-viewport" delay={0.12}>
            <div
              className="services-track"
              aria-label="Pixelplast services"
              role="region"
            >
              {services.map((service, index) => (
                <Link
                  className={`service-card${index === 0 || index === 2 ? " service-card--featured" : ""}`}
                  href={service.href}
                  key={service.title}
                >
                  <span className="service-number" aria-hidden="true">
                    {service.index}
                  </span>
                  <div className="service-card-copy">
                    <span className="service-label">{service.label}</span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <span className="service-link">
                      View details <ArrowUpRight aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PRODUCTS SECTION: FIVE PRODUCT FAMILIES. ONE CONNECTED FLOW */}
        <section
          className="section products-flow-section"
          id="products"
          aria-labelledby="products-heading"
        >
          <div className="site-container">
            <Reveal className="products-flow-head">
              <div className="products-flow-title-group">
                <span className="products-flow-kicker">PRODUCT ECOSYSTEM</span>
                <h2 id="products-heading">
                  Five product families.<br />One connected flow.
                </h2>
              </div>
              <div className="products-flow-lead-group">
                <p>
                  From heavy raw material intake to high-speed line winding, Pixelplast products interconnect seamlessly to create an efficient, hygienic, and closed-loop material handling ecosystem.
                </p>
                <div className="products-flow-cta-wrap">
                  <Button asChild variant="outline" className="canva-pill-outline-btn">
                    <Link href="/products">
                      Explore Full Catalogue <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* Connected Pipeline Flow Timeline Visual */}
            <Reveal className="flow-pipeline-timeline" delay={0.05}>
              <div className="flow-pipeline-track" aria-hidden="true">
                <div className="flow-pipeline-line" />
                <div className="flow-pipeline-nodes">
                  {productFlowStages.map((stage) => (
                    <div className="flow-pipeline-node" key={stage.step}>
                      <span className="flow-node-dot">
                        <span className="flow-node-inner" />
                      </span>
                      <span className="flow-node-label">{stage.stage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 5-Column Connected Flow Cards */}
            <div className="products-flow-grid">
              {productFlowStages.map((stage, idx) => (
                <Reveal
                  className="product-flow-card"
                  delay={idx * 0.05}
                  key={stage.slug}
                >
                  <Link
                    href={`/products/${stage.slug}`}
                    className="product-flow-card-link"
                    aria-label={`View ${stage.title} (${stage.stage})`}
                  >
                    {/* Card Header with Step & Stage Badge */}
                    <div className="product-flow-card-top">
                      <span className="product-flow-step">{stage.step}</span>
                      <span className="product-flow-stage-badge">{stage.stage}</span>
                    </div>

                    {/* Product Image Stage with Backdrop Pedestal */}
                    <div className="product-flow-art-wrapper">
                      <div className="product-flow-pedestal" />
                      <div className="product-flow-img-box">
                        <Image
                          src={stage.image}
                          alt={stage.alt}
                          fill
                          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 20vw"
                        />
                      </div>
                    </div>

                    {/* Card Body & Feature Tags */}
                    <div className="product-flow-card-body">
                      <h3 className="product-flow-title">{stage.title}</h3>
                      <p className="product-flow-tagline">{stage.tagline}</p>

                      <ul className="product-flow-features" aria-label="Key features">
                        {stage.features.map((feat) => (
                          <li key={feat}>
                            <Check className="product-flow-check" aria-hidden="true" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer Action */}
                    <div className="product-flow-card-footer">
                      <span className="product-flow-action">
                        Explore specifications
                        <ArrowRight aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>

            {/* Flow Banner / Ecosystem Metrics Footer */}
            <Reveal className="products-flow-summary-bar" delay={0.2}>
              <div className="flow-summary-left">
                <span className="flow-summary-badge">Closed-Loop Ecosystem</span>
                <p>Designed for automated conveyors, cleanrooms, and repeat return logistics.</p>
              </div>
              <div className="flow-summary-pills">
                <div className="flow-summary-pill">
                  <strong>160–3000</strong>
                  <span>Tonnes Injection Range</span>
                </div>
                <div className="flow-summary-pill">
                  <strong>20+</strong>
                  <span>Standard Formats</span>
                </div>
                <div className="flow-summary-pill">
                  <strong>In-House</strong>
                  <span>Tool Room &amp; Moulding</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MANUFACTURING CAPABILITIES & PLANT */}
        <section
          className="manufacturing-section"
          aria-labelledby="manufacturing-heading"
        >
          <div className="site-container manufacturing-grid">
            <Reveal>
              <p className="eyebrow eyebrow--light">
                Manufacturing Infrastructure
              </p>
              <h2 id="manufacturing-heading">
                160 to 3000 Tonnes of Precision Capacity.
              </h2>
              <p className="manufacturing-deck">
                Our plant houses modern injection
                moulding machines, automated material handling, and auxiliary
                tooling systems to handle intricate components up to large
                structural mouldings.
              </p>

              <div className="tonnage-tier-grid">
                <div className="tonnage-tier">
                  <span className="tier-tag">160 – 450 Tonnes</span>
                  <strong>Precision Components</strong>
                  <p>
                    Fine parts, tight-tolerance spools &amp; electrical
                    housings.
                  </p>
                </div>
                <div className="tonnage-tier">
                  <span className="tier-tag">500 – 1200 Tonnes</span>
                  <strong>Medium Industrial</strong>
                  <p>
                    Standard tote containers, utility bins &amp; automotive
                    parts.
                  </p>
                </div>
                <div className="tonnage-tier">
                  <span className="tier-tag">1500 – 3000 Tonnes</span>
                  <strong>Large Structural</strong>
                  <p>
                    Heavy-duty bulk totes, large housings &amp; structural
                    panels.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild variant="light" className="canva-pill-light-btn">
                  <Link href="/capabilities">
                    Explore Facility &amp; Machinery{" "}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </Reveal>

            <Reveal className="capability-rail" delay={0.1}>
              <div className="tonnage-scale">
                <span className="tonnage-scale-val">160 Tonnes</span>
                <div className="tonnage-scale-bar" aria-hidden="true">
                  <span className="tonnage-scale-progress" />
                </div>
                <span className="tonnage-scale-val">3000 Tonnes</span>
              </div>
              {[
                "Modern Injection Moulding Machines",
                "Dedicated In-House Tool Room",
                "Automated Material Handling Systems",
                "Skilled 24/7 Production Workforce",
                "Material Blending & Dehumidifying",
                "Batch Quality & CMM Verification",
              ].map((item, index) => (
                <div className="capability-row" key={item}>
                  <span className="capability-row-num">{String(index + 1).padStart(2, "0")}</span>
                  <strong className="capability-row-title">{item}</strong>
                </div>
              ))}
            </Reveal>
          </div>

          <Reveal className="site-container">
            <figure className="facility-visual">
              <Image
                src="/assets/1.png"
                alt="Pixelplast injection-moulding production floor"
                width={2037}
                height={1146}
                sizes="(max-width: 900px) calc(100vw - 40px), min(1280px, calc(100vw - 48px))"
              />
              <figcaption className="facility-visual-caption">
                <div className="facility-caption-left">
                  <span className="facility-caption-tag">Manufacturing Facility</span>
                  <strong>India</strong>
                </div>
                <div className="facility-caption-right">
                  <span>Automated Multi-Press Production Floor</span>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </section>

        {/* PROCESS / OEM PATHWAY */}
        <section
          className="section process-section"
          aria-labelledby="process-heading"
        >
          <div className="site-container">
            <Reveal className="section-heading-row">
              <div>
                <p className="eyebrow">OEM Manufacturing Pathway</p>
                <h2 id="process-heading">
                  A Controlled Route from Prototype to Batch Delivery.
                </h2>
              </div>
              <Button asChild variant="ghost" className="text-link-button">
                <Link href="/capabilities#capability-programs">
                  Explore OEM Process{" "}
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>

            <div className="process-rail">
              {processSteps.map((step, index) => (
                <Reveal
                  className="process-step"
                  delay={index * 0.08}
                  key={step.index}
                >
                  <div className="process-step-top">
                    <span className="step-num">{step.index}</span>
                    <ArrowRight className="step-arrow" aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIES SERVED / OUR WORK */}
        <section
          className="section industries-section"
          aria-labelledby="industries-heading"
        >
          <div className="site-container industries-grid">
            <Reveal className="industries-intro">
              <p className="eyebrow eyebrow--light">Application Context</p>
              <h2 id="industries-heading">
                Tailored Solutions for Core Industries.
              </h2>
              <p>
                From automotive assembly lines to pharmaceutical cold chains and
                high-speed cable extrusion, we adapt polymers and mould
                parameters for your operational reality.
              </p>
              <Button asChild variant="light">
                <Link href="/contact">
                  Discuss Your Sector Needs <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>

            <Reveal className="industry-index" delay={0.08}>
              {industryDetails.map((ind, index) => (
                <article key={ind.name} className="industry-item-card">
                  <div className="ind-header">
                    <span className="ind-idx">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <strong>{ind.name}</strong>
                    <ArrowUpRight className="ind-arrow" aria-hidden="true" />
                  </div>
                  <p className="ind-desc">{ind.desc}</p>
                </article>
              ))}
            </Reveal>
          </div>
        </section>

        {/* QUALITY & CERTIFICATIONS */}
        <section
          className="section quality-section"
          aria-labelledby="quality-heading"
        >
          <div className="site-container">
            <Reveal className="quality-head">
              <div>
                <p className="eyebrow">Verified Systems</p>
                <h2 id="quality-heading">
                  Quality Built into Every Injection Cycle.
                </h2>
              </div>
              <p>
                Certified quality management protocols ensure strict dimensional
                tolerance, flawless finish, and continuous traceability.
              </p>
            </Reveal>

            <div className="certification-strip">
              {certifications.map((item, index) => (
                <Reveal
                  className="certification-item"
                  delay={index * 0.08}
                  key={item.title}
                >
                  <span>0{index + 1}</span>
                  <strong>{item.title}</strong>
                  <p>{item.label}</p>
                </Reveal>
              ))}
              <Link className="certification-link" href="/sustainability">
                <span>Explore Responsible Manufacturing</span>
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section
          className="section home-cta-section"
          aria-labelledby="home-cta-heading"
        >
          <div className="site-container">
            <Reveal className="home-cta-card">
              <div className="home-cta-copy">
                <p className="eyebrow eyebrow--light">Get in Touch</p>
                <h2 id="home-cta-heading">
                  Let&apos;s Discuss Your Plastic Product Requirement.
                </h2>
                <p className="home-cta-desc">
                  Share your component specifications, expected volume, and delivery
                  timeline with our technical engineering team.
                </p>
                <div className="home-cta-actions">
                  <Button asChild variant="light" size="lg" className="canva-pill-light-btn">
                    <Link href="/contact">
                      Contact Us &amp; Request a Quote <ArrowRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="canva-pill-outline-btn">
                    <a href={company.phoneHref}>
                      <Phone aria-hidden="true" /> {company.phone}
                    </a>
                  </Button>
                </div>
              </div>

              <div className="home-cta-stats">
                <div className="cta-stat-item">
                  <strong>160 – 3000</strong>
                  <span>Tonnes Machine Range</span>
                </div>
                <div className="cta-stat-item">
                  <strong>24 / 7</strong>
                  <span>Continuous Manufacturing</span>
                </div>
                <div className="cta-stat-item">
                  <strong>NCR</strong>
                  <span>Strategically Located Plant</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
