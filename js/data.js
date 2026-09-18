/**
 * DATA SOURCE
 * -----------
 * All content that is likely to change lives here, separated from markup,
 * so this can later be swapped for a CMS/API call (see section 23 of spec)
 * without touching component/page code.
 */

const companyInfo = {
  name: "PT Sinar Surabayasakti",
  shortName: "Sinar Surabayasakti",
  established: "30 October 1992",
  establishedYear: "1992",
  business: "Cable Distributor",
  mainProduct: "SUPREME Cable",
  distributorNote: "SUPREME Cable Distributor", // used until "Authorized Distributor" status is confirmed by client
  supportedBy: "PT SUCACO Tbk (Supreme Cable Manufacturing Corporation Tbk)",
  location: "Sidoarjo, East Java",
  coverage: "Indonesia",
  address: {
    line1: "Jl. Kalijaten No. 65",
    line2: "Taman, Sidoarjo",
    line3: "Jawa Timur 61257, Indonesia",
  },
  phones: [
    "031-7881785",
    "031-7881786",
    "031-7881787",
    "031-7881788",
    "031-7881789",
  ],
  fax: ["031-7881322", "031-7884872"],
  email: "ptsinarsurabayasakti@gmail.com",
  whatsappNumber: "[WHATSAPP_NUMBER]", // placeholder — replace with real number, digits only, country code first e.g. 6281234567890
  hours: {
    weekday: "Monday - Friday, 08:00 - 16:00",
    weekend: "Saturday, Sunday & public holidays: Closed",
  },
  mapsEmbedUrl: "", // placeholder — paste Google Maps embed URL here
  vision: "Vision statement will be provided by PT Sinar Surabayasakti.",
  mission: "Mission statement will be provided by PT Sinar Surabayasakti.",
  timeline: [
    { year: "1992", label: "Company Established", desc: "PT Sinar Surabayasakti was founded on 30 October 1992." },
    { year: "1993", label: "Started Business Operations", desc: "Began operations in January 1993 as an agent/distributor of SUPREME cable, supported by PT SUCACO Tbk." },
    { year: "Present", label: "Serving Customers Across Indonesia", desc: "Continuing to serve customers in Surabaya, Eastern Indonesia, and beyond." },
  ],
  whyChooseUs: [
    { title: "Trusted Experience", desc: "Berpengalaman sejak 1992 dalam distribusi kabel SUPREME." },
    { title: "Quality Products", desc: "Menyediakan produk kabel untuk kebutuhan kelistrikan dan telekomunikasi." },
    { title: "Wide Customer Reach", desc: "Melayani kebutuhan pelanggan di Surabaya, Indonesia Timur, hingga wilayah Indonesia lainnya." },
    { title: "Reliable Support", desc: "Memberikan dukungan untuk kebutuhan produk kabel pelanggan." },
  ],
  industries: [
    "Contractors",
    "Electrical Stores",
    "Utilities (PT PLN)",
    "Telecommunications (PT TELKOM)",
    "Industrial Projects",
    "Infrastructure",
  ],
};

const productCategories = [
  {
    slug: "kabel-listrik",
    number: "01",
    name: "Kabel Listrik",
    nameEn: "Electrical Cable",
    description: "Bare Copper Conductor, Aluminium Conductor, PVC up to 6 KV, XLPE up to 150 KV, Lead Sheathed, Corrugated Metallic Sheathed, Multiplex, dan jenis lainnya.",
  },
  {
    slug: "kabel-telekomunikasi",
    number: "02",
    name: "Kabel Telekomunikasi",
    nameEn: "Telecommunication Cable",
    description: "Indoor, Burial, Drop Wire, Aerial Duct, Jelly Filled Armoured, Non Armoured, PCM, LAN, Optical Fibre, dan jenis lainnya.",
  },
];

/**
 * Each product entry mirrors the shape described in section 13:
 * id, name, category, description, image, specifications, documents
 */
const products = [
  {
    id: "bare-copper-conductor",
    name: "Bare Copper Conductor",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "Bare copper conductor used as a base conductor for electrical power transmission and distribution applications.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "aluminium-conductor",
    name: "Aluminium Conductor",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "Aluminium conductor commonly used for overhead power lines due to its favorable weight-to-conductivity ratio.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "pvc-cable",
    name: "PVC Cable (up to 6 KV)",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "PVC insulated power cable rated up to 6 KV for general electrical distribution needs.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "xlpe-cable",
    name: "XLPE Cable (up to 150 KV)",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "Cross-linked polyethylene insulated cable rated up to 150 KV, suited for medium and high voltage applications.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "lead-sheathed-cable",
    name: "Lead Sheathed Cable",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "Cable with a lead sheath layer for additional mechanical and moisture protection.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "corrugated-metallic-sheathed",
    name: "Corrugated Metallic Sheathed Cable",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "Cable with a corrugated metallic sheath for enhanced mechanical protection in demanding installations.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "multiplex-cable",
    name: "Multiplex Cable",
    category: "kabel-listrik",
    categoryLabel: "Kabel Listrik",
    description: "Multi-core aerial cable assembly typically used for low voltage overhead distribution.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "indoor-telecom-cable",
    name: "Indoor Telecommunication Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Telecommunication cable designed for indoor installation and distribution.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "burial-cable",
    name: "Burial Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Direct-burial telecommunication cable built for underground installation.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "drop-wire",
    name: "Drop Wire",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Drop wire cable used for the final connection between distribution points and customer premises.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "aerial-duct-cable",
    name: "Aerial Duct Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Cable designed for aerial duct installation in telecommunication networks.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "jelly-filled-armoured",
    name: "Jelly Filled Armoured Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Jelly-filled armoured telecommunication cable offering protection against moisture ingress.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "non-armoured-cable",
    name: "Non Armoured Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Non-armoured telecommunication cable for standard indoor/outdoor use.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "pcm-cable",
    name: "PCM Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Cable used in pulse-code modulation telecommunication transmission systems.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "lan-cable",
    name: "LAN Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Local area network cable for structured data cabling installations.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
  {
    id: "optical-fibre-cable",
    name: "Optical Fibre Cable",
    category: "kabel-telekomunikasi",
    categoryLabel: "Kabel Telekomunikasi",
    description: "Optical fibre cable for high-capacity, long-distance telecommunication transmission.",
    image: null,
    specifications: null,
    applications: null,
    documents: [],
  },
];

// Products featured on the homepage (subset, first per category + a few extra)
const featuredProductIds = [
  "bare-copper-conductor",
  "pvc-cable",
  "xlpe-cable",
  "indoor-telecom-cable",
  "lan-cable",
  "optical-fibre-cable",
];

/**
 * Download Center documents — mirrors section 15.
 * fileUrl is a placeholder; replace with real file paths once available.
 */
const downloadDocuments = [
  { id: "company-profile-pdf", title: "Company Profile", category: "Company Profile", fileType: "PDF", fileUrl: "#" },
  { id: "product-catalog-pdf", title: "Product Catalog", category: "Catalog", fileType: "PDF", fileUrl: "#" },
  { id: "product-brochure-pdf", title: "Product Brochure", category: "Brochure", fileType: "PDF", fileUrl: "#" },
  { id: "product-datasheet-pdf", title: "Product Datasheet", category: "Datasheet", fileType: "PDF", fileUrl: "#" },
  { id: "certificates-pdf", title: "Certificates", category: "Certificate", fileType: "PDF", fileUrl: "#" },
];

const downloadCategories = ["All", "Catalog", "Brochure", "Datasheet", "Certificate", "Company Profile", "Other Documents"];

/** Helper: build a WhatsApp click-to-chat URL from the placeholder number + message */
function getWhatsAppUrl(message) {
  const number = (companyInfo.whatsappNumber || "").replace(/[^\d]/g, "");
  const text = encodeURIComponent(message || "Halo, saya ingin bertanya mengenai produk kabel SUPREME.");
  if (!number) return "#"; // no real number configured yet
  return `https://wa.me/${number}?text=${text}`;
}

function getProductBySlug(slug) {
  return products.find((p) => p.id === slug);
}

function getProductsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return products;
  return products.filter((p) => p.category === categorySlug);
}

function searchProducts(query, categorySlug) {
  const q = (query || "").trim().toLowerCase();
  let list = getProductsByCategory(categorySlug);
  if (!q) return list;
  return list.filter((p) =>
    p.name.toLowerCase().includes(q) ||
    p.categoryLabel.toLowerCase().includes(q) ||
    (p.description || "").toLowerCase().includes(q)
  );
}
