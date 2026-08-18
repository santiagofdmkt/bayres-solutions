// Datos del negocio en un solo lugar.
// Cambiás acá y se actualiza en toda la web.

export const site = {
  nombre: "Bayres Solutions",

  // Formato internacional, SIN el +, sin espacios ni guiones.
  // Ej: (11) 4567-8900  =>  "5491145678900"
  whatsapp: "5491100000000",

  // Como se muestra en pantalla
  telefonoVisible: "11 0000-0000",

  email: "contacto@bayressolutions.com.ar",
  zonas: "CABA y Gran Buenos Aires",

  // OJO: estos números tienen que ser reales.
  // Google penaliza inconsistencias entre la web y la ficha del negocio.
  stats: [
    { num: "+500", label: "Clientes atendidos" },
    { num: "10+", label: "Años de experiencia" },
    { num: "4", label: "Servicios especializados" },
    { num: "24hs", label: "Atención de urgencias" },
  ],
};

/** Arma el link de WhatsApp con un mensaje ya escrito. */
export function waLink(mensaje: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensaje)}`;
}

/** Link para llamar desde el celular. */
export const telLink = `tel:+${site.whatsapp}`;
