// Manda el lead a /api/lead sin esperar la respuesta.
// El formulario abre WhatsApp igual; esto es respaldo (Supabase + mail).

type DatosLead = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: string;
  problema: string;
};

export function registrarLead(datos: DatosLead, origen: "hero" | "contacto") {
  try {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...datos, origen }),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Nunca frenar el envío por WhatsApp.
  }
}