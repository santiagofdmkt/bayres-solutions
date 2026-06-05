import Link from "next/link";

export default function CtaBand() {
  return (
    <div className="bg-negro py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <h2 className="font-display font-black text-white uppercase text-3xl lg:text-4xl leading-tight text-center sm:text-left">
          Necesitas una{" "}
          <span className="text-verde-claro">solucion inmediata?</span>
        </h2>
        <a
          href="https://wa.me/5491100000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-verde-medio hover:bg-verde-oscuro text-white px-8 py-3 rounded font-display font-bold uppercase tracking-widest text-sm transition-colors whitespace-nowrap flex-shrink-0"
        >
          Escribinos ahora
        </a>
      </div>
    </div>
  );
}
