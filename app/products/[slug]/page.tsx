import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { company } from "@/data/company";
import {
  getProductCategory,
  productCategories,
  type ProductCategory,
  type ProductSpec,
} from "@/app/products/data";

type ProductCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return productCategories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    return { title: "Product category not found" };
  }

  return {
    title: `${category.title} | Pixelplast`,
    description: category.description,
  };
}

function ProductKeySpecs({
  category,
  product,
}: {
  category: ProductCategory;
  product: ProductSpec;
}) {
  const rows: { label: string; value?: string }[] =
    category.slug === "pallets"
      ? [
          { label: "Dimensions", value: product.dimensions },
          { label: "Static", value: product.staticLoad },
          { label: "Dynamic", value: product.dynamicLoad },
          { label: "Racking", value: product.rackingLoad },
        ]
      : category.slug === "crates" || category.slug === "tote-bins"
        ? [
            { label: "Outer (OD)", value: product.outer },
            { label: "Inner (ID)", value: product.inner },
            { label: "Versions", value: product.versions },
            { label: "Colours", value: product.colors },
          ]
        : category.slug === "bins"
          ? [
              { label: "Outer (OD)", value: product.outer },
              { label: "Height", value: product.effectiveHeight },
              { label: "Colours", value: product.colors },
            ]
          : [
              { label: "Dimensions", value: product.dimensions },
              { label: "Materials", value: product.materials },
            ];

  return (
    <ul className="product-card-specs">
      {rows.map(
        (row) =>
          row.value && (
            <li key={row.label}>
              <span>{row.label}</span>
              <strong>{row.value}</strong>
            </li>
          ),
      )}
    </ul>
  );
}

function ProductCard({
  category,
  product,
}: {
  category: ProductCategory;
  product: ProductSpec;
}) {
  return (
    <article className="product-card">
      <Link
        href={`/products/${category.slug}/${product.slug}`}
        className="product-card-link"
        aria-label={`View details of ${product.title} (${product.code})`}
      >
        <div className="product-card-media">
          <div className="product-card-img-wrap">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>
          <span className="product-card-code">{product.code}</span>
        </div>

        <div className="product-card-body">
          <p className="product-card-tag">{product.tagline}</p>
          <h3>{product.title}</h3>
          <ProductKeySpecs category={category} product={product} />
          <span className="product-card-cta">
            View Product Details <ArrowRight aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  );
}

export default async function ProductCategoryPage({
  params,
}: ProductCategoryPageProps) {
  const { slug } = await params;
  const category = getProductCategory(slug);

  if (!category) {
    notFound();
  }

  const siblingCategories = productCategories.filter(
    (item): item is ProductCategory => item.slug !== category.slug,
  );

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="product-detail-page">
        <section
          className={`product-detail-hero product-detail-hero--${category.slug}`}
        >
          <div
            className="site-container product-detail-breadcrumbs"
            aria-label="Breadcrumb"
          >
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span>{category.shortTitle}</span>
          </div>

          <div className="product-detail-hero-frame">
            <div className="product-tech-hero-stage">
              <div className="product-tech-hero-copy">
                <p className="eyebrow">Product Category / {category.index}</p>
                <h1>
                  {category.heroTitleLines.map((line, index) => (
                    <span
                      className={
                        index === 1 ? "product-tech-title-accent" : undefined
                      }
                      key={line}
                    >
                      {line}
                    </span>
                  ))}
                </h1>
                <p>{category.description}</p>
                <Link className="product-tech-hero-cta" href="/contact#quote">
                  Discuss Your Requirement <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>

              <figure className="product-tech-hero-product">
                <span className="product-tech-hero-index" aria-hidden="true">
                  {category.index}
                </span>
                <span
                  className="product-tech-hero-measure product-tech-hero-measure--x"
                  aria-hidden="true"
                />
                <span
                  className="product-tech-hero-measure product-tech-hero-measure--y"
                  aria-hidden="true"
                />
                <div className="product-tech-hero-image">
                  <Image
                    src={category.heroImage}
                    alt={`${category.title} category visual`}
                    fill
                    priority
                    sizes="(max-width: 820px) 100vw, 58vw"
                  />
                </div>
                <figcaption>
                  <strong>{category.label}</strong>
                  <span>
                    {category.shortTitle} / Category {category.index}
                  </span>
                </figcaption>
                <span
                  className="product-tech-hero-coordinate"
                  aria-hidden="true"
                >
                  {category.applications[0]}
                </span>
              </figure>

              <div
                className="product-tech-hero-features"
                aria-label="Category overview"
              >
                <p>Product highlights</p>
                {category.highlights.map((highlight) => (
                  <span key={highlight}>{highlight}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <nav className="product-category-nav" aria-label="Product categories">
          <div className="site-container">
            <span>Browse Categories</span>
            <div>
              {productCategories.map((item) => (
                <Link
                  className={
                    item.slug === category.slug ? "is-active" : undefined
                  }
                  href={`/products/${item.slug}`}
                  aria-current={item.slug === category.slug ? "page" : undefined}
                  key={item.slug}
                >
                  {item.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* OVERVIEW & APPLICATIONS */}
        <section
          className="product-detail-overview"
          aria-labelledby="category-overview-heading"
        >
          <div className="site-container product-detail-overview-grid">
            <div>
              <p className="eyebrow">Category Overview</p>
              <h2 id="category-overview-heading">
                Engineered for Demanding Industrial Workflows.
              </h2>
            </div>
            <div className="product-detail-overview-copy">
              <p>{category.overview}</p>
              <div className="product-application-list">
                <p>Core Applications</p>
                <ul>
                  {category.applications.map((application) => (
                    <li key={application}>
                      <Check aria-hidden="true" /> {application}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PALLET ADVANTAGES (IF PALLETS) */}
        {category.palletAdvantages && (
          <section
            className="pallet-advantages-section"
            aria-labelledby="pallet-adv-heading"
          >
            <div className="site-container">
              <div className="pallet-adv-heading">
                <p className="eyebrow">Built to Last, Designed for Efficiency</p>
                <h2 id="pallet-adv-heading">
                  Why Plastic Pallets Outperform Wood
                </h2>
              </div>
              <div className="pallet-adv-list">
                {category.palletAdvantages.map((adv) => (
                  <div className="pallet-adv-card" key={adv.title}>
                    <span className="pallet-adv-icon" aria-hidden="true">
                      <ShieldCheck />
                    </span>
                    <h3>{adv.title}</h3>
                    <p>{adv.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* PRODUCT CARDS */}
        <section
          className="product-card-section"
          aria-labelledby="specifications-heading"
        >
          <div className="site-container">
            <div className="product-spec-heading">
              <div>
                <p className="eyebrow eyebrow--light">Approved Product Data</p>
                <h2 id="specifications-heading">
                  Standard {category.shortTitle} Range.
                </h2>
              </div>
              <p>
                Select a model to view full technical specifications and
                product gallery.
              </p>
            </div>

            <div className="product-card-grid">
              {category.products.map((product) => (
                <ProductCard
                  category={category}
                  product={product}
                  key={product.code}
                />
              ))}
            </div>
          </div>
        </section>

        {/* MATERIAL CAPABILITIES */}
        {category.materials && (
          <section
            className="product-material-section"
            aria-labelledby="materials-heading"
          >
            <div className="site-container product-material-grid">
              <div>
                <p className="eyebrow eyebrow--light">Verified Polymers</p>
                <h2 id="materials-heading">Engineered Resin Selection.</h2>
              </div>
              <div className="product-material-list">
                {category.materials.map((material, index) => (
                  <div key={material}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{material}</strong>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TECHNICAL NOTE ASIDE */}
        <section className="site-container my-12">
          <aside
            className="product-technical-note"
            aria-label="Technical information note"
          >
            <span>Technical Note</span>
            <p>{category.technicalNote}</p>
          </aside>
        </section>

        {/* CONTACT / NEXT CATEGORIES */}
        <section
          className="product-detail-contact"
          aria-labelledby="product-contact-heading"
        >
          <div className="site-container product-detail-contact-grid">
            <div>
              <p className="eyebrow eyebrow--light">Application Review</p>
              <h2 id="product-contact-heading">
                Discuss Your Plastic Specification.
              </h2>
            </div>
            <div>
              <p>
                Share your target dimensions, annual batch volume, operating
                environment, and technical drawings. Our team will verify
                tooling and deliver a formal quotation.
              </p>
              <div className="product-contact-actions">
                <a href={company.emailHref}>
                  Request Formal Quote <ArrowUpRight aria-hidden="true" />
                </a>
                {siblingCategories.slice(0, 3).map((item) => (
                  <Link href={`/products/${item.slug}`} key={item.slug}>
                    View {item.shortTitle} <ArrowRight aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link className="product-back-link" href="/products">
            <ArrowLeft aria-hidden="true" /> All Product Categories
          </Link>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}