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
      html: `
        <h1>New demo request</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Venue:</strong> ${safe.venue}</p>
        <p><strong>Phone:</strong> ${safe.phone}</p>
        <p><strong>Email:</strong> <a href="mailto:${safe.email}">${safe.email}</a></p>
        <p><strong>Message:</strong><br />${safe.message}</p>
      `,
    });

    await sendEmail({
      from: process.env.RESEND_FROM,
      to: [email],
      reply_to: 'info@mezatap.co',
      subject: 'We received your MezaTap demo request',
      html: `
        <p>Hi ${safe.name},</p>
        <p>Thank you for contacting MezaTap. We have received your request for <strong>${safe.venue}</strong> and will get back to you the same day.</p>
        <p>For anything urgent, email <a href="mailto:info@mezatap.co">info@mezatap.co</a> or call 0798 700 024.</p>
        <p>— The MezaTap team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact email delivery failed:', error.message);
    return NextResponse.json({ error: 'We could not send your message.' }, { status: 502 });
  }
}
