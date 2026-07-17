import { PageHero, CTABand, Checks } from '@/components/UI';
import Reveal from '@/components/Reveal';
import { IconQr, IconCloche, IconCard, IconArmchair } from '@/components/Icons';

export const metadata = {
  title: 'How It Works',
  description:
    'The full MezaTap guest journey: scan the QR card, order from the live menu, pay with M-Pesa or card, and relax while the kitchen gets to work.',
};

const STEPS = [
  {
    n: '01',
    icon: IconQr,
    img: '/images/scan-phone.jpg',
    title: 'Scan — the menu opens instantly',
    text: `Every table and room carries a small QR card. The guest points their phone camera at it and your
    menu opens in their browser — branded in your colors, in about two seconds. There is no app to download,
    no account to create, no password. It works on any smartphone, on any network.`,
    points: ['No app download, no signup', 'Each card knows its table or room', 'Opens in your venue’s branding'],
  },
  {
    n: '02',
    icon: IconCloche,
    img: '/images/order-food.jpg',
    title: 'Order — straight to the kitchen',
    text: `Guests browse categories with photos and live prices, add items to a cart and order when ready.
    The order lands with your kitchen and the responsible waiter in the same second — labeled with the table
    number, so nobody has to ask "who ordered this?". Out-of-stock items disappear from the menu automatically.`,
    points: ['Live menu — photos, prices, availability', 'Kitchen and waiter notified in real time', 'Orders arrive labeled by table or room'],
  },
  {
    n: '03',
    icon: IconCard,
    img: '/images/pay-card.jpg',
    title: 'Pay — on their phone, into your account',
    text: `When the guest chooses M-Pesa, an STK push lands on their phone — they enter their PIN and the money
    goes directly to your paybill or till. Card payments run through your own gateway. Cash still works: the
    cashier records it in two taps. Every payment is confirmed automatically and appears in your cashier's
    queue instantly.`,
    points: ['M-Pesa STK push — no numbers to type', 'Cards through your own gateway', 'Cash recorded in two taps'],
  },
  {
    n: '04',
    icon: IconArmchair,
    img: '/images/served-relax.jpg',
    title: 'Relax — everyone knows what happens next',
    text: `The guest tracks their order live — confirmed, in the kitchen, on the way. When it's done they get a
    digital receipt (KRA eTIMS compliant) with a printed copy on request. Your waiters spend their time serving
    instead of relaying messages, and your cashier's evening reconciliation is already done.`,
    points: ['Live order status for the guest', 'Instant compliant receipts', 'A calmer, faster floor'],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        image="/images/served-relax.jpg"
        kicker="How it works"
        title="The whole visit, from scan to receipt."
        sub="Follow one guest through a MezaTap venue — four steps, each one removing a wait, a shout to the kitchen, or a queue at the till."
      />

      <section className="py-20 md:py-28">
        <div className="container-site space-y-24 md:space-y-32">
          {STEPS.map((s, i) => (
            <div key={s.n} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal className={i % 2 ? 'md:order-2' : ''}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-lift">
                  <img src={s.img} alt={s.title}
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 rounded-full bg-espresso/80 px-4 py-2 font-display text-base font-bold text-gold backdrop-blur-sm">
                    {s.n}
                  </span>
                </div>
              </Reveal>
              <Reveal className={i % 2 ? 'md:order-1' : ''} delay={120}>
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl bg-gold/15 p-3 text-gold-deep">
                  <s.icon className="h-7 w-7" />
                </span>
                <h2 className="mt-5 font-display text-[28px] font-semibold tracking-tight md:text-[36px] md:leading-[1.15]">
                  {s.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-espresso-soft">{s.text}</p>
                <Checks items={s.points} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <CTABand title="Watch these four steps live at your venue." />
    </>
  );
}
