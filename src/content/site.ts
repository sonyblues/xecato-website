// All copy for the site lives here so an Arabic version can be added as a
// second dictionary with the same shape and `locale.dir` set to "rtl".

export type ProjectCategory = "Architectural" | "Façade" | "Landscape" | "Interior";

export const site = {
  locale: { lang: "en", dir: "ltr" as "ltr" | "rtl" },

  nav: [
    { href: "/solutions", label: "Solutions" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],

  hero: {
    label: "Lighting solutions · UAE & GCC",
    headline: "We shape how architecture is seen after dark.",
    sub: "Architectural, façade and landscape lighting for developers, architects and consultants across the Gulf.",
    cta: "View Projects",
    image: { src: "/images/hero.jpg", alt: "Illuminated towers reflected in still water at night" },
  },

  solutions: {
    label: "Solutions",
    headline: "Everything between the first sketch and the last aiming session.",
    intro: "From consultation and calculation to supply, installation and long-term care, one team carries the lighting of a project end to end.",
    items: [
      { n: "01", slug: "consultation", title: "Lighting Consultation", desc: "We read the brief, the drawings and the site, then set a lighting approach that suits the architecture, the budget and the standard it must meet." },
      { n: "02", slug: "design", title: "Lighting Design & Calculation", desc: "Concepts, layouts, lux and uniformity calculations and rendered visualisations, prepared for consultant review and authority approval." },
      { n: "03", slug: "architectural", title: "Architectural Lighting", desc: "Interior and structural lighting that reveals form, material and proportion, specified fixture by fixture." },
      { n: "04", slug: "facade", title: "Façade Lighting", desc: "Night identities for towers, hotels and civic buildings. Grazing, washing and accent systems rated for Gulf heat, dust and salt air." },
      { n: "05", slug: "landscape", title: "Landscape Lighting", desc: "Pathways, water, planting and public realm, with low glare, warm colour temperatures and fixtures that disappear by day." },
      { n: "06", slug: "supply", title: "Product Specification & Supply", desc: "Luminaires and controls sourced from our partner brands, with bespoke items produced where the design asks for them." },
      { n: "07", slug: "installation", title: "Installation & Commissioning", desc: "Certified teams on site, coordinated with the main contractor; aiming, scene programming and handover documentation at the end." },
      { n: "08", slug: "controls", title: "Smart Lighting & Controls", desc: "Dimming, scheduling, scenes and voice control for homes and buildings, on Lutron, Dynalite and Legrand platforms." },
      { n: "09", slug: "solar", title: "Solar Lighting", desc: "Standalone solar luminaires for roads, parks and compounds, delivered with Solux: 36 hours on a full charge, seven rainy days of reserve, no trenching." },
      { n: "10", slug: "retrofit", title: "Retrofit & Energy Upgrades", desc: "Surveys, LED conversions and control upgrades for existing buildings, with the energy case documented before work begins." },
      { n: "11", slug: "maintenance", title: "Maintenance & After-Sales", desc: "Scheduled cleaning, re-aiming, driver and lamp replacement and control support for the life of the installation." },
    ],
  },

  about: {
    label: "About",
    headline: "Precision, performance and reliability in light.",
    lead: "XECATO LLC is a UAE-based lighting solutions company specialising in architectural, façade and landscape lighting for projects across the GCC.",
    body: [
      "We work closely with consultants, developers and contractors to deliver technically compliant, cost-effective and design-driven lighting tailored to each project. Our strength is the combination of product expertise, lighting design support and execution coordination, so a scheme is delivered as it was drawn.",
      "Our expertise lies in the creation and production of bespoke luminaires alongside a curated selection of standard products. Every client and consultant has a distinct design in mind; we study each specification in depth before we recommend.",
      "Our mission is to keep providing excellent service to our existing customers and to grow into new markets by adopting the latest advances in LED lighting technology.",
    ],
    pillars: [
      { title: "Product expertise", desc: "Bespoke and standard luminaires, specified to the brief." },
      { title: "Design support", desc: "Lighting concepts, calculations and compliance reports." },
      { title: "Execution", desc: "Coordination from concept through to completion." },
    ],
    clientsLabel: "Clients we have served",
    clients: ["Emaar", "Aldar", "Dubai Municipality", "Sharjah City Municipality", "etisalat by e&", "Al-Futtaim", "wasl", "Dubai Economy", "InterContinental", "ADIB", "Dubai Festival City", "UAE Ministry of Education", "British Embassy Dubai", "Beeah", "Imdaad", "Farnek", "Transguard Group", "KAY Invest", "Fujairah Mall", "Nikki Beach"],
  },

  expertise: {
    label: "Expertise",
    headline: "Three disciplines. One quality of light.",
    more: { href: "/solutions", label: "All solutions" },
    items: [
      {
        n: "01",
        title: "Architectural Lighting",
        desc: "Interior and structural lighting that reveals form, material and proportion. Specified to the brief, calculated to the standard, delivered to the drawing.",
        image: "/images/expertise-architectural.jpg",
      },
      {
        n: "02",
        title: "Façade Lighting",
        desc: "Night identities for towers, hotels and civic buildings. Grazing, washing and accent systems engineered for Gulf conditions and long service life.",
        image: "/images/expertise-facade.jpg",
      },
      {
        n: "03",
        title: "Landscape Lighting",
        desc: "Pathways, water, planting and public realm. Low glare, warm colour temperatures and fixtures chosen to disappear by day.",
        image: "/images/expertise-landscape.jpg",
      },
    ],
  },

  projects: {
    label: "Selected Projects",
    headline: "Work across the region.",
    filters: ["All", "Architectural", "Façade", "Landscape", "Interior"] as const,
    more: { href: "/projects", label: "All projects" },
    placeholderNote: "Placeholder image",
    items: [
      { name: "Waterfront Towers", location: "Dubai, UAE", category: "Façade" as ProjectCategory, type: "Mixed-use", image: "/images/project-01.jpg", placeholder: true },
      { name: "Corniche Residences", location: "Abu Dhabi, UAE", category: "Architectural" as ProjectCategory, type: "Residential", image: "/images/project-02.jpg", placeholder: true },
      { name: "Private Villa", location: "Dubai, UAE", category: "Landscape" as ProjectCategory, type: "Residential", image: "/images/project-03.jpg", placeholder: true },
      { name: "Boutique Hotel Lobby", location: "Doha, Qatar", category: "Interior" as ProjectCategory, type: "Hospitality", image: "/images/project-04.jpg", placeholder: true },
      { name: "Destination Mall", location: "Riyadh, KSA", category: "Interior" as ProjectCategory, type: "Retail", image: "/images/project-05.jpg", placeholder: true },
      { name: "Logistics Hub", location: "Jebel Ali, UAE", category: "Architectural" as ProjectCategory, type: "Industrial", image: "/images/project-06.jpg", placeholder: true },
      { name: "Palm Residence", location: "Dubai, UAE", category: "Interior" as ProjectCategory, type: "Residential", image: "/images/project-07.jpg", placeholder: true },
      { name: "Headquarters Offices", location: "Manama, Bahrain", category: "Architectural" as ProjectCategory, type: "Commercial", image: "/images/project-08.jpg", placeholder: true },
    ],
  },

  process: {
    label: "Our Process",
    headline: "From concept to commissioning.",
    steps: [
      { n: "01", title: "Concept & Lighting Design", desc: "Site study, lighting concept, calculations and visualisations that prove the design against UAE standards." },
      { n: "02", title: "Product Specification & Supply", desc: "Fixtures selected and sourced from our partner brands, bespoke where the design asks for it." },
      { n: "03", title: "Installation", desc: "Certified teams on site, coordinated with the main contractor and the consultant." },
      { n: "04", title: "Testing & Commissioning", desc: "Aiming, scene programming and handover documentation. We stay until the light is right." },
    ],
  },

  numbers: {
    label: "In numbers",
    items: [
      { value: 120, suffix: "+", label: "Projects delivered" },
      { value: 15, suffix: "", label: "Years of experience" },
      { value: 6, suffix: "", label: "Countries served" },
    ],
  },

  partners: {
    label: "Partners",
    headline: "Specified with the brands consultants trust.",
    logos: [
      { name: "Philips Dynalite", src: "/partners/philips-dynalite.png" },
      { name: "Lutron", src: "/partners/lutron.png" },
      { name: "Legrand", src: "/partners/legrand.png" },
      { name: "Cooper Lighting Solutions", src: "/partners/cooper.png" },
      { name: "Iluminia", src: "/partners/iluminia.png" },
      { name: "PLG", src: "/partners/plg.png" },
      { name: "Bright Special Lighting", src: "/partners/bright.png" },
      { name: "Beamever", src: "/partners/beamever.png" },
    ],
  },

  cta: {
    label: "Start a conversation",
    headline: "Tell us about the project.",
    link: { href: "/contact", label: "Contact us" },
  },

  contact: {
    label: "Contact",
    headline: "Tell us about the project.",
    sub: "Send a brief, a drawing or a question. We reply within two working days.",
    fields: {
      name: "Name",
      company: "Company",
      projectType: "Project type",
      projectTypes: ["Architectural", "Façade", "Landscape", "Interior", "Other"],
      message: "Message",
      submit: "Send enquiry",
      sent: "Thank you. We will be in touch shortly.",
    },
    office: {
      label: "Office",
      lines: ["XECATO", "802 Concorde Tower", "Media City, Dubai - UAE"],
    },
    phone: { label: "Phone & WhatsApp", value: "+971 55 798 9695", href: "tel:+971557989695" },
    email: { label: "Email", value: "sales@xecato.com", href: "mailto:sales@xecato.com" },
    whatsapp: { label: "WhatsApp", href: "https://wa.me/971557989695" },
  },

  footer: {
    line: "Architectural, façade and landscape lighting · Dubai, UAE",
    rights: "All rights reserved.",
  },
};

export type SiteContent = typeof site;
