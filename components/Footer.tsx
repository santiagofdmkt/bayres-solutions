import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { site, waLink, telLink } from "../lib/site";

const servicios = [
  "Desinsectación",
  "Desratización",
  "Desinfección",
  "Limpieza de tanques de agua",
];

const zonas = ["CABA", "GBA Norte", "GBA Sur", "GBA Oeste"];

export default function Footer() {
  const anio = new Date().getFullYear();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.direccion}, ${site.ciudad}`
  )}`;

  return (
      <footer className="relative bg-gradient-to-b from-negro via-[#0d2a15] to-verde-oscuro text-white border-t border-white/10 overflow-hidden">
      {/* Brillo verde suave abajo a la derecha */}
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-verde-claro/15 blur-3xl pointer-events-none"
      />

      {/* Cuerpo */}
      <div className="relative max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_0.8fr] gap-10">
        {/* Marca */}
        <div>
                   <Image
            src="/logo.png"
            alt={site.nombre}
            width={200}
            height={200}
            className="w-44 h-auto mb-5"
          />
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Control de plagas profesional en {site.zonas}. Productos habilitados
            por SENASA, atención de urgencias y planes para consorcios y
            empresas.
          </p>
        </div>

        {/* Servicios */}
        <div>
          <h3 className="font-display font-bold uppercase tracking-wider text-verde-claro text-sm mb-4">
            Servicios
          </h3>
          <ul className="flex flex-col gap-2.5">
            {servicios.map((s) => (
              <li key={s}>
                <Link
                  href="#servicios"
                  className="text-white/70 hover:text-verde-claro text-sm transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-display font-bold uppercase tracking-wider text-verde-claro text-sm mb-4">
            Contacto
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <a href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/70 hover:text-verde-claro transition-colors"
              >
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-verde-medio" />
                <span>
                  {site.direccion}, {site.barrio}
                  <br />
                  CP {site.codigoPostal}, {site.ciudad}
                </span>
              </a>
            </li>
            <li>
              <a href={telLink}
                className="flex items-center gap-2.5 text-white/70 hover:text-verde-claro transition-colors"
              >
                <Phone size={16} className="flex-shrink-0 text-verde-medio" />
                {site.telefonoVisible}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 text-white/70 hover:text-verde-claro transition-colors"
              >
                <Mail size={16} className="flex-shrink-0 text-verde-medio" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-white/70">
              <Clock size={16} className="flex-shrink-0 text-verde-medio" />
              Urgencias los 7 días
            </li>
          </ul>
        </div>

        {/* Zonas */}
        <div>
          <h3 className="font-display font-bold uppercase tracking-wider text-verde-claro text-sm mb-4">
            Zonas
          </h3>
          <ul className="flex flex-col gap-2.5">
            {zonas.map((z) => (
              <li key={z}>
                <Link
                  href="#cobertura"
                  className="text-white/70 hover:text-verde-claro text-sm transition-colors"
                >
                  {z}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

          {/* Barra inferior */}
      <div className="relative border-t border-white/15 bg-black/20">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {anio} {site.nombre}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
           
            <a href={waLink("Hola! Quiero hacer una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full border border-white/15 hover:border-verde-claro hover:bg-verde-oscuro text-white/70 hover:text-white flex items-center justify-center transition-colors"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
