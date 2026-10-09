import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { photos } from "@/lib/images";

export function CtaBanner() {
  return (
    <section aria-labelledby="cta-title" className="relative bg-white px-4 pt-24 pb-20 sm:px-6 lg:pt-32 lg:pb-28">
      <div aria-hidden className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_left,black,transparent_60%)]" />
      <Reveal className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-6 rounded-[2.5rem] bg-mint lg:grid-cols-[auto_1fr] lg:gap-16 lg:rounded-full">
          <div className="relative mx-auto -mt-16 aspect-[4/5] w-60 overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgba(10,58,42,0.5)] ring-8 ring-white sm:w-72 lg:-mt-24 lg:-mb-10 lg:ml-16 lg:w-80">
            <Image
              src={photos.motherAndBaby.src}
              alt={photos.motherAndBaby.alt}
              fill
              sizes="(min-width: 1024px) 320px, 288px"
              className="object-cover"
            />
          </div>
          <div className="px-6 pb-12 text-center sm:px-12 lg:py-14 lg:pr-20 lg:pl-0 lg:text-left">
            <h2 id="cta-title" className="text-2xl leading-snug font-semibold tracking-tight text-ink sm:text-3xl lg:text-[2.2rem]">
              Experience World-Class <br className="hidden sm:block" />
              Care in <span className="text-accent-ink">Sikar</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Join thousands of families who trust us for their maternity, fertility, and pediatric needs.
            </p>
            <ButtonLink href="#contact" variant="dark" arrow className="mt-7">
              Contact Us Today
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
