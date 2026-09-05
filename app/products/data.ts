import {
  plasticPallets,
  plasticCrates,
  plasticBins,
  toteBins,
  spoolSizes,
} from "@/data/company";

export type ProductImage = {
  src: string;
  alt: string;
  label: string;
};

export type ProductSpec = {
  code: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: readonly string[];
  image: string;
  images: readonly ProductImage[];
  imageAlt: string;
  type?: string;
  dimensions?: string;
  staticLoad?: string;
  dynamicLoad?: string;
  rackingLoad?: string;
  material?: string;
  color?: string;
  outer?: string;
  inner?: string;
  versions?: string;
  colors?: string;
  effectiveHeight?: string;
  materials?: string;
};

export type ProductCategory = {
  slug: "pallets" | "crates" | "bins" | "tote-bins" | "spools";
  index: string;
  title: string;
  shortTitle: string;
  label: string;
  heroTitleLines: readonly [string, string, string];
  description: string;
  overview: string;
  heroImage: string;
  images: readonly ProductImage[];
  highlights: readonly string[];
  applications: readonly string[];
  materials?: readonly string[];
  palletAdvantages?: readonly { title: string; description: string }[];
  products: readonly ProductSpec[];
  technicalNote: string;
};

function gallery(
  entries: readonly [src: string, altBase: string, label: string][],
): readonly ProductImage[] {
  return entries.map(([src, base, label]) => ({
    src,
    alt: `${base} — Pixelplast product photo`,
    label,
  }));
}

const crateDir = "/assets/products/crates/";
const palletDir = "/assets/products/pallets/";
const toteDir = "/assets/products/totes/";
const binDir = "/assets/products/bins/";

const localImages = {
  palletHeavy: "/assets/01_products_photos_composites/pallet_heavy_duty.jpg",
  palletGenerated: "/assets/01_products_photos_composites/pallet_generated.jpg",
  palletSolid: "/assets/01_products_photos_composites/pallet_solid.jpg",
  greenPallet: "/assets/01_products_photos_composites/05_green_pallet.png",
  cratePerforated: "/assets/01_products_photos_composites/crate_perforated.jpg",
  crateSolid: "/assets/01_products_photos_composites/crate_solid.jpg",
  crateGenerated: "/assets/01_products_photos_composites/crate_generated.jpg",
  crateAndBin: "/assets/01_products_photos_composites/04_crate_and_bin.png",
  binGenerated: "/assets/01_products_photos_composites/bin_generated.jpg",
  storageBin: "/assets/01_products_photos_composites/07_storage_bin.png",
  toteStandard: "/assets/01_products_photos_composites/tote_standard.jpg",
  toteDeep: "/assets/01_products_photos_composites/tote_deep.jpg",
  toteGenerated: "/assets/01_products_photos_composites/tote_generated.jpg",
  attachedLid: "/assets/01_products_photos_composites/03_attached_lid_tote.png",
  heroComposite: "/assets/01_products_photos_composites/01_hero_product_composite.png",
  spoolSmall: "/assets/01_products_photos_composites/spool_small.jpg",
  spoolMedium: "/assets/01_products_photos_composites/spool_medium.jpg",
  spoolGenerated: "/assets/01_products_photos_composites/spool_generated.jpg",
  industrialSpool: "/assets/01_products_photos_composites/06_industrial_spool.png",
};

const spoolImages = [
  {
    src: "/assets/01_products_photos_composites/spool_generated.jpg",
    alt: "Pixelplast Precision ABS/PP Industrial Spool",
    label: "Industrial Spool",
  },
  {
    src: "/assets/01_products_photos_composites/01_hero_product_composite.png",
    alt: "Pixelplast Spool and Product Composite",
    label: "Spool Line",
  },
];

const palletProducts: readonly ProductSpec[] = plasticPallets.map((p) => {
  const code = p.code.toLowerCase();
  const num = Number(p.code.replace(/\D/g, ""));
  const extra: [string, string, string][] = [];
  if (num <= 7) {
    extra.push(
      [`${palletDir}${code}-03.jpg`, p.type, "Detail & Deck View"],
      [`${palletDir}${code}-04.jpg`, p.type, "Side Profile & Entry"],
    );
  } else {
    extra.push([`${palletDir}${code}-03.jpg`, p.type, "Additional View"]);
  }
  const images: readonly ProductImage[] = gallery([
    [`${palletDir}${code}-01.jpg`, p.type, "Isometric Deck View"],
    [`${palletDir}${code}-02.jpg`, p.type, "4-Way Forklift Entry"],
    ...extra,
  ]);
  return {
    code: p.code,
    slug: p.code.toLowerCase(),
    title: p.type,
    tagline: "Industrial plastic pallet",
    description:
      "Injection-moulded plastic pallet engineered for demanding warehouse racking, internal logistics and export transit duty. Fully recyclable, dimensionally consistent and resistant to moisture, chemicals and pests.",
    features: [
      "100% virgin food-contact grade polymer",
      "Uniform-load static capacity up to 6000 kg",
      "4-way forklift & pallet-jack entry",
      "Non-absorbent, hygienic & pest-proof deck",
      "UV-stabilised for indoor and outdoor use",
    ],
    image: images[0].src,
    imageAlt: images[0].alt,
    images,
    type: p.type,
    dimensions: p.dimensions,
    staticLoad: p.staticLoad,
    dynamicLoad: p.dynamicLoad,
    rackingLoad: p.rackingLoad,
    material: p.material,
    color: p.color,
  };
});

const crateTitles: Record<string, string> = {
  PT0010: "650×450 Jumbo Crate",
  PT0011: "540×360 General-Purpose Crate",
  PT0012: "650×450 Solid-Base Crate",
  PT0013: "540×360 Deep Crate",
  PT0014: "610×450 Jumbo Crate",
  PT0015: "540×360 Deep Solid Crate",
};

const crateCopy: Record<string, { tagline: string; description: string }> = {
  PT0010: {
    tagline: "Heavy-duty storage & distribution crate",
    description:
      "Rigid side-perforated jumbo crate engineered for heavy industrial storage and handling. Reinforced ribbed base, ergonomic hand grips and anti-skid stacking keep loads stable through picking, transit and racking cycles.",
  },
  PT0011: {
    tagline: "Compact crate for shopfloor & retail",
    description:
      "Versatile 540×360 crate with a reinforced base. Lightweight yet impact-resistant, it nests tightly when empty and stacks securely when full for space-efficient cycles.",
  },
  PT0012: {
    tagline: "Solid wall & base heavy-duty crate",
    description:
      "Solid-wall jumbo crate with flat or ribbed base options for wet, dusty and automated conveyor environments. Flawless finish, food-grade material and high rigidity for dependable stacking.",
  },
  PT0013: {
    tagline: "Deep perforated crate for high volume",
    description:
      "Deep-draw 540×360 crate sized for high-volume component storage. Side perforations provide airflow and visibility while the reinforced base supports rigid, stackable loads.",
  },
  PT0014: {
    tagline: "Jumbo solid crate for bulk handling",
    description:
      "Extra-capacity jumbo crate with solid walls and a flat or ribbed base. Built for bulk transit and automation lines where clean surfaces, smooth nesting and rigid stacking matter.",
  },
  PT0015: {
    tagline: "Deep solid crate for dense contents",
    description:
      "Deep-draw solid crate offering maximum content protection for fine, sensitive or damp products. Smooth inner walls, reinforced base and secure stacking geometry.",
  },
};

const crateProducts: readonly ProductSpec[] = plasticCrates.map((c) => {
  const code = c.code.toLowerCase();
  const title = crateTitles[c.code];
  const base: { tagline: string; description: string } = crateCopy[c.code];
  const images: readonly ProductImage[] = gallery([
    [`${crateDir}${code}-01.jpg`, title, "Isometric View"],
    [`${crateDir}${code}-02.jpg`, title, "Reverse Angle View"],
    [`${crateDir}${code}-03.jpg`, title, "Handle & Rib Detail"],
    [`${crateDir}${code}-04.jpg`, title, "Stacking Alignment"],
  ]);
  return {
    code: c.code,
    slug: c.code.toLowerCase(),
    title,
    tagline: base.tagline,
    description: base.description,
    features: [
      "Reinforced ribbed base construction",
      "Ergonomic side hand-grips",
      "Tight nesting when empty",
      "Secure stacking when in use",
      "Food-grade, UV-resistant material",
    ],
    image: images[0].src,
    imageAlt: images[0].alt,
    images,
    outer: c.outer,
    inner: c.inner,
    versions: c.versions,
    colors: c.colors,
  };
});

const binProducts: readonly ProductSpec[] = plasticBins.map((b) => {
  const code = b.code.toLowerCase();
  const title = `Front-Open Part Bin ${b.code}`;
  const images: readonly ProductImage[] = gallery([
    [`${binDir}${code}-01.jpg`, title, "Front-Hopper View"],
    [`${binDir}${code}-02.jpg`, title, "Reverse Perspective"],
    [`${binDir}${code}-03.jpg`, title, "Hopper & Label Detail"],
    [`${binDir}${code}-04.jpg`, title, "Vertical Interlock Stacking"],
  ]);
  return {
    code: b.code,
    slug: b.code.toLowerCase(),
    title,
    tagline: "Modular component & picking bin",
    description:
      "Stackable front-hopper bin designed for high-density small-parts storage, fast assembly picking and lean inventory organisation. Wide hopper gives instant visibility and hand access while stacked.",
    features: [
      "Wide front hopper for quick picking",
      "Interlocking stack / panel mount",
      "Reinforced labels & divider slots",
      "High-impact engineered polypropylene",
    ],
    image: images[0].src,
    imageAlt: images[0].alt,
    images,
    outer: b.outer,
    effectiveHeight: b.effectiveHeight,
    colors: b.colors,
  };
});

const toteLabels: Record<string, [string, string, string, string]> = {
  PT0022: [
    "Closed Isometric View",
    "Open Lid Cavity",
    "Hinge & Security Seal Detail",
    "Exploded Assembly Diagram",
  ],
  PT0023: [
    "Closed Deep View",
    "Open Deep Cavity",
    "Corner Rib Reinforcement",
    "Exploded Underside Rib View",
  ],
  PT0024: [
    "Closed Compact View",
    "Open Interior View",
    "Ergonomic Handle Detail",
    "Exploded Technical View",
  ],
};

const toteProducts: readonly ProductSpec[] = toteBins.map((t) => {
  const code = t.code.toLowerCase();
  const title = `Attached-Lid Tote ${t.code}`;
  const labels = toteLabels[t.code] ?? [
    "Closed View",
    "Open View",
    "Detail View",
    "Exploded View",
  ];
  const images: readonly ProductImage[] = gallery([
    [`${toteDir}${code}-01.jpg`, title, labels[0]],
    [`${toteDir}${code}-02.jpg`, title, labels[1]],
    [`${toteDir}${code}-03.jpg`, title, labels[2]],
    [`${toteDir}${code}-04.jpg`, title, labels[3]],
  ]);
  return {
    code: t.code,
    slug: t.code.toLowerCase(),
    title,
    tagline: "Tamper-evident logistics tote",
    description:
      "Reusable injection-moulded tote container with interlocking attached lid. Protects goods in transit, stacks securely when closed and nests to save up to 70% return-freight volume.",
    features: [
      "Interlocking tamper-evident attached lid",
      "Textured base for conveyor movement",
      "Security tie-down slots for zip seals",
      "Space-efficient nesting when empty",
    ],
    image: images[0].src,
    imageAlt: images[0].alt,
    images,
    outer: t.outer,
    inner: t.inner,
    versions: t.versions,
    colors: t.colors,
  };
});

const spoolProducts: readonly ProductSpec[] = spoolSizes.map((s, idx) => {
  const code = `Spool 0${idx + 1}`;
  const title = `Precision Spool ${s.dimensions.split("×")[0].trim()}`;
  const group = idx < 2 ? "small" : idx >= 4 ? "generated" : "medium";
  const primary =
    group === "small"
      ? localImages.spoolSmall
      : group === "generated"
        ? localImages.spoolGenerated
        : localImages.spoolMedium;
  const ordered = [
    primary,
    localImages.spoolGenerated,
    localImages.industrialSpool,
    localImages.spoolMedium,
  ];
  const images: readonly ProductImage[] = gallery([
    [ordered[0], title, "Isolated View"],
    [ordered[1], title, "Profile View"],
    [ordered[2], title, "Wound Line"],
    [ordered[3], title, "Range Reference"],
  ]);
  return {
    code,
    slug: `spool-0${idx + 1}`,
    title,
    tagline: "High-speed winding spool",
    description:
      "High-performance plastic spool manufactured for continuous high-speed winding of wire, cable, optical fibre, 3D filament and monofilament. Dynamic rotational balance and distortion-resistant flanges.",
    features: [
      "High-speed rotational balance",
      "Rib-reinforced distortion-resistant flanges",
      "Snag-free payoff geometry",
      "High-impact ABS / engineered PP",
    ],
    image: images[0].src,
    imageAlt: images[0].alt,
    images,
    dimensions: s.dimensions,
    materials: s.materials,
  };
});

export const productCategories: readonly ProductCategory[] = [
  {
    slug: "pallets",
    index: "01",
    title: "Industrial Plastic Pallets",
    shortTitle: "Plastic Pallets",
    label: "Storage & Heavy Material Handling",
    heroTitleLines: ["Industrial", "Plastic", "Pallets"],
    description:
      "Heavy-duty, hygienic, and fully recyclable injection-moulded plastic pallets engineered for warehouse racking, internal logistics, and export transit.",
    overview:
      "Built to last and designed for maximum operational efficiency. Pixelplast plastic pallets offer superior durability, chemical resistance, pest protection, and exact dimensional consistency over wooden alternatives.",
    heroImage: "/assets/01_products_photos_composites/05_green_pallet.png",
    images: [
      {
        src: "/assets/01_products_photos_composites/pallet_generated.jpg",
        alt: "Heavy-Duty Blue Industrial Pallet",
        label: "PT0001 Heavy-Duty",
      },
      {
        src: "/assets/01_products_photos_composites/01_hero_product_composite.png",
        alt: "Pixelplast Pallets and Industrial Product Composite",
        label: "Pallet In-Use",
      },
    ],
    highlights: [
      "9 standard formats",
      "Up to 6000 kg static load",
      "Racking & nestable options",
    ],
    applications: [
      "Heavy warehouse racking storage",
      "Automated conveyor and ASRS distribution",
      "Hygienic pharmaceutical & food logistics",
      "Global one-way & returnable export freight",
    ],
    materials: [
      "100% Virgin HDPE",
      "High-Impact Polypropylene (PP)",
      "Recycled Polymer Blends",
    ],
    palletAdvantages: [
      {
        title: "Durability",
        description: "Plastic lasts longer; wood breaks easily.",
      },
      {
        title: "Hygiene",
        description: "Plastic is pest and moisture-resistant; wood isn't.",
      },
      {
        title: "Recyclability",
        description: "Plastic is fully recyclable; wood has limits.",
      },
      {
        title: "Weight",
        description: "Plastic is lightweight; wood is heavier.",
      },
    ],
    products: palletProducts,
    technicalNote:
      "Static and dynamic load ratings are verified under uniform load distribution. Custom colours and branding available on volume orders.",
  },
  {
    slug: "crates",
    index: "02",
    title: "Industrial Plastic Crates",
    shortTitle: "Plastic Crates",
    label: "Storage & Distribution Crates",
    heroTitleLines: ["Industrial", "Plastic", "Crates"],
    description:
      "Heavy-duty perforated and solid plastic storage crates designed for manufacturing sub-assemblies, agriculture, retail, and automated conveyor systems.",
    overview:
      "Engineered with reinforced ribbed bases and ergonomic side hand-grips. Pixelplast industrial crates provide superior impact resistance, smooth nesting, and rigid stacking stability.",
    heroImage: "/assets/products/crates/pt0010-01.jpg",
    images: [
      {
        src: "/assets/products/crates/pt0010-01.jpg",
        alt: "PT0010 650×450 Jumbo Crate",
        label: "PT0010 Perforated",
      },
      {
        src: "/assets/products/crates/pt0012-01.jpg",
        alt: "PT0012 Solid-Base Crate",
        label: "PT0012 Solid",
      },
      {
        src: "/assets/products/crates/pt0010-04.jpg",
        alt: "Stacked Industrial Storage Crates",
        label: "Stacking Interlock",
      },
    ],
    highlights: [
      "6 standard models",
      "Perforated & solid variants",
      "Ribbed base reinforcement",
    ],
    applications: [
      "Automotive component & hardware storage",
      "Food & agricultural harvest distribution",
      "Manufacturing shopfloor material movement",
      "Retail distribution & warehouse sorting",
    ],
    materials: [
      "High-Density Polyethylene (HDPE)",
      "Impact-Resistant Polypropylene (PP)",
    ],
    products: crateProducts,
    technicalNote:
      "Available in SSP (Side Perforated), SCH (Solid), and FB/RB (Flat/Ribbed Base) configurations to suit wet or dry storage workflows.",
  },
  {
    slug: "bins",
    index: "03",
    title: "Modular Front-Open Part Bins",
    shortTitle: "Part Bins",
    label: "Component Picking & Assembly Storage",
    heroTitleLines: ["Modular", "Front-Open", "Part Bins"],
    description:
      "Stackable front-hopper plastic bins designed for high-density small parts storage, fast assembly picking, and lean inventory organisation.",
    overview:
      "Optimised for hardware picking and assembly lines. Features a wide front hopper for instant content visibility and easy hand access while securely stacked or mounted on louvre panels.",
    heroImage: "/assets/products/bins/pt0016-01.jpg",
    images: [
      {
        src: "/assets/products/bins/pt0016-01.jpg",
        alt: "Modular Front-Open Storage Bin PT0016",
        label: "PT0016 Standard",
      },
      {
        src: "/assets/products/bins/pt0018-01.jpg",
        alt: "Large Modular Storage Bin PT0018",
        label: "PT0018 Jumbo",
      },
      {
        src: "/assets/products/bins/pt0016-04.jpg",
        alt: "Vertical Interlocking Modular Storage Bins",
        label: "Stacking Interlock",
      },
    ],
    highlights: [
      "6 modular sizes",
      "Front hopper access",
      "Stackable & panel mountable",
    ],
    applications: [
      "Assembly line hardware & fasteners",
      "Electrical component & spare parts organisation",
      "Warehouse order picking & kitting",
      "Automotive service & maintenance stations",
    ],
    materials: ["Engineered Polypropylene (PP)"],
    products: binProducts,
    technicalNote:
      "Modular interlock design allows vertical stacking with full front access. Custom color-coding available for SKU differentiation.",
  },
  {
    slug: "tote-bins",
    index: "04",
    title: "Attached Lid Plastic Tote Bins",
    shortTitle: "Tote Bins",
    label: "Security & Automated Logistics",
    heroTitleLines: ["Attached Lid", "Plastic Tote", "Bins"],
    description:
      "Reusable, tamper-evident injection-moulded tote containers with interlocking attached lids engineered for automated warehousing, conveyor routing, and secure transit.",
    overview:
      "Pixelplast's attached-lid tote containers protect goods in transit. When closed, they stack securely; when empty, nested nesting saves up to 70% return freight volume.",
    heroImage: "/assets/products/totes/pt0022-01.jpg",
    images: [
      {
        src: "/assets/products/totes/pt0022-01.jpg",
        alt: "PT0022 Attached Lid Tote Container",
        label: "PT0022 Standard",
      },
      {
        src: "/assets/products/totes/pt0023-01.jpg",
        alt: "PT0023 Deep Attached Lid Tote Container",
        label: "PT0023 Deep",
      },
      {
        src: "/assets/products/totes/pt0024-01.jpg",
        alt: "PT0024 Compact Attached Lid Tote Container",
        label: "PT0024 Compact",
      },
    ],
    highlights: [
      "3 standard formats",
      "Attached interlocking lids",
      "Tamper-evident sealing",
    ],
    applications: [
      "Automated conveyor warehousing & ASRS",
      "Pharmaceutical cold-chain & secure transport",
      "E-commerce order fulfillment & distribution",
      "Closed-loop retail supply chain",
    ],
    materials: ["100% Virgin Polypropylene (PP)", "High-Impact HDPE"],
    products: toteProducts,
    technicalNote:
      "Features textured base for smooth conveyor movement and integrated security tie-down slots for tamper-evident zip seals.",
  },
  {
    slug: "spools",
    index: "05",
    title: "Precision Plastic Spools",
    shortTitle: "Plastic Spools",
    label: "Wire, Cable & Industrial Winding",
    heroTitleLines: ["Precision", "Plastic", "Spools"],
    description:
      "High-performance ABS and Polypropylene plastic spools manufactured for high-speed continuous winding of wire, cable, optical fiber, 3D filament, and monofilament.",
    overview:
      "Manufactured with dynamic high-speed rotational balance and heavy-duty distortion-resistant flanges. Ensures snag-free payoff and precise take-up winding under high tension.",
    heroImage: "/assets/01_products_photos_composites/06_industrial_spool.png",
    images: spoolImages,
    highlights: [
      "6 standard dimensions",
      "High-Impact ABS",
      "Engineered Polypropylene (PP)",
    ],
    applications: [
      "Copper, aluminum & magnet wire winding",
      "Automotive wire harness processing",
      "Optical fiber and telecom cable extrusion",
      "3D printing filament & industrial monofilament",
    ],
    materials: ["High-Impact ABS", "Engineered Polypropylene (PP)"],
    products: spoolProducts,
    technicalNote:
      "All spools undergo strict flange deflection testing and bore concentricity inspection. Custom barrel widths and traverse lengths available upon request.",
  },
];

export function getProductCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}

export function getProduct(
  categorySlug: string,
  productSlug: string,
): { category: ProductCategory; product: ProductSpec } | undefined {
  const category = getProductCategory(categorySlug);
  if (!category) return undefined;
  const product = category.products.find((item) => item.slug === productSlug);
  if (!product) return undefined;
  return { category, product };
}