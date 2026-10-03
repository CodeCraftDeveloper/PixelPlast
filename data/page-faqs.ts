import type { FaqItem } from "@/components/content/FaqSection";
import type { DefinitionItem } from "@/components/content/DefinitionBlocks";
import type { ProductCategory, ProductSpec } from "@/app/products/data";

function productDimensions(category: ProductCategory, product: ProductSpec) {
  if (category.slug === "crates" || category.slug === "tote-bins") {
    return `The outer dimensions are ${product.outer}, with internal dimensions of ${product.inner}.`;
  }

  if (category.slug === "bins") {
    return `The outer dimensions are ${product.outer}, and the effective stacking height is ${product.effectiveHeight}.`;
  }

  return `The listed dimensions are ${product.dimensions}.`;
}

export function getProductFaqs(
  category: ProductCategory,
  product: ProductSpec,
): readonly FaqItem[] {
  const material =
    product.material ?? product.materials ?? category.materials?.join(" / ");

  return [
    {
      question: `What is ${product.title}?`,
      answer: product.description,
    },
    {
      question: `What are the dimensions of ${product.title}?`,
      answer: productDimensions(category, product),
    },
    {
      question: `What material is ${product.title} made from?`,
      answer: material
        ? `${product.title} is specified in ${material}. Final material selection should be confirmed against the application, operating environment and order specification.`
        : `Material selection for ${product.title} is confirmed against the application, operating environment and order specification.`,
    },
    {
      question: `Where is ${product.title} typically used?`,
      answer: `${product.title} belongs to our ${category.shortTitle.toLowerCase()} range for ${category.applications.join(", ")}. Suitability should be checked against the load, handling method and service environment.`,
    },
    {
      question: `How do I confirm whether ${product.title} suits my application?`,
      answer: `Share the required dimensions, load or contents, handling method, operating environment and quantity with Pixelplast. The team can then review ${product.code} against the application before quotation.`,
    },
  ];
}

export const sustainabilityDefinitions: readonly DefinitionItem[] = [
  {
    term: "ISPM-15",
    definition:
      "ISPM-15 is the international phytosanitary standard for solid-wood packaging used in cross-border trade. It sets treatment and marking requirements intended to limit the spread of wood-borne pests.",
    context:
      "Injection-moulded plastic pallets are outside the standard's wood-packaging scope, so they do not require ISPM-15 heat treatment or fumigation.",
  },
  {
    term: "ISO 14001:2015",
    definition:
      "ISO 14001:2015 specifies requirements for an environmental management system: the framework an organisation uses to identify impacts, set controls and improve environmental performance.",
    context:
      "It certifies the management system, not every individual product. Pixelplast lists ISO 14001:2015 among its certified management frameworks.",
  },
  {
    term: "RoHS",
    definition:
      "RoHS is the European Union framework that restricts specified hazardous substances in electrical and electronic equipment and relevant components.",
    context:
      "A RoHS statement applies to the specified material or product configuration; it is not a general food-contact or performance certification.",
  },
  {
    term: "FDA 21 CFR 177",
    definition:
      "FDA 21 CFR 177 contains US regulations for certain polymers and substances intended for indirect food-contact applications, subject to the conditions listed for each material.",
    context:
      "Compliance depends on the selected resin, additives and intended conditions of use, so the food-contact grade should be confirmed for each order.",
  },
] as const;

export const sustainabilityFaqs: readonly FaqItem[] = [
  {
    question: "Are injection-moulded plastic pallets subject to ISPM-15?",
    answer:
      "No. ISPM-15 applies to specified solid-wood packaging. Injection-moulded plastic pallets do not require the heat treatment, fumigation or ISPM-15 marking used for regulated wood packaging.",
  },
  {
    question: "What does ISO 14001:2015 certification cover?",
    answer:
      "ISO 14001:2015 covers an organisation's environmental management system, including how it identifies environmental impacts, manages obligations, sets objectives and improves performance. It is a management-system certification rather than a product certification.",
  },
  {
    question: "Are Pixelplast products recyclable?",
    answer:
      "The PP, HDPE and ABS materials referenced in the Pixelplast range are recyclable where suitable collection and reprocessing facilities exist. Actual recovery depends on material identification, contamination and local recycling infrastructure.",
  },
  {
    question: "Does RoHS compliance mean a product is food-contact suitable?",
    answer:
      "No. RoHS addresses restricted hazardous substances in electrical and electronic equipment. Food-contact suitability is assessed separately against the applicable material regulation and intended conditions of use.",
  },
  {
    question: "What should be confirmed for a food-contact product?",
    answer:
      "Confirm the exact resin grade, additives, food type, contact time and operating temperature for the intended application. Pixelplast can then review the requested format against the relevant FDA 21 CFR 177 or EU 10/2011 material specification.",
  },
] as const;
