import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { site } from "@/content/site";
import "./globals.css";

// Self-hosted variable fonts (latin subset) so the build never depends on
// reaching Google Fonts from the build server.
const manrope = localFont({
  src: "../fonts/Manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/Inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://xecato.com"),
  title: {
    default: "XECATO | Architectural, Façade & Landscape Lighting",
    template: "%s | XECATO",
  },
  description:
    "XECATO is a UAE-based lighting solutions company shaping how architecture is seen after dark, across the GCC.",
  openGraph: {
    title: "XECATO | Architectural, Façade & Landscape Lighting",
    description:
      "Architectural, façade and landscape lighting for projects across the GCC.",
    images: ["/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // `lang` and `dir` come from the content locale so an Arabic version only
  // needs a second dictionary; every layout uses logical (start/end) spacing.
  return (
    <html
      lang={site.locale.lang}
      dir={site.locale.dir}
      className={`${manrope.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
