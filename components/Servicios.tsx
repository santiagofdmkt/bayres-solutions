const servicios = [
  {
    icon: "🪲",
    tag: "Insectos",
    nombre: "Desinsectación",
    desc: "Tratamientos seguros y eficaces contra cucarachas, mosquitos, hormigas y otros insectos. Ideal para viviendas, edificios, comercios y locales gastronómicos.",
    bg: "bg-verde-oscuro",
  },
  {
    icon: "🐀",
    tag: "Roedores",
    nombre: "Desratización",
    desc: "Control profesional de roedores con métodos seguros y autorizados. Recomendado para viviendas, depósitos, PH, consorcios y negocios con tránsito diario.",
    bg: "bg-[#1a4a2a]",
  },
  {
    icon: "🧪",
    tag: "Higiene ambiental",
    nombre: "Desinfección",
    desc: "Protocolos de higiene ambiental para eliminar bacterias, hongos y virus. Ideal para oficinas, locales, consultorios y edificios.",
    bg: "bg-[#0f3d1f]",
  },
  {
    icon: "💧",
    tag: "Tanques",
    nombre: "Limpieza de tanques de agua",
    desc: "Limpieza completa con desinfección aprobada. Remoción de sedimentos, hongos y microorganismos. Ideal para edificios y comercios.",
    bg: "bg-[#163a24]",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
            Lo que hacemos
          </div>
          <h2 className="font-display font-black text-negro uppercase text-5xl leading-none">
            Nuestros <span className="text-verde-medio">servicios</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicios.map((s) => (
            <div
              key={s.nombre}
              className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow group"
            >
              {/* Imagen placeholder */}
              <div className={`${s.bg} h-36 flex items-center justify-center`}>
                <div className="w-14 h-14 rounded-full bg-black/20 flex items-center justify-center text-3xl">
                  {s.icon}
                </div>
              </div>

              {/* Body */}
              <div className="p-4">
                <span className="inline-block bg-verde-medio/10 text-verde-oscuro text-[9px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm mb-2">
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-negro uppercase text-lg leading-tight mb-2 group-hover:text-verde-medio transition-colors">
                  {s.nombre}
                </h3>
                <p className="text-gris-medio text-xs leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}