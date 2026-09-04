import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Sustainability",
  description:
    "Pixelplast's direction for considered plastic manufacturing, reusable product formats, controlled production, and environmental management.",
};

const focusPoints = [
  {
    index: "01",
    title: "Application first",
    description:
      "We begin with the intended use, operating environment, expected volume, and performance requirements.",
  },
  {
    index: "02",
    title: "Considered materials",
    description:
      "Material selection is aligned with product geometry, tooling, validation criteria, and the approved manufacturing brief.",
  },
  {
    index: "03",
    title: "Repeatable production",
    description:
      "Process controls and defined checkpoints support consistent output across repeat manufacturing cycles.",
  },
] as const;

export default function SustainabilityPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="sustainability-reference-page">
        <section
          className="sustainability-reference-hero"
          aria-labelledby="sustainability-heading"
        >
          <Image
            src="/assets/1.png"
            alt="Pixelplast injection-moulding production floor"
            fill
            priority
            sizes="(max-width: 900px) 100vw, calc(100vw - 48px)"
          />
          <div className="sustainability-reference-hero-shade" aria-hidden="true" />
          <div className="sustainability-reference-hero-title">
            <p>Responsible manufacturing</p>
            <h1 id="sustainability-heading">Sustainability</h1>
          </div>
        </section>

        <section
          className="sustainability-reference-story"
          aria-labelledby="sustainability-story-heading"
        >
          <div className="sustainability-reference-container">
            <Reveal className="sustainability-reference-intro">
              <h2 id="sustainability-story-heading">
                At Pixelplast, we believe responsible manufacturing begins with
                considered decisions.
              </h2>
            </Reveal>

            <div
              className="sustainability-reference-mosaic"
              aria-label="Pixelplast manufacturing facility and production operations"
            >
              <Reveal className="sustainability-reference-tile sustainability-reference-tile--one">
                <Image
                  src="/assets/2.png"
                  alt="Pixelplast injection-moulding machines across the production floor"
                  fill
                  sizes="(max-width: 680px) 50vw, 21vw"
                />
              </Reveal>

              <Reveal
                className="sustainability-reference-tile sustainability-reference-tile--two"
                delay={0.04}
              >
                <Image
                  src="/assets/3.png"
                  alt="Operators working between Pixelplast moulding machines"
                  fill
                  sizes="(max-width: 680px) 50vw, 21vw"
                />
              </Reveal>

              <Reveal
                className="sustainability-reference-tile sustainability-reference-tile--three"
                delay={0.08}
              >
                <Image
                  src="/assets/5.png"
                  alt="Active production lines inside the Pixelplast facility"
                  fill
                  sizes="(max-width: 680px) 50vw, 28vw"
                />
              </Reveal>

              <Reveal
                className="sustainability-reference-tile sustainability-reference-tile--four"
                delay={0.12}
              >
                <Image
                  src="/assets/6.png"
                  alt="Organised injection-moulding equipment and tooling area"
                  fill
                  sizes="(max-width: 680px) 50vw, 21vw"
                />
              </Reveal>

              <Reveal
                className="sustainability-reference-tile sustainability-reference-tile--five"
                delay={0.16}
              >
                <Image
                  src="/assets/7.png"
                  alt="Large-format moulding machines on the factory floor"
                  fill
                  sizes="(max-width: 680px) 50vw, 21vw"
                />
              </Reveal>

              <Reveal
                className="sustainability-reference-tile sustainability-reference-tile--six"
                delay={0.2}
              >
                <Image
                  src="/assets/image.png"
                  alt="Close view of Pixelplast large-format production equipment"
                  fill
                  sizes="(max-width: 680px) 100vw, 21vw"
                />
              </Reveal>
            </div>
          </div>
        </section>

        <section
          className="sustainability-reference-focus"
          aria-labelledby="sustainability-focus-heading"
        >
          <div className="sustainability-reference-container sustainability-reference-focus-head">
            <Reveal className="sustainability-reference-focus-title">
              <p>Our direction</p>
              <h2 id="sustainability-focus-heading">What We Focus On</h2>
            </Reveal>

            <Reveal className="sustainability-reference-focus-copy" delay={0.06}>
              <h3>
                We align material, product, and process decisions with the real
                requirement.
              </h3>
              <p>
                Our approach brings the application, expected life, production
                volume, tooling, and validation criteria into one manufacturing
                conversation. Specific outcomes remain subject to the approved
                program and operating environment.
              </p>
            </Reveal>
          </div>

          <div className="sustainability-reference-container sustainability-reference-image-row">
            <Reveal className="sustainability-reference-row-image sustainability-reference-row-image--factory">
              <Image
                src="/assets/8.png"
                alt="Pixelplast manufacturing infrastructure and marked production aisles"
                fill
                sizes="(max-width: 720px) 100vw, 32vw"
              />
            </Reveal>
            <Reveal className="sustainability-reference-row-image sustainability-reference-row-image--bin" delay={0.05}>
              <Image
                src="/assets/4.png"
                alt="Controlled moulding production inside the Pixelplast facility"
                fill
                sizes="(max-width: 720px) 100vw, 32vw"
              />
            </Reveal>
            <Reveal className="sustainability-reference-row-image sustainability-reference-row-image--spool" delay={0.1}>
              <Image
                src="/assets/ww.png"
                alt="Machining and tooling equipment arranged inside the workshop"
                fill
                sizes="(max-width: 720px) 100vw, 32vw"
              />
            </Reveal>
          </div>

          <div className="sustainability-reference-container sustainability-reference-principles">
            {focusPoints.map((point, index) => (
              <Reveal delay={index * 0.05} key={point.title}>
                <span>{point.index}</span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section
          className="sustainability-reference-standard"
          aria-labelledby="sustainability-standard-heading"
        >
          <div className="sustainability-reference-container sustainability-reference-standard-grid">
            <Reveal>
              <p>Verified framework</p>
              <h2 id="sustainability-standard-heading">ISO 14001:2015</h2>
            </Reveal>
            <Reveal className="sustainability-reference-standard-copy" delay={0.06}>
              <p>
                Environmental management provides the framework behind our
                responsible-manufacturing direction and continual review.
              </p>
              <Link href="/#quote">
                Discuss a program <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
