import { PageHero, WHATSAPP, PHONE_DISPLAY, PHONE_TEL, EMAIL } from '@/components/UI';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { IconPhone, IconMail, IconWhatsApp, IconClock, IconCheck } from '@/components/Icons';

export const metadata = {
  title: 'Contact & Free Demo',
  description:
    'Talk to the MezaTap team — call or WhatsApp 0798 700 024, email swiftsynchsolutions@gmail.com, or request a free demo at your venue.',
};

const NEXT_STEPS = [
  ['We call you back', 'Same day, usually within the hour. We ask about your venue — tables, rooms, how you take payments today.'],
  ['We demo at your venue', 'We bring nothing but a QR card. Your menu, your Wi-Fi, your staff’s phones — you watch a live order arrive.'],
  ['You go live', 'If you like it, we finish the setup on the spot: menu, staff accounts, payments. First real guests the same week.'],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image="/images/cafe-counter.jpg"
        kicker="Contact"
        title="Talk to us — we reply the same day."
        sub="One conversation is enough to know if MezaTap fits your venue. No pressure, no obligations — just a working demo."
      />

      <section className="py-20 md:py-28">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2">
          {/* Left: contact channels + next steps */}
          <Reveal>
            <p className="kicker">Direct lines</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[36px]">
              However you like to talk.
            </h2>
            <div className="mt-8 grid gap-4">
              <a href={PHONE_TEL} className="card-surface flex items-center gap-5 p-6">
                <span className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-gold/15 p-3.5 text-gold-deep">
                  <IconPhone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-widest2 text-espresso-mute">Call or WhatsApp</p>
                  <p className="mt-0.5 font-display text-[22px] font-semibold">{PHONE_DISPLAY}</p>
                </div>
              </a>
              <a href={WHATSAPP} target="_blank" rel="noopener" className="card-surface flex items-center gap-5 p-6">
                <span className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-gold/15 p-3.5 text-gold-deep">
                  <IconWhatsApp className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-widest2 text-espresso-mute">WhatsApp direct</p>
                  <p className="mt-0.5 font-display text-[22px] font-semibold">Chat with us now</p>
                </div>
              </a>
              <a href={`mailto:${EMAIL}`} className="card-surface flex items-center gap-5 p-6">
                <span className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-gold/15 p-3.5 text-gold-deep">
                  <IconMail className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <p className="text-[12px] font-semibold uppercase tracking-widest2 text-espresso-mute">Email</p>
                  <p className="mt-0.5 break-all font-display text-[19px] font-semibold">{EMAIL}</p>
                </div>
              </a>
              <div className="flex items-center gap-3 px-2 pt-1 text-[14px] text-espresso-soft">
                <IconClock className="h-4.5 w-4.5 text-gold-deep" style={{ height: 18, width: 18 }} />
                Mon–Sun · 8:00 AM – 9:00 PM · Nairobi, Kenya
              </div>
            </div>

            <div className="mt-12">
              <p className="kicker">What happens next</p>
              <div className="mt-6 space-y-6">
                {NEXT_STEPS.map(([title, text], i) => (
                  <div key={title} className="flex gap-4">
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-espresso font-display text-[15px] font-bold text-gold">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-[18px] font-semibold">{title}</h3>
                      <p className="mt-1 text-[14.5px] leading-relaxed text-espresso-soft">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-gold/10 px-5 py-4 text-[14px] font-medium text-espresso">
                <IconCheck className="h-5 w-5 flex-none text-gold-deep" />
                The demo is free and stays free — you only ever pay once you decide to run your venue on MezaTap.
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={140}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
