"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { site, waLink } from "../lib/site";
import { registrarLead } from "../lib/leads";

// Fotos de fondo en public/hero/.
const FOTOS = [
  "/hero/hero-1.jpg",
  "/hero/hero-2.jpg",
  "/hero/hero-3.jpg",
  "/hero/hero-4.jpg",
];
const INTERVALO_MS = 4500;

const inputClass =
  "bg-white/[0.08] border border-white/15 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-verde-claro focus:ring-1 focus:ring-verde-claro transition-colors";

type Estado = "idle" | "enviando" | "ok" | "error";

/** Número que cuenta desde 0 cuando entra en pantalla. Soporta "+500", "10+", "24hs". */
function Contador({ valor }: { valor: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const enVista = useInView(ref, { once: true, margin: "-40px" });
  const reducido = useReducedMotion();
  const partes = valor.match(/^(\D*)(\d+)(\D*)$/);
  const objetivo = partes ? parseInt(partes[2], 10) : 0;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!enVista) return;
    if (reducido) {
      setN(objetivo);
      return;
    }
    const inicio = performance.now();
    const duracion = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - inicio) / duracion, 1);
      const suavizado = 1 - Math.pow(1 - p, 3);
      setN(Math.round(suavizado * objetivo));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enVista, objetivo, reducido]);

  if (!partes) return <span ref={ref}>{valor}</span>;
  return (
    <span ref={ref}>
      {partes[1]}
      {n}
      {partes[3]}
    </span>
  );
}

export default function Hero() {
  const [activa, setActiva] = useState(0);
  const [estado, setEstado] = useState<Estado>("idle");
  const reducido = useReducedMotion();

  useEffect(() => {
    const id = setInterval(
      () => setActiva((a) => (a + 1) % FOTOS.length),
      INTERVALO_MS
    );
    return () => clearInterval(id);
  }, []);

  async function enviarConsulta(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);
    const campo = (nombre: string) =>
      ((datos.get(nombre) as string) || "").trim();

    setEstado("enviando");
    const ok = await registrarLead(
      {
        nombre: campo("nombre"),
        apellido: campo("apellido"),
        email: campo("email"),
        telefono: campo("telefono"),
        barrio: campo("barrio"),
        problema: campo("problema"),
      },
      "hero"
    );
    setEstado(ok ? "ok" : "error");
    if (ok) form.reset();
  }

  // Animación de entrada: cada bloque aparece un poco después del anterior.
  const contenedor = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.12 } },
  };
  const item = {
    oculto: { opacity: 0, y: reducido ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const mensajeBoton = waLink(
    "Hola! Quiero consultar por un servicio de control de plagas."
  );

  return (
    <section className="bg-negro relative overflow-hidden">
      {/* Fotos de fondo con fundido */}
      <div aria-hidden="true" className="absolute inset-0">
        {FOTOS.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 bg-cover bg-[position:65%_center] lg:bg-center transition-opacity duration-[1500ms] ease-in-out ${
              i === activa ? "opacity-100" : "opacity-0"
            } ${reducido ? "" : "kenburns"}`}
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * -3}s`,
            }}
          />
        ))}
        {/* Overlay: oscuro a la izquierda para el texto, verde abajo para fundir con los stats */}
        <div className="absolute inset-0 bg-gradient-to-b from-negro/85 via-negro/70 to-negro/85 lg:bg-gradient-to-r lg:from-negro/95 lg:via-negro/75 lg:to-negro/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-verde-oscuro/60 via-transparent to-transparent" />
      </div>

      <motion.div
        variants={contenedor}
        initial="oculto"
        animate="visible"
        className="max-w-6xl mx-auto px-6 pt-14 pb-16 lg:pt-24 lg:pb-28 lg:min-h-[80vh] w-full flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12 relative z-10"
      >
        {/* Texto */}
        <div className="flex-1">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 bg-verde-oscuro/80 backdrop-blur-sm text-verde-claro text-[10px] font-bold tracking-[3px] uppercase px-3 py-1.5 rounded-sm mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-verde-claro opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-verde-claro" />
            </span>
            Control de plagas profesional
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display font-black text-white uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6 drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          >
            Eliminamos
            <br />
            <span className="text-verde-claro">plagas</span>
            <br />
            con precisión
          </motion.h1>

          <motion.p
            variants={item}
            className="text-white text-base lg:text-lg leading-relaxed mb-8 max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          >
            Servicio certificado para {site.zonas}. Atendemos hogares,
            comercios, industrias y consorcios con productos habilitados por
            SENASA.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a href={mensajeBoton}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-verde-medio hover:bg-verde-claro hover:text-negro text-white px-6 py-3 rounded text-sm font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-verde-claro/30"
            >
              Escribinos por WhatsApp
            </a>
            <Link
              href="#servicios"
              className="border border-white/40 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded text-sm font-semibold transition-all"
            >
              Ver servicios
            </Link>
          </motion.div>
        </div>

        {/* Formulario */}
        <motion.div
          variants={item}
          className="w-full lg:w-[400px] bg-negro/60 backdrop-blur-md border border-white/15 rounded-lg p-7 flex-shrink-0 shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
        >
          <h2 className="font-display font-bold text-white uppercase tracking-wide text-xl mb-1">
            Consultá sin cargo
          </h2>
          <p className="text-white/50 text-xs mb-5">
            Te respondemos a la brevedad por WhatsApp o mail.
          </p>

          <form onSubmit={enviarConsulta} className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="nombre"
                required
                aria-label="Nombre"
                placeholder="Nombre"
                className={inputClass}
              />
              <input
                type="text"
                name="apellido"
                aria-label="Apellido"
                placeholder="Apellido"
                className={inputClass}
              />
            </div>

            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Email"
              className={inputClass}
            />

            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                name="telefono"
                required
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]{10}"
                title="Ingresá 10 dígitos, sin 0 ni 15. Ej: 1123456789"
                aria-label="WhatsApp"
                placeholder="11 2345 6789"
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.value = el.value.replace(/\D/g, "").slice(0, 10);
                }}
                className={inputClass}
              />
              <input
                type="text"
                name="barrio"
                aria-label="Barrio o localidad"
                placeholder="Barrio"
                className={inputClass}
              />
            </div>

            <textarea
              name="problema"
              aria-label="Contanos cuál es el problema"
              placeholder="Contanos cuál es el problema..."
              rows={4}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              disabled={estado === "enviando"}
              className="bg-verde-medio hover:bg-verde-claro hover:text-negro disabled:opacity-60 disabled:cursor-wait text-white py-3 rounded font-display font-bold uppercase tracking-widest text-sm transition-colors"
            >
              {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
            </button>

            {estado === "ok" && (
              <p role="status" className="text-verde-claro text-sm text-center">
                Recibimos tu consulta. Te contactamos a la brevedad.
              </p>
            )}
            {estado === "error" && (
              <p role="alert" className="text-white/80 text-sm text-center">
                No pudimos enviar la consulta.{" "}
                <a href={mensajeBoton} target="_blank" rel="noopener noreferrer" className="text-verde-claro underline">
                  Escribinos por WhatsApp
                </a>
                .
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>

      {/* Stats bar: en flujo normal, con contadores animados */}
      <div className="bg-verde-oscuro grid grid-cols-2 md:grid-cols-4 relative z-10">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center py-5 border-r border-b border-white/15 last:border-r-0 md:border-b-0"
          >
            <div className="font-display font-black text-white text-3xl lg:text-4xl leading-none">
              <Contador valor={stat.num} />
            </div>
            <div className="text-white/60 text-[10px] uppercase tracking-wider mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
