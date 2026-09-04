import {
  plasticPallets,
  plasticCrates,
  plasticBins,
  toteBins,
  spoolSizes,
} from "@/data/company";

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
  images: readonly {
    src: string;
    alt: string;
    label: string;
  }[];
  highlights: readonly string[];
  applications: readonly string[];
  materials?: readonly string[];
  palletAdvantages?: readonly { title: string; description: string }[];
  specifications?: readonly Record<string, string | number | undefined>[];
  technicalNote: string;
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
    specifications: plasticPallets.map((p) => {
      let image = "/assets/01_products_photos_composites/pallet_heavy_duty.jpg";
      if (p.code === "PT0004") {
        image = "/assets/01_products_photos_composites/pallet_solid.jpg";
      } else if (["PT0003", "PT0007", "PT0008", "PT0009"].includes(p.code)) {
        image = "/assets/01_products_photos_composites/pallet_generated.jpg";
      }
      return {
        code: p.code,
        type: p.type,
        dimensions: p.dimensions,
        staticLoad: p.staticLoad,
        dynamicLoad: p.dynamicLoad,
        rackingLoad: p.rackingLoad,
        material: p.material,
        color: p.color,
        image,
      };
    }),
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
    heroImage: "/assets/01_products_photos_composites/04_crate_and_bin.png",
    images: [
      {
        src: "/assets/01_products_photos_composites/crate_generated.jpg",
        alt: "Industrial Crate",
        label: "Crate Range",
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
    specifications: plasticCrates.map((c) => {
      let image = "/assets/01_products_photos_composites/crate_perforated.jpg";
      if (c.code === "PT0012" || c.code === "PT0015") {
        image = "/assets/01_products_photos_composites/crate_solid.jpg";
      } else if (c.code === "PT0014") {
        image = "/assets/01_products_photos_composites/crate_generated.jpg";
      }
      return {
        code: c.code,
        outer: c.outer,
        inner: c.inner,
        versions: c.versions,
        colors: c.colors,
        image,
      };
    }),
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
    heroImage: "/assets/01_products_photos_composites/07_storage_bin.png",
    images: [
      {
        src: "/assets/01_products_photos_composites/bin_generated.jpg",
        alt: "Modular Front-Open Storage Bin",
        label: "Bin Range",
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
    specifications: plasticBins.map((b) => {
      let image = "/assets/01_products_photos_composites/bin_generated.jpg";
      if (["PT0017", "PT0019", "PT0021"].includes(b.code)) {
        image = "/assets/01_products_photos_composites/07_storage_bin.png";
      }
      return {
        code: b.code,
        outer: b.outer,
        effectiveHeight: b.effectiveHeight,
        colors: b.colors,
        image,
      };
    }),
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
    heroImage: "/assets/01_products_photos_composites/03_attached_lid_tote.png",
    images: [
      {
        src: "/assets/01_products_photos_composites/tote_generated.jpg",
        alt: "PT0022 Attached Lid Tote Container",
        label: "PT0022",
      },
      {
        src: "/assets/01_products_photos_composites/01_hero_product_composite.png",
        alt: "Attached Lid Tote in Industrial Assembly",
        label: "Industrial Tote",
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
    specifications: toteBins.map((t) => {
      let image = "/assets/01_products_photos_composites/tote_standard.jpg";
      if (t.code === "PT0023") {
        image = "/assets/01_products_photos_composites/tote_deep.jpg";
      } else if (t.code === "PT0024") {
        image = "/assets/01_products_photos_composites/tote_generated.jpg";
      }
      return {
        code: t.code,
        outer: t.outer,
        inner: t.inner,
        versions: t.versions,
        colors: t.colors,
        image,
      };
    }),
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
    specifications: spoolSizes.map((s, idx) => {
      const code = `Spool 0${idx + 1}`;
      let image = "/assets/01_products_photos_composites/spool_medium.jpg";
      if (idx < 2) {
        image = "/assets/01_products_photos_composites/spool_small.jpg";
      } else if (idx >= 4) {
        image = "/assets/01_products_photos_composites/spool_generated.jpg";
      }
      return {
        code,
        dimensions: s.dimensions,
        materials: s.materials,
        features: "High-speed balance & rib-reinforced flanges",
        image,
      };
    }),
    technicalNote:
      "All spools undergo strict flange deflection testing and bore concentricity inspection. Custom barrel widths and traverse lengths available upon request.",
  },
];

export function getProductCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((category) => category.slug === slug);
}
