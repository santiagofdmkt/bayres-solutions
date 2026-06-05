import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-negro min-h-[90vh] relative overflow-hidden flex items-center">
      {/* Círculos de fondo inspirados en el logo */}
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 opacity-[0.06] pointer-events-none">
        <div className="w-[700px] h-[700px] rounded-full border-2 border-verde-medio absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[520px] h-[520px] rounded-full border-2 border-verde-medio absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[350px] h-[350px] rounded-full border-2 border-verde-medio absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[180px] h-[180px] rounded-full border-2 border-verde-claro absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="w-[80px] h-[80px] rounded-full bg-verde-claro/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Texto */}
        <div className="flex-1">
          <div className="inline-block bg-verde-oscuro text-verde-claro text-[10px] font-bold tracking-[3px] uppercase px-3 py-1.5 rounded-sm mb-6">
            Control de plagas profesional
          </div>
          <h1 className="font-display font-black text-white uppercase leading-[0.9] text-6xl lg:text-8xl mb-6">
            Eliminamos<br />
            <span className="text-verde-claro">plagas</span><br />
            con precisión
          </h1>
          <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
            Servicio certificado para CABA y Gran Buenos Aires. Atendemos hogares, comercios, industrias y consorcios con productos habilitados por SENASA.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#contacto"
              className="bg-verde-medio hover:bg-verde-oscuro text-white px-6 py-3 rounded text-sm font-semibold transition-colors"
            >
              Solicitar servicio
            </Link>
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
          <h2 className="font-display font-bold text-white uppercase tracking-wide text-base mb-4">
            Consultá sin cargo
          </h2>
          <form className="flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Nombre"
                className="bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white/60 text-xs placeholder:text-white/30 focus:outline-none focus:border-verde-medio"
              />
              <input
                type="text"
                placeholder="Apellido"
                className="bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white/60 text-xs placeholder:text-white/30 focus:outline-none focus:border-verde-medio"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white/60 text-xs placeholder:text-white/30 focus:outline-none focus:border-verde-medio"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="tel"
                placeholder="WhatsApp"
                className="bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white/60 text-xs placeholder:text-white/30 focus:outline-none focus:border-verde-medio"
              />
              <input
                type="text"
                placeholder="Dirección"
                className="bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white/60 text-xs placeholder:text-white/30 focus:outline-none focus:border-verde-medio"
              />
            </div>
            <textarea
              placeholder="Contanos cuál es el problema..."
              rows={3}
              className="bg-white/[0.07] border border-white/15 rounded px-3 py-2 text-white/60 text-xs placeholder:text-white/30 focus:outline-none focus:border-verde-medio resize-none"
            />
            <button
              type="submit"
              className="bg-verde-medio hover:bg-verde-oscuro text-white py-2.5 rounded font-display font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Solicitar servicio
            </button>
          </form>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-verde-oscuro grid grid-cols-2 md:grid-cols-4">
        {[
          { num: "+500", label: "Clientes atendidos" },
          { num: "10+", label: "Años de experiencia" },
          { num: "4", label: "Servicios especializados" },
          { num: "24hs", label: "Atención de urgencias" },
        ].map((stat) => (
          <div key={stat.label} className="text-center py-4 border-r border-white/15 last:border-r-0">
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