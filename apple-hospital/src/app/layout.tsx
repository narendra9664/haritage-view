import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} | IVF, Maternity & Gynecology in Sikar`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
  // Pitch preview: keep search engines away until the hospital approves the
  // site and the placeholder details are replaced. Delete this to go live.
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#0a3a2a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body className="font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
