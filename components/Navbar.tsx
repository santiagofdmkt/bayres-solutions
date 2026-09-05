"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { site, waLink } from "../lib/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#faq", label: "Preguntas frecuentes" },
  { href: "#galeria", label: "Galería" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const [scrolleado, setScrolleado] = useState(false);

  // La barra se vuelve sólida al bajar
  useEffect(() => {
    const onScroll = () => setScrolleado(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del fondo cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = abierto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [abierto]);

  const whatsapp = waLink("Hola! Quiero consultar por un servicio de control de plagas.");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolleado
          ? "bg-negro/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-negro border-b border-transparent"
      }`}
    >
              <div className="max-w-6xl mx-auto px-6 h-[84px] lg:h-[112px] flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="#" aria-label={`${site.nombre} - inicio`} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt={site.nombre}
                     width={220}
            height={88}
            priority
                      className="h-[72px] lg:h-[100px] w-auto"
          />
        </Link>

        {/* Links desktop */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-white/80 hover:text-white text-sm font-medium transition-colors py-1"
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-verde-claro scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </Link>
          ))}
        </nav>

        {/* Acciones */}
        <div className="flex items-center gap-3">
          <a href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-verde-medio hover:bg-verde-claro hover:text-negro text-white px-4 py-2.5 rounded font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-verde-claro/30"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">{site.telefonoVisible}</span>
          </a>

          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={abierto}
            className="lg:hidden w-11 h-11 rounded-md text-white hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            {abierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú mobile */}
      <AnimatePresence>
        {abierto && (
          <motion.nav
            key="menu-mobile"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute inset-x-0 top-full bg-negro/95 backdrop-blur-md border-b border-white/10 shadow-2xl"
          >
            <ul className="px-6 py-4 flex flex-col">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setAbierto(false)}
                    className="flex items-center gap-3 py-3.5 text-white/85 hover:text-verde-claro text-base font-medium border-b border-white/5 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-verde-claro" />
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <li className="pt-4">
                <a href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setAbierto(false)}
                  className="flex items-center justify-center gap-2 bg-verde-medio text-white py-3 rounded font-display font-bold uppercase tracking-widest text-sm"
                >
                  <MessageCircle size={18} />
                  Escribinos por WhatsApp
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
