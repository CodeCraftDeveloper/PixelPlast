import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Boxes,
  Cpu,
  Factory,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/button";
import {
  capabilityEquipment,
  manufacturingPillars,
} from "@/data/company";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Explore Pixelplast plastic injection-moulding capabilities, including a 160 to 3000 Tonnes machine range, tool-room support, process automation, quality verification, and custom OEM manufacturing programs.",
};

const capabilityOverview = [
  ...manufacturingPillars,
  {
    index: "05",
    title: "Custom OEM manufacturing support",
    description:
      "Programs are evaluated around application, design, material, tooling, validation, and expected production volume.",
  },
] as const;

const capabilityIcons = [Factory, Wrench, Cpu, ShieldCheck, Boxes] as const;

export default function CapabilitiesPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="capabilities-page">
        <section
          className="capabilities-hero"
          aria-labelledby="capabilities-hero-heading"
        >
          <div className="capabilities-hero-frame">
            <Image
              className="capabilities-hero-image"
              src="/assets/7.png"
              alt="Plastic injection-moulding machines on the Pixelplast production floor"
              fill
              priority
              sizes="calc(100vw - 24px)"
            />
            <div className="capabilities-hero-overlay" aria-hidden="true" />
            <div className="capabilities-hero-atmosphere" aria-hidden="true">
              <span /><span /><span />
            </div>

            <div className="site-container capabilities-hero-inner">
              <Reveal className="capabilities-hero-copy">
                <p className="eyebrow eyebrow--light">Capabilities / Pixelplast</p>
                <h1 id="capabilities-hero-heading">
                  <span>Manufacturing</span>
                  <span>Tomorrow&apos;s Industry</span>
                </h1>
                <p>
                  Injection moulding, tooling, automation, and program support
                  built around stable, repeatable production.
                </p>
                <div className="capabilities-hero-actions">
                  <Button asChild variant="light" size="lg">
                    <Link href="/contact#quote">Discuss a Requirement</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#capability-overview">Explore Capabilities</Link>
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="capability-overview"
          id="capability-overview"
          aria-labelledby="capability-overview-heading"
        >
          <div className="site-container capability-overview-layout">
            <Reveal className="capability-overview-intro">
              <p className="eyebrow">Capability overview</p>
              <h2 id="capability-overview-heading">
                One manufacturing system. Five connected capabilities.
              </h2>
              <p>
                Each program is considered as a complete production requirement:
                from mould and process alignment through repeat output and
                verification.
              </p>
            </Reveal>

            <div className="capability-overview-list">
              {capabilityOverview.map((capability, index) => {
                const Icon = capabilityIcons[index] ?? Factory;

                return (
                  <Reveal delay={index * 0.05} key={capability.title}>
                    <article className="capability-overview-row">
                      <span>{capability.index}</span>
                      <div className="capability-overview-icon" aria-hidden="true">
                        <Icon />
                      </div>
                      <div>
                        <h3>{capability.title}</h3>
                        <p>{capability.description}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="capability-range" aria-labelledby="capability-range-heading">
          <div className="capability-range-media">
            <Image
              src="/assets/3.png"
              alt="Pixelplast injection-moulding production environment"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
            <div className="capability-range-caption">
              <span>Production environment</span>
              <strong>India</strong>
            </div>
          </div>

          <div className="capability-range-copy">
            <Reveal>
              <p className="eyebrow eyebrow--light">Injection moulding</p>
              <h2 id="capability-range-heading">
                Range and repeatability under one roof.
              </h2>
              <p>
                Plastic injection-moulding machinery from 160 to 3000 Tonnes
                supports different product sizes, mould formats, and production
                requirements.
              </p>
            </Reveal>

            <div className="capability-range-controls">
              {capabilityEquipment.map((equipment, index) => (
                <Reveal delay={index * 0.07} key={equipment.title}>
                  <article>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{equipment.title}</h3>
                    <p>{equipment.detail}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="capability-programs" aria-labelledby="capability-programs-heading">
          <div className="site-container">
            <Reveal className="capability-programs-heading">
              <div>
                <p className="eyebrow">OEM manufacturing programs</p>
                <h2 id="capability-programs-heading">
                  From your brief to repeatable production.
                </h2>
              </div>
              <p>
                Program discussions begin with the product, its application,
                expected performance, available information, and target volume.
              </p>
            </Reveal>

            <div className="capability-program-types">
              <Reveal className="capability-program capability-program--oem">
                <span>01 / OEM</span>
                <h3>Customer-defined manufacturing programs.</h3>
                <p>
                  Drawings, specifications, application details, and target
                  volumes form the manufacturing brief for tooling, validation,
                  and repeat execution.
                </p>
              </Reveal>

              <Reveal className="capability-program capability-program--oem-custom" delay={0.08}>
                <span>02 / Custom OEM Tooling</span>
                <h3>End-to-end tooling and production development.</h3>
                <p>
                  From DFM analysis and polymer selection through mould tooling,
                  sampling trials, and production readiness — Pixelplast engineers
                  custom OEM programs around your product specifications and
                  performance requirements.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="capability-quality" aria-labelledby="capability-quality-heading">
          <div className="site-container capability-quality-grid">
            <Reveal className="capability-quality-copy">
              <p className="eyebrow eyebrow--light">Quality verification</p>
              <h2 id="capability-quality-heading">
                Defined checkpoints support dependable output.
              </h2>
              <p>
                Visual, dimensional, and requirement-based reviews are aligned
                with applicable product and customer criteria through production.
              </p>
            </Reveal>

            <Reveal className="capability-quality-systems" delay={0.08}>
              {[
                "Incoming material verification",
                "In-process cycle & cavity monitoring",
                "First-article & CMM dimensional checks",
                "Final release with batch traceability",
              ].map((item, index) => (
                <div key={item}>
                  <span className="capability-quality-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <strong>{item}</strong>
                  </span>
                </div>
              ))}
              <small className="capability-quality-note">
                Verification aligned with approved drawings and customer criteria.
              </small>
            </Reveal>
          </div>
        </section>

        <section className="capability-cta" aria-labelledby="capability-cta-heading">
          <div className="site-container capability-cta-inner">
            <Reveal>
              <p className="eyebrow">Start with your requirement</p>
              <h2 id="capability-cta-heading">
                Tell us what the part needs to do.
              </h2>
            </Reveal>
            <Reveal className="capability-cta-action" delay={0.08}>
              <p>
                Share the product type, application, expected volume, drawing or
                sample status, material, and performance requirements.
              </p>
              <Button asChild size="lg">
                <Link href="/contact#quote">
                  Discuss a Requirement <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
