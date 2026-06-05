import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full border-2 border-verde-medio" />
            <div className="absolute inset-[5px] rounded-full border border-verde-claro" />
            <div className="absolute inset-[10px] rounded-full bg-verde-claro opacity-40" />
          </div>
          <div>
            <div className="font-display font-black text-white text-base tracking-widest leading-none">
              BAYRES
            </div>
            <div className="text-[8px] text-white/30 tracking-[3px] leading-none">
              SOLUTIONS
            </div>
          </div>
        </div>
        <p className="text-white/30 text-[11px] text-center">
          {new Date().getFullYear()} Bayres Solutions - Todos los derechos reservados
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/bayressolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 text-[11px] transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/5491100000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 text-[11px] transition-colors"
          >
            WhatsApp
          </a>
          <Link
            href="/politicas-de-privacidad"
            className="text-white/30 hover:text-white/70 text-[11px] transition-colors"
          >
            Privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
