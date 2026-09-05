"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

// Fotos en public/galeria/. Reemplazar por trabajos reales con el mismo nombre.
const fotos = [
  { src: "/galeria/galeria-1.jpeg", titulo: "Trabajo en local comercial", bg: "bg-[#163a24]" },
  { src: "/galeria/galeria-2.jpeg", titulo: "Equipo en acción", bg: "bg-[#2a4a2a]" },
  { src: "/galeria/galeria-3.webp", titulo: "Tratamiento residencial", bg: "bg-verde-oscuro" },
  { src: "/galeria/galeria-4.jpeg", titulo: "Desratización", bg: "bg-[#0f3d1f]" },
  { src: "/galeria/galeria-5.png", titulo: "Desinfección", bg: "bg-[#1a4a2a]" },
   { src: "/galeria/galeria-6.jpeg", titulo: "Limpieza en fábricas", bg: "bg-[#2d6a30]" },
];

export default function Galeria() {
  const [abierta, setAbierta] = useState<number | null>(null);
  const reducido = useReducedMotion();

  const anterior = () =>
    setAbierta((i) => (i === null ? null : (i - 1 + fotos.length) % fotos.length));
  const siguiente = () =>
    setAbierta((i) => (i === null ? null : (i + 1) % fotos.length));

  // Teclado: Esc cierra, flechas navegan
  useEffect(() => {
    if (abierta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") siguiente();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [abierta]);

  const lista = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.08 } },
  };
  const item = {
    oculto: { opacity: 0, scale: reducido ? 1 : 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="galeria" className="py-20 px-6 bg-gris-claro">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
            Nuestro trabajo
          </div>
          <h2 className="font-display font-black text-negro uppercase text-5xl leading-none">
            Galería
          </h2>
        </div>

        {/* Grilla */}
        <motion.div
          variants={lista}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {fotos.map((f, i) => (
            <motion.button
              key={f.src}
              variants={item}
              type="button"
              onClick={() => setAbierta(i)}
              aria-label={`Ver ${f.titulo}`}
              className={`group relative aspect-[4/3] rounded-lg overflow-hidden ${f.bg} shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-claro transition-shadow`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${f.src})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-negro/80 via-negro/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="absolute inset-x-0 bottom-0 p-4 flex items-end justify-between translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="font-display font-bold text-white uppercase tracking-wide text-lg text-left">
                  {f.titulo}
                </span>
                <span className="w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn size={18} />
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {abierta !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-negro/95 flex items-center justify-center p-4"
            onClick={() => setAbierta(null)}
            role="dialog"
            aria-modal="true"
            aria-label={fotos[abierta].titulo}
          >
            <button
              type="button"
              onClick={() => setAbierta(null)}
              aria-label="Cerrar"
              className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); anterior(); }}
              aria-label="Anterior"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-verde-medio text-white flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); siguiente(); }}
              aria-label="Siguiente"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-verde-medio text-white flex items-center justify-center transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            <motion.figure
              key={abierta}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={fotos[abierta].src}
                alt={fotos[abierta].titulo}
                className={`w-full max-h-[80vh] object-contain rounded-lg ${fotos[abierta].bg}`}
              />
              <figcaption className="text-center text-white/80 text-sm mt-3">
                {fotos[abierta].titulo}
                <span className="text-white/40"> · {abierta + 1} / {fotos.length}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
