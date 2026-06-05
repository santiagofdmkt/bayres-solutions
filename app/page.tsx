import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import CtaBand from "@/components/CtaBand";
import Cobertura from "@/components/Cobertura";
import Clientes from "@/components/Clientes";
import Galeria from "@/components/Galeria";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <CtaBand />
      <Cobertura />
      <Clientes />
      <Galeria />
      <FAQ />
      <Contacto />
      <Footer />
    </main>
  );
}