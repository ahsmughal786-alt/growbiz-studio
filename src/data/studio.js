// =====================================================================
//  GROWBIZ STUDIO — PHOTOGRAPHY & VIDEO PAGE  (/studio/)
//  DRAFT CONTENT: replace with the studio's real details.
//  Lines marked DRAFT are placeholders written from the homepage section.
// =====================================================================

export const studio = {
  name: "Growbiz Studio — Photography & Video",
  seo: {
    title: "Photography & Video Studio | Growbiz Studio, Jersey City NJ",
    description:
      "Wedding, celebration, portrait, personal branding and business photography and video in New Jersey, New York and Connecticut. Request your session with Growbiz Studio.",
  },
  hero: {
    eyebrow: "Growbiz Studio · Photography & Video",
    title: ["Real people.", "Memorable moments."],
    text: "Portraits, weddings, celebrations and business stories, captured with purpose and prepared for sharing, promotion and lasting memories.", // DRAFT
    images: [
      { image: "photography/portfolio/graduation-3.jpg", alt: "Graduate portrait with corsage" },
      { image: "photography/portfolio/weddings-1.jpg", alt: "Bride with bridesmaids at a wedding ceremony" },
      { image: "photography/portfolio/portraits-1.jpg", alt: "Smiling close-up portrait" },
    ],
  },

  sessions: [
    {
      icon: "Heart",
      title: "Weddings & Celebrations",
      text: "Weddings, birthdays, parties and community events, documented through key moments, portraits and candid coverage.",
      includes: ["Ceremony & reception coverage", "Family & group portraits", "Candid & detail shots", "Highlight video (add-on)"], // DRAFT
    },
    {
      icon: "Camera",
      title: "Portraits & Personal Branding",
      text: "Professional portraits, lifestyle sessions and business imagery that put a face to your story, with direction to help you feel at ease.",
      includes: ["Headshots & profile photos", "Lifestyle & outdoor sessions", "Posing direction", "Retouched final images"], // DRAFT
    },
    {
      icon: "Film",
      title: "Business & Social Content",
      text: "Promotional photography, video and Reels that show what you do, bring your message to life and give your social channels something worth sharing.",
      includes: ["Product & brand photography", "Reels & short-form video", "Event & behind-the-scenes", "Social-ready edits"], // DRAFT
    },
  ],

  // PORTFOLIO — one block per category. First image = large featured photo, next 4 = thumbnails.
  // Add as many images as you like: "View All" opens every image in a full-screen viewer.
  // bookingType must match one of sessionTypes below (pre-selects it in the booking form).
  portfolio: [
    {
      id: "weddings", icon: "Gem", title: "Weddings", subtitle: "Ceremony, reception, couple portraits, candid moments.",
      headline: "Timeless coverage, natural storytelling",
      text: "From vows to dance floor, we capture real emotion with clean edits, true skin tones, and a balanced mix of candids and portraits.",
      bookingType: "Wedding",
      images: [
        { src: "photography/portfolio/weddings-1.jpg", alt: "Bride with bridesmaids at a wedding ceremony" },
        { src: "photography/portfolio/weddings-2.jpg", alt: "Couple embracing in a hallway" },
        { src: "photography/portfolio/weddings-3.jpg", alt: "Bride in a red lehenga and groom in a garden" },
        { src: "photography/portfolio/weddings-4.jpg", alt: "Couple sharing a moment outdoors" },
        { src: "photography/portfolio/weddings-5.jpg", alt: "Couple at a civil wedding ceremony" },
      ],
    },
    {
      id: "portraits", icon: "User", title: "Portraits", subtitle: "Headshots, lifestyle, personal branding, couples.",
      headline: "Quick & High-resolution Delivery",
      text: "Clean portraits for profiles, business branding, couples, and lifestyle moments. Consistent color, natural skin tones, and a premium look without heavy edits.",
      bookingType: "Portraits / Headshots / Personal branding",
      images: [
        { src: "photography/portfolio/portraits-1.jpg", alt: "Smiling close-up portrait" },
        { src: "photography/portfolio/portraits-2.jpg", alt: "Creative studio portrait with colored lighting" },
        { src: "photography/portfolio/portraits-3.jpg", alt: "Couple portrait at an evening event" },
        { src: "photography/portfolio/portraits-4.jpg", alt: "Professional business portrait" },
        { src: "photography/portfolio/portraits-5.jpg", alt: "Couple in festive outfits with balloons" },
      ],
    },
    {
      id: "kids", icon: "Cake", title: "Kids", subtitle: "Birthdays, family moments, playful outdoor shoots.",
      headline: "Bright moments, real smiles",
      text: "Fast-paced kids sessions with gentle direction, candid expressions, and clean color. Fun energy, but still polished.",
      bookingType: "Kids & Birthdays",
      images: [
        { src: "photography/portfolio/kids-1.jpg", alt: "Toddler crawling in a bright room" },
        { src: "photography/portfolio/kids-2.jpg", alt: "Baby in a lavender dress at a birthday" },
        { src: "photography/portfolio/kids-3.jpg", alt: "Child celebrating a first birthday" },
        { src: "photography/portfolio/kids-4.jpg", alt: "Baby in a white outfit with sparkling backdrop" },
        { src: "photography/portfolio/kids-5.jpg", alt: "Smiling toddler outdoors" },
      ],
    },
    {
      id: "graduation", icon: "GraduationCap", title: "Graduation", subtitle: "Caps & gowns, campus photos, family celebrations.",
      headline: "Celebrate the milestone, beautifully",
      text: "Classic portraits, family shots, and a few cinematic moments. Clean framing, clean color, and fast delivery.",
      bookingType: "Graduation",
      images: [
        { src: "photography/portfolio/graduation-1.jpg", alt: "Graduate with flowers beside a car" },
        { src: "photography/portfolio/graduation-2.jpg", alt: "Graduate holding a bouquet" },
        { src: "photography/portfolio/graduation-3.jpg", alt: "Graduate portrait with corsage" },
        { src: "photography/portfolio/graduation-4.jpg", alt: "Graduate posing by a gold backdrop" },
        { src: "photography/portfolio/graduation-5.jpg", alt: "Guest arriving at a graduation celebration" },
      ],
    },
    {
      id: "events", icon: "PartyPopper", title: "Events", subtitle: "Birthdays, corporate, community, private gatherings.",
      headline: "Highlights + candids, done right",
      text: "Coverage that feels real: people, details, décor, and key moments. Clean editing, consistent color, and fast turnaround.",
      bookingType: "Events (birthday, corporate, community)",
      images: [
        { src: "photography/portfolio/events-1.jpg", alt: "Guests dancing at a celebration" },
        { src: "photography/portfolio/events-2.jpg", alt: "Large family group photo at an event" },
        { src: "photography/portfolio/events-3.jpg", alt: "Friends posing together at a party" },
        { src: "photography/portfolio/events-4.jpg", alt: "Guests enjoying a private party" },
        { src: "photography/portfolio/events-5.jpg", alt: "Family walking outdoors with a balloon" },
      ],
    },
    {
      id: "natural", icon: "Star", title: "Natural", subtitle: "Stylish portraits, group shots, and candid highlights.",
      headline: "Cinematic vibe, clean edits",
      text: "Sharp portraits, flattering angles, and clean color with a modern finish. Perfect for sharing and printing.",
      bookingType: "Nature / Travel / Lifestyle",
      images: [
        { src: "photography/portfolio/natural-1.jpg", alt: "Lake Como mountain landscape" },
        { src: "photography/portfolio/natural-2.jpg", alt: "Photographer crouching under trees by the lake" },
        { src: "photography/portfolio/natural-3.jpg", alt: "Sky and lake view" },
        { src: "photography/portfolio/natural-4.jpg", alt: "Lakeside village below green mountains" },
        { src: "photography/portfolio/natural-5.jpg", alt: "Lauterbrunnen valley in Switzerland" },
      ],
    },
  ],

  packagesIntro: {
    title: "Photography Packages",
    text: "Simple options for portraits, family sessions, birthdays, and small events. Final quote may vary by location, timing, and coverage needs.",
  },
  packages: [
    {
      tier: "Starter",
      name: "Mini Session",
      price: "$150",
      text: "Best for quick portraits, small families, and simple outdoor memories.",
      features: ["30-minute session", "1 nearby outdoor location", "10 edited photos", "Online gallery delivery", "5–7 day turnaround"],
    },
    {
      tier: "Most Popular",
      name: "Signature Session",
      price: "$295",
      text: "A balanced package with guided posing, candid moments, and social-ready delivery.",
      features: ["1-hour session", "1 location", "25 edited photos", "Family + individual portraits", "Short Instagram reel"],
      featured: true,
    },
    {
      tier: "Premium",
      name: "Storytelling Session",
      price: "$550",
      text: "For families or clients who want more coverage, variety, and a cinematic feel.",
      features: ["Up to 2 hours", "Multiple nearby spots", "40+ edited photos", "Highlight reel included", "Priority editing"],
    },
  ],

  steps: [
    { title: "Request", text: "Send your session type, date, location and what you'd like covered." },
    { title: "Discuss", text: "We confirm availability, talk through your plans and share pricing." },
    { title: "Confirm", text: "Your date is reserved once details and booking terms are agreed." }, // DRAFT
    { title: "Shoot & deliver", text: "We capture the day, then deliver edited images and video." }, // DRAFT
  ],

  deliverables: [
    // DRAFT: replace with what's actually included
    { icon: "Image", title: "Edited high-resolution images" },
    { icon: "Globe", title: "Private online gallery" },
    { icon: "Video", title: "Video & Reels on request" },
    { icon: "Clock", title: "Clear delivery timeline" },
  ],

  serviceArea: "New Jersey · New York · Connecticut.",
  serviceNote: "Out-of-state projects arranged by scope, travel requirements and availability. Booking requests are confirmed after we discuss availability, coverage and pricing.",

  sessionTypes: ["Wedding", "Portraits / Headshots / Personal branding", "Kids & Birthdays", "Graduation", "Events (birthday, corporate, community)", "Nature / Travel / Lifestyle", "Business / Product / Social content", "Video / Reels", "Other"],
  coverageOptions: ["1–2 hours", "Half day (3–4 hours)", "Full day (6+ hours)", "Not sure yet"],

  faqs: [
    // DRAFT
    { q: "How do I book a session?", a: "Send a request with your session type, date, location and coverage. We'll confirm availability and pricing before anything is booked." },
    { q: "Where are you based and do you travel?", a: "We're based in Jersey City and cover New Jersey, New York and Connecticut. Out-of-state projects are arranged by scope, travel requirements and availability." },
    { q: "When will I receive my photos?", a: "Delivery times depend on the size of the project. We'll give you a clear timeline when we confirm your booking." },
    { q: "Do you offer video as well?", a: "Yes. Video and Reels can be added to most sessions, or booked on their own for business and social content." },
  ],
};

export const studioNav = [
  { label: "Sessions", href: "#sessions" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Packages", href: "#packages" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ", href: "#studio-faq" },
  { label: "Store", page: "store", newTab: true, badge: "Soon" },
];
