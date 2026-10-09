# Apple Hospital & Test Tube Baby Center: website

A one-page, responsive marketing site for Apple Hospital & Test Tube Baby Center, Devipura, Sikar.
Its layout follows the "Relive Academy" reference design.

**Stack:** Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, Lucide React.

This app lives in its own folder so the travel-guide site at the repository root keeps working.

## Run it

```bash
cd apple-hospital
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (also type-checks)
npm run lint
```

To deploy on Vercel, import the repository and set **Root Directory** to `apple-hospital`.

## Where things live

| What | File |
| --- | --- |
| Hospital details: address, phone, hours, stats, nav links, socials | `src/lib/site.ts` |
| Every photo (URL, alt text, source page) | `src/lib/images.ts` |
| Colours, font, animations | `src/app/globals.css` (`@theme`) |
| Page sections, in order | `src/app/page.tsx` → `src/components/*` |

Photos come from Unsplash's CDN through `src/lib/image-loader.ts`, so no image server is needed.
To use a real photo, drop it in `public/photos/` and point that entry's `src` at `/photos/<file>`.

## Before going live

These are placeholders or unverified claims. Confirm each one with the hospital:

- [ ] **Phone number.** Set `site.phone` in `site.ts`. Every "Book Appointment" button then dials it instead of scrolling to the footer.
- [ ] **Social links.** They are `#` in `site.ts`.
- [ ] **Doctor photos.** The doctor cards show objects, not faces, on purpose: a stock face next to a real doctor's name misleads patients. Use real portraits.
- [ ] **Hero and testimonial photos** are stock, not hospital staff. Real photos of the team and building will convert better.
- [ ] **Stats:** 50K+ patients, 15+ years, 10k+ deliveries. These are the brief's numbers and need confirming. The 4.9 rating and 1.1K+ reviews match the hospital's Google listing as of October 2026.
- [ ] **Testimonial ("Ayesha R.").** Replace it with a real review, used with the patient's consent.
- [ ] **Team cards.** "IVF & Embryology Team" and "Nursing & Maternity Staff" are placeholders.
- [ ] **Logo.** The apple mark is a stand-in for the hospital's own logo.
- [ ] **"See All Services" and "View All Treatments"** jump to the contact section until dedicated pages exist.
- [ ] Have the copy checked against Indian rules on medical advertising and fertility clinics.
