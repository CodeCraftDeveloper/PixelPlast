import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Cable,
  Factory,
  PackageCheck,
  Ruler,
  Settings2,
  Truck,
  Cog,
  Layers,
  Zap,
} from "lucide-react";

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ProductRange } from "./ProductRange";
import styles from "./category-middle.module.css";
import { SITE_URL } from "@/lib/site";
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
    title: category.title,
    description: category.description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: `${SITE_URL}/products/${category.slug}/`,
    },
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
    <ul className={styles.specs}>
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
    <article className={styles.card}>
      <Link
        href={`/products/${category.slug}/${product.slug}`}
        className={styles.cardLink}
        aria-label={`View details of ${product.title} (${product.code})`}
      >
        <div className={styles.cardMedia}>
          <div className={styles.cardImage}>
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(max-width: 640px) 75vw, (max-width: 1000px) 30vw, 23vw"
            />
          </div>
        </div>

        <div className={styles.cardBody}>
          <h3>{product.title}</h3>
          <ProductKeySpecs category={category} product={product} />
          <span className={styles.cardCta}>
            View Details <ArrowRight aria-hidden="true" />
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

  const features = category.products[0]?.features ?? category.highlights;
  const benefits = [
    { icon: Layers, title: "Material options", text: category.materials?.join(" / ") ?? category.shortTitle },
    { icon: Cog, title: "Manufacturing", text: "Injection moulding" },
    { icon: Settings2, title: "Application review", text: "Discuss your specification" },
    { icon: PackageCheck, title: "Product range", text: `${category.products.length} standard models` },
  ];

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main-content" className="product-detail-page">
        <section className={`product-reference-hero product-reference-hero--${category.slug}`}>
          <div className="product-reference-scene" aria-hidden="true" />
          <div className="product-reference-panel" aria-hidden="true" />
          <nav className="product-reference-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/products">Products</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{category.shortTitle}</span>
          </nav>

          <div className="product-reference-copy">
            <p className="product-reference-eyebrow">Built for a stronger tomorrow</p>
            <h1>
              <span>{category.heroTitleLines[0]}</span>
              <span><em>{category.heroTitleLines[1]}</em> {category.heroTitleLines[2]}</span>
            </h1>
            <p className="product-reference-description">{category.description}</p>
            <ul className="product-reference-highlights" aria-label="Product highlights">
              {(category.slug === "spools"
                ? ["High Strength", "Engineered Polymers (PP/ABS)", "High-Speed Winding"]
                : category.highlights
              ).map((highlight, index) => {
                const Icon = [Cog, Layers, Zap][index % 3];
                return (
                  <li key={highlight}>
                    <span className="product-reference-icon"><Icon aria-hidden="true" /></span>
                    <span>{highlight}</span>
                  </li>
                );
              })}
            </ul>
            <Link className="product-reference-cta" href="/contact#quote">
              Discuss Your Requirement <ArrowUpRight aria-hidden="true" />
            </Link>
            <nav className="product-reference-sections" aria-label="Explore this category">
              <a href="#category-overview-heading" aria-label="01 Category overview">01</a>
              <a href="#specifications-heading" aria-label="02 Product range">02</a>
              <a href="#product-contact-heading" aria-label="03 Discuss requirements">03</a>
            </nav>
          </div>

          <figure className="product-reference-product">
            <Image
              src={category.heroImage}
              alt={`${category.title} category visual`}
              fill
              preload
              sizes="(max-width: 900px) 90vw, 43vw"
            />
          </figure>
          <div className="product-reference-side-label" aria-hidden="true">
            <span>{category.shortTitle}</span>
            <i />
            <span>{category.slug === "spools" ? "Reliable\nDurable\nVersatile" : category.label}</span>
          </div>
          <span className="product-reference-index" aria-hidden="true">{category.index}</span>
          <p className="product-reference-caption">For industrial<br />&amp; commercial applications</p>
        </section>

        <div className={styles.middle}>
          <section className={styles.directory} aria-labelledby="category-directory-heading">
            <div className={styles.container}>
              <div className={styles.sectionHeading}>
                <div><p className={styles.eyebrow}>Explore our product range</p>                <h2 id="category-directory-heading">{category.shortTitle} Manufacturer — Range for Every Application</h2></div>
                    <p><strong>Injection moulding near me</strong> — find Pixelplast, your trusted injection moulding products manufacturer serving India and global markets.</p>
                <Link className={styles.allProducts} href="/products"><ArrowRight aria-hidden="true" /><span>View all products</span></Link>
              </div>
              <nav className={styles.categories} aria-label="Product categories">
                {productCategories.map((item) => (
                  <Link className={styles.category} href={`/products/${item.slug}`} aria-current={item.slug === category.slug ? "page" : undefined} key={item.slug}>
                    <span className={styles.categoryImage}><Image src={item.products[0]?.image ?? item.heroImage} alt={item.shortTitle} fill sizes="(max-width: 640px) 130px, 17vw" /></span>
                    <strong>{item.shortTitle}</strong>
                  </Link>
                ))}
              </nav>
            </div>
          </section>

          <section className={styles.overview} aria-labelledby="category-overview-heading">
            <div className={`${styles.container} ${styles.overviewGrid}`}>
              <div className={styles.overviewImage}>
                <Image src={category.heroImage} alt={`${category.shortTitle} construction`} fill sizes="(max-width: 640px) 90vw, 40vw" />
                <span className={styles.badge}><Cog aria-hidden="true" /><span>Engineered<br />for performance</span></span>
              </div>
              <div className={styles.overviewCopy}>
                <p className={styles.eyebrow}>Category overview</p>
                <h2 id="category-overview-heading">Engineered Injection Moulding for Demanding Industrial Workflows</h2>
                <p>{category.overview}</p>
                <ul className={styles.highlights}>
                  {features.slice(0, 4).map((feature, index) => {
                    const Icon = [Layers, Ruler, Settings2, Cog][index];
                    return <li key={feature}><Icon aria-hidden="true" /><span>{feature}</span></li>;
                  })}
                </ul>
                <a className={styles.textLink} href="#specifications-heading">Explore {category.shortTitle} <ArrowRight aria-hidden="true" /></a>
              </div>
            </div>
          </section>

          <ProductRange title={category.shortTitle}>
            {category.products.map((product) => <ProductCard category={category} product={product} key={product.code} />)}
          </ProductRange>

          <section className={styles.applications} aria-labelledby="applications-heading">
            <div className={`${styles.container} ${styles.applicationGrid}`}>
              <div className={styles.applicationCopy}>
                <p className={styles.eyebrow}>Applications</p>
                <h2 id="applications-heading">Trusted Across<br />Industries</h2>
                <p>Explore the uses of our {category.shortTitle.toLowerCase()} and discuss your operating requirements with our team.</p>
                <Link className={styles.textLink} href="/contact#quote">Discuss your application <ArrowUpRight aria-hidden="true" /></Link>
              </div>
              <div className={styles.applicationTiles}>
                {category.applications.map((application, index) => {
                  const Icon = [Cable, Factory, Zap, Truck][index % 4];
                  return <article className={styles.applicationTile} key={application}><Icon aria-hidden="true" /><h3>{application}</h3></article>;
                })}
              </div>
            </div>
          </section>

          <section className={styles.why} aria-labelledby="why-pixelplast-heading">
            <div className={styles.container}>
              <div className={styles.whyPanel}>
                <div className={styles.whyHeading}>
                  <div><p className={styles.eyebrow}>Why choose Pixelplast</p><h2 id="why-pixelplast-heading">More Than a<br />Product Manufacturer</h2></div>
                  <p>{category.technicalNote}</p>
                </div>
                <div className={styles.benefits}>
                  {benefits.map(({ icon: Icon, title, text }, index) => <div className={styles.benefit} key={title}><Icon aria-hidden="true" /><div><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div></div>)}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.contact} aria-labelledby="product-contact-heading">
            <div className={styles.container}>
              <div className={styles.contactPanel}>
                <div><p className={styles.eyebrow}>Let us build together</p><h2 id="product-contact-heading">Need a Custom {category.slug === "spools" ? "Spool " : ""}Solution?</h2></div>
                <div className={styles.contactCopy}><p>Share your specifications and our team will help you find the right solution for your application.</p><Link className={styles.quote} href="/contact#quote">Request a quote <ArrowUpRight aria-hidden="true" /></Link></div>
                <div className={styles.contactImage} aria-hidden="true"><Image src={category.heroImage} alt="" fill sizes="30vw" /></div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}