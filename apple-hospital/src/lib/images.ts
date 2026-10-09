// Every photo on the site, in one place. All are from Unsplash (free to use
// under the Unsplash License) and are served straight from Unsplash's CDN by
// the loader in ./image-loader.ts. Swap any entry for a real hospital photo by
// pointing `src` at a file in /public, e.g. "/photos/reception.jpg".

export type Photo = {
  src: string;
  alt: string;
  /** Unsplash page, kept for attribution and for re-checking the licence. */
  source: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}`;

export const photos = {
  heroLeft: {
    src: unsplash("photo-1623854767648-e7bb8009f0db"),
    alt: "Smiling doctor in a white coat with a stethoscope",
    source: "https://unsplash.com/photos/lnlSIsiSjjc",
  },
  heroCenter: {
    src: unsplash("photo-1642975967602-653d378f3b5b"),
    alt: "Doctor in a white coat and tie",
    source: "https://unsplash.com/photos/-3HE32KRqJs",
  },
  heroRight: {
    src: unsplash("photo-1638202993928-7267aad84c31"),
    alt: "Smiling medical professional holding a stethoscope",
    source: "https://unsplash.com/photos/tE7_jvK-_YU",
  },
  ivf: {
    src: unsplash("photo-1511174511562-5f7f18b874f8"),
    alt: "Specialist examining a sample under a microscope",
    source: "https://unsplash.com/photos/9vnACvX2748",
  },
  gynecology: {
    src: unsplash("photo-1632053651899-3389100579fb"),
    alt: "Obstetrician consulting a pregnant patient",
    source: "https://unsplash.com/photos/Nqak6ZKyOho",
  },
  pediatric: {
    src: unsplash("photo-1676313030076-4ac0b37050fd"),
    alt: "Doctor examining a child with a stethoscope",
    source: "https://unsplash.com/photos/kinSYGfBSzc",
  },
  fertility: {
    src: unsplash("photo-1614308460927-5024ba2e1dcb"),
    alt: "Laboratory microscope",
    source: "https://unsplash.com/photos/Rl9bIWKCVF0",
  },
  highRiskPregnancy: {
    src: unsplash("photo-1654931800911-7a9cfb3b7c17"),
    alt: "Expectant mother holding an ultrasound scan",
    source: "https://unsplash.com/photos/87ev1NvhDsU",
  },
  familyPlanning: {
    src: unsplash("photo-1528218635780-5952720c9729"),
    alt: "Couple holding their baby's ultrasound photo",
    source: "https://unsplash.com/photos/IE8KfewAp-w",
  },
  newbornCare: {
    src: unsplash("photo-1580301762395-21ce84d00bc6"),
    alt: "Newborn baby's feet under a soft blanket",
    source: "https://unsplash.com/photos/OUYg0Q3ec-Y",
  },
  // Doctor cards deliberately avoid faces: stock faces next to real
  // doctors' names would mislead patients. Replace with real portraits.
  drGynecologist: {
    src: unsplash("photo-1634856435947-d790b5c3a8eb"),
    alt: "Ultrasound print of a baby",
    source: "https://unsplash.com/photos/P4_ET-WHhBY",
  },
  drPediatrician: {
    src: unsplash("photo-1655313719493-16ebe4906441"),
    alt: "Stethoscope on a pastel blue background",
    source: "https://unsplash.com/photos/g3PsF4_y7ZY",
  },
  ivfTeam: {
    src: unsplash("photo-1602052577122-f73b9710adba"),
    alt: "Laboratory workbench with a microscope",
    source: "https://unsplash.com/photos/_9xRHrMOjeg",
  },
  nursingTeam: {
    src: unsplash("photo-1763070282903-cbe9922ab7ab"),
    alt: "Stethoscope on a white background",
    source: "https://unsplash.com/photos/XBX9DepYQYQ",
  },
  testimonial: {
    src: unsplash("photo-1678695972687-033fa0bdbac9"),
    alt: "Doctor in a white coat with a stethoscope",
    source: "https://unsplash.com/photos/TPT4pevJEmQ",
  },
  motherAndBaby: {
    src: unsplash("photo-1780329941109-fbe697219f0e"),
    alt: "Mother holding her smiling baby",
    source: "https://unsplash.com/photos/iZYIX-fRNG0",
  },
} satisfies Record<string, Photo>;
