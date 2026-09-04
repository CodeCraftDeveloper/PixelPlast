import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Archive,
  ArrowRight,
  Boxes,
  Check,
  ClipboardCheck,
  Disc,
  Gauge,
  Layers,
  MessageSquare,
  PackageCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export const metadata: Metadata = {
  title: "Products & Standard Range | Pixelplast",
  description:
    "Explore Pixelplast attached-lid totes, industrial spools, pallets, crates, and storage bins designed for industrial strength and repeatability.",
};

const featuredProductsList = [
  { title: "Attached-lid totes", slug: "tote-bins", icon: Archive },
  { title: "Industrial spools", slug: "spools", icon: Disc },
  { title: "Pallets", slug: "pallets", icon: Layers },
  { title: "Crates & bins", slug: "crates", icon: Boxes },
] as const;

const productRangeItems = [
  {
    slug: "tote-bins",
    title: "Attached-Lid Totes",
    description: "Secure, stackable and easy to handle. Ideal for storage and transit.",
    image: "/assets/01_products_photos_composites/03_attached_lid_tote.png",
    alt: "Pixelplast Attached-Lid Tote",
  },
  {
    slug: "crates",
    title: "Crates & Bins",
    description: "Durable, space-efficient and built for everyday use across industries.",
    image: "/assets/01_products_photos_composites/04_crate_and_bin.png",
    alt: "Pixelplast Industrial Crate",
  },
  {
    slug: "pallets",
    title: "Pallets",
    description: "Rugged and reliable pallets designed for safe handling and stacking.",
    image: "/assets/01_products_photos_composites/05_green_pallet.png",
    alt: "Pixelplast Heavy Duty Green Pallet",
  },
  {
    slug: "spools",
    title: "Industrial Spools",
    description: "Strong and stable spools for cables, wires and filament winding.",
    image: "/assets/01_products_photos_composites/06_industrial_spool.png",
    alt: "Pixelplast Industrial Precision Spool",
  },
  {
    slug: "bins",
    title: "Storage Bins",
    description: "Organised storage for parts and components. Practical and long-lasting.",
    image: "/assets/01_products_photos_composites/07_storage_bin.png",
    alt: "Pixelplast Modular Front-Open Storage Bin",
  },
] as const;

const qualitySteps = [
  {
    title: "Quality materials",
    copy: "Selected raw materials for consistent performance.",
    icon: ShieldCheck,
  },
  {
    title: "In-process checks",
    copy: "Regular inspections throughout production.",
    icon: ClipboardCheck,
  },
  {
    title: "Dimensional accuracy",
    copy: "Precision in every product we deliver.",
    icon: Gauge,
  },
  {
    title: "Functional testing",
    copy: "Products tested for fit, function and usability.",
    icon: PackageCheck,
  },
  {
    title: "Continuous improvement",
    copy: "Ongoing focus on processes and outcomes.",
    icon: Users,
  },
] as const;

export default function ProductsPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="canva-catalogue-page">
        {/* SECTION 1: HERO */}
        <section className="canva-hero" aria-labelledby="hero-title">
          <div className="site-container canva-hero-grid">
            {/* Left Copy */}
            <div className="canva-hero-copy">
              <h1 id="hero-title">
                BUILT FOR<br />
                HANDLING.<br />
                MADE FOR<br />
                REPEAT USE.
              </h1>
              <p className="canva-hero-lead">
                Industrial plastic solutions designed for strength, consistency and everyday performance.
              </p>
              <ul className="canva-hero-checks" aria-label="Key features">
                <li>
                  <span className="canva-check-badge">
                    <Check aria-hidden="true" />
                  </span>
                  Wide product range
                </li>
                <li>
                  <span className="canva-check-badge">
                    <Check aria-hidden="true" />
                  </span>
                  Durable &amp; reusable
                </li>
                <li>
                  <span className="canva-check-badge">
                    <Check aria-hidden="true" />
                  </span>
                  Customisation available
                </li>
                <li>
                  <span className="canva-check-badge">
                    <Check aria-hidden="true" />
                  </span>
                  Consistent quality
                </li>
              </ul>
              <a href="#range" className="canva-pill-button">
                Explore range
              </a>
            </div>

            {/* Center Product Composition */}
            <div
              className="canva-hero-art"
              role="img"
              aria-label="Pixelplast attached-lid tote, crate, industrial spool, and pallet"
            >
              <span className="canva-hero-orb canva-hero-orb--amber" aria-hidden="true" />
              <span className="canva-hero-orb canva-hero-orb--sage" aria-hidden="true" />
              <span className="canva-hero-orb canva-hero-orb--coral" aria-hidden="true" />

              <span className="canva-hero-composite" aria-hidden="true">
                <Image
                  src="/assets/01_products_photos_composites/01_hero_product_composite.png"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 900px) 92vw, (max-width: 1200px) 52vw, 42vw"
                />
              </span>
            </div>

            {/* Right Featured Products Sidebar */}
            <aside className="canva-hero-sidebar" aria-label="Featured Products Overview">
              <h2>Featured<br />Products</h2>
              <p className="canva-sidebar-desc">
                Versatile, practical and made for industrial environments.
              </p>
              <div className="canva-sidebar-items">
                {featuredProductsList.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <Link
                      href={`/products/${item.slug}`}
                      className="canva-sidebar-item"
                      key={item.slug}
                    >
                      <span className="canva-sidebar-icon">
                        <IconComponent aria-hidden="true" />
                      </span>
                      <span className="canva-sidebar-title">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
              <a href="#range" className="canva-link-arrow">
                View details <ArrowRight aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        {/* SECTION 2: OUR SOLUTIONS (DYNAMIC 2X2 MOSAIC WITH LARGE CIRCLES & PROPORTIONAL CUTOUTS) */}
        <section className="canva-solutions" aria-labelledby="solutions-title">
          <div className="site-container canva-solutions-grid">
            <div className="canva-solutions-mosaic" aria-label="Product solutions grid">
              {/* Tile 1: Tote with large sage green circle */}
              <Link href="/products/tote-bins" className="canva-mosaic-tile" aria-label="View attached-lid totes">
                <span className="canva-mosaic-circle canva-circle-sage" aria-hidden="true" />
                <div className="canva-mosaic-img-wrap">
                  <Image
                    src="/assets/01_products_photos_composites/03_attached_lid_tote.png"
                    alt="Attached-lid tote container"
                    fill
                    sizes="(max-width: 900px) 45vw, 22vw"
                  />
                </div>
              </Link>

              {/* Tile 2: Spool with large coral circle */}
              <Link href="/products/spools" className="canva-mosaic-tile" aria-label="View industrial spools">
                <span className="canva-mosaic-circle canva-circle-coral" aria-hidden="true" />
                <div className="canva-mosaic-img-wrap">
                  <Image
                    src="/assets/01_products_photos_composites/06_industrial_spool.png"
                    alt="Industrial precision spool"
                    fill
                    sizes="(max-width: 900px) 45vw, 22vw"
                  />
                </div>
              </Link>

              {/* Tile 3: Crate with large beige circle */}
              <Link href="/products/crates" className="canva-mosaic-tile" aria-label="View crates and bins">
                <span className="canva-mosaic-circle canva-circle-beige" aria-hidden="true" />
                <div className="canva-mosaic-img-wrap">
                  <Image
                    src="/assets/01_products_photos_composites/04_crate_and_bin.png"
                    alt="Industrial plastic crate"
                    fill
                    sizes="(max-width: 900px) 45vw, 22vw"
                  />
                </div>
              </Link>

              {/* Tile 4: Pallet with large amber circle */}
              <Link href="/products/pallets" className="canva-mosaic-tile" aria-label="View industrial pallets">
                <span className="canva-mosaic-circle canva-circle-amber" aria-hidden="true" />
                <div className="canva-mosaic-img-wrap">
                  <Image
                    src="/assets/01_products_photos_composites/05_green_pallet.png"
                    alt="Heavy duty plastic pallet"
                    fill
                    sizes="(max-width: 900px) 45vw, 22vw"
                  />
                </div>
              </Link>
            </div>

            <div className="canva-solutions-copy">
              <p className="canva-kicker">OUR SOLUTIONS</p>
              <h2 id="solutions-title">
                Practical products for every stage of your supply chain.
              </h2>
              <p>
                From storage and handling to transport and organisation, our plastic products are built to perform in demanding industrial environments. A wide range. Reliable by design.
              </p>
              <a href="#range" className="canva-pill-button">
                Explore range
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 3: OUR PRODUCT RANGE */}
        <section className="canva-range" id="range" aria-labelledby="range-title">
          <div className="site-container">
            <div className="canva-range-header">
              <h2 id="range-title">Our Product Range</h2>
            </div>

            <div className="canva-range-grid">
              {productRangeItems.map((item) => (
                <div className="canva-range-card" key={item.slug}>
                  <div className="canva-range-art">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 20vw"
                    />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Link href={`/products/${item.slug}`} className="canva-link-arrow">
                    View details <ArrowRight aria-hidden="true" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: OUR MANUFACTURING */}
        <section className="canva-manufacturing" aria-labelledby="manufacturing-title">
          <div className="site-container canva-manufacturing-grid">
            <div className="canva-manufacturing-copy">
              <p className="canva-kicker">OUR MANUFACTURING</p>
              <h2 id="manufacturing-title">
                Engineered with precision. Produced with care.
              </h2>
              <p>
                Our state-of-the-art injection moulding facility is equipped with modern machinery and supported by skilled teams. From raw material to finished product, every step is managed in-house to ensure consistency and reliability.
              </p>
              <Link href="/capabilities" className="canva-link-arrow">
                Explore our capabilities <ArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="canva-manufacturing-art">
              <Image
                src="/assets/01_products_photos_composites/08_injection_moulding_factory.png"
                alt="Advanced injection moulding plant machinery"
                fill
                sizes="(max-width: 900px) 95vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* SECTION 5: QUALITY ASSURANCE */}
        <section className="canva-quality" aria-labelledby="quality-title">
          <div className="site-container">
            <div className="canva-quality-header">
              <p className="canva-kicker">QUALITY ASSURANCE</p>
              <h2 id="quality-title">Quality you can rely on.</h2>
            </div>

            <div className="canva-quality-grid">
              {qualitySteps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div className="canva-quality-card" key={step.title}>
                    <div className="canva-quality-icon">
                      <IconComponent aria-hidden="true" />
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* SECTION 6: SUSTAINABLE BY DESIGN */}
        <section className="canva-sustainability" aria-labelledby="sustainability-title">
          <div className="site-container canva-sustainability-grid">
            <div className="canva-sustainability-art">
              <Image
                src="/assets/01_products_photos_composites/09_sustainability_product_composite.png"
                alt="Sustainable circular plastic packaging and pallets"
                fill
                sizes="(max-width: 900px) 95vw, 50vw"
              />
            </div>
            <div className="canva-sustainability-copy">
              <p className="canva-kicker">SUSTAINABLE BY DESIGN</p>
              <h2 id="sustainability-title">
                Made to be used. Made to be better.
              </h2>
              <p>
                Our products are designed for long service life and repeated use, helping reduce waste across operations. We are committed to responsible manufacturing and continuous improvement.
              </p>
              <Link href="/sustainability" className="canva-link-arrow">
                Learn more <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

     
      </main>

      <SiteFooter />
    </>
  );
}
