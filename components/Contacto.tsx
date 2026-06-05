"use client";
import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-negro">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-[10px] font-bold text-verde-medio tracking-[3px] uppercase mb-2">
              Hablemos
            </div>
            <h2 className="font-display font-black text-white uppercase text-5xl leading-none mb-6">
              Hablemos de tu <span className="text-verde-claro">problema</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              Respondemos en menos de 1 hora en horario comercial.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-verde-oscuro flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">UB</div>
                <span className="text-white/70 text-sm">Cuba 2489, CABA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-verde-oscuro flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">TL</div>
                <span className="text-white/70 text-sm">+54 11 XXXX-XXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-verde-oscuro flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">EM</div>
                <span className="text-white/70 text-sm">info@bayressolutions.com.ar</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded bg-verde-oscuro flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">IG</div>
                <span className="text-white/70 text-sm">@bayressolutions</span>
              </div>
            </div>
          </div>
          <div className="bg-white/5 border border-verde-medio/20 rounded-lg p-6">
            {enviado ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <h3 className="font-display font-bold text-white uppercase text-2xl mb-2">
                  Consulta enviada!
                </h3>
                <p className="text-white/60 text-sm">
                  Te respondemos en menos de 1 hora.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h3 className="font-display font-bold text-white uppercase tracking-wide text-base mb-2">
                  Envianos tu consulta
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Nombre"
                    required
                    className="bg-white/[0.07] border border-white/15 rounded px-3 py-2.5 text-white/70 text-xs placeholder:text-white/30 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Apellido"
                    required
                    className="bg-white/[0.07] border border-white/15 rounded px-3 py-2.5 text-white/70 text-xs placeholder:text-white/30 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="bg-white/[0.07] border border-white/15 rounded px-3 py-2.5 text-white/70 text-xs placeholder:text-white/30 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp"
                  className="bg-white/[0.07] border border-white/15 rounded px-3 py-2.5 text-white/70 text-xs placeholder:text-white/30 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Direccion"
                  className="bg-white/[0.07] border border-white/15 rounded px-3 py-2.5 text-white/70 text-xs placeholder:text-white/30 focus:outline-none"
                />
                <textarea
                  placeholder="Contanos cual es el problema..."
                  rows={4}
                  required
                  className="bg-white/[0.07] border border-white/15 rounded px-3 py-2.5 text-white/70 text-xs placeholder:text-white/30 focus:outline-none resize-none"
                />
                <button
                  type="submit"
                  className="bg-verde-medio hover:bg-verde-oscuro text-white py-3 rounded font-display font-bold uppercase tracking-widest text-xs transition-colors"
                >
                  Enviar consulta
                </button>
                <a
                  href="https://wa.me/5491100000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-verde-oscuro text-verde-claro py-2.5 rounded text-xs font-semibold text-center flex items-center justify-center"
                >
                  Escribir por WhatsApp
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
