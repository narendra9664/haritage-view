import Image from "next/image";
import { Quote } from "lucide-react";
import { Bubbles, Stars } from "@/components/ui/bits";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { photos } from "@/lib/images";

// TODO: replace with a real patient review, used with the patient's consent.
const testimonial = {
  quote:
    "Apple Hospital gave me the confidence to pursue parenthood. The staff was incredibly supportive, the facilities were spotless, and the maternity care was exceptional.",
  author: "Ayesha R.",
  role: "Maternity Patient",
};

export function Testimonial() {
  return (
    <section id="stories" aria-labelledby="stories-title" className="relative overflow-hidden bg-white pt-20 lg:pt-28">
      <div aria-hidden className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_right,black,transparent_60%)]" />
      <Bubbles />
      {/* Desktop: heading and quote card on the left, the photo spans both rows on
          the right and overlaps the card. Phones: heading, card, photo. */}
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_24rem] lg:gap-x-6">
        <div className="lg:col-start-1">
          <SectionHeading
            id="stories-title"
            badge="Patient Stories"
            title="What Our Patients Say About"
            highlight="Apple Hospital"
            stacked
            align="left"
          />
        </div>

        <Reveal className="lg:col-start-1 lg:mb-14">
          <figure className="relative rounded-[2rem] bg-mint p-7 sm:p-10 lg:mr-[-9rem] lg:pr-44">
            <Quote aria-hidden className="h-10 w-10 -scale-x-100 fill-accent text-accent" />
            <blockquote className="mt-4 text-base leading-relaxed text-ink sm:text-lg">
              <p>{testimonial.quote}</p>
            </blockquote>
            <figcaption className="mt-7 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-semibold text-ink">{testimonial.author}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
              <Stars />
            </figcaption>
          </figure>
        </Reveal>

        <Reveal
          delay={0.15}
          className="relative z-10 mx-auto w-full max-w-[17rem] sm:max-w-xs lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:max-w-none lg:self-end"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-linear-to-b from-mint to-accent/30 ring-1 ring-accent/15">
            <Image
              src={photos.testimonial.src}
              alt={photos.testimonial.alt}
              fill
              sizes="(min-width: 1024px) 384px, 320px"
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
