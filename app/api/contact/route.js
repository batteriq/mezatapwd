import { NextResponse } from 'next/server';

const RESEND_API_URL = 'https://api.resend.com/emails';
const RECIPIENTS = ['info@mezatap.co', 'support@mezatap.co'];

function clean(value, maxLength = 1000) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character]));
}

async function sendEmail(payload) {
  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Resend returned ${response.status}`);
  }
}

export async function POST(request) {
  if (!process.env.RESEND_API_KEY || !process.env.RESEND_FROM) {
    return NextResponse.json({ error: 'Email is not configured.' }, { status: 503 });
  }

  try {
    const data = await request.json();
    const name = clean(data.name, 120);
    const venue = clean(data.venue, 160);
    const phone = clean(data.phone, 40);
    const email = clean(data.email, 254).toLowerCase();
    const message = clean(data.message, 2000);
    const website = clean(data.website, 200);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !venue || !phone || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    const safe = {
      name: escapeHtml(name),
      venue: escapeHtml(venue),
      phone: escapeHtml(phone),
      email: escapeHtml(email),
      message: escapeHtml(message || "I'd like a free demo at my venue.").replace(/\n/g, '<br />'),
    };

    await sendEmail({
      from: process.env.RESEND_FROM,
      to: RECIPIENTS,
      reply_to: email,
      subject: `New MezaTap demo request — ${venue}`,
      text: `New MezaTap demo request\n\nName: ${name}\nVenue: ${venue}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message || "I'd like a free demo at my venue."}`,
      html: `
        <div style="max-width:640px;margin:0 auto;font-family:Arial,sans-serif;color:#2d2924;line-height:1.55">
          <div style="background:#2d2924;padding:28px 32px;border-radius:18px 18px 0 0">
            <div style="font-size:25px;font-weight:700;color:#fff">Meza<span style="color:#c9a15a">Tap</span></div>
            <div style="margin-top:8px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#d7bd89">New demo request</div>
          </div>
          <div style="padding:28px 32px;border:1px solid #ece6dc;border-top:0;border-radius:0 0 18px 18px;background:#fff">
            <p style="margin:0 0 22px;font-size:17px">A new venue is ready to hear from MezaTap.</p>
            <table style="width:100%;border-collapse:collapse;font-size:15px">
              <tr><td style="padding:10px 0;color:#766f65;width:110px">Name</td><td style="padding:10px 0;font-weight:600">${safe.name}</td></tr>
              <tr><td style="padding:10px 0;color:#766f65">Venue</td><td style="padding:10px 0;font-weight:600">${safe.venue}</td></tr>
              <tr><td style="padding:10px 0;color:#766f65">Phone</td><td style="padding:10px 0;font-weight:600">${safe.phone}</td></tr>
              <tr><td style="padding:10px 0;color:#766f65">Email</td><td style="padding:10px 0"><a style="color:#8d682b" href="mailto:${safe.email}">${safe.email}</a></td></tr>
            </table>
            <div style="margin-top:22px;padding:18px;border-radius:12px;background:#f8f4ec;font-size:15px"><strong>Message</strong><br />${safe.message}</div>
          </div>
        </div>
      `,
    });

    await sendEmail({
      from: process.env.RESEND_FROM,
      to: [email],
      reply_to: 'info@mezatap.co',
      subject: `${name}, we received your MezaTap demo request`,
      text: `Hi ${name},\n\nThank you for contacting MezaTap. We have received your request for ${venue} and will get back to you the same day.\n\nFor anything urgent, email info@mezatap.co or call 0798 700 024.\n\n— The MezaTap team`,
      html: `
        <div style="max-width:640px;margin:0 auto;font-family:Arial,sans-serif;color:#2d2924;line-height:1.6">
          <div style="background:#2d2924;padding:30px 32px;border-radius:18px 18px 0 0">
            <div style="font-size:26px;font-weight:700;color:#fff">Meza<span style="color:#c9a15a">Tap</span></div>
            <div style="margin-top:7px;font-size:12px;letter-spacing:1.5px;text-transform:uppercase;color:#d7bd89">Scan. Order. Pay. Relax.</div>
          </div>
          <div style="padding:32px;border:1px solid #ece6dc;border-top:0;border-radius:0 0 18px 18px;background:#fff">
            <p style="margin:0;font-size:19px;font-weight:700">Hi ${safe.name},</p>
            <p style="margin:18px 0 0;font-size:16px">Thank you for reaching out to MezaTap. We have received your demo request for <strong>${safe.venue}</strong>.</p>
            <div style="margin:24px 0;padding:18px 20px;border-left:3px solid #c9a15a;background:#f8f4ec;border-radius:0 12px 12px 0">
              <strong>What happens next</strong><br />A MezaTap team member will contact you the same day to learn about your venue and arrange your free demo.
            </div>
            <p style="margin:0;font-size:15px">Need us sooner? Email <a style="color:#8d682b;font-weight:600" href="mailto:info@mezatap.co">info@mezatap.co</a> or call <a style="color:#8d682b;font-weight:600" href="tel:+254798700024">0798 700 024</a>.</p>
            <p style="margin:28px 0 0;font-size:15px">Warmly,<br /><strong>The MezaTap team</strong></p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error.message);
    return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
  }
}
