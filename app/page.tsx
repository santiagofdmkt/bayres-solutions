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
import VolverArriba from "@/components/VolverArriba";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <CtaBand />
      <FAQ />
      <Clientes />
      <Galeria />
      <Cobertura />
      <Contacto />
      <Footer />
      <VolverArriba />
    </main>
  );
}