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
import { ZoomableImage } from "@/components/ui/ZoomableImage";
import { company } from "@/data/company";
import {
  getProductCategory,
  productCategories,
  type ProductCategory,
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
                  aria-current={
                    item.slug === category.slug ? "page" : undefined
                  }
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
            className="pallet-advantages-section section"
            aria-labelledby="pallet-adv-heading"
          >
            <div className="site-container">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="eyebrow justify-center">
                  Built to Last, Designed for Efficiency
                </p>
                <h2
                  id="pallet-adv-heading"
                  className="text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-navy-950"
                >
                  Why Plastic Pallets Outperform Wood
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.palletAdvantages.map((adv) => (
                  <div
                    className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm"
                    key={adv.title}
                  >
                    <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold uppercase text-navy-950 mb-2">
                      {adv.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* DETAILED SPECIFICATIONS TABLE */}
        {category.specifications && (
          <section
            className="product-spec-section"
            aria-labelledby="specifications-heading"
          >
            <div className="site-container">
              <div className="product-spec-heading">
                <div>
                  <p className="eyebrow eyebrow--light">
                    Approved Product Data
                  </p>
                  <h2 id="specifications-heading">
                    Standard {category.shortTitle} Specifications.
                  </h2>
                </div>
                <p>
                  Technical parameters from verified manufacturing
                  documentation.
                </p>
              </div>

              <div className="product-spec-table-wrap">
                <table className="product-spec-table">
                  <caption className="sr-only">
                    {category.title} specifications table
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Model / Code</th>
                      {category.slug === "pallets" && (
                        <>
                          <th scope="col">Type</th>
                          <th scope="col">Dimensions</th>
                          <th scope="col">Static Load</th>
                          <th scope="col">Dynamic Load</th>
                          <th scope="col">Racking Load</th>
                          <th scope="col">Material</th>
                        </>
                      )}
                      {(category.slug === "crates" ||
                        category.slug === "tote-bins") && (
                        <>
                          <th scope="col">Outer Dimensions (OD)</th>
                          <th scope="col">Inner Dimensions (ID)</th>
                          <th scope="col">Versions / Features</th>
                          <th scope="col">Colors</th>
                        </>
                      )}
                      {category.slug === "bins" && (
                        <>
                          <th scope="col">Outer Dimensions (OD)</th>
                          <th scope="col">Effective Height</th>
                          <th scope="col">Colors</th>
                        </>
                      )}
                      {category.slug === "spools" && (
                        <>
                          <th scope="col">Dimensions (Traverse × Flange)</th>
                          <th scope="col">Materials</th>
                          <th scope="col">Rotational Balance</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {category.specifications.map((spec) => (
                      <tr key={String(spec.code)}>
                        <td>
                          {spec.image && (
                            <div className="product-spec-img-wrap">
                              <ZoomableImage
                                src={String(spec.image)}
                                alt={`${spec.code} product photo`}
                                fill
                                sizes="84px"
                              />
                            </div>
                          )}
                        </td>
                        <th scope="row">
                          <strong className="text-emerald-700 font-bold">
                            {spec.code}
                          </strong>
                        </th>
                        {category.slug === "pallets" && (
                          <>
                            <td>{spec.type}</td>
                            <td>{spec.dimensions}</td>
                            <td>{spec.staticLoad}</td>
                            <td>{spec.dynamicLoad}</td>
                            <td>{spec.rackingLoad}</td>
                            <td>{spec.material}</td>
                          </>
                        )}
                        {(category.slug === "crates" ||
                          category.slug === "tote-bins") && (
                          <>
                            <td>{spec.outer}</td>
                            <td>{spec.inner}</td>
                            <td>{spec.versions}</td>
                            <td>{spec.colors}</td>
                          </>
                        )}
                        {category.slug === "bins" && (
                          <>
                            <td>{spec.outer}</td>
                            <td>{spec.effectiveHeight}</td>
                            <td>{spec.colors}</td>
                          </>
                        )}
                        {category.slug === "spools" && (
                          <>
                            <td>{spec.dimensions}</td>
                            <td>{spec.materials}</td>
                            <td>{spec.features}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Specifications Card View */}
              <div className="product-spec-mobile-view">
                {category.specifications.map((spec) => (
                  <div
                    className="product-spec-mobile-card"
                    key={String(spec.code)}
                  >
                    <div className="product-spec-mobile-card-header">
                      {spec.image && (
                        <div className="product-spec-img-wrap">
                          <ZoomableImage
                            src={String(spec.image)}
                            alt={`${spec.code} product photo`}
                            fill
                            sizes="68px"
                          />
                        </div>
                      )}
                      <div className="product-spec-mobile-header-details">
                        <span className="product-spec-mobile-code">
                          {spec.code}
                        </span>
                        {spec.type && (
                          <span className="product-spec-mobile-type">
                            {spec.type}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="product-spec-mobile-card-body">
                      {category.slug === "pallets" && (
                        <>
                          <div className="product-spec-mobile-row">
                            <span className="label">Dimensions</span>
                            <span className="value">{spec.dimensions}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Static Load</span>
                            <span className="value">{spec.staticLoad}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Dynamic Load</span>
                            <span className="value">{spec.dynamicLoad}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Racking Load</span>
                            <span className="value">{spec.rackingLoad}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Material</span>
                            <span className="value">{spec.material}</span>
                          </div>
                        </>
                      )}
                      {(category.slug === "crates" ||
                        category.slug === "tote-bins") && (
                        <>
                          <div className="product-spec-mobile-row">
                            <span className="label">Outer Dimensions</span>
                            <span className="value">{spec.outer}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Inner Dimensions</span>
                            <span className="value">{spec.inner}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Versions</span>
                            <span className="value">{spec.versions}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Colors</span>
                            <span className="value">{spec.colors}</span>
                          </div>
                        </>
                      )}
                      {category.slug === "bins" && (
                        <>
                          <div className="product-spec-mobile-row">
                            <span className="label">Outer Dimensions</span>
                            <span className="value">{spec.outer}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Effective Height</span>
                            <span className="value">
                              {spec.effectiveHeight}
                            </span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Colors</span>
                            <span className="value">{spec.colors}</span>
                          </div>
                        </>
                      )}
                      {category.slug === "spools" && (
                        <>
                          <div className="product-spec-mobile-row">
                            <span className="label">Dimensions</span>
                            <span className="value">{spec.dimensions}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Materials</span>
                            <span className="value">{spec.materials}</span>
                          </div>
                          <div className="product-spec-mobile-row">
                            <span className="label">Balance / Features</span>
                            <span className="value">{spec.features}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

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
