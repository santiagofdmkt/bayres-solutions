import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayres Solutions | Control de Plagas en CABA y GBA",
  description:
    "Servicio profesional de desinsectación, desratización, desinfección y limpieza de tanques en Capital Federal y Gran Buenos Aires.",
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