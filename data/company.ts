export const company = {
  legalName: "Pixel Technoplast Private Limited",
  shortName: "Pixelplast",
  tagline: "Smart Plastic Solutions",
  slogan: "Stronger Smarter Solutions",
  phone: "+91 84472 47227",
  phoneHref: "tel:+918447247227",
  email: "info@pixelplast.in",
  emailHref: "mailto:info@pixelplast.in",
  website: "https://pixelplast.in",
  address:
    "Khasra No. 427, Shed No. 3, Gautam Buddha Nagar, 203207",
  gst: "09AAQCP7608A1Z9",
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Products", href: "/products" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
] as const;

export const proofPoints = [
  { value: "160 – 3000 Tonnes", label: "Injection-Moulding Range" },
  { value: "In-House", label: "Tool-Room Facility" },
  { value: "Automated", label: "Process & Cycle Control" },
  { value: "ISO & RoHS", label: "Certified Global Quality" },
] as const;

export const manufacturingPillars = [
  {
    index: "01",
    title: "Advanced Injection Moulding",
    description:
      "State-of-the-art facility with machine tonnage from 160 to 3000 Tonnes for high-precision components and heavy-duty structural parts.",
  },
  {
    index: "02",
    title: "In-House Tool Room",
    description:
      "Dedicated tool-room support ensuring rapid die maintenance, precision mould adjustments, sampling, and zero production downtime.",
  },
  {
    index: "03",
    title: "Process Automation",
    description:
      "Automated material feeding and computerized cycle controls to ensure dimensional repeatability and rapid batch consistency.",
  },
  {
    index: "04",
    title: "Skilled Workforce",
    description:
      "Experienced 24/7 technical team delivering stringent quality inspection, in-process SPC checks, and continuous traceability.",
  },
] as const;

export const companyValues = [
  {
    index: "01",
    title: "Our Mission",
    description:
      "To provide high-quality, innovative and sustainable solutions that create lasting value for our customers and partners.",
  },
  {
    index: "02",
    title: "Our Vision",
    description:
      "To be the most trusted global partner for plastic pallets and bins, recognized for quality, innovation and integrity.",
  },
  {
    index: "03",
    title: "Our Commitment",
    description:
      "Consistent quality, on-time delivery and customer satisfaction are at the heart of everything we do.",
  },
  {
    index: "04",
    title: "Global Reach",
    description:
      "Serving OEMs and industries across India and international markets with confidence.",
  },
] as const;

export const palletAdvantages = [
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
] as const;

export const services = [
  {
    index: "01",
    label: "Core Manufacturing",
    title: "Plastic Injection Moulding",
    description:
      "A 160 to 3000 Tonnes machine range supports varied part sizes, multi-cavity mould formats, and high-volume industrial production.",
    href: "#manufacturing-heading",
  },
  {
    index: "02",
    label: "Customer-Defined Programs",
    title: "OEM Manufacturing",
    description:
      "Customer drawings, specifications, application requirements, and target volumes are aligned with dedicated tooling and repeat production.",
    href: "#process-heading",
  },
  {
    index: "03",
    label: "Custom OEM Tooling",
    title: "OEM Tooling & Development",
    description:
      "Customer specifications are engineered through DFM analysis, polymer compounding, mould tooling, sampling trials, and full production readiness.",
    href: "#process-heading",
  },
  {
    index: "04",
    label: "Production Continuity",
    title: "Tool-Room & Process Support",
    description:
      "In-house tool room, automated process controls, skilled 24/7 technical teams, and defined quality checkpoints support stable, zero-defect output.",
    href: "#quality-heading",
  },
] as const;

// 24 Standard Products from Brochure PDF
export const plasticPallets = [
  {
    code: "PT0001",
    type: "Heavy Duty Racking Pallet",
    dimensions: "1200 × 1000 × 160 mm",
    color: "Blue, Grey, Green",
    staticLoad: "6000 kg Unified Load",
    dynamicLoad: "Up to 1200 kg Unified Load",
    rackingLoad: "Up to 1200 kg Unified Load",
    material: "HDPE/PP",
  },
  {
    code: "PT0002",
    type: "Reinforced Mesh Pallet",
    dimensions: "1200 × 1000 × 160 mm",
    color: "Blue, Grey, Green",
    staticLoad: "6000 kg Unified Load",
    dynamicLoad: "1500 kg Unified Load",
    rackingLoad: "1200 kg Unified Load",
    material: "HDPE/PP",
  },
  {
    code: "PT0003",
    type: "Euro Size Pallet",
    dimensions: "1200 × 800 × 165 mm",
    color: "Blue, Grey, Green",
    staticLoad: "2500 kg Unified Load",
    dynamicLoad: "Up to 750 kg Unified Load",
    rackingLoad: "Up to 500 kg Unified Load",
    material: "HDPE/PP",
  },
  {
    code: "PT0004",
    type: "Solid Flat Top Pallet",
    dimensions: "1200 × 1000 × 125 mm",
    color: "Blue, Grey, Green",
    staticLoad: "3000 kg Unified Load",
    dynamicLoad: "Up to 750 kg Unified Load",
    rackingLoad: "Not Applicable",
    material: "HDPE/PP",
  },
  {
    code: "PT0005",
    type: "Medium Duty Mesh Pallet",
    dimensions: "1200 × 1000 × 150 mm",
    color: "Blue, Grey, Green",
    staticLoad: "4000 kg Unified Load",
    dynamicLoad: "Up to 800 kg Unified Load",
    rackingLoad: "Up to 700 kg Unified Load",
    material: "HDPE/PP",
  },
  {
    code: "PT0006",
    type: "Extra Large Pallet",
    dimensions: "1300 × 1100 × 150 mm",
    color: "Blue, Grey, Green",
    staticLoad: "6000 kg Unified Load",
    dynamicLoad: "Up to 1500 kg Unified Load",
    rackingLoad: "Up to 1000 kg Unified Load",
    material: "HDPE/PP",
  },
  {
    code: "PT0007",
    type: "Export Nestable Euro Pallet",
    dimensions: "1200 × 800 × 145 mm",
    color: "Blue, Grey, Green",
    staticLoad: "2000 kg Unified Load",
    dynamicLoad: "Up to 1000 kg Unified Load",
    rackingLoad: "Not Applicable",
    material: "HDPE/PP",
  },
  {
    code: "PT0008",
    type: "Square Low Profile Nestable Pallet",
    dimensions: "1100 × 1100 × 120 mm",
    color: "Blue, Grey, Green",
    staticLoad: "2000 kg Unified Load",
    dynamicLoad: "Up to 1000 kg Unified Load",
    rackingLoad: "Not Applicable",
    material: "HDPE/PP",
  },
  {
    code: "PT0009",
    type: "Square Standard Nestable Pallet",
    dimensions: "1100 × 1100 × 150 mm",
    color: "Blue, Grey, Green",
    staticLoad: "2000 kg Unified Load",
    dynamicLoad: "Up to 1000 kg Unified Load",
    rackingLoad: "Not Applicable",
    material: "HDPE/PP",
  },
] as const;

export const plasticCrates = [
  {
    code: "PT0010",
    outer: "650 × 450 × 210 mm",
    inner: "610 × 410 × 200 mm",
    colors: "Blue, Grey, Customization Available",
    versions: "SSP / RB (Side Perforated / Ribbed Base)",
  },
  {
    code: "PT0011",
    outer: "540 × 360 × 205 mm",
    inner: "505 × 325 × 195 mm",
    colors: "Blue, Grey, Customization Available",
    versions: "SSP / RB",
  },
  {
    code: "PT0012",
    outer: "650 × 450 × 210 mm",
    inner: "610 × 410 × 200 mm",
    colors: "Blue, Grey, Customization Available",
    versions: "SCH / FB / RB (Solid / Flat Base / Ribbed Base)",
  },
  {
    code: "PT0013",
    outer: "540 × 360 × 340 mm",
    inner: "505 × 325 × 330 mm",
    colors: "Blue, Grey, Customization Available",
    versions: "SSP / RB (Deep Perforated)",
  },
  {
    code: "PT0014",
    outer: "610 × 450 × 260 mm",
    inner: "610 × 410 × 250 mm",
    colors: "Blue, Grey, Customization Available",
    versions: "SCL / SCH / FB / RB (Jumbo Solid)",
  },
  {
    code: "PT0015",
    outer: "540 × 360 × 340 mm",
    inner: "505 × 325 × 330 mm",
    colors: "Blue, Grey, Customization Available",
    versions: "SCH / RB (Deep Solid)",
  },
] as const;

export const plasticBins = [
  {
    code: "PT0016",
    outer: "165 × 114 × 78 mm",
    effectiveHeight: "44 mm",
    colors: "Blue, Grey, Customization available",
  },
  {
    code: "PT0017",
    outer: "230 × 150 × 127 mm",
    effectiveHeight: "62 mm",
    colors: "Blue, Grey, Customization available",
  },
  {
    code: "PT0018",
    outer: "515 × 310 × 200 mm",
    effectiveHeight: "100 mm",
    colors: "Blue, Grey, Customization available",
  },
  {
    code: "PT0019",
    outer: "95 × 102 × 51 mm",
    effectiveHeight: "24 mm",
    colors: "Blue, Grey, Customization available",
  },
  {
    code: "PT0020",
    outer: "200 × 126 × 100 mm",
    effectiveHeight: "50 mm",
    colors: "Blue, Grey, Customization available",
  },
  {
    code: "PT0021",
    outer: "300 × 210 × 160 mm",
    effectiveHeight: "85 mm",
    colors: "Blue, Grey, Customization available",
  },
] as const;

export const toteBins = [
  {
    code: "PT0022",
    outer: "604 × 400 × 255 mm",
    inner: "552 × 364 × 250 mm",
    colors: "Blue, Grey, Customization available",
    versions: "SCL / BB / FB (Standard Attached Lid)",
  },
  {
    code: "PT0023",
    outer: "605 × 400 × 345 mm",
    inner: "545 × 370 × 320 mm",
    colors: "Blue, Grey, Customization available",
    versions: "SCL / FB (Deep Attached Lid)",
  },
  {
    code: "PT0024",
    outer: "400 × 300 × 300 mm",
    inner: "355 × 262 × 290 mm",
    colors: "Blue, Grey, Customization available",
    versions: "SCL / BB (Compact Attached Lid)",
  },
] as const;

export const spoolSizes = [
  { dimensions: "50 × 135 × 135 mm", materials: "ABS and PP" },
  { dimensions: "83 × 133 × 133 mm", materials: "ABS and PP" },
  { dimensions: "55 × 200 × 200 mm", materials: "ABS and PP" },
  { dimensions: "63 × 150 × 163 mm", materials: "ABS and PP" },
  { dimensions: "350 × 211 × 200 mm", materials: "ABS and PP" },
  { dimensions: "515 × 310 × 200 mm", materials: "ABS and PP" },
] as const;

export const processSteps = [
  {
    index: "01",
    title: "Requirement Review",
    description: "Application context, expected volume, performance parameters, and material selection.",
  },
  {
    index: "02",
    title: "Manufacturing Alignment",
    description: "DFM optimization, tooling allocation, cycle parameter setup, and production planning.",
  },
  {
    index: "03",
    title: "Sampling & Validation",
    description: "Trial sampling, CMM dimensional verification, FAI reporting, and load testing.",
  },
  {
    index: "04",
    title: "Controlled Batch Production",
    description: "24/7 repeatable injection moulding, automated packaging, and scheduled delivery.",
  },
] as const;

export const industries = [
  "Automotive",
  "Pharmaceutical",
  "Food & Beverage",
  "Chemical",
  "Retail & Logistics",
  "Wire & Cable",
] as const;

export const certifications = [
  { title: "ISO 9001:2015", label: "Quality Management System" },
  { title: "ISO 14001:2015", label: "Environmental Management" },
  { title: "RoHS Compliant", label: "Restricted Hazardous Substances" },
] as const;

export const companyMilestones = [
  {
    title: "Advanced Machinery",
    description: "State-of-the-art manufacturing facility equipped with advanced machinery and technology for precision, consistency, and superior quality.",
  },
  {
    title: "160 to 3000 Tonnes",
    description: "Injection moulding machines ranging from 160 Tonnes to 3000 Tonnes supporting light-to-heavy components and structural parts.",
  },
  {
    title: "In-House Capability",
    description: "In-house tool room and automated processes support rapid sampling, mould maintenance, and repeatable production.",
  },
  {
    title: "Skilled Workforce",
    description: "Experienced production and engineering teams deliver consistent quality and dependable, on-time output.",
  },
] as const;

export const facilityStats = [
  { value: "160–3000", label: "Tonnes Injection Range" },
  { value: "24", label: "Standard Product Formats" },
  { value: "In-House", label: "Tool Room & Automation" },
  { value: "ISO 14001", label: "Certified Manufacturing" },
] as const;

export const capabilityEquipment = [
  {
    title: "Injection Moulding Presses",
    range: "160 to 3000 Tonnes",
    detail: "Hydraulic and servo-driven machines supporting multi-cavity mould formats, thin-wall packaging, and large structural parts.",
  },
  {
    title: "Automation & Robotics",
    range: "Robotic Part Handling",
    detail: "Automated part removal, sprue separation, and conveyor-based packing reduce cycle variability and manual handling risk.",
  },
  {
    title: "Material Handling Systems",
    range: "Automated Feeding",
    detail: "Gravimetric blenders, dehumidifying dryers, and centralised conveying systems ensure consistent polymer quality.",
  },
  {
    title: "Quality Inspection",
    range: "CMM & Vision Systems",
    detail: "Coordinate measuring machines, optical comparators, and go/no-go gauging support dimensional verification at every stage.",
  },
] as const;

export const qualityProcess = [
  {
    step: "01",
    title: "Incoming Material Verification",
    description: "Raw polymer batches tested for moisture content, melt flow index, and colour consistency before production.",
  },
  {
    step: "02",
    title: "In-Process Monitoring",
    description: "Real-time cycle parameter tracking, cavity pressure sensing, and statistical process control across every shift.",
  },
  {
    step: "03",
    title: "Dimensional Inspection",
    description: "First-article inspection, CMM dimensional mapping, and go/no-go gauge verification against approved drawings.",
  },
  {
    step: "04",
    title: "Final Release & Traceability",
    description: "Batch-wise traceability, dispatch documentation, and customer-approved quality records accompany every shipment.",
  },
] as const;
