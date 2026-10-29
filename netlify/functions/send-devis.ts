import type { Handler } from "@netlify/functions";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL;

const ALLOWED_ORIGINS = [
  "https://arkaniz.com",
  "https://www.arkaniz.com",
  "https://arkaniz.netlify.app",
];

const EMAIL_RE = /^[^\s@<>"']+@[^\s@<>"']+\.[^\s@<>"']+$/;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const field = (value: unknown, maxLength: number) =>
  (typeof value === "string" ? value : "").trim().slice(0, maxLength);

const handler: Handler = async (event) => {
  const origin = event.headers.origin ?? "";
  const headers: Record<string, string> = {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
  if (ALLOWED_ORIGINS.includes(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: "Method not allowed" };
  }

  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return { statusCode: 403, headers, body: "Forbidden" };
  }

  if (!RESEND_API_KEY || !NOTIFY_EMAIL) {
    return { statusCode: 500, headers, body: "Missing configuration" };
  }

  try {
    const raw = JSON.parse(event.body || "{}") ?? {};
    const rawName = field(raw.name, 100);
    const rawEmail = field(raw.email, 254);
    const rawProject = field(raw.project, 200);

    if (!rawName || !EMAIL_RE.test(rawEmail)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Données invalides" }),
      };
    }

    // Every value interpolated into the HTML template below must be escaped.
    const name = escapeHtml(rawName);
    const email = escapeHtml(rawEmail);
    const project = escapeHtml(rawProject) || "—";
    const design = escapeHtml(field(raw.design, 200)) || "—";
    const content = escapeHtml(field(raw.content, 200)) || "—";
    const features = escapeHtml(field(raw.features, 500)) || "Aucune";
    const urgency = escapeHtml(field(raw.urgency, 100)) || "—";
    const budget = escapeHtml(field(raw.budget, 100)) || "—";
    const description = escapeHtml(field(raw.description, 5000));

    const htmlEmail = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#09090b;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#0a0a0f;border:1px solid #1e1e2e;border-radius:12px;overflow:hidden;">

    <!-- Header -->
    <div style="background:linear-gradient(135deg,#6366f1 0%,#4f46e5 100%);padding:32px 24px;text-align:center;">
      <h1 style="margin:0;color:#fff;font-size:28px;font-weight:700;letter-spacing:3px;">ARKANIZ</h1>
      <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:13px;letter-spacing:1.5px;text-transform:uppercase;">Nouveau brief reçu</p>
    </div>

    <!-- Client -->
    <div style="padding:24px 24px 20px;border-bottom:1px solid #1e1e2e;">
      <h2 style="margin:0 0 14px;color:#6366f1;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">👤 Client</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:6px 0;color:#71717a;font-size:13px;width:90px;vertical-align:top;">Nom</td>
          <td style="padding:6px 0;color:#e5e7eb;font-size:15px;font-weight:600;">${name}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717a;font-size:13px;vertical-align:top;">Email</td>
          <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#818cf8;text-decoration:none;font-size:14px;">${email}</a></td>
        </tr>
      </table>
    </div>

    <!-- Projet -->
    <div style="padding:24px 24px 20px;border-bottom:1px solid #1e1e2e;">
      <h2 style="margin:0 0 14px;color:#6366f1;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">🎯 Projet</h2>
      <div style="background:linear-gradient(135deg,rgba(99,102,241,0.12),rgba(79,70,229,0.08));border:1px solid rgba(99,102,241,0.25);border-radius:8px;padding:14px 16px;text-align:center;">
        <span style="color:#e5e7eb;font-size:18px;font-weight:700;">${project}</span>
      </div>
    </div>

    <!-- Design & Contenu -->
    <div style="padding:24px 24px 20px;border-bottom:1px solid #1e1e2e;">
      <h2 style="margin:0 0 14px;color:#6366f1;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">🎨 Design & Contenu</h2>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:6px 0;color:#71717a;font-size:13px;width:90px;vertical-align:top;">Design</td>
          <td style="padding:6px 0;color:#d1d5db;font-size:14px;">${design}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#71717a;font-size:13px;vertical-align:top;">Contenu</td>
          <td style="padding:6px 0;color:#d1d5db;font-size:14px;">${content}</td>
        </tr>
      </table>
    </div>

    <!-- Fonctionnalités -->
    <div style="padding:24px 24px 20px;border-bottom:1px solid #1e1e2e;">
      <h2 style="margin:0 0 14px;color:#6366f1;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">⚙️ Fonctionnalités</h2>
      <div style="line-height:2.2;">
        ${features !== "Aucune"
          ? features.split(", ").map((f: string) => `<span style="display:inline-block;background:rgba(99,102,241,0.15);color:#a5b4fc;border:1px solid rgba(99,102,241,0.3);padding:4px 14px;border-radius:20px;font-size:13px;margin:3px 6px 3px 0;">${f}</span>`).join("")
          : `<span style="color:#52525b;font-style:italic;">Aucune fonctionnalité sélectionnée</span>`
        }
      </div>
    </div>

    <!-- Délai & Budget -->
    <div style="padding:24px 24px 20px;border-bottom:1px solid #1e1e2e;">
      <h2 style="margin:0 0 14px;color:#6366f1;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">📅 Délai & Budget</h2>
      <table style="width:100%;border-collapse:collapse;margin-bottom:14px;">
        <tr>
          <td style="padding:6px 0;color:#71717a;font-size:13px;width:90px;">Délai</td>
          <td style="padding:6px 0;color:#d1d5db;font-size:14px;">${urgency}</td>
        </tr>
      </table>
      <div style="background:linear-gradient(135deg,rgba(99,102,241,0.15),rgba(79,70,229,0.1));border:1px solid rgba(99,102,241,0.35);border-radius:10px;padding:18px;text-align:center;">
        <p style="margin:0 0 4px;color:#71717a;font-size:12px;text-transform:uppercase;letter-spacing:1px;">Estimation indicative</p>
        <p style="margin:0;color:#818cf8;font-size:24px;font-weight:700;">${budget}</p>
      </div>
    </div>

    <!-- Description -->
    <div style="padding:24px 24px 20px;border-bottom:1px solid #1e1e2e;">
      <h2 style="margin:0 0 14px;color:#6366f1;font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;">📝 Description</h2>
      <div style="background:#111119;border:1px solid #27272a;border-radius:8px;padding:16px;">
        <p style="margin:0;color:#a1a1aa;font-size:14px;line-height:1.7;white-space:pre-wrap;">${description || "Non renseignée"}</p>
      </div>
    </div>

    <!-- Footer -->
    <div style="padding:20px 24px;text-align:center;">
      <p style="margin:0;color:#3f3f46;font-size:11px;">
        Brief envoyé depuis <a href="https://arkaniz.com/devis" style="color:#6366f1;text-decoration:none;">arkaniz.com/devis</a>
      </p>
    </div>

  </div>
</body>
</html>`.trim();

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Arkaniz <devis@arkaniz.com>",
        to: [NOTIFY_EMAIL],
        reply_to: rawEmail,
        subject: `[Devis Arkaniz] ${rawName} — ${rawProject}`.replace(/[\r\n]+/g, " "),
        html: htmlEmail,
      }),
    });

    if (!res.ok) {
      const error = await res.text();
      console.error("Resend error:", error);
      return {
        statusCode: res.status,
        headers,
        body: JSON.stringify({ error: "Erreur d'envoi" }),
      };
    }

    const result = await res.json();
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ success: true, id: result.id }),
    };
  } catch (err) {
    console.error("Function error:", err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Erreur serveur" }),
    };
  }
};

export { handler };
