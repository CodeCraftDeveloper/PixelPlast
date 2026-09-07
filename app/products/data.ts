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
  seo: readonly string[];
  verified: readonly string[];
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
  seo: readonly string[];
  specExtras: readonly { label: string; value: string }[];
  specNote: string;
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

function withHeroComposite(
  key: ProductImageryKey,
  shots: readonly ProductImage[],
): readonly ProductImage[] {
  return shots;
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

export const heroComposites: Record<ProductImageryKey, ProductImage> = {
  pallets: {
    src: "/assets/01_products_photos_composites/05_green_pallet.png",
    alt: "Industrial plastic pallet in warehouse application",
    label: "Pallet in Application",
  },
  crates: {
    src: "/assets/01_products_photos_composites/04_crate_and_bin.png",
    alt: "Stacked industrial plastic crates and storage bins",
    label: "Crate & Bin System",
  },
  bins: {
    src: "/assets/01_products_photos_composites/07_storage_bin.png",
    alt: "Modular plastic storage bin in parts arrangement",
    label: "Storage Bin System",
  },
  "tote-bins": {
    src: "/assets/01_products_photos_composites/03_attached_lid_tote.png",
    alt: "Attached-lid plastic tote container with lid open",
    label: "Attached-Lid Tote",
  },
  spools: {
    src: "/assets/01_products_photos_composites/06_industrial_spool.png",
    alt: "Industrial plastic spool wound with filament or wire",
    label: "Industrial Spool",
  },
};

type ProductImageryKey = "pallets" | "crates" | "bins" | "tote-bins" | "spools";

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

function palletSeo(p: (typeof plasticPallets)[number]): readonly string[] {
  return [
    `${p.type} (${p.code}) is a ${p.dimensions} injection-moulded plastic pallet manufactured by Pixelplast for warehouse racking, internal logistics and export transport duty. The platform carries ${p.staticLoad} and supports ${p.dynamicLoad} of dynamic load through normal forklift and pallet-jack operations, with cross-racking performance rated at ${p.rackingLoad}.`,
    `Moulded from ${p.material}, every ${p.type} delivers a non-absorbent, pest-proof and moisture-resistant deck that stays dimensionally consistent through washdown and cold-chain cycles. Supplied in ${p.color} with custom branding available on volume orders, it offers a durable, fully recyclable alternative to wooden pallets for food, automotive, pharmacy and automated warehouse environments.`,
  ];
}

function crateSeo(
  c: (typeof plasticCrates)[number],
  title: string,
): readonly string[] {
  return [
    `${title} (${c.code}) is a ${c.outer} plastic storage and distribution crate with a usable inner cavity of ${c.inner}, supplied in the ${c.versions} configuration. Reinforced ribbed construction and an impact-resistant polymer body protect contents through picking, transit, automated conveyor movement and warehouse stacking.`,
    `Injection-moulded from food-grade, UV-stabilised polypropylene and high-density polyethylene, this crate nests tightly when empty to save floor space and stacks securely when loaded for stable multi-level handling. Available in ${c.colors}, it suits automotive components, agricultural produce, retail distribution and busy shopfloor material movement.`,
  ];
}

function binSeo(
  b: (typeof plasticBins)[number],
  title: string,
): readonly string[] {
  return [
    `${title} (${b.code}) is a ${b.outer} stackable front-open part bin engineered for modular small-parts storage and fast assembly picking, with an effective stacking height of ${b.effectiveHeight}. The wide hopper opening gives operators instant content visibility and hand access, cutting pick time in high-density kitting layouts.`,
    `Produced from high-impact engineered polypropylene, the bin interconnects vertically and mounts to standard louvre panels, letting facilities build scalable storage walls around live workstations. Colour-coded ${b.colors} variants support quick SKU identification across service stations, electrical workshops and warehouse order-picking lines.`,
  ];
}

function toteSeo(
  t: (typeof toteBins)[number],
  title: string,
): readonly string[] {
  return [
    `${title} (${t.code}) is a reusable ${t.outer} attached-lid plastic tote with a usable cavity of ${t.inner}, provided in the ${t.versions} configuration. The interlocking lid secures contents through transit and automated conveyor routing, while the container nests when empty to cut return-freight volume.`,
    `Built from virgin, food-contact grade polymer, this tamper-evident tote features a textured base for smooth conveyor travel and integrated tie-down slots for zip-seal security. Available in ${t.colors}, it is specified for pharmaceutical cold-chain, e-commerce fulfilment and closed-loop retail supply chains that demand reusable, hygienic returnable packaging.`,
  ];
}

function spoolSeo(
  s: (typeof spoolSizes)[number],
  code: string,
  title: string,
): readonly string[] {
  return [
    `${title} (${code}) is a precision ${s.dimensions} plastic spool manufactured for continuous high-speed winding of wire, cable, optical fibre, 3D printing filament and industrial monofilament. Rib-reinforced flanges resist distortion under tension, and the bore geometry delivers accurate take-up and snag-free payoff.`,
    `Produced from ${s.materials}, the spool combines low inertia with a smooth, non-marring payoff surface to protect conductor insulation and delivered product quality. Every unit is checked for flange deflection and bore concentricity, making it dependable across copper and aluminium wire lines, telecom cable extrusion and automated winding floors.`,
  ];
}

const palletLabels: Record<string, [string, string, string, string]> = {
  PT0001: [
    "Isometric Deck View",
    "4-Way Low-Angle Forklift Entry",
    "Anti-Skid Mesh & Rubber Grommets",
    "Dual-Side Entry Profile",
  ],
  PT0002: [
    "Isometric Deck View",
    "4-Way Low-Angle Forklift Entry",
    "Steel Rod & Mesh Macro Detail",
    "3/4 Profile & Heavy-Duty Skids",
  ],
  PT0003: [
    "Isometric Deck View",
    "4-Way Euro Forklift Entry",
    "Hygienic Solid Top & Safety Rim",
    "Euro Profile & Runner Clearance",
  ],
  PT0004: [
    "Isometric Solid Deck View",
    "4-Way Low-Angle Forklift Entry",
    "Diamond Anti-Slip Embossing Detail",
    "3/4 Low-Profile Support Structure",
  ],
  PT0005: [
    "Isometric Medium-Duty Mesh View",
    "4-Way Entry & Underside Ribs",
    "Ventilated Grid Lattice Detail",
    "3/4 Profile & Runner Skids",
  ],
  PT0006: [
    "Isometric Extra-Large Deck View",
    "4-Way Full-Perimeter Base Entry",
    "Reinforced Slotted Deck & Lattice Detail",
    "3/4 Profile & Runner Skid Structure",
  ],
  PT0007: [
    "Isometric Euro Nestable Deck View",
    "4-Way Low-Angle Forklift Entry",
    "Triangular Gusset & Nesting Cup Detail",
    "3/4 Side Profile & Export Nesting Elevation",
  ],
  PT0008: [
    "Isometric Square Low-Profile View",
    "4-Way Eye-Level Entry Tunnel View",
    "Corner Nesting Foot & Alignment Notch Detail",
    "3/4 Profile & 120mm Nestable Elevation",
  ],
  PT0009: [
    "Isometric Square Standard Nestable View",
    "4-Way Chamfered Fork Entry Tunnel",
    "Bevelled Entry Ramp & Waffle Grid Detail",
    "3/4 Profile & 150mm Heavy Nesting Elevation",
  ],
};

const palletVerified: readonly string[] = [
  "Load-rated to ISO 8611 static, dynamic and racking test protocols",
  "Deflection checked within span limits on production racking rigs",
  "ISPM-15 exempt — no fumigation or heat treatment for export",
  "UV-stabilised polymer for outdoor yard and cold-store duty",
  "100% recyclable; food-contact grades available on request",
];

const crateVerified: readonly string[] = [
  "Single-piece injection moulding with rib-reinforced base",
  "Nesting and stacking geometry verified on production tooling",
  "Food-contact grade PP/HDPE compliant with FDA 21 CFR 177",
  "Impact and chemical resistance tested under shopfloor use",
  "UV-stabilised compound; fully recyclable at end of life",
];

const binVerified: readonly string[] = [
  "Interlock stacking and louvre-panel mounting geometry verified",
  "High-impact PP trialled for repeated handling and drops",
  "Wide hopper access validated for ergonomic pick rates",
  "Colour-stable, UV-stabilised moulding compound",
  "RoHS-compliant and 100% recyclable polymer",
];

const toteVerified: readonly string[] = [
  "Attached-lid sealing verified for tamper-evident transit",
  "Conveyor-friendly base tested on belt and roller lines",
  "Nesting validated to free up to 70% return-freight volume",
  "Food-contact compound per FDA 21 CFR 177 and EU 10/2011",
  "Dimensionally stable through cold-chain and washdown cycles",
];

const spoolVerified: readonly string[] = [
  "Flange deflection and bore concentricity checked on every unit",
  "Dynamic balance verified for high-RPM winding heads",
  "Virgin ABS / engineered PP per material specification",
  "Snag-free payoff geometry validated on customer winders",
  "Dimensionally stable, low-inertia and recyclable at end of life",
];

const palletProducts: readonly ProductSpec[] = plasticPallets.map((p) => {
  const code = p.code.toLowerCase();
  const labels = palletLabels[p.code] ?? [
    "Isometric Deck View",
    "4-Way Forklift Entry",
    "Detail & Deck View",
    "Side Profile & Entry",
  ];
  const images = withHeroComposite(
    "pallets",
    gallery([
      [`${palletDir}${code}-01.jpg`, p.type, labels[0]],
      [`${palletDir}${code}-02.jpg`, p.type, labels[1]],
      [`${palletDir}${code}-03.jpg`, p.type, labels[2]],
      [`${palletDir}${code}-04.jpg`, p.type, labels[3]],
    ]),
  );
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
    image: images[1].src,
    imageAlt: images[1].alt,
    images,
    type: p.type,
    dimensions: p.dimensions,
    staticLoad: p.staticLoad,
    dynamicLoad: p.dynamicLoad,
    rackingLoad: p.rackingLoad,
    material: p.material,
    color: p.color,
    seo: palletSeo(p),
    verified: palletVerified,
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
  const images: readonly ProductImage[] = withHeroComposite(
    "crates",
    gallery([
      [`${crateDir}${code}-01.jpg`, title, "Isometric View"],
      [`${crateDir}${code}-02.jpg`, title, "Reverse Angle View"],
      [`${crateDir}${code}-03.jpg`, title, "Handle & Rib Detail"],
      [`${crateDir}${code}-04.jpg`, title, "Stacking Alignment"],
    ]),
  );
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
    image: images[1].src,
    imageAlt: images[1].alt,
    images,
    outer: c.outer,
    inner: c.inner,
    versions: c.versions,
    colors: c.colors,
    seo: crateSeo(c, title),
    verified: crateVerified,
  };
});

const binProducts: readonly ProductSpec[] = plasticBins.map((b) => {
  const code = b.code.toLowerCase();
  const title = `Front-Open Part Bin ${b.code}`;
  const images: readonly ProductImage[] = withHeroComposite(
    "bins",
    gallery([
      [`${binDir}${code}-01.jpg`, title, "Front-Hopper View"],
      [`${binDir}${code}-02.jpg`, title, "Reverse Perspective"],
      [`${binDir}${code}-03.jpg`, title, "Hopper & Label Detail"],
      [`${binDir}${code}-04.jpg`, title, "Vertical Interlock Stacking"],
    ]),
  );
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
    image: images[1].src,
    imageAlt: images[1].alt,
    images,
    outer: b.outer,
    effectiveHeight: b.effectiveHeight,
    colors: b.colors,
    seo: binSeo(b, title),
    verified: binVerified,
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
  const images: readonly ProductImage[] = withHeroComposite(
    "tote-bins",
    gallery([
      [`${toteDir}${code}-01.jpg`, title, labels[0]],
      [`${toteDir}${code}-02.jpg`, title, labels[1]],
      [`${toteDir}${code}-03.jpg`, title, labels[2]],
      [`${toteDir}${code}-04.jpg`, title, labels[3]],
    ]),
  );
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
    image: images[1].src,
    imageAlt: images[1].alt,
    images,
    outer: t.outer,
    inner: t.inner,
    versions: t.versions,
    colors: t.colors,
    seo: toteSeo(t, title),
    verified: toteVerified,
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
    localImages.industrialSpool,
    primary,
    localImages.spoolGenerated,
    localImages.spoolMedium,
  ];
  const images: readonly ProductImage[] = gallery([
    [ordered[0], title, "Hero Composite"],
    [ordered[1], title, "Isolated View"],
    [ordered[2], title, "Profile View"],
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
    image: images[1].src,
    imageAlt: images[1].alt,
    images,
    dimensions: s.dimensions,
    materials: s.materials,
    seo: spoolSeo(s, code, title),
    verified: spoolVerified,
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
      "Heavy duty plastic pallets — hygienic, and fully recyclable injection moulded pallets engineered for warehouse racking, internal logistics, and export transit. A leading plastic pallets manufacturer in India.",
    overview:
      "Built to last and designed for maximum operational efficiency. As a premier plastic pallets manufacturer in India, Pixelplast plastic pallets offer superior durability, chemical resistance, pest protection, and exact dimensional consistency over wooden alternatives.",
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
    seo: [
      "Pixelplast is an Indian manufacturer of injection-moulded plastic pallets for heavy-duty warehousing, racking systems, automated material handling and export logistics. The standard range spans high-capacity racking pallets, mesh pallets, nestable formats and close-packed ISO/EUR profiles from 1100×1100 mm to 1300×1100 mm, engineered for repeatable, predictable performance.",
      "Compared with timber pallets, injection-moulded plastic pallets deliver exact dimensional consistency, up to 6000 kg static load, superior resistance to moisture, chemicals and pests, and complete recyclability. They rinse down quickly for food and pharmaceutical duty, stay splinter-free for automated conveyor and ASRS handling, and offer lower long-run cost of ownership through reuse across closed-loop supply chains.",
      "Every Pixelplast pallet is produced from 100% virgin HDPE or high-impact PP, with recycled polymer blends available for cost-sensitive operations. Custom colours, corporate branding, logoed decks and application-specific geometry can be moulded on volume orders, supported by verified static, dynamic and racking load ratings.",
    ],
    specExtras: [
      { label: "Fork Access", value: "4-way forklift & pallet-jack entry" },
      {
        label: "Operating Temperature",
        value: "-20°C to +60°C (HDPE) · up to +110°C (PP)",
      },
      { label: "Export Compliance", value: "ISPM-15 exempt · no fumigation" },
      { label: "Test Standard", value: "ISO 8611 load tested" },
    ],
    specNote:
      "All load figures are stated under uniform load distribution at standard ambient conditions, verified to ISO 8611 test protocols. Capacity is derated at temperature extremes and for point-loading — confirm your duty cycle, cold-store temperature and racking span with our engineering team before specification.",
  },
  {
    slug: "crates",
    index: "02",
    title: "Industrial Plastic Crates",
    shortTitle: "Plastic Crates",
    label: "Storage & Distribution Crates",
    heroTitleLines: ["Industrial", "Plastic", "Crates"],
    description:
      "Heavy duty plastic crates — perforated and solid injection moulded plastic crates designed for manufacturing sub-assemblies, agriculture, retail, and automated conveyor systems. A trusted plastic storage crates manufacturer.",
    overview:
      "As a leading industrial plastic crates manufacturer, Pixelplast crates are engineered with reinforced ribbed bases and ergonomic side hand-grips. Superior impact resistance, smooth nesting, and rigid stacking stability.",
    heroImage: "/assets/01_products_photos_composites/04_crate_and_bin.png",
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
    seo: [
      "Pixelplast manufactures industrial plastic crates for parts storage, distribution and shopfloor material movement, in perforated (SSP/RB) and solid (SCH/FB) configurations from 540×360 mm to 650×450 mm footprints. Each crate is injection-moulded in a single piece with reinforced side walls and a ribbed base for strength and dimensional stability.",
      "Designed to nest when empty and stack when loaded, these crates pack more usable volume into factory floors, cold stores and retail distribution centres while protecting contents from impact, oils and moisture. A textured, non-slip footprint works cleanly with conveyors, dollies and automated storage equipment.",
      "Produced from food-grade, UV-stabilised polypropylene and high-density polyethylene, the crates are safe for agricultural produce and pharmaceutical handling and are fully recyclable at end of life. Standard blue and grey are offered along with custom colour moulding for product flow-coding in large-volume orders.",
    ],
    specExtras: [
      { label: "Material Grade", value: "Food-contact grade PP / HDPE" },
      {
        label: "Operating Temperature",
        value: "-20°C to +65°C continuous service",
      },
      { label: "Nesting", value: "Nests when empty · stacks when loaded" },
      { label: "Compliance", value: "FDA 21 CFR 177 · fully recyclable" },
    ],
    specNote:
      "Dimensions shown are nominal external (OD) and internal (ID) measurements taken from production tooling. Nesting and stacking performance assumes loaded crates of equal geometry are stacked squarely; wet or dust-laden duty suits the ribbed-base (RB) and solid (SCH/FB) variants.",
  },
  {
    slug: "bins",
    index: "03",
    title: "Modular Front-Open Part Bins",
    shortTitle: "Part Bins",
    label: "Component Picking & Assembly Storage",
    heroTitleLines: ["Modular", "Front-Open", "Part Bins"],
    description:
      "Injection moulded plastic storage bins — stackable front-hopper plastic bins designed for high-density small parts storage, fast assembly picking, and lean inventory organisation.",
    overview:
      "Optimised for hardware picking and assembly lines. Features a wide front hopper for instant content visibility and easy hand access while securely stacked or mounted on louvre panels.",
    heroImage: "/assets/01_products_photos_composites/07_storage_bin.png",
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
    seo: [
      "Pixelplast modular front-open part bins are the working solution for high-density small-part storage on assembly lines, service stations and warehouse order-picking floors. Ranging from PT0016 pocket bins to jumbo PT0018 containers, each bin combines a wide front hopper with a compact footprint to keep fasteners, hardware and electrical components visible and within reach.",
      "The interlocking design stacks vertically with full front access and mounts cleanly to standard louvre panels, letting facilities build scalable storage walls around live workstations. Transparent hopper design, label slots and divider options support lean 5S practice and faster kitting without additional racking investment.",
      "Moulded from high-impact engineered polypropylene, the bins are tough enough for daily industrial handling, resistant to oils and shop chemistry, and fully recyclable. Wide colour-coding options across the modular range enable instant SKU identification for companies scaling inventory without cost.",
    ],
    specExtras: [
      { label: "Mounting", value: "Interlock stacking · louvre-panel mount" },
      { label: "Material Grade", value: "High-impact polypropylene (PP)" },
      {
        label: "Operating Temperature",
        value: "-20°C to +70°C continuous service",
      },
      { label: "Compliance", value: "RoHS compliant · 100% recyclable" },
    ],
    specNote:
      "Effective stacking height refers to the usable front-open height once bins are interlocked in a vertical stack. For louvre-panel mounting, share your panel pitch and bin depth with our team so we can confirm the rear-geometry fit for your layout.",
  },
  {
    slug: "tote-bins",
    index: "04",
    title: "Attached Lid Plastic Tote Bins",
    shortTitle: "Tote Bins",
    label: "Security & Automated Logistics",
    heroTitleLines: ["Attached Lid", "Plastic Tote", "Bins"],
    description:
      "Heavy duty plastic tote bins — reusable, tamper-evident injection-moulded tote containers with interlocking attached lids engineered for automated warehousing, conveyor routing, and secure transit. A trusted plastic tote bins manufacturer.",
    overview:
      "As a leading plastic storage tote manufacturer, Pixelplast's attached-lid tote containers protect goods in transit. When closed, they stack securely; when empty, nested nesting saves up to 70% return freight volume.",
    heroImage: "/assets/01_products_photos_composites/03_attached_lid_tote.png",
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
    seo: [
      "Pixelplast attached-lid plastic tote bins are reusable injection-moulded containers engineered for secure transit, conveyor routing and closed-loop reverse logistics. Interlocking attached lids protect contents through every kilometre of the supply chain while maintaining full stackability for consolidated transport.",
      "When empty, the totes nest inside one another to free up to 70% of return freight volume, cutting the environmental and cost impact of reusable packaging programmes. A textured base delivers smooth, predictable movement across belt conveyors and ASRS stations, while integrated tie-down slots accept tamper-evident zip seals for chain-of-custody integrity.",
      "Moulded from 100% virgin, food-contact grade polypropylene and high-impact HDPE, these containers withstand cold-chain extremes, cleaning and repeated handling cycles. They are the practical choice for pharmaceutical cold-chain, e-commerce fulfilment and retail networks that require hygienic, auditable, reusable packaging.",
    ],
    specExtras: [
      { label: "Nesting Savings", value: "Up to 70% return-freight volume" },
      { label: "Sealing", value: "Tamper-evident zip-seal points" },
      {
        label: "Operating Temperature",
        value: "-20°C to +65°C continuous service",
      },
      {
        label: "Compliance",
        value: "Food-contact · FDA 21 CFR 177 & EU 10/2011",
      },
    ],
    specNote:
      "Nesting savings are measured across a standard loaded/empty return cycle. For automated conveyor or ASRS routing, share transfer speeds and merge angles with our engineering team so we can confirm base-rider and pocket compatibility for your line.",
  },
  {
    slug: "spools",
    index: "05",
    title: "Precision Plastic Spools",
    shortTitle: "Plastic Spools",
    label: "Wire, Cable & Industrial Winding",
    heroTitleLines: ["Precision", "Plastic", "Spools"],
    description:
      "High-performance ABS and Polypropylene plastic spools — injection moulded plastic spools manufactured for high-speed continuous winding of wire, cable, optical fiber, 3D filament, and monofilament. A precision spools manufacturer serving India and global markets.",
    overview:
      "As a trusted wire spool manufacturer and cable spool manufacturer, every spool is manufactured with dynamic high-speed rotational balance and heavy-duty distortion-resistant flanges. Ensures snag-free payoff and precise take-up winding under high tension.",
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
    seo: [
      "Pixelplast precision plastic spools are manufactured for high-speed, continuous winding of copper and aluminium wire, automotive harnesses, optical fibre, telecom cable, 3D printing filament and industrial monofilament. Six standard dimensions are tooled for reliable drum supply to wire, cable and filament processing lines.",
      "Every spool is built around rib-reinforced flanges and a snag-free payoff geometry that keeps tension stable and protects conductor insulation during processing, shipment and de-pooling. Dynamic rotational balance and precision bore concentricity minimise vibration and run-out on high-RPM winders, protecting both product and machine life.",
      "Available in high-impact ABS and engineered polypropylene, the range is dimensionally stable, low-inertia and fully recyclable. Custom barrel widths, traverse lengths, colour identification and branding can be tooled for original equipment and contract reel programmes.",
    ],
    specExtras: [
      { label: "Material Grade", value: "High-impact ABS / engineered PP" },
      { label: "Winding Duty", value: "High-speed continuous take-up" },
      {
        label: "Dimension",
        value: "Flange deflection & bore checks per unit",
      },
      { label: "Export", value: "Dimensionally stable · recyclable" },
    ],
    specNote:
      "All spools pass individual flange deflection and bore concentricity inspection before dispatch. For high-tension or ultra-fine conductor lines, share your winding speed, flange diameter and traverse with our engineers so we can confirm the correct barrel geometry for your process.",
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