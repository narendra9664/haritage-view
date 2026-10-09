// Single source of truth for hospital details shown across the site.
// Anything marked TODO must be confirmed with the hospital before launch.

export const site = {
  name: "Apple Hospital & Test Tube Baby Center",
  shortName: "Apple Hospital",
  tagline: "Specialized maternity, fertility, and gynecology hospital.",
  description:
    "Apple Hospital & Test Tube Baby Center is a specialized maternity, fertility, and gynecology hospital in Devipura, Sikar, Rajasthan.",
  address: {
    street: "Near Masjid, Sekhapura Mohalla / Sakpura",
    locality: "Devipura",
    city: "Sikar",
    region: "Rajasthan",
    postalCode: "332001",
    country: "IN",
  },
  // TODO: add the hospital's real number. While `href` is null, every
  // "Book Appointment" button scrolls to the contact section instead of dialling.
  phone: { display: "+91 XXXXX XXXXX", href: null as string | null },
  hours: "Open 24 Hours",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Apple+Hospital+and+Test+Tube+Baby+Centre%2C+Devipura%2C+Sikar",
  // From the Google Business Profile listing, as seen in October 2026.
  googleRating: { value: "4.9", count: "1.1K+" },
};

export const bookingHref = site.phone.href ?? "#contact";

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Our Doctors", href: "#doctors" },
  { label: "Patient Stories", href: "#stories" },
  { label: "Contact", href: "#contact" },
];

export const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Specialties", href: "#specialties" },
  { label: "Doctors", href: "#doctors" },
  { label: "Contact", href: "#contact" },
];

// TODO: replace "#" with the hospital's real profile URLs.
export const socials = [
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
] as const;

// TODO: confirm these figures with the hospital; they are the client brief's numbers.
export const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10k+", label: "Safe Deliveries" },
  { value: "4.9/5", label: "Patient Rating" },
  { value: "24/7", label: "Emergency Care" },
];

export const happyPatients = "50K+";
