// Manda el lead a /api/lead y espera la respuesta.
// Devuelve true si el servidor lo recibió (aunque falle el mail, el lead queda en Supabase).

export type DatosLead = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  barrio: string;
  problema: string;
};

export async function registrarLead(
  datos: DatosLead,
  origen: "hero" | "contacto"
): Promise<boolean> {
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...datos, origen }),
    });
    if (!res.ok) return false;
    const json = await res.json();
    return Boolean(json.ok && json.guardado);
  } catch {
    return false;
  }
}
