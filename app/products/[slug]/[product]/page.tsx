import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Ruler,
  ShieldCheck,
  Leaf,
  Layers3,
  Forklift,
  Sun,
  Recycle,
  Box,
  Tag,
  Thermometer,
  FileCheck,
  Award,
  Palette,
  Settings,
  Gem,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { company } from "@/data/company";
import { SITE_URL } from "@/lib/site";
import {
  getProduct,
  productCategories,
  type ProductCategory,
  type ProductSpec,
} from "@/app/products/data";
import { ProductGallery } from "./ProductGallery";
import styles from "./product-detail.module.css";

const featureIcons = [Leaf, Layers3, Forklift, ShieldCheck, Sun, Recycle];
const specIcons: Record<string, typeof Ruler> = {
  "Product Code": Tag, Dimensions: Ruler, "Static Capacity": Layers3,
  "Dynamic Capacity": Layers3, "Racking Capacity": Box, Material: Recycle,
  "Colour Options": Palette, "Fork Access": Forklift,
  "Operating Temperature": Thermometer, "Export Compliance": FileCheck,
  "Test Standard": Award,
};

type ProductPageProps = {
  params: Promise<{ slug: string; product: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.flatMap(({ slug, products }) =>
    products.map((item) => ({ slug, product: item.slug })),
  );
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug, product: productSlug } = await params;
  const match = getProduct(slug, productSlug);

  if (!match) {
    return { title: "Product not found" };
  }

  const { category, product } = match;

  return {
    title: `${product.title} (${product.code})`,
    description: product.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${SITE_URL}/products/${category.slug}/${product.slug}/`,
    },
  };
}

function getSpecRows(category: ProductCategory, product: ProductSpec) {
  const rows: { label: string; value?: string }[] =
    category.slug === "pallets"
      ? [
          { label: "Product Code", value: product.code },
          { label: "Dimensions", value: product.dimensions },
          { label: "Static Capacity", value: product.staticLoad },
          { label: "Dynamic Capacity", value: product.dynamicLoad },
          { label: "Racking Capacity", value: product.rackingLoad },
          { label: "Material", value: product.material },
          { label: "Colour Options", value: product.color },
        ]
      : category.slug === "crates" || category.slug === "tote-bins"
        ? [
            { label: "Product Code", value: product.code },
            { label: "Outer Dimensions (OD)", value: product.outer },
            { label: "Inner Dimensions (ID)", value: product.inner },
            { label: "Versions / Base", value: product.versions },
            { label: "Colour Options", value: product.colors },
          ]
        : category.slug === "bins"
          ? [
              { label: "Product Code", value: product.code },
              { label: "Outer Dimensions (OD)", value: product.outer },
              { label: "Effective Height", value: product.effectiveHeight },
              { label: "Colour Options", value: product.colors },
            ]
          : [
              { label: "Product Code", value: product.code },
              { label: "Dimensions", value: product.dimensions },
              { label: "Materials", value: product.materials },
            ];

  return rows.filter((row) => row.value);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug, product: productSlug } = await params;
  const match = getProduct(slug, productSlug);

  if (!match) {
    notFound();
  }

  const { category, product } = match;

  const specs = getSpecRows(category, product);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className={`product-detail-page ${styles.page}`}>
        <section
          className={`product-detail-hero product-detail-hero--${category.slug} product-detail-hero--single`}
        >
          <div className="site-container product-detail-hero-frame pd-hero-grid">
            <div>
              <ProductGallery product={product} />
              <div className={styles.galleryNotes}>
                <span><Leaf />{product.material ?? product.materials ?? category.shortTitle}</span>
                <span><ShieldCheck />{product.code}</span>
                <span><Box />{product.tagline}</span>
              </div>
            </div>
            <div className="product-info">
          <nav
            className="product-detail-breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/products/${category.slug}`}>
              {category.shortTitle}
            </Link>
            <span aria-hidden="true">/</span>
            <span>{product.title}</span>
          </nav>
              <p className="eyebrow">
                {product.code} / {category.shortTitle}
              </p>
              <h1>{product.title}</h1>
              <p className="product-info-tagline">{product.tagline}</p>
              <p className="product-info-desc">{product.description}</p>

              <div className="product-info-cta">
                <a href={company.emailHref}>
                  Request Quotation <ArrowUpRight aria-hidden="true" />
                </a>
                <Link href="/contact#quote">
                  Talk to an Engineer <ArrowRight aria-hidden="true" />
                </Link>
              </div>
              <div className={styles.heroBenefits}>
                <span><Settings />{specs[1]?.value ?? product.code}</span>
                <span><Gem />{product.material ?? product.materials ?? product.tagline}</span>
                <span><Leaf />{category.shortTitle}</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="product-spec-sheet-section"
          aria-labelledby="product-specs-heading"
        >
          <div className="site-container product-spec-sheet-grid">
            <div>
              <p className="eyebrow">Technical Specifications</p>
              <h2 id="product-specs-heading">Full Injection Moulding Specifications.</h2>
              <p className="product-spec-sheet-lead">
                Approved dimensions and load ratings for engineering,
                purchasing and inspection reference.
              </p>
            </div>
            <a className={styles.specRequest} href={company.emailHref}><FileCheck /> Request Spec Sheet <ArrowUpRight /></a>

            <dl className="product-spec-sheet">
              {[...specs, ...category.specExtras].map((row) => {
                const Icon = specIcons[row.label] ?? Ruler;
                return (
                <div key={row.label}>
                  <dt>
                    <Icon aria-hidden="true" /> {row.label}
                  </dt>
                  <dd>{row.value}</dd>
                </div>
              );})}
            </dl>
            <p className="product-spec-note">{category.specNote}</p>
          </div>
        </section>

        <section
          className="product-features-section"
          aria-labelledby="product-features-heading"
        >
          <div className="site-container product-features-grid">
            <div>
              <p className="eyebrow">Key Features & Benefits</p>
              <h2 id="product-features-heading">
                Injection Moulded Plastic Components — Built for Continuous Operation.
              </h2>
              <p className="product-features-copy">
                Explore the material, handling and performance features of {product.title}.
              </p>
            </div>
            <div>
              <ul className="product-features-list">
                {product.features.map((feature, index) => {
                  const Icon = featureIcons[index % featureIcons.length];
                  return (
                  <li key={feature}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <Icon aria-hidden="true" />
                    <strong>{feature}</strong>
                  </li>
                );})}
              </ul>
              <ul className="product-verified-list">
                {product.verified.map((item) => (
                  <li key={item}>
                    <ShieldCheck aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SEO CONTENT */}
        <section
          className="product-seo-section"
          aria-labelledby="product-seo-heading"
        >
          <div className="site-container product-seo-grid">
            <div>
              <p className="eyebrow">About the Product</p>
              <h2 id="product-seo-heading">
                About {product.title} — Injection Moulded Plastic Components.
              </h2>
            <div className="product-seo-copy">
              {product.seo.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
            </div>
            <figure className={styles.overviewImage}>
              <Image src={product.image} alt={product.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" />
              <figcaption>Quality in every detail</figcaption>
            </figure>
          </div>
        </section>

        <section
          className="product-related-section"
          aria-labelledby="product-related-heading"
        >
          <div className="site-container">
            <div className="product-related-heading">
              <div>
                <p className="eyebrow">Same Category</p>
                <h2 id="product-related-heading">
                  More {category.shortTitle}.
                </h2>
              </div>
              <Link href={`/products/${category.slug}`}>
                View all {category.shortTitle} <ArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className="product-card-grid product-related-grid">
              {category.products
                .filter((item) => item.code !== product.code)
                .slice(0, 3)
                .map((item) => (
                  <article className="product-card" key={item.code}>
                    <Link
                      href={`/products/${category.slug}/${item.slug}`}
                      className="product-card-link"
                      aria-label={`View details of ${item.title} (${item.code})`}
                    >
                      <div className="product-card-media">
                        <div className="product-card-img-wrap">
                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                        </div>
                        <span className="product-card-code">{item.code}</span>
                      </div>
                      <div className="product-card-body">
                        <p className="product-card-tag">{item.tagline}</p>
                        <h3>{item.title}</h3>
                        <span className="product-card-cta">
                          View Product Details{" "}
                          <ArrowRight aria-hidden="true" />
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
            </div>
          </div>
        </section>

        <section
          className="product-detail-contact"
          aria-labelledby="product-contact-heading"
        >
          <div className="site-container product-detail-contact-grid">
            <div>
              <p className="eyebrow eyebrow--light">Project Review</p>
              <h2 id="product-contact-heading">
                Discuss Your {category.shortTitle.substring(0, 12)} Requirement.
              </h2>
            </div>
            <div>
              <p>
                Share your target volumes, operating environment and drawings.
                Our team as a plastic injection moulding company will confirm tooling, cycle times and a formal
                quotation for {product.title}.
              </p>
              <div className="product-contact-actions">
                <a href={company.emailHref}>
                  Request Formal Quote <ArrowUpRight aria-hidden="true" />
                </a>
                <Link href={`/products/${category.slug}`}>View {category.shortTitle} <ArrowRight aria-hidden="true" /></Link>
                <Link href="/contact">Contact Us <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
          <Link
            className="product-back-link"
            href={`/products/${category.slug}`}
          >
            <ArrowLeft aria-hidden="true" /> All {category.shortTitle}
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
