import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { site } from "../../../lib/site";

// Guarda el lead en Supabase y avisa por mail. Si algo falla, igual responde:
// el formulario abre WhatsApp de todas formas, así el lead nunca se pierde.

type Lead = {
  nombre: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  barrio?: string;
  problema?: string;
  origen?: string;
};

export async function POST(req: Request) {
  let lead: Lead;
  try {
    lead = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const nombre = (lead.nombre || "").trim();
  if (!nombre) {
    return NextResponse.json({ ok: false, error: "Falta el nombre" }, { status: 400 });
  }

  const datos = {
    nombre,
    apellido: (lead.apellido || "").trim() || null,
    email: (lead.email || "").trim() || null,
    telefono: (lead.telefono || "").trim() || null,
    barrio: (lead.barrio || "").trim() || null,
    problema: (lead.problema || "").trim() || null,
    origen: (lead.origen || "hero").trim(),
  };

  const resultado = { guardado: false, mail: false };

  // 1. Supabase
  try {
    const supabase = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );
        const { error } = await supabase.from("bayres_leads").insert(datos);
    if (error) throw error;
    resultado.guardado = true;
  } catch (e) {
    console.error("[lead] Supabase:", e);
  }

  // 2. Resend
  try {
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const filas = Object.entries(datos)
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><b>${v}</b></td></tr>`)
        .join("");
      await resend.emails.send({
               from: `${site.nombre} <bayres@bunnytech.ar>`,
        to: site.email,
        subject: `Nuevo lead (${datos.origen}): ${datos.nombre} ${datos.apellido ?? ""}`.trim(),
        html: `<h2 style="font-family:sans-serif">Nueva consulta desde la web</h2><table style="font-family:sans-serif;font-size:14px">${filas}</table>`,
      });
      resultado.mail = true;
    }
  } catch (e) {
    console.error("[lead] Resend:", e);
  }

  return NextResponse.json({ ok: true, ...resultado });
}