import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Ruler,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { company } from "@/data/company";
import {
  getProduct,
  productCategories,
  type ProductCategory,
  type ProductSpec,
} from "@/app/products/data";
import { ProductGallery } from "./ProductGallery";

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
    title: `${product.title} (${product.code}) | Pixelplast`,
    description: product.description,
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

  const siblings = productCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 3);

  const specs = getSpecRows(category, product);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="product-detail-page">
        <section
          className={`product-detail-hero product-detail-hero--${category.slug} product-detail-hero--single`}
        >
          <div
            className="site-container product-detail-breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <Link href={`/products/${category.slug}`}>
              {category.shortTitle}
            </Link>
            <span aria-hidden="true">/</span>
            <span>{product.title}</span>
          </div>

          <div className="site-container product-detail-hero-frame pd-hero-grid">
            <ProductGallery product={product} />

            <div className="product-info">
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
            </div>
          </div>
        </section>

        <section
          className="product-spec-sheet-section"
          aria-labelledby="product-specs-heading"
        >
          <div className="site-container product-spec-sheet-grid">
            <div>
              <p className="eyebrow eyebrow--light">Technical Specification</p>
              <h2 id="product-specs-heading">Full Specifications.</h2>
              <p className="product-spec-sheet-lead">
                Approved dimensions and load ratings for engineering,
                purchasing and inspection reference.
              </p>
            </div>

            <dl className="product-spec-sheet">
              {specs.map((row) => (
                <div key={row.label}>
                  <dt>
                    <Ruler aria-hidden="true" /> {row.label}
                  </dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="product-features-section"
          aria-labelledby="product-features-heading"
        >
          <div className="site-container product-features-grid">
            <div>
              <p className="eyebrow">Designed & Verified</p>
              <h2 id="product-features-heading">
                Built for Continuous Operation.
              </h2>
            </div>
            <ul className="product-features-list">
              {product.features.map((feature, index) => (
                <li key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <Check aria-hidden="true" />
                  <strong>{feature}</strong>
                </li>
              ))}
            </ul>
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
                            sizes="(max-width: 640px) 100vw, 50vw"
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
                Our team will confirm tooling, cycle times and a formal
                quotation for {product.title}.
              </p>
              <div className="product-contact-actions">
                <a href={company.emailHref}>
                  Request Formal Quote <ArrowUpRight aria-hidden="true" />
                </a>
                {siblings.map((item) => (
                  <Link href={`/products/${item.slug}`} key={item.slug}>
                    View {item.shortTitle} <ArrowRight aria-hidden="true" />
                  </Link>
                ))}
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