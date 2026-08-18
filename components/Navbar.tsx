"use client";
import { useState } from "react";
import Link from "next/link";
import { site, waLink } from "../lib/site";

const mensajeInicial =
  "Hola! Quiero consultar por un servicio de control de plagas.";

function IconoWhatsApp({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.06 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23z" />
    </svg>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-negro sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-full border-2 border-verde-medio" />
            <div className="absolute inset-[6px] rounded-full border border-verde-claro" />
            <div className="absolute inset-[12px] rounded-full bg-verde-claro opacity-40" />
          </div>
          <div>
            <div className="font-display font-black text-white text-xl tracking-widest leading-none">
              BAYRES
            </div>
            <div className="text-[9px] text-white/40 tracking-[3px] leading-none">
              SOLUTIONS
            </div>
          </div>
        </Link>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="#servicios"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Servicios
          </Link>
          <Link
            href="#cobertura"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Cobertura
          </Link>
          <Link
            href="#galeria"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Galería
          </Link>
          <Link
            href="#faq"
            className="text-white/60 hover:text-white text-sm font-medium transition-colors"
          >
            Preguntas frecuentes
          </Link>
          <a
            href={waLink(mensajeInicial)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-verde-medio hover:bg-verde-oscuro text-white px-4 py-2 rounded text-sm font-semibold transition-colors flex items-center gap-2"
          >
            <IconoWhatsApp className="w-4 h-4" />
            {site.telefonoVisible}
          </a>
        </div>

        {/* Mobile: WhatsApp siempre visible + hamburguesa */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={waLink(mensajeInicial)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="bg-verde-medio hover:bg-verde-oscuro text-white p-2 rounded transition-colors"
          >
            <IconoWhatsApp className="w-5 h-5" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            className="text-white flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-negro border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link
            href="#servicios"
            className="text-white/70 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="#cobertura"
            className="text-white/70 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Cobertura
          </Link>
          <Link
            href="#galeria"
            className="text-white/70 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Galería
          </Link>
          <Link
            href="#faq"
            className="text-white/70 text-sm"
            onClick={() => setMenuOpen(false)}
          >
            Preguntas frecuentes
          </Link>
          <Link
            href="#contacto"
            className="bg-verde-medio text-white px-4 py-2 rounded text-sm font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
}
