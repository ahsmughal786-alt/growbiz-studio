// =====================================================================
//  GROWBIZ STUDIO — SITE CONTENT
//  Edit this ONE file to update the website. No other file needs changing.
//  Anything marked TODO must be replaced before going live
//  (`npm run build` prints a warning for each one still left).
// =====================================================================

export const site = {
  name: "Growbiz Studio",
  tagline: "Build. Design. Grow. Automate.",
  // TODO: live domain, no trailing slash (used for SEO, sitemap, social previews)
  url: "https://growbizstudio.com",

  seo: {
    title: "Growbiz Studio | Software House & Digital Agency in Jersey City, NJ",
    description:
      "Growbiz Studio is a Jersey City software house and digital agency: web and mobile apps, custom software, e-commerce, UI/UX and branding, digital marketing and SEO, and AI agents that automate your business.",
    ogImage: "/og-image.png", // 1200x630 image in /public
  },

  contact: {
    email: "growbizusa@gmail.com",
    emailSubject: "New project enquiry",
    address: "Jersey City, New Jersey, USA",
    phone: "", // optional, e.g. "+1 (201) 555-0123". Leave "" to hide
    mapUrl: "", // optional Google Maps link
    hours: "", // optional, e.g. "Mon – Fri, 9am – 6pm ET". Leave "" to hide
  },

  // Optional: Calendly / Cal.com link. Leave "" to hide the "Book a call" buttons.
  bookingUrl: "",

  social: {
    // Leave "" to hide
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },
};

// Hero trust points — keep them TRUE. No invented numbers.
export const heroPoints = [
  "Full-service software house",
  "AI-first workflows",
  "Fixed quotes, no hidden costs",
];

// Icons: any name from https://lucide.dev (must also be added in src/components/Icon.jsx)
export const pillars = [
  { id: "build", label: "Build" },
  { id: "design", label: "Design" },
  { id: "grow", label: "Grow" },
  { id: "automate", label: "Automate" },
  { id: "support", label: "Support" },
];

export const services = [
  {
    pillar: "build",
    icon: "Code",
    title: "Web Development",
    text: "Fast, secure websites and web apps built to turn visitors into customers.",
    items: ["Business & landing sites", "Web apps & portals", "WordPress & headless CMS"],
  },
  {
    pillar: "build",
    icon: "Smartphone",
    title: "Mobile App Development",
    text: "iOS and Android apps with clean design and a solid backend behind them.",
    items: ["iOS & Android", "Cross-platform (Flutter / React Native)", "App Store launch"],
  },
  {
    pillar: "build",
    icon: "Layers",
    title: "Custom Software & SaaS",
    text: "Software shaped around your workflow: CRMs, dashboards, booking systems and SaaS products.",
    items: ["CRM & internal tools", "SaaS & MVP builds", "APIs & integrations"],
  },
  {
    pillar: "build",
    icon: "ShoppingCart",
    title: "E-commerce Development",
    text: "Shopify and WooCommerce stores that look premium and are easy to run.",
    items: ["Store setup & custom themes", "Payments & shipping", "Marketplace listings"],
  },
  {
    pillar: "design",
    icon: "PenTool",
    title: "UI/UX Design",
    text: "Research-led interfaces that are simple to use and look great on every screen.",
    items: ["Wireframes & prototypes", "App & web UI", "Design systems"],
  },
  {
    pillar: "design",
    icon: "Palette",
    title: "Branding & Identity",
    text: "A clear, consistent identity that makes your business look established from day one.",
    items: ["Logo & brand guide", "Social media creatives", "Packaging & print"],
  },
  {
    pillar: "design",
    icon: "Camera",
    title: "Photo & Video Production",
    text: "Product shoots, reels and ad videos that stop the scroll and sell.",
    items: ["Product photography", "Reels & ad videos", "Editing & motion graphics"],
  },
  {
    pillar: "grow",
    icon: "Megaphone",
    title: "Digital Marketing",
    text: "Paid ads and social media that reach the right buyers and bring measurable leads.",
    items: ["Meta & Google Ads", "Social media management", "Email marketing"],
  },
  {
    pillar: "grow",
    icon: "Search",
    title: "SEO & Local Search",
    text: "Get found on Google, from your neighborhood to nationwide.",
    items: ["Technical & on-page SEO", "Google Business Profile", "Content & link building"],
  },
  {
    pillar: "automate",
    icon: "Bot",
    title: "AI Agents & Chatbots",
    text: "AI assistants that answer customers, qualify leads and book appointments 24/7.",
    items: ["Website & messaging chatbots", "Voice & booking agents", "Custom GPT tools"],
  },
  {
    pillar: "automate",
    icon: "Workflow",
    title: "Workflow Automation",
    text: "Connect your apps so orders, invoices and follow-ups run on their own.",
    items: ["Zapier / Make / n8n", "CRM & ERP integrations", "Reporting automation"],
  },
  {
    pillar: "support",
    icon: "Server",
    title: "Cloud, Support & IT Consulting",
    text: "Hosting, maintenance and practical tech advice so your systems keep running.",
    items: ["Cloud hosting & DevOps", "Monthly care plans", "Tech strategy & audits"],
  },
];

// Shown as a scrolling strip under the hero. Plain text only, no logos.
export const techStack = [
  "React", "Next.js", "Node.js", "TypeScript", "Laravel", "Python", "Flutter", "React Native",
  "Shopify", "WordPress", "WooCommerce", "Tailwind CSS", "Figma", "AWS", "Google Cloud", "Vercel",
  "OpenAI", "Claude", "n8n", "Zapier", "Meta Ads", "Google Ads",
];

export const industries = [
  { icon: "ShoppingBag", title: "Retail & E-commerce" },
  { icon: "Home", title: "Real Estate" },
  { icon: "Stethoscope", title: "Clinics & Healthcare" },
  { icon: "UtensilsCrossed", title: "Restaurants & Food" },
  { icon: "GraduationCap", title: "Education & Coaching" },
  { icon: "Briefcase", title: "Professional Services" },
  { icon: "Truck", title: "Logistics & Trades" },
  { icon: "Rocket", title: "Startups & SaaS" },
];

// How clients can work with you
export const engagementModels = [
  {
    icon: "Target",
    title: "Fixed-Price Project",
    text: "Clear scope, timeline and cost agreed upfront. Best for websites, stores and MVPs.",
    points: ["Detailed proposal", "Milestone payments", "Launch support included"],
  },
  {
    icon: "Users",
    title: "Dedicated Team",
    text: "Your own designers and developers working as an extension of your business.",
    points: ["Monthly retainer", "Flexible team size", "Weekly progress reports"],
    featured: true,
  },
  {
    icon: "Headphones",
    title: "Care & Growth Plan",
    text: "Ongoing maintenance, marketing and improvements after launch.",
    points: ["Updates & backups", "SEO & ads management", "Priority support"],
  },
];

// Commitments — promises the business actually keeps
export const commitments = [
  { icon: "FileLock2", title: "NDA on request", text: "Your idea and data stay confidential." },
  { icon: "KeyRound", title: "You own the code", text: "Full source code and accounts handed over." },
  { icon: "LineChart", title: "Transparent reporting", text: "Regular updates and live previews." },
  { icon: "MessagesSquare", title: "Reply within 1 business day", text: "A real person, not a ticket queue." },
];

// Team / collaborator network. photo: put files in /public/team/ and use "/team/name.jpg" (square). "" shows initials.
export const teamSection = {
  eyebrow: "Our creative & technical network",
  title: ["Different strengths.", "One shared direction."],
  text: "Project collaborators bringing technical, editorial and social media expertise to Growbiz.",
};
export const team = [
  { name: "David M.", role: "System Engineer", tag: "Project collaborator", photo: "" },
  { name: "Ahmad Hassan Shahzad", role: "Software Developer", tag: "Project collaborator", photo: "" },
  { name: "Ayesha K.", role: "Content Editor", tag: "Project collaborator", photo: "" },
  { name: "Hiba S.", role: "Social Media", tag: "Project collaborator", photo: "" },
];

// Homepage photography section. Images live in /public/photography/ (use originals, ~1600px wide).
export const photography = {
  eyebrow: "Photography · Video · Social content",
  title: ["Real people. Memorable moments.", "Content that connects."],
  intro: [
    "Portraits, weddings, celebrations and business stories—captured with purpose and prepared for sharing, promotion and lasting memories.",
    "Professional photography, thoughtful direction and polished editing, supported by video and social-ready content when your project calls for it.",
  ],
  gallery: [
    { image: "photography/celebration-portrait.jpg", alt: "Award presentation portrait with the New York skyline behind", title: "Portraits with personality.", text: "Selected photography from our existing studio portfolio." },
    { image: "photography/garba-celebration.jpg", alt: "Group of women in colorful traditional outfits at a Garba night in Jersey City", title: "Celebrate the occasion.", text: "People, atmosphere and moments worth keeping." },
    { image: "photography/personal-branding.jpg", alt: "Fashion portrait at a New York Fashion Week event", title: "Show up as yourself.", text: "Portraits and imagery for personal presentation." },
  ],
  services: [
    { title: "Weddings & Celebrations", text: "Weddings, birthdays, parties and community events, documented through key moments, portraits and candid coverage." },
    { title: "Portraits & Personal Branding", text: "Professional portraits, lifestyle sessions and business imagery that put a face to your story, with direction to help you feel at ease." },
    { title: "Business & Social Content", text: "Promotional photography, video and Reels that show what you do, bring your message to life and give your social channels something worth sharing." },
  ],
  serviceArea: "New Jersey · New York · Connecticut.",
  serviceNote: "Out-of-state projects arranged by scope, travel requirements and availability. Booking requests are confirmed after we discuss availability, coverage and pricing.",
};

export const aiSection = {
  title: "Put AI to work in your business",
  text: "We build AI agents and automations around the way you already work, so your team spends less time on repetitive tasks and more time on customers.",
  useCases: [
    { icon: "MessageCircle", title: "24/7 customer replies", text: "AI chatbot on your website and messaging apps that answers questions and captures leads." },
    { icon: "Workflow", title: "Automated workflows", text: "Orders, invoices, follow-ups and reports that run on their own." },
    { icon: "FileText", title: "Content at scale", text: "Product descriptions, posts and ad copy drafted in your brand voice." },
    { icon: "Database", title: "Ask your data", text: "Chat with your sales, stock or customer data in plain language." },
  ],
};

// Selected work. Tiles are typographic labels (no client logos / screenshots).
// link: full URL (leave "" to hide the button). theme: blue | sand | green | lavender | peach | sage
export const showWorkSection = true;
export const workSection = {
  eyebrow: "Selected work & experience",
  title: ["Real organizations.", "Practical digital work."],
  text: "Experience across healthcare, education, retail, consulting and publishing.",
  footnote: "Selected projects and professional experience. Work completed in earlier employment is identified separately. Project tiles are typographic labels, not organization logos or website screenshots.",
};
export const projects = [
  {
    short: "BSFHC",
    category: "Healthcare",
    title: "Family Health Center - Brooklyn NY",
    text: "Website design, development and content management supporting healthcare services, provider information and community updates.",
    note: "Prior professional experience",
    link: "", // TODO: website URL
    linkLabel: "View Website",
    theme: "blue",
  },
  {
    short: "LUMS",
    category: "Higher Education",
    title: "LUMS — Research Department",
    text: "Academic web interfaces, content-management control panels and research data support, developed around faculty, staff and student requirements.",
    note: "Prior professional experience",
    link: "", // TODO: organization URL
    linkLabel: "Visit Organization",
    theme: "sand",
  },
  {
    short: "Square Mobile",
    category: "Retail & E-commerce",
    title: "Square Mobile LLC",
    text: "An e-commerce website project for a mobile retail business.",
    note: "E-commerce project",
    link: "",
    linkLabel: "View Website",
    theme: "green",
  },
  {
    short: "Impetus USA",
    category: "Consulting",
    title: "Impetus USA",
    text: "A business website project for a consulting company.",
    note: "Business website",
    link: "",
    linkLabel: "View Website",
    theme: "lavender",
  },
  {
    short: "India Observer",
    category: "News & Publishing",
    title: "India Observer",
    text: "A WordPress news publishing website project.",
    note: "WordPress project",
    link: "",
    linkLabel: "View Website",
    theme: "peach",
  },
  {
    short: "Growbiz Studio",
    category: "Booking Experience",
    title: "Growbiz Studio — Session Booking",
    text: "A live booking-request page bringing session type, dates, location and coverage requirements into one customer inquiry.",
    note: "Internal Growbiz project",
    link: "", // TODO: booking page URL
    linkLabel: "Explore Booking",
    theme: "sage",
  },
];

// Leave empty [] to hide the section. Only use REAL quotes with permission.
export const testimonials = [
  // { quote: "…", name: "Client Name", role: "Owner, Company" },
];

export const process = [
  { title: "Discover", text: "A free call to understand your business, goals and budget." },
  { title: "Plan", text: "A clear proposal with scope, timeline and cost — before any work starts." },
  { title: "Build", text: "Design and development with regular previews so you're never in the dark." },
  { title: "Launch & Grow", text: "Go live, then improve with marketing, SEO and ongoing support." },
];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "It depends on the size and features. After a short call we send a fixed quote with no hidden charges, so you know the full cost before we start.",
  },
  {
    q: "How long does a project take?",
    a: "A business website usually takes 1–3 weeks and an online store 2–4 weeks. Larger apps and AI tools are planned in milestones.",
  },
  {
    q: "Do you work with clients outside New Jersey?",
    a: "Yes. We work remotely with clients across the US and internationally, with calls on Google Meet, Zoom or phone.",
  },
  {
    q: "Will I be able to update my website myself?",
    a: "Yes. We set things up so you can edit text, images and products easily, and we give you a short walkthrough at handover.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Yes. We offer monthly support and growth plans covering updates, backups, security, SEO and marketing.",
  },
  {
    q: "Will you sign an NDA, and who owns the code?",
    a: "Yes, we're happy to sign an NDA before you share details. When the project is paid in full, you own the source code, designs and all accounts.",
  },
  {
    q: "What can an AI agent actually do for my business?",
    a: "Common uses are answering customer messages 24/7, capturing leads, drafting content and automating repetitive admin. We start with one clear task and expand from there.",
  },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai" },
  { label: "Photography", href: "#photography" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Store", page: "store", newTab: true, badge: "Soon" },
];
