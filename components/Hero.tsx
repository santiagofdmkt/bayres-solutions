"use client";

import Link from "next/link";
import { site, waLink } from "../lib/site";

const inputClass =
  "bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-verde-medio focus:ring-1 focus:ring-verde-medio transition-colors";

export default function Hero() {
  function enviarPorWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const datos = new FormData(e.currentTarget);
    const campo = (nombre: string) =>
      ((datos.get(nombre) as string) || "").trim();

    const lineas = [
      "Hola! Quiero pedir un presupuesto de control de plagas.",
      `Nombre: ${campo("nombre")} ${campo("apellido")}`.trim(),
      campo("email") && `Email: ${campo("email")}`,
      campo("telefono") && `WhatsApp: ${campo("telefono")}`,
      campo("direccion") && `Dirección: ${campo("direccion")}`,
      campo("problema") && `Problema: ${campo("problema")}`,
    ].filter(Boolean);

    window.open(waLink(lineas.join("\n")), "_blank");
  }

  return (
    <section className="bg-negro relative overflow-hidden">
      {/* Círculos de fondo inspirados en el logo */}
      <div
        aria-hidden="true"
        className="absolute right-[-100px] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none hidden lg:block"
      >
        <div className="w-[700px] h-[700px] rounded-full border-2 border-verde-medio absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[520px] h-[520px] rounded-full border-2 border-verde-medio absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[350px] h-[350px] rounded-full border-2 border-verde-medio absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[180px] h-[180px] rounded-full border-2 border-verde-claro absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[80px] h-[80px] rounded-full bg-verde-claro/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-10 pb-14 lg:pt-16 lg:pb-20 w-full flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-12 relative z-10">
        {/* Texto */}
        <div className="flex-1">
          <div className="inline-block bg-verde-oscuro text-verde-claro text-[10px] font-bold tracking-[3px] uppercase px-3 py-1.5 rounded-sm mb-6">
            Control de plagas profesional
          </div>

          <h1 className="font-display font-black text-white uppercase leading-[0.9] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl mb-6">
            Eliminamos
            <br />
            <span className="text-verde-claro">plagas</span>
            <br />
            con precisión
          </h1>

          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
            Servicio certificado para {site.zonas}. Atendemos hogares,
            comercios, industrias y consorcios con productos habilitados por
            SENASA.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={waLink(
                "Hola! Quiero consultar por un servicio de control de plagas."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-verde-medio hover:bg-verde-oscuro text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Escribinos por WhatsApp
            </a>
            <Link
              href="#servicios"
              className="border border-white/30 hover:border-white/60 text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        {/* Formulario */}
        <div className="w-full lg:w-[300px] bg-white/5 border border-verde-medio/30 rounded-lg p-6 flex-shrink-0">
          <h2 className="font-display font-bold text-white uppercase tracking-wide text-base mb-1">
            Consultá sin cargo
          </h2>
          <p className="text-white/40 text-[11px] mb-4">
            Te abrimos el WhatsApp con la consulta ya escrita.
          </p>

          <form onSubmit={enviarPorWhatsApp} className="flex flex-col gap-3">
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
                aria-label="WhatsApp"
                placeholder="WhatsApp"
                className={inputClass}
              />
              <input
                type="text"
                name="direccion"
                aria-label="Dirección"
                placeholder="Dirección"
                className={inputClass}
              />
            </div>

            <textarea
              name="problema"
              aria-label="Contanos cuál es el problema"
              placeholder="Contanos cuál es el problema..."
              rows={3}
              className={`${inputClass} resize-none`}
            />

            <button
              type="submit"
              className="bg-verde-medio hover:bg-verde-oscuro text-white py-2.5 rounded font-display font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Enviar consulta
            </button>
          </form>
        </div>
      </div>

      {/* Stats bar: en flujo normal, no absoluta */}
      <div className="bg-verde-oscuro grid grid-cols-2 md:grid-cols-4">
        {site.stats.map((stat) => (
          <div
            key={stat.label}
            className="text-center py-4 border-r border-b border-white/15 last:border-r-0 md:border-b-0"
          >
            <div className="font-display font-black text-white text-3xl leading-none">
              {stat.num}
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
