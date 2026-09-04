// Datos del negocio en un solo lugar.
// Cambiás acá y se actualiza en toda la web.

export const site = {
  nombre: "Bayres Solutions",

  // Teléfono fijo. Formato internacional SIN el +, sin espacios ni guiones.
  // Es línea fija, por eso NO lleva el 9 después del 54.
  // 011 5226-2061  =>  "541152262061"
  telefono: "541152262061",

  // Como se muestra en pantalla
  telefonoVisible: "011 5226-2061",

  // WhatsApp. Si es celular lleva 9: "5491112345678".
  // Si es fijo con WhatsApp Business, va sin 9.
  // PENDIENTE: confirmar con el cliente. Hoy apunta al fijo.
  whatsapp: "541152262061",

  email: "contacto@bayressolutions.com.ar",

  // Ubicación (se usa en Footer y en el JSON-LD LocalBusiness)
  direccion: "Cuba 3489",
  barrio: "Núñez",
  ciudad: "Ciudad Autónoma de Buenos Aires",
  codigoPostal: "C1429",
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
export const telLink = `tel:+${site.telefono}`;