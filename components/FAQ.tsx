"use client";
import { useState } from "react";

const faqs = [
  { q: "Los productos son seguros para mascotas y ninos?", a: "Si. Trabajamos con productos habilitados por SENASA, seguros para el hogar una vez que el tratamiento seca." },
  { q: "En cuanto tiempo se ven los resultados?", a: "Generalmente entre 24 y 72 horas. En casos severos puede requerir una segunda aplicacion." },
  { q: "Hacen visitas de diagnostico antes del servicio?", a: "Si, coordinamos una visita previa sin costo para evaluar el tipo y nivel de infestacion." },
  { q: "Trabajan con consorcios y empresas?", a: "Si, ofrecemos planes de mantenimiento periodico. Emitimos remito y certificado de servicio." },
  { q: "Que pasa si el problema vuelve despues del tratamiento?", a: "Contamos con garantia de servicio. Si el problema persiste, volvemos sin costo adicional." },
  { q: "Trabajan los fines de semana?", a: "Si, atendemos urgencias los 7 dias de la semana." },
];

export default function FAQ() {
  const [abierto, setAbierto] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
              Dudas frecuentes
            </div>
            <h2 className="font-display font-black text-negro uppercase text-5xl leading-none mb-6">
              Preguntas <span className="text-verde-medio">frecuentes</span>
            </h2>
            <p className="text-gris-medio text-sm leading-relaxed mb-8">
              Encontra las respuestas mas habituales o escribinos directamente.
            </p>
            <a
              href="https://wa.me/5491100000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-verde-medio hover:bg-verde-oscuro text-white px-6 py-3 rounded font-display font-bold uppercase tracking-widest text-xs transition-colors"
            >
              Hacer una consulta
            </a>
          </div>
          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded overflow-hidden">
                <button
                  onClick={() => setAbierto(abierto === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-gris-claro transition-colors"
                >
                  <span className="text-sm font-semibold text-negro pr-4 leading-snug">
                    {faq.q}
                  </span>
                  <span
                    className={`text-verde-medio font-bold text-lg flex-shrink-0 transition-transform ${
                      abierto === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {abierto === i && (
                  <div className="px-4 pb-4 text-xs text-gris-medio leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
