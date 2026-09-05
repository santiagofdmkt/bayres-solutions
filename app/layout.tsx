import type { Metadata } from "next";
import "./globals.css";

const URL_SITIO = "https://bayres-solutions.vercel.app";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}