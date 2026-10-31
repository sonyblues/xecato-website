import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { site } from "@/content/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
