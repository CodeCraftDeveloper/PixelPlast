import { company } from "@/data/company";
import { SITE_URL } from "@/lib/site";

import {
  productCategories,
  type ProductCategory,
  type ProductSpec,
} from "./data";

/** Google truncates meta descriptions past roughly 160 characters. */
const MAX_META_LENGTH = 158;

export const OG_IMAGE = {
  url: "/og/home.jpg",
  width: 1200,
  height: 630,
} as const;

export const PRODUCTS_PAGE_TITLE = `Injection Moulded Plastic Products | ${company.shortName}`;

export const PRODUCTS_PAGE_DESCRIPTION =
  "Explore Pixelplast injection moulded products: attached-lid totes, industrial spools, plastic pallets, crates and modular part bins with verified specs.";

/**
 * Search-facing descriptions for the five category pages. The long-form
 * `category.description` field stays on-page; these are the SERP variants.
 */
const CATEGORY_DESCRIPTION: Record<ProductCategory["slug"], string> = {
  pallets:
    "Heavy duty injection moulded plastic pallets for warehouse racking, internal logistics and export transit. Static, dynamic and racking load ratings published.",
  crates:
    "Perforated and solid injection moulded plastic crates for sub-assemblies, agriculture, retail and automated conveyor systems, with published dimensions.",
  bins: "Stackable front-hopper injection moulded part bins for high-density small parts storage, fast assembly picking and lean inventory organisation.",
  "tote-bins":
    "Reusable injection moulded tote bins with interlocking attached lids for automated warehousing, conveyor routing and secure transit. Nest when empty.",
  spools:
    "Injection moulded ABS and polypropylene spools for high-speed continuous winding of wire, cable, optical fibre, 3D filament and monofilament.",
};

/** Closing clause for product descriptions, paraphrased from each category's verified spec data. */
const CATEGORY_TAIL: Record<ProductCategory["slug"], string> = {
  pallets: "For warehouse racking and export transit.",
  crates: "Reinforced ribbed base, stacks and nests.",
  bins: "Stackable front-hopper design for picking.",
  "tote-bins": "Interlocking lid, stacks closed, nests empty.",
  spools: "Dynamic balance for high-speed winding.",
};

function clamp(text: string, max = MAX_META_LENGTH) {
  if (text.length <= max) return text;

  const clipped = text.slice(0, max);
  const lastSpace = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, lastSpace > 60 ? lastSpace : max).trimEnd()}\u2026`;
}

export function categoryMetaDescription(category: ProductCategory) {
  return CATEGORY_DESCRIPTION[category.slug];
}

/** Bins and totes already carry their code in the title, so avoid "PT0016 (PT0016)". */
export function productMetaTitle(product: ProductSpec) {
  return product.title.includes(product.code)
    ? product.title
    : `${product.title} (${product.code})`;
}

export function productMetaDescription(
  product: ProductSpec,
  category: ProductCategory,
) {
  const dimensions = product.dimensions ?? product.outer;
  const spec = dimensions ? `, ${dimensions}` : "";

  return clamp(
    `${productMetaTitle(product)}${spec}. ${CATEGORY_TAIL[category.slug]}`,
  );
}

function categoryPath(category: ProductCategory) {
  return `/products/${category.slug}/`;
}

function productPath(category: ProductCategory, product: ProductSpec) {
  return `/products/${category.slug}/${product.slug}/`;
}

function breadcrumbList(
  id: string,
  trail: readonly { name: string; path: string }[],
) {
  return {
    "@type": "BreadcrumbList",
    "@id": id,
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function productsIndexStructuredData() {
  const path = "/products/";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}${path}#webpage`,
        url: `${SITE_URL}${path}`,
        name: "Injection Moulded Plastic Products",
        description: PRODUCTS_PAGE_DESCRIPTION,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}${path}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          name: "Product categories",
          numberOfItems: productCategories.length,
          itemListElement: productCategories.map((category, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: category.title,
            url: `${SITE_URL}${categoryPath(category)}`,
          })),
        },
      },
      breadcrumbList(`${SITE_URL}${path}#breadcrumb`, [
        { name: "Home", path: "/" },
        { name: "Products", path },
      ]),
    ],
  };
}

export function categoryStructuredData(category: ProductCategory) {
  const path = categoryPath(category);
  const description = categoryMetaDescription(category);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}${path}#webpage`,
        url: `${SITE_URL}${path}`,
        name: category.title,
        description,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${SITE_URL}/products/#webpage` },
        breadcrumb: { "@id": `${SITE_URL}${path}#breadcrumb` },
        mainEntity: {
          "@type": "ItemList",
          name: category.title,
          numberOfItems: category.products.length,
          itemListElement: category.products.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: product.title,
            url: `${SITE_URL}${productPath(category, product)}`,
          })),
        },
      },
      breadcrumbList(`${SITE_URL}${path}#breadcrumb`, [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products/" },
        { name: category.shortTitle, path },
      ]),
    ],
  };
}

export function productStructuredData(
  category: ProductCategory,
  product: ProductSpec,
) {
  const path = productPath(category, product);
  const images = [
    ...new Set([product.image, ...product.images.map((image) => image.src)]),
  ].map((src) => `${SITE_URL}${src}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${SITE_URL}${path}#product`,
        name: product.title,
        url: `${SITE_URL}${path}`,
        description: product.description,
        sku: product.code,
        mpn: product.code,
        category: category.title,
        image: images,
        inLanguage: "en-IN",
        brand: { "@type": "Brand", name: company.shortName },
        manufacturer: { "@id": `${SITE_URL}/#organization` },
      },
      breadcrumbList(`${SITE_URL}${path}#breadcrumb`, [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products/" },
        { name: category.shortTitle, path: categoryPath(category) },
        { name: product.title, path },
      ]),
    ],
  };
}