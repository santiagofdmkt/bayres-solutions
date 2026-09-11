// Datos del negocio en un solo lugar.
// Cambiás acá y se actualiza en toda la web.

export const site = {
  nombre: "Bayres Solutions",

  // URL pública del sitio, sin barra final. La usan layout, sitemap, robots y JSON-LD.
  url: "https://www.bayressolutions.com.ar",

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

    // PENDIENTE: mail provisorio. Cambiar cuando tengan el del dominio propio.
  email: "adm.bairessolutions@gmail.com",

  // Usuario de Instagram sin @. Dejar "" si no tienen cuenta y desaparece del sitio.
  // Verificado en Google: la cuenta real es @bayres.solutions (con punto).
  instagram: "bayres.solutions",

  // Ubicación (se usa en Footer y en el JSON-LD LocalBusiness)
  direccion: "Cuba 3489",
  barrio: "Núñez",
  ciudad: "Ciudad Autónoma de Buenos Aires",
  codigoPostal: "1429",
  pais: "Argentina",
  zonas: "CABA y Gran Buenos Aires",

  // Horario de atención. Sale de la ficha de Google (11/9/2026).
  // PENDIENTE: confirmar con el cliente, la web dice "urgencias los 7 días".
  // Los días van en inglés porque el JSON-LD (schema.org) los pide así.
  horario: [
    {
      dias: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      abre: "09:00",
      cierra: "23:30",
    },
  ],

  // Servicios. Se usan en el JSON-LD para que Google sepa qué hace el negocio.
  servicios: [
    {
      nombre: "Desinsectación",
      descripcion: "Tratamientos contra cucarachas, mosquitos, hormigas y otros insectos.",
    },
    {
      nombre: "Desratización",
      descripcion: "Control profesional de roedores con métodos seguros y autorizados.",
    },
    {
      nombre: "Desinfección",
      descripcion: "Higiene ambiental para eliminar bacterias, hongos y virus.",
    },
    {
      nombre: "Limpieza de tanques de agua",
      descripcion: "Limpieza y desinfección completa de tanques de agua.",
    },
  ],

  // OJO: estos números tienen que ser reales.
  // Google penaliza inconsistencias entre la web y la ficha del negocio.
  stats: [
    { num: "+500", label: "Casos atendidos" },
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