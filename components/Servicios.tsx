"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { waLink } from "../lib/site";

const servicios = [
  {
    imagen: "/servicios/desinsectacion.png",
    tag: "Insectos",
    nombre: "Desinsectación",
    desc: "Tratamientos seguros y eficaces contra cucarachas, mosquitos, hormigas y otros insectos. Ideal para viviendas, edificios, comercios y locales gastronómicos.",
    bg: "bg-verde-oscuro",
  },
  {
    imagen: "/servicios/desratizacion.png",
    tag: "Roedores",
    nombre: "Desratización",
    desc: "Control profesional de roedores con métodos seguros y autorizados. Recomendado para viviendas, depósitos, PH, consorcios y negocios con tránsito diario.",
    bg: "bg-[#1a4a2a]",
  },
  {
    imagen: "/servicios/desinfeccion.png",
    tag: "Higiene ambiental",
    nombre: "Desinfección",
    desc: "Protocolos de higiene ambiental para eliminar bacterias, hongos y virus. Ideal para oficinas, locales, consultorios y edificios.",
    bg: "bg-[#0f3d1f]",
  },
  {
    imagen: "/servicios/tanques.png",
    tag: "Tanques",
    nombre: "Limpieza de tanques de agua",
    desc: "Limpieza completa con desinfección aprobada. Remoción de sedimentos, hongos y microorganismos. Ideal para edificios y comercios.",
    bg: "bg-[#163a24]",
  },
];

export default function Servicios() {
  const reducido = useReducedMotion();

  const lista = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.1 } },
  };
  const tarjeta = {
    oculto: { opacity: 0, y: reducido ? 0 : 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
       <section id="servicios" className="relative py-20 px-6 bg-gris-claro overflow-hidden">
      {/* Manchas verdes difusas de fondo */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-verde-claro/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-verde-medio/10 blur-3xl pointer-events-none"
      />
      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
            Lo que hacemos
          </div>
          <h2 className="font-display font-black text-negro uppercase text-5xl leading-none">
            Nuestros <span className="text-verde-medio">servicios</span>
          </h2>
        </div>

        {/* Grid con entrada escalonada al hacer scroll */}
        <motion.div
          variants={lista}
          initial="oculto"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {servicios.map((s) => (
            <motion.article
              key={s.nombre}
              variants={tarjeta}
              className="group flex flex-col bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Panel verde con el ícono sobre un círculo blanco */}
              <div className={`${s.bg} relative h-44 flex items-center justify-center overflow-hidden`}>
                {/* Brillo suave detrás del círculo */}
                <div
                  aria-hidden="true"
                  className="absolute w-52 h-52 rounded-full bg-verde-claro/20 blur-2xl group-hover:bg-verde-claro/35 transition-colors duration-500"
                />
                <div className="relative w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105">
                  <Image
                    src={s.imagen}
                    alt={s.nombre}
                    width={72}
                    height={72}
                    className="w-[72px] h-[72px] object-contain"
                  />
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-4">
                <span className="self-start bg-verde-medio/10 text-verde-oscuro text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm mb-2">
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-negro uppercase text-xl leading-tight mb-2 group-hover:text-verde-medio transition-colors">
                  {s.nombre}
                </h3>
                <p className="text-gris-medio text-xs leading-relaxed mb-4">
                  {s.desc}
                </p>

                <a href={waLink(`Hola! Quiero consultar por el servicio de ${s.nombre.toLowerCase()}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-verde-medio hover:text-verde-oscuro text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Consultar
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
