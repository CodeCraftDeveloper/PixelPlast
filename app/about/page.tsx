import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Compass,
  Crosshair,
  Eye,
  MapPin,
  RefreshCw,
  ScanEye,
  ShieldCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import {
  companyMilestones,
  companyValues,
  facilityStats,
  qualityProcess,
} from "@/data/company";

export const metadata: Metadata = {
  title: "About Pixelplast",
  description:
    "Learn how Pixelplast combines large-scale plastic injection moulding, in-house tooling, process discipline, and verified quality systems.",
};

const identityPrinciples = [
  { label: "Precision", icon: Crosshair },
  { label: "Transparency", icon: ScanEye },
  { label: "Responsibility", icon: ShieldCheck },
  { label: "Continuous improvement", icon: RefreshCw },
] as const;

const operatingTeams = [
  {
    title: "Production Engineering",
    description: "Manufacturing alignment for stable, efficient production.",
    image: "/assets/image.png",
  },
  {
    title: "Tool-Room Specialists",
    description: "Tooling support for sampling, maintenance, and continuity.",
    image: "/assets/ww.png",
  },
  {
    title: "Quality & Validation",
    description: "Inspection, traceability, and dimensional verification.",
    image: "/assets/quality.png",
  },
  {
    title: "Customer Program Support",
    description: "Practical coordination from requirement review to delivery.",
    image: "/assets/9.png",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />

      <main id="main-content" className="about-page about-redesign">
        <section className="about-redesign-hero" aria-labelledby="about-hero-heading">
          <Image
            className="about-redesign-hero-image"
            src="/assets/01_products_photos_composites/08_injection_moulding_factory.png"
            alt="Pixelplast plastic injection-moulding production floor"
            fill
            priority
            sizes="100vw"
          />
          <div className="about-redesign-hero-wash" aria-hidden="true" />

          <div className="site-container about-redesign-hero-inner">
            <Reveal className="about-redesign-hero-copy">
              <p className="about-redesign-breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                About us
              </p>
              <h1 id="about-hero-heading">ABOUT US</h1>
              <p className="about-redesign-hero-deck">
                Large-scale plastic injection moulding, dependable processes,
                and practical engineering support for repeat production.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="about-redesign-story" aria-labelledby="about-story-heading">
          <div className="site-container about-redesign-story-grid">
            <Reveal className="about-redesign-story-copy">
              <p className="eyebrow">About company</p>
              <h2 id="about-story-heading">Built around repeatable manufacturing.</h2>
              <p>
                Pixelplast manufactures plastic injection-moulded products with
                an emphasis on precision, consistency, and dependable execution.
                Our portfolio includes industrial tote bins and plastic spools,
                supported by custom OEM manufacturing capability.
              </p>
              <p>
                From requirement review and tooling alignment to controlled batch
                production, we bring machinery, process discipline, and technical
                teams together around real industrial applications.
              </p>
              <Button asChild variant="ghost" className="about-redesign-story-link">
                <Link href="/manufacturing">
                  Explore our facility <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>

            <Reveal className="about-redesign-story-media" delay={0.08}>
              <span className="about-redesign-plate about-redesign-plate--top" aria-hidden="true" />
              <figure>
                <Image
                  src="/assets/01_products_photos_composites/08_injection_moulding_factory.png"
                  alt="Injection-moulding machines inside the Pixelplast production facility"
                  fill
                  sizes="(max-width: 900px) calc(100vw - 40px), 52vw"
                />
              </figure>
              <span className="about-redesign-plate about-redesign-plate--bottom" aria-hidden="true" />
            </Reveal>
          </div>
          <span className="about-redesign-wordmark" aria-hidden="true">PIXELPLAST</span>
        </section>

        <section
          className="about-redesign-capabilities"
          aria-labelledby="about-capabilities-heading"
        >
          <div className="site-container">
            <Reveal className="about-redesign-section-head">
              <div>
                <p className="eyebrow">What we do</p>
                <h2 id="about-capabilities-heading">
                  Built on engineering and manufacturing strength.
                </h2>
              </div>
              <p>
                From advanced machinery and a versatile machine range to in-house
                tooling and a skilled workforce, every part of the process is
                designed for dependable output.
              </p>
            </Reveal>

            <div className="about-redesign-capability-list">
              {companyMilestones.map((milestone, index) => (
                <Reveal
                  className="about-redesign-capability"
                  delay={index * 0.05}
                  key={milestone.title}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.description}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="about-redesign-proof" aria-label="Pixelplast facility numbers">
            <div className="site-container about-redesign-proof-grid">
              {facilityStats.map((stat, index) => (
                <Reveal
                  className="about-redesign-proof-item"
                  delay={index * 0.05}
                  key={stat.value}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{stat.value}</strong>
                  <p>{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-redesign-identity" aria-labelledby="about-identity-heading">
          <div className="site-container about-redesign-identity-inner">
            <Reveal className="about-redesign-identity-head">
              <p className="eyebrow">Our identity</p>
              <h2 id="about-identity-heading">
                Vision, values and the people behind the process.
              </h2>
            </Reveal>

            <div className="about-redesign-identity-composition">
              <Reveal className="about-redesign-principles">
                {identityPrinciples.map(({ label, icon: Icon }) => (
                  <div className="about-redesign-principle" key={label}>
                    <div className="about-principle-icon-wrap" aria-hidden="true">
                      <Icon />
                    </div>
                    <strong>{label}</strong>
                  </div>
                ))}
              </Reveal>

              <Reveal className="about-redesign-purpose-panel" delay={0.06}>
                <article>
                  <div className="about-redesign-purpose-title">
                    <Eye aria-hidden="true" />
                    <h3>Our Vision</h3>
                  </div>
                  <p>{companyValues[1].description}</p>
                </article>
                <article>
                  <div className="about-redesign-purpose-title">
                    <Compass aria-hidden="true" />
                    <h3>Our Mission</h3>
                  </div>
                  <p>{companyValues[0].description}</p>
                </article>
              </Reveal>
            </div>

            <Reveal className="about-redesign-team-head">
              <p className="eyebrow">Meet our teams</p>
              <h3>Expertise across every production stage.</h3>
            </Reveal>

            <div className="about-redesign-team-grid">
              {operatingTeams.map(({ title, description, image }, index) => (
                <Reveal
                  className="about-redesign-team"
                  delay={index * 0.05}
                  key={title}
                >
                  <div className="about-redesign-team-marker">
                    <Image
                      src={image}
                      alt={title}
                      fill
                      sizes="(max-width: 600px) 170px, (max-width: 900px) 180px, 200px"
                      className="about-redesign-team-image"
                    />
                  </div>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="about-redesign-process" aria-labelledby="about-process-heading">
          <div className="site-container about-redesign-process-grid">
            <Reveal className="about-redesign-process-media">
              <span aria-hidden="true" />
              <figure>
                <Image
                  src="/assets/01_products_photos_composites/08_injection_moulding_factory.png"
                  alt="Plastic injection-moulding machinery at the Pixelplast facility"
                  fill
                  sizes="(max-width: 900px) calc(100vw - 40px), 48vw"
                />
              </figure>
           
            </Reveal>

            <Reveal className="about-redesign-process-copy" delay={0.08}>
              <p className="eyebrow">Quality pathway</p>
              <h2 id="about-process-heading">
                Controlled checks from material to dispatch.
              </h2>

              <div className="about-redesign-process-list">
                {qualityProcess.map((step) => (
                  <article key={step.step}>
                    <span>{step.step}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        
      </main>

      <SiteFooter />
    </>
  );
}
