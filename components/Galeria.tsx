const fotos = [
  { id: 1, label: "Trabajo en local comercial", tall: true },
  { id: 2, label: "Equipo en acción", tall: false },
  { id: 3, label: "Tratamiento residencial", tall: false },
  { id: 4, label: "Desratización", tall: false },
  { id: 5, label: "Desinfección", tall: false },
  { id: 6, label: "Limpieza de tanques", tall: false },
];

const bgColors = [
  "bg-[#1a3a1a]",
  "bg-[#2a4a2a]",
  "bg-[#1a4a2a]",
  "bg-[#0f3d1f]",
  "bg-[#163a24]",
  "bg-[#2a5a2a]",
];

export default function Galeria() {
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

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[160px]">
          {fotos.map((foto, i) => (
            <div
              key={foto.id}
              className={`${bgColors[i]} rounded-lg overflow-hidden relative group ${
                foto.tall ? "row-span-2" : ""
              }`}
            >
              {/* Placeholder — reemplazar con <Image> cuando tengas las fotos */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-40 group-hover:opacity-60 transition-opacity">
                <span className="text-3xl">📷</span>
                <span className="text-white text-[10px] uppercase tracking-widest font-bold">
                  {foto.label}
                </span>
              </div>

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-verde-oscuro/0 group-hover:bg-verde-oscuro/20 transition-colors" />
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gris-medio mt-6">
          * Próximamente las imágenes
        </p>
      </div>
    </section>
  );
}