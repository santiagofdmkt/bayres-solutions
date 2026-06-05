const zonas = [
  {
    nombre: "CABA",
    sub: "Todos los barrios de Capital Federal",
  },
  {
    nombre: "GBA Norte",
    sub: "San Isidro, Vicente López, Tigre, San Fernando y más",
  },
  {
    nombre: "GBA Sur",
    sub: "Lanús, Quilmes, Avellaneda, Lomas de Zamora y más",
  },
  {
    nombre: "GBA Oeste",
    sub: "Morón, Merlo, La Matanza, Ituzaingó y más",
  },
];

export default function Cobertura() {
  return (
    <section id="cobertura" className="py-20 px-6 bg-gris-claro">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
            Dónde trabajamos
          </div>
          <h2 className="font-display font-black text-negro uppercase text-5xl leading-none">
            Zona de <span className="text-verde-medio">cobertura</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Mapa embed */}
          <div className="rounded-lg overflow-hidden border border-gray-200 h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d209744.74888498638!2d-58.70616865!3d-34.6156809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac630121623%3A0x53386f2ac88991a9!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Zonas */}
          <div>
            <p className="text-gris-medio text-sm leading-relaxed mb-6">
              Operamos en toda la Ciudad Autónoma de Buenos Aires y el Gran Buenos Aires, con equipos distribuidos en cada zona para garantizar una respuesta rápida.
            </p>
            <div className="flex flex-col gap-3">
              {zonas.map((z) => (
                <div
                  key={z.nombre}
                  className="flex items-center gap-4 bg-white rounded px-4 py-3 border-l-4 border-verde-medio"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-verde-medio flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-negro text-sm">
                      {z.nombre}
                    </div>
                    <div className="text-gris-medio text-xs">{z.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}