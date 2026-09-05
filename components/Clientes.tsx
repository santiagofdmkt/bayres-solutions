"use client";

import Image from "next/image";

type Cliente = {
  nombre: string;
  // Cuando tengas el logo real: logo: "/clientes/nombre.png" (PNG con fondo transparente, ideal 400px de ancho)
  logo?: string;
};

const clientes: Cliente[] = [
  { nombre: "Pequeños Pasos" },
  { nombre: "Asato" },
  { nombre: "Subway" },
  { nombre: "Eseka" },
  { nombre: "Cocot" },
];

function Logo({ c }: { c: Cliente }) {
  if (c.logo) {
    return (
      <Image
        src={c.logo}
        alt={c.nombre}
        width={160}
        height={60}
        className="h-10 w-auto object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
      />
    );
  }
  return (
    <span className="font-display font-bold uppercase tracking-wider text-2xl text-white group-hover:text-verde-claro transition-colors duration-300 whitespace-nowrap">
      {c.nombre}
    </span>
  );
}

export default function Clientes() {
  // Se repite la lista dos veces para que el loop no tenga corte visible.
  const cinta = [...clientes, ...clientes];

  return (
    <section className="bg-negro py-14 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-8">
        <div className="text-[10px] font-bold text-verde-claro tracking-[3px] uppercase mb-2">
          Empresas que confían en nosotros
        </div>
        <p className="text-white/50 text-sm">
          Trabajamos con comercios, industrias y consorcios de toda la zona.
        </p>
      </div>

      {/* Cinta con desvanecido en los bordes */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-negro to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-negro to-transparent z-10 pointer-events-none" />

        <div className="marquee flex w-max items-center gap-6">
          {cinta.map((c, i) => (
            <div
              key={`${c.nombre}-${i}`}
                     className="group flex items-center justify-center h-20 min-w-[220px] px-8 rounded-md border border-white/20 bg-white/10 hover:bg-verde-oscuro hover:border-verde-claro shadow-lg shadow-black/40 transition-colors duration-300"
            >
              <Logo c={c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
