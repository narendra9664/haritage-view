import { CtaBanner } from "@/components/CtaBanner";
import { Doctors } from "@/components/Doctors";
import { FeaturesBar } from "@/components/FeaturesBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Specialties } from "@/components/Specialties";
import { Testimonial } from "@/components/Testimonial";
import { Treatments } from "@/components/Treatments";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { site } from "@/lib/site";

// Structured data so search engines can show the hospital's address and hours.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: site.name,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.street}, ${site.address.locality}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  medicalSpecialty: ["Gynecologic", "Obstetric", "Pediatric"],
  hasMap: site.mapsUrl,
  ...(site.phone.href && { telephone: site.phone.display }),
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <FeaturesBar />
        <WhyChooseUs />
        <Specialties />
        <Treatments />
        <Doctors />
        <Testimonial />
        <CtaBanner />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
