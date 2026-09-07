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
  Factory,
  Truck,
  Settings,
  Leaf,
  Recycle,
  PackageCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_URL } from "@/lib/site";
import styles from "./products-overview.module.css";

export const metadata: Metadata = {
  title: "Products & Standard Range",
  description:
    "Explore Pixelplast injection moulding products — attached-lid plastic tote bins, precision plastic spools, injection moulded pallets, industrial plastic crates, and storage bins designed for industrial strength and repeatability.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: `${SITE_URL}/products/`,
  },
};

const featuredProductsList = [
  { title: "Attached-lid totes", slug: "tote-bins", icon: Archive },
  { title: "Industrial spools", slug: "spools", icon: Disc },
  { title: "Pallets", slug: "pallets", icon: Layers },
  { title: "Crates & bins", slug: "crates", icon: Boxes },
  { title: "Storage bins", slug: "bins", icon: Archive },
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

      <main id="main-content" className={styles.page}>
        {/* SECTION 1: HERO */}
        <section className="canva-hero" aria-labelledby="hero-title">
          <div className="site-container canva-hero-grid">
            {/* Left Copy */}
            <div className="canva-hero-copy">
              <p className="canva-kicker">INDUSTRIAL PLASTIC SOLUTIONS</p>
              <h1 id="hero-title">
                Injection Moulded<br />Plastic Products.<br />
                <span>Built for Repeat Use.</span>
              </h1>
              <p className="canva-hero-lead">
                Industrial plastic injection moulding products designed for strength, consistency and everyday performance across tote bins, spools, crates, pallets and storage bins.
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
                Explore Our Products <ArrowRight aria-hidden="true" />
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
                View our full range <ArrowRight aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        {/* SECTION 2: OUR SOLUTIONS (DYNAMIC 2X2 MOSAIC WITH LARGE CIRCLES & PROPORTIONAL CUTOUTS) */}
        <section className="canva-solutions" aria-labelledby="solutions-title">
          <div className="site-container canva-solutions-grid">
            <div className={styles.categories} aria-label="Product categories">
              {productRangeItems.map((item) => (
                <Link href={`/products/${item.slug}`} key={item.slug} className={styles.category}>
                  <span className={styles.categoryArt}>
                    <Image src={item.image} alt="" fill sizes="(max-width: 600px) 28vw, 10vw" />
                  </span>
                  <span>{item.title}</span>
                </Link>
              ))}
            </div>

            <div className="canva-solutions-copy">
              <p className="canva-kicker">OUR SOLUTIONS</p>
              <h2 id="solutions-title">
                Injection Moulding Products for Every Stage of Your Supply Chain.
              </h2>
              <p>
                From heavy duty plastic tote bins and industrial plastic crates to precision spools and injection moulded pallets — our plastic products are built to perform in demanding industrial environments. A wide range. Reliable by design.
              </p>
              <a href="#range" className="canva-pill-button">
                Explore Solutions <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className={`site-container ${styles.trust}`}>
            <div><Factory aria-hidden="true" /><span><strong>Built for industry</strong><small>For demanding industrial environments</small></span></div>
            <div><Truck aria-hidden="true" /><span><strong>Built for long-term use</strong><small>Strong, durable and reusable</small></span></div>
            <div><Settings aria-hidden="true" /><span><strong>Custom solutions</strong><small>Discuss your requirements with our team</small></span></div>
          </div>
        </section>

        {/* SECTION 3: OUR PRODUCT RANGE */}
        <section className="canva-range" id="range" aria-labelledby="range-title">
          <div className="site-container">
            <div className="canva-range-header">
              <div><p className="canva-kicker">OUR PRODUCT RANGE</p><h2 id="range-title">Reliable Products. Real-World Performance.</h2></div>
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
                Precision Plastic Injection Moulding — Produced with Care.
              </h2>
              <p>
                Our state-of-the-art plastic injection moulding facility is equipped with modern machinery and supported by skilled teams. From raw material to finished injection moulded plastic components, every step is managed in-house to ensure consistency and reliability.
              </p>
              <Link href="/capabilities" className="canva-pill-button">
                Explore our capabilities <ArrowRight aria-hidden="true" />
              </Link>
              <div className={styles.manufacturingFacts}>
                <div><strong>Modern Machinery</strong><small>Injection moulding technology</small></div>
                <div><strong>In-House Production</strong><small>From material to component</small></div>
                <div><strong>Consistent Quality</strong><small>Attention at every stage</small></div>
              </div>
            </div>
            <div className="canva-manufacturing-art">
              <Image
                src="/assets/1.png"
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
              <h2 id="quality-title">Quality Injection Moulding You Can Rely On.</h2>
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
                Injection Moulded Products — Made to Be Better.
              </h2>
              <p>
                Our products are designed for long service life and repeated use, helping reduce waste across operations. We are committed to responsible manufacturing and continuous improvement.
              </p>
              <div className={styles.sustainabilityFacts}>
                <div><Leaf aria-hidden="true" /><span>Durable by design</span></div>
                <div><Recycle aria-hidden="true" /><span>Repeated use</span></div>
                <div><Users aria-hidden="true" /><span>A sustainable future</span></div>
              </div>
              <Link href="/sustainability" className="canva-link-arrow">
                Learn more <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="enquiry-title">
          <div className={`site-container ${styles.ctaInner}`}>
            <div><p className="canva-kicker">WORK TOGETHER</p><h2 id="enquiry-title">Let?s Build a More Efficient,<br />Sustainable Tomorrow.</h2></div>
            <div><p>Talk to our team about your requirements. We?ll help you find the right solution for your operations.</p><Link href="/contact#quote" className="canva-pill-button">Request a Quote <ArrowRight aria-hidden="true" /></Link></div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
