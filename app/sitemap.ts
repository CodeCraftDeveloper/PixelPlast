import type { MetadataRoute } from "next";

import { productCategories } from "@/app/products/data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const staticPages: MetadataRoute.Sitemap = [
  { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
  { url: `${SITE_URL}/about/`, changeFrequency: "yearly", priority: 0.7 },
  { url: `${SITE_URL}/products/`, changeFrequency: "monthly", priority: 0.9 },
  { url: `${SITE_URL}/capabilities/`, changeFrequency: "yearly", priority: 0.8 },
  { url: `${SITE_URL}/sustainability/`, changeFrequency: "yearly", priority: 0.6 },
  { url: `${SITE_URL}/contact/`, changeFrequency: "yearly", priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryPages: MetadataRoute.Sitemap = productCategories.map(
    ({ slug }) => ({
      url: `${SITE_URL}/products/${slug}/`,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const productPages: MetadataRoute.Sitemap = productCategories.flatMap(
    ({ slug, products }) =>
      products.map((product) => ({
        url: `${SITE_URL}/products/${slug}/${product.slug}/`,
        changeFrequency: "monthly",
        priority: 0.7,
      })),
  );

  return [...staticPages, ...categoryPages, ...productPages];
}
