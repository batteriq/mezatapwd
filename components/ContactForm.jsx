'use client';

import { useState } from 'react';
import { IconWhatsApp, IconMail } from './Icons';

const INBOX = 'swiftsynchsolutions@gmail.com';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  function values(form) {
    const f = new FormData(form);
    return {
      name: f.get('name'),
      venue: f.get('venue'),
      phone: f.get('phone'),
      message: f.get('message') || "I'd like a free demo at my venue.",
    };
  }

  async function onSubmit(e) {
    e.preventDefault();
    const v = values(e.target);
    setStatus('sending');
    try {
      const r = await fetch(`https://formsubmit.co/ajax/${INBOX}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `MezaTap demo request — ${v.venue}`,
          _template: 'table',
          _captcha: 'false',
          Name: v.name,
          Venue: v.venue,
          Phone: v.phone,
          Message: v.message,
        }),
      });
      if (!r.ok) throw new Error('send failed');
      setStatus('sent');
      e.target.reset();
    } catch {
      setStatus('error');
    }
  }

  function sendWhatsApp(e) {
    const form = e.target.closest('form');
    if (!form.reportValidity()) return;
    const v = values(form);
    const text = `Hello MezaTap!\nName: ${v.name}\nVenue: ${v.venue}\nPhone: ${v.phone}\nMessage: ${v.message}`;
    window.open('https://wa.me/254798700024?text=' + encodeURIComponent(text), '_blank');
  }

  const inputCls =
    'w-full rounded-xl border border-espresso/20 bg-white px-4 py-3.5 text-[15px] text-espresso placeholder:text-espresso/35 outline-none transition-colors focus:border-gold';

  /* Success state — the form closes and a confirmation takes its place */
  if (status === 'sent') {
    return (
      <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[28px] bg-white p-10 text-center shadow-card">
        <span className="flex h-20 w-20 items-center justify-center rounded-full bg-forest/10 text-forest">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
            <path d="m4.5 12.5 5 5L19.5 7" />
          </svg>
        </span>
        <h3 className="mt-6 font-display text-[28px] font-semibold">Message sent!</h3>
        <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-espresso-soft">
          Your request is in our inbox. We'll call you back the <b className="text-espresso">same day</b> —
          keep your phone close.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 text-[14px] font-semibold text-gold-deep underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] bg-white p-7 shadow-card md:p-10">
      <h3 className="font-display text-[26px] font-semibold">Request your free demo</h3>
      <p className="mt-2 text-[14px] text-espresso-soft">
        This lands directly in our inbox — we reply the same day.
      </p>

      <div className="mt-8 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-[13px] font-semibold text-espresso-soft">
            Your name
            <input name="name" type="text" required placeholder="Jane Wanjiku" className={inputCls} />
          </label>
          <label className="grid gap-2 text-[13px] font-semibold text-espresso-soft">
            Venue name
            <input name="venue" type="text" required placeholder="Savannah Grill & Lounge" className={inputCls} />
          </label>
        </div>
        <label className="grid gap-2 text-[13px] font-semibold text-espresso-soft">
          Phone number
          <input name="phone" type="tel" required placeholder="07XX XXX XXX" className={inputCls} />
        </label>
        <label className="grid gap-2 text-[13px] font-semibold text-espresso-soft">
          Message <span className="font-normal text-espresso/40">(optional)</span>
          <textarea name="message" rows={4} placeholder="We run a restaurant with 20 tables and two floors…" className={inputCls} />
        </label>

        <button type="submit" disabled={status === 'sending'} className="btn-gold w-full !py-4 !text-base disabled:opacity-60">
          <IconMail className="h-5 w-5" />
          {status === 'sending' ? 'Sending…' : 'Send Message'}
        </button>
        <button type="button" onClick={sendWhatsApp} className="btn-outline w-full !py-3.5">
          <IconWhatsApp className="h-5 w-5" />
          Or send via WhatsApp instead
        </button>

        {status === 'error' && (
          <p className="rounded-xl bg-terracotta/10 px-4 py-3.5 text-center text-[14px] font-medium text-terracotta">
            That didn't go through — please use the WhatsApp button above, or call 0798 700 024.
          </p>
        )}
      </div>
    </form>
  );
}
