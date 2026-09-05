"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Phone, Mail, AtSign, MessageCircle } from "lucide-react";
import { site, waLink, telLink } from "../lib/site";

const inputClass =
  "bg-white/[0.08] border border-white/15 rounded px-3.5 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-verde-claro focus:ring-1 focus:ring-verde-claro transition-colors";

export default function Contacto() {
  const reducido = useReducedMotion();

  function enviarPorWhatsApp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const datos = new FormData(e.currentTarget);
    const campo = (nombre: string) =>
      ((datos.get(nombre) as string) || "").trim();

    const lineas = [
      "Hola! Quiero hacer una consulta.",
      `Nombre: ${campo("nombre")} ${campo("apellido")}`.trim(),
      campo("email") && `Email: ${campo("email")}`,
      campo("telefono") && `WhatsApp: ${campo("telefono")}`,
      campo("direccion") && `Dirección: ${campo("direccion")}`,
      campo("problema") && `Problema: ${campo("problema")}`,
    ].filter(Boolean);

    window.open(waLink(lineas.join("\n")), "_blank");
  }

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.direccion}, ${site.ciudad}`
  )}`;

  const datos = [
    {
      Icono: MapPin,
      etiqueta: "Base operativa",
      valor: `${site.direccion}, ${site.barrio}, CABA`,
      href: mapsUrl,
    },
    {
      Icono: Phone,
      etiqueta: "Teléfono",
      valor: site.telefonoVisible,
      href: telLink,
    },
    {
      Icono: Mail,
      etiqueta: "Email",
      valor: site.email,
      href: `mailto:${site.email}`,
    },
    ...(site.instagram
      ? [
            {
            Icono: AtSign,
            etiqueta: "Instagram",
            valor: `@${site.instagram}`,
            href: `https://instagram.com/${site.instagram}`,
          },
        ]
      : []),
  ];

  const lista = {
    oculto: {},
    visible: { transition: { staggerChildren: reducido ? 0 : 0.08 } },
  };
  const fila = {
    oculto: { opacity: 0, x: reducido ? 0 : -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
       <section id="contacto" className="relative py-12 lg:py-20 px-6 bg-negro overflow-hidden">
      {/* Brillo verde detrás del formulario */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-verde-oscuro/40 blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Columna de datos */}
          <div>
            <div className="text-[10px] font-bold text-verde-claro tracking-[3px] uppercase mb-2">
              Hablemos
            </div>
            <h2 className="font-display font-black text-white uppercase text-5xl leading-none mb-6">
              Hablemos de tu <span className="text-verde-claro">problema</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Respondemos en menos de 1 hora en horario comercial.
            </p>

            <motion.div
              variants={lista}
              initial="oculto"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col gap-3"
            >
              {datos.map((d) => (
                <motion.a
                  key={d.etiqueta}
                  variants={fila}
                  href={d.href}
                  target={d.href.startsWith("http") ? "_blank" : undefined}
                  rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 hover:bg-verde-oscuro hover:border-verde-medio hover:translate-x-1 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-md bg-verde-oscuro group-hover:bg-verde-claro flex items-center justify-center flex-shrink-0 text-white group-hover:text-negro transition-colors">
                    <d.Icono size={18} />
                  </div>
                  <div>
                    <div className="text-white/40 text-[10px] uppercase tracking-wider">
                      {d.etiqueta}
                    </div>
                    <div className="text-white text-sm font-medium">{d.valor}</div>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, y: reducido ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.06] backdrop-blur-md border border-white/15 rounded-lg p-7 shadow-[0_24px_64px_rgba(0,0,0,0.5)]"
          >
            <h3 className="font-display font-bold text-white uppercase tracking-wide text-xl mb-1">
              Envianos tu consulta
            </h3>
            <p className="text-white/50 text-xs mb-5">
              Te abrimos el WhatsApp con la consulta ya escrita.
            </p>

            <form onSubmit={enviarPorWhatsApp} className="flex flex-col gap-3">
              <div className="grid grid-cols-2 gap-3">
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

              <div className="grid grid-cols-2 gap-3">
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
                  name="direccion"
                  aria-label="Dirección"
                  placeholder="Dirección"
                  className={inputClass}
                />
              </div>

              <textarea
                name="problema"
                required
                aria-label="Contanos cuál es el problema"
                placeholder="Contanos cuál es el problema..."
                rows={4}
                className={`${inputClass} resize-none`}
              />

              <button
                type="submit"
                className="bg-verde-medio hover:bg-verde-claro hover:text-negro text-white py-3 rounded font-display font-bold uppercase tracking-widest text-sm transition-colors"
              >
                Enviar consulta
              </button>

              <a href={waLink("Hola! Quiero hacer una consulta.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-verde-medio/50 hover:border-verde-claro text-verde-claro py-2.5 rounded text-xs font-semibold transition-colors"
              >
                <MessageCircle size={15} />
                O escribinos directo por WhatsApp
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
