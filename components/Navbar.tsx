"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-negro sticky top-0 z-50">
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
        <div className="hidden md:flex items-center gap-8">
          <Link href="#servicios" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            Servicios
          </Link>
          <Link href="#cobertura" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            Cobertura
          </Link>
          <Link href="#galeria" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            Galería
          </Link>
          <Link href="#faq" className="text-white/60 hover:text-white text-sm font-medium transition-colors">
            Preguntas frecuentes
          </Link>
          <Link
            href="#contacto"
            className="bg-verde-medio hover:bg-verde-oscuro text-white px-5 py-2 rounded text-sm font-semibold transition-colors"
          >
            Contacto
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-negro border-t border-white/10 px-6 py-4 flex flex-col gap-4">
          <Link href="#servicios" className="text-white/70 text-sm" onClick={() => setMenuOpen(false)}>Servicios</Link>
          <Link href="#cobertura" className="text-white/70 text-sm" onClick={() => setMenuOpen(false)}>Cobertura</Link>
          <Link href="#galeria" className="text-white/70 text-sm" onClick={() => setMenuOpen(false)}>Galería</Link>
          <Link href="#faq" className="text-white/70 text-sm" onClick={() => setMenuOpen(false)}>Preguntas frecuentes</Link>
          <Link href="#contacto" className="bg-verde-medio text-white px-4 py-2 rounded text-sm font-semibold text-center" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  );
}