const clientes = [
  { nombre: "Pequeños Pasos", color: "text-gray-600" },
  { nombre: "ASATO", color: "text-gray-800" },
  { nombre: "SUBWAY", color: "text-verde-oscuro" },
  { nombre: "ESEKA", color: "text-red-600" },
  { nombre: "COCOT", color: "text-pink-600" },
];

export default function Clientes() {
  return (
    <section className="py-14 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-[10px] font-bold text-gris-medio tracking-[3px] uppercase text-center mb-8">
          Empresas que confían en nosotros
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {clientes.map((c) => (
            <div
              key={c.nombre}
              className="bg-gris-claro border border-gray-200 rounded-lg h-16 flex items-center justify-center px-4"
            >
              <span
                className={`font-display font-black text-sm uppercase tracking-wider ${c.color}`}
              >
                {c.nombre}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gris-medio mt-6">
          La confianza de las mejores empresas nos avala
        </p>
      </div>
    </section>
  );
}