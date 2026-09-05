"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "../lib/site";

const zonas = [
  {
    nombre: "CABA",
    sub: "Todos los barrios de Capital Federal",
  },
  {
    nombre: "GBA Norte",
    sub: "San Isidro, Vicente López, Tigre, San Fernando y más",
  },
  {
    nombre: "GBA Sur",
    sub: "Lanús, Quilmes, Avellaneda, Lomas de Zamora y más",
  },
  {
    nombre: "GBA Oeste",
    sub: "Morón, Merlo, La Matanza, Ituzaingó y más",
  },
];

export default function Cobertura() {
  const reducido = useReducedMotion();

  const lista = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.08 } },
  };
  const fila = {
    oculto: { opacity: 0, x: reducido ? 0 : 24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
     <section
      id="cobertura"
      className="relative py-20 px-6 bg-gradient-to-br from-gris-claro via-[#e6f3e7] to-[#cfe9d2] overflow-hidden"
    >
      {/* Manchas verdes difusas */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-verde-claro/25 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-verde-medio/10 blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
            Dónde trabajamos
          </div>
          <h2 className="font-display font-black text-negro uppercase text-5xl leading-none">
            Zona de <span className="text-verde-medio">cobertura</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Mapa embed */}
          <div>
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-md h-[380px]">
              <iframe
                title={`Ubicación de ${site.nombre}`}
                src="https://maps.google.com/maps?q=Cuba+3489,+Ciudad+Aut%C3%B3noma+de+Buenos+Aires&z=11&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="text-gris-medio text-xs mt-3">
              Base operativa: {site.direccion}, CP: {site.codigoPostal},{" "}
              {site.ciudad}, {site.pais}.
            </p>
          </div>

          {/* Zonas */}
          <div>
            <p className="text-gris-medio text-sm leading-relaxed mb-6">
              Operamos en toda la Ciudad Autónoma de Buenos Aires y el Gran
              Buenos Aires, con equipos distribuidos en cada zona para
              garantizar una respuesta rápida.
            </p>
            <motion.div
              variants={lista}
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-3"
            >
              {zonas.map((z) => (
                <motion.div
                  key={z.nombre}
                  variants={fila}
                  className="group flex items-center gap-4 bg-white rounded-md px-4 py-3 border border-gray-100 border-l-4 border-l-verde-medio shadow-sm hover:shadow-lg hover:border-l-verde-claro hover:translate-x-2 hover:bg-verde-claro/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-verde-medio flex-shrink-0 transition-transform duration-300 group-hover:scale-150 group-hover:bg-verde-claro" />
                  <div>
                    <div className="font-semibold text-negro text-sm group-hover:text-verde-oscuro transition-colors">
                      {z.nombre}
                    </div>
                    <div className="text-gris-medio text-xs">{z.sub}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
