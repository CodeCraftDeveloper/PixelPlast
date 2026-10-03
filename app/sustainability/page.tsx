import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { DefinitionBlocks } from "@/components/content/DefinitionBlocks";
import { FaqSection, faqPageSchema } from "@/components/content/FaqSection";
import { Reveal } from "@/components/motion/Reveal";
import { company, certifications, palletAdvantages } from "@/data/company";
import {
  sustainabilityDefinitions,
  sustainabilityFaqs,
} from "@/data/page-faqs";

const PAGE_TITLE = "Sustainable Injection Moulding | Pixelplast";

const PAGE_DESCRIPTION =
  "Sustainable injection moulding at Pixelplast: recyclable PP, HDPE and ABS products, nestable totes and pallets, and ISO 14001:2015 environmental management.";

const ORGANIZATION_ID = `${company.website}/#organization`;

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  alternates: { canonical: "/sustainability/" },
  openGraph: {
    type: "website",
    url: "/sustainability/",
    siteName: company.shortName,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    locale: "en_IN",
    images: [
      {
        url: "/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Recyclable injection moulded plastic products from Pixelplast, India",
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
      "@type": "WebPage",
      "@id": `${company.website}/sustainability#webpage`,
      url: `${company.website}/sustainability`,
      name: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      about: { "@id": ORGANIZATION_ID },
      inLanguage: "en-IN",
      isPartOf: { "@id": `${company.website}/#website` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${company.website}/og/home.jpg`,
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: company.shortName,
      legalName: company.legalName,
      url: company.website,
      telephone: company.phone,
      email: company.email,
      taxID: company.gst,
      hasCredential: certifications.map((item) => ({
        "@type": "EducationalOccupationalCredential",
        credentialCategory: item.label,
        name: item.title,
      })),
    },
  ],
};

const focusPoints = [
  {
    index: "01",
    title: "Material selection",
    description:
      "Food-contact grade PP and HDPE for crates and totes, high-impact ABS for spools, and high-impact polypropylene for part bins. Material choice follows product geometry, tooling, and service environment.",
  },
  {
    index: "02",
    title: "Built for repeat use",
    description:
      "Products are designed for long service life and repeated cycles. Tote bins nest when empty to cut return-freight volume by up to 70%, and crates nest when empty while stacking when loaded.",
  },
  {
    index: "03",
    title: "Recyclable and export-ready",
    description:
      "PP, HDPE, and ABS are fully recyclable. Injection moulded pallets are ISPM-15 exempt, so export shipments need no fumigation or heat treatment.",
  },
] as const;

export default function SustainabilityPage() {
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
          __html: JSON.stringify(faqPageSchema(sustainabilityFaqs)).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />
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
            src="/assets/1.webp"
            alt="Pixelplast injection-moulding production floor"
            fill
            priority
            sizes="(max-width: 900px) 100vw, calc(100vw - 48px)"
          />
          <div className="sustainability-reference-hero-shade" aria-hidden="true" />
          <div className="sustainability-reference-hero-title">
            <p>Responsible manufacturing</p>
              <h1 id="sustainability-heading">Sustainable Injection Moulding</h1>
          </div>
        </section>

        <section
          className="sustainability-reference-story"
          aria-labelledby="sustainability-story-heading"
        >
          <div className="sustainability-reference-container">
            <Reveal className="sustainability-reference-intro">
              <h2 id="sustainability-story-heading">
                What Is Sustainable Injection Moulding at Pixelplast?
              </h2>
              <p>
                <strong>Sustainable injection moulding</strong> means designing products for a long service life rather than single use,
                selecting recyclable polymers, and reducing the logistics burden that comes with
                repeated handling. Our <Link href="/products">injection moulded product range</Link>{" "}
                is built around those requirements from the tooling stage onward.
              </p>
            </Reveal>

            <div
              className="sustainability-reference-mosaic"
              aria-label="Pixelplast manufacturing facility and production operations"
            >
              <Reveal className="sustainability-reference-tile sustainability-reference-tile--one">
                <Image
                  src="/assets/2.webp"
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
                  src="/assets/3.webp"
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
                  src="/assets/5.webp"
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
                  src="/assets/6.webp"
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
                  src="/assets/7.webp"
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
                  src="/assets/image.webp"
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
                Our environmental management system is certified to ISO 14001:2015 and runs
                alongside our ISO 9001:2015 quality framework, with material compliance covering
                RoHS restricted hazardous substances. Food-contact formats are produced to FDA
                21 CFR 177 and EU 10/2011. Manufacturing capability across{" "}
                <Link href="/capabilities">160 to 3000 tonnes</Link> supports repeatable output
                from an in-house tool room.
              </p>
            </Reveal>
          </div>

          <div className="sustainability-reference-container sustainability-reference-image-row">
            <Reveal className="sustainability-reference-row-image sustainability-reference-row-image--factory">
              <Image
                src="/assets/8.webp"
                alt="Pixelplast manufacturing infrastructure and marked production aisles"
                fill
                sizes="(max-width: 720px) 100vw, 32vw"
              />
            </Reveal>
            <Reveal className="sustainability-reference-row-image sustainability-reference-row-image--bin" delay={0.05}>
              <Image
                src="/assets/4.webp"
                alt="Controlled moulding production inside the Pixelplast facility"
                fill
                sizes="(max-width: 720px) 100vw, 32vw"
              />
            </Reveal>
            <Reveal className="sustainability-reference-row-image sustainability-reference-row-image--spool" delay={0.1}>
              <Image
                src="/assets/ww.webp"
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
          className="sustainability-reference-compare"
          aria-labelledby="sustainability-compare-heading"
        >
          <div className="sustainability-reference-container sustainability-reference-compare-grid">
            <Reveal>
              <p>Material substitution</p>
              <h2 id="sustainability-compare-heading">Where Plastic Replaces Wood</h2>
            </Reveal>
            <Reveal className="sustainability-reference-compare-copy" delay={0.06}>
              <p>
                Wooden pallets and crates are still widely used, and they absorb
                moisture, harbour pests, and break under repeated handling. Our
                injection moulded pallets and crates replace that service with a
                material that does not rot, crack, or require fumigation.
              </p>
              <Link href="/products/pallets">
                View plastic pallets <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          </div>

          <div className="sustainability-reference-container sustainability-reference-advantages">
            {palletAdvantages.map((item, index) => (
              <Reveal delay={index * 0.05} key={item.title}>
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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
              <h2 id="sustainability-standard-heading">What Does ISO 14001:2015 Cover?</h2>
            </Reveal>
            <Reveal className="sustainability-reference-standard-copy" delay={0.06}>
              <p>
                <strong>ISO 14001:2015</strong> is an environmental management systems standard. Our environmental management system is certified to ISO 14001:2015 and
                runs alongside ISO 9001:2015 quality management. Material compliance
                covers RoHS restricted hazardous substances, while food-contact formats
                meet FDA 21 CFR 177 and EU 10/2011. Automated servo-driven presses
                across our <Link href="/capabilities">160 to 3000 tonne range</Link>
                run with computerized cycle controls and SPC monitoring, cutting scrap
                and energy per part. An in-house tool room eliminates tooling transport and enables rapid sampling. Products are validated to ISO 8611
                load standards, and injection moulded pallets are ISPM-15 exempt, so
                export shipments need no methyl bromide fumigation.
              </p>
              <Link href="/#quote">
                Discuss a program <ArrowUpRight aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </section>

        <DefinitionBlocks items={sustainabilityDefinitions} />

        <FaqSection
          items={sustainabilityFaqs}
          headingId="sustainability-faq-heading"
          eyebrow="Sustainability FAQ"
          title="Clear answers on materials and standards."
          className="sustainability-faq-section"
        />
      </main>

      <SiteFooter />
    </>
  );
}
