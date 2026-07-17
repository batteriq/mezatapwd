'use client';

import { useState } from 'react';
import { IconWhatsApp } from './Icons';

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const text =
      `Hello MezaTap!\n` +
      `Name: ${f.get('name')}\n` +
      `Venue: ${f.get('venue')}\n` +
      `Phone: ${f.get('phone')}\n` +
      (f.get('message') ? `Message: ${f.get('message')}` : `I'd like a free demo at my venue.`);
    window.open('https://wa.me/254798700024?text=' + encodeURIComponent(text), '_blank');
    setSent(true);
  }

  const inputCls =
    'w-full rounded-xl border border-espresso/20 bg-white px-4 py-3.5 text-[15px] text-espresso placeholder:text-espresso/35 outline-none transition-colors focus:border-gold';

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] bg-white p-7 shadow-card md:p-9">
      <h3 className="font-display text-[24px] font-semibold">Request your free demo</h3>
      <p className="mt-2 text-[14px] text-espresso-soft">
        Fill this in — it opens in WhatsApp, you press send, and it lands with our team instantly.
      </p>

      <div className="mt-7 grid gap-5">
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
        <button type="submit" className="btn-gold w-full !py-4 !text-base">
          <IconWhatsApp className="h-5 w-5" />
          Send via WhatsApp
        </button>
        {sent && (
          <p className="rounded-xl bg-forest/10 px-4 py-3 text-center text-[14px] font-medium text-forest">
            WhatsApp opened in a new tab — press send there and we'll reply the same day.
          </p>
        )}
      </div>
    </form>
  );
}
