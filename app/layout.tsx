import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

const URL_SITIO = site.url;
const TITULO = "Bayres Solutions | Control de Plagas en CABA y GBA";
const DESCRIPCION =
  "Desinsectación, desratización, desinfección y limpieza de tanques en Capital Federal y Gran Buenos Aires. Productos habilitados por SENASA. Urgencias los 7 días.";

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITIO),
  title: {
    default: TITULO,
    template: "%s | Bayres Solutions",
  },
  description: DESCRIPCION,
  keywords: [
    "control de plagas",
    "fumigación",
    "desinsectación",
    "desratización",
    "desinfección",
    "limpieza de tanques",
    "CABA",
    "Gran Buenos Aires",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: URL_SITIO,
    siteName: "Bayres Solutions",
    title: TITULO,
    description: DESCRIPCION,
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bayres Solutions - Control de plagas en CABA y GBA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Datos estructurados para Google (schema.org LocalBusiness).
// Todo sale de site.ts: si cambia un dato ahí, cambia acá.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.nombre,
  legalName: "Bayres Solutions SRL",
  description: DESCRIPCION,
  url: site.url,
  logo: `${site.url}/logo.png`,
  image: `${site.url}/og.jpg`,
  telephone: `+${site.telefono}`,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.direccion,
    addressLocality: site.ciudad,
    postalCode: site.codigoPostal,
    addressCountry: "AR",
  },
  areaServed: [
    { "@type": "City", name: "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", name: "Gran Buenos Aires" },
  ],
  openingHoursSpecification: site.horario.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.dias,
    opens: h.abre,
    closes: h.cierra,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de control de plagas",
    itemListElement: site.servicios.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.nombre,
        description: s.descripcion,
      },
    })),
  },
  sameAs: site.instagram ? [`https://instagram.com/${site.instagram}`] : [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}