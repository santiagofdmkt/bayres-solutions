"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Plus, HelpCircle, Clock } from "lucide-react";
import { site, waLink } from "../lib/site";

const faqs = [
  {
    q: "¿Los productos son seguros para mascotas y niños?",
    a: "Sí. Trabajamos con productos habilitados por SENASA, seguros para el hogar una vez que el tratamiento seca.",
  },
  {
    q: "¿En cuánto tiempo se ven los resultados?",
    a: "Generalmente entre 24 y 72 horas. En casos severos puede requerir una segunda aplicación.",
  },
  {
    q: "¿Hacen visitas de diagnóstico antes del servicio?",
    a: "Sí, coordinamos una visita previa sin costo para evaluar el tipo y nivel de infestación.",
  },
  {
    q: "¿Trabajan con consorcios y empresas?",
    a: "Sí, ofrecemos planes de mantenimiento periódico. Emitimos remito y certificado de servicio.",
  },
  {
    q: "¿Qué pasa si el problema vuelve después del tratamiento?",
    a: "Contamos con garantía de servicio. Si el problema persiste, volvemos sin costo adicional.",
  },
  {
    q: "¿Trabajan los fines de semana?",
    a: "Sí, atendemos urgencias los 7 días de la semana.",
  },
];

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(0);
  const reducido = useReducedMotion();

  const lista = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.07 } },
  };
  const fila = {
    oculto: { opacity: 0, y: reducido ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="faq"
      className="relative py-20 px-6 bg-white overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(rgba(45,158,63,0.14) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
      }}
    >
      {/* Tinte verde suave arriba a la izquierda */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-verde-claro/20 blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          {/* Columna izquierda */}
          <div>
            <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
              Dudas frecuentes
            </div>
            <h2 className="font-display font-black text-negro uppercase text-5xl leading-none mb-6">
              Preguntas <span className="text-verde-medio">frecuentes</span>
            </h2>
            <p className="text-gris-medio text-sm leading-relaxed mb-8">
              Encontrá las respuestas más habituales o escribinos directamente.
            </p>

            {/* Tarjeta de contacto rápido */}
            <div className="relative overflow-hidden bg-gradient-to-br from-verde-oscuro to-[#0f3d1f] rounded-lg p-6 text-white shadow-xl shadow-verde-oscuro/30">
              {/* Ícono gigante decorativo */}
              <HelpCircle
                aria-hidden="true"
                size={220}
                strokeWidth={1}
                className="absolute -right-12 -bottom-12 text-verde-claro/10 pointer-events-none"
              />
              <div className="relative flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <HelpCircle size={20} className="text-verde-claro" />
                </div>
                <div className="font-display font-bold uppercase tracking-wide text-lg leading-tight">
                  ¿No encontrás tu respuesta?
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5">
                Escribinos por WhatsApp y te respondemos en el día. Sin
                compromiso y sin cargo.
              </p>
              <a href={waLink("Hola! Tengo una consulta sobre sus servicios.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-verde-claro hover:bg-white text-negro px-5 py-3 rounded font-display font-bold uppercase tracking-widest text-xs transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                <MessageCircle size={16} />
                Hacer una consulta
              </a>
              <div className="flex items-center gap-2 text-white/50 text-xs mt-4">
                <Clock size={14} />
                Urgencias los 7 días · {site.telefonoVisible}
              </div>
            </div>
          </div>

          {/* Acordeón */}
          <motion.div
            variants={lista}
            initial="oculto"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-3"
          >
            {faqs.map((faq, i) => {
              const activo = abierto === i;
              return (
                <motion.div
                  key={faq.q}
                  variants={fila}
                  className={`rounded-lg border transition-all duration-300 ${
                    activo
                      ? "border-verde-medio bg-verde-claro/5 shadow-md shadow-verde-medio/10"
                      : "border-gray-200 bg-white hover:border-verde-medio/50 hover:shadow-sm"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setAbierto(activo ? null : i)}
                    aria-expanded={activo}
                                 className="group w-full flex items-center gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-verde-claro rounded-lg"
                  >
                    <span
                                       className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-sm transition-all duration-300 group-hover:scale-110 ${
                        activo
                          ? "bg-verde-medio text-white scale-110"
                          : "bg-verde-medio/10 text-verde-oscuro group-hover:bg-verde-medio group-hover:text-white"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`flex-1 text-[15px] font-bold leading-snug transition-colors ${
                        activo ? "text-verde-oscuro" : "text-negro"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        activo
                          ? "bg-verde-medio border-verde-medio text-white rotate-45"
                          : "border-gray-300 text-verde-medio"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {activo && (
                      <motion.div
                        key="respuesta"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reducido ? 0 : 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-[68px] text-sm text-gris-medio leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
