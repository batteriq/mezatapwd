import { PageHero, Split, Checks, CTABand, SectionHead } from '@/components/UI';
import Reveal from '@/components/Reveal';
import { IconCard, IconWallet, IconRefresh, IconReceipt, IconShield, IconChart } from '@/components/Icons';

export const metadata = {
  title: 'Payments',
  description:
    'How money moves at a MezaTap venue: M-Pesa STK push, card payments and cash — all going directly to your account, confirmed and reconciled automatically.',
};

const RAILS = [
  {
    icon: IconWallet,
    title: 'M-Pesa — the star of the show',
    text: `The guest taps "Pay with M-Pesa" and an STK push lands on their phone with your venue's name and the
    exact amount. They enter their PIN — done. The money goes straight to your own paybill or till, and MezaTap
    confirms it automatically within seconds. No typing till numbers, no reading confirmation codes off screens.`,
  },
  {
    icon: IconCard,
    title: 'Cards — for tourists and corporates',
    text: `Visa and Mastercard payments run through your venue's own card gateway. International guests pay the
    way they're used to, and settlements follow your existing gateway agreement — MezaTap never sits in the
    middle of your money.`,
  },
  {
    icon: IconReceipt,
    title: 'Cash — still first-class',
    text: `Plenty of guests pay cash, and MezaTap treats it as a first-class citizen: the cashier records a cash
    payment in two taps and it flows into the same reconciliation as everything else. One system, every payment
    method, no side notebooks.`,
  },
];

export default function PaymentsPage() {
  return (
    <>
      <PageHero
        image="/images/pay-card.jpg"
        kicker="Payments"
        title="Your money. Your account. Zero detours."
        sub="MezaTap connects your own M-Pesa paybill or till and your own card gateway — then makes sure every payment is asked for, confirmed and accounted for."
      />

      {/* The promise */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="The golden rule"
            title="We never touch your money."
            sub="Every shilling moves directly from the guest to your account. MezaTap orchestrates the payment — it never holds, pools or delays it."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {RAILS.map((r, i) => (
              <Reveal key={r.title} delay={i * 100}>
                <div className="card-surface h-full p-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
                    <r.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-[21px] font-semibold">{r.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-espresso-soft">{r.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Failed payments + reconciliation */}
      <section className="bg-espresso py-20 text-cream md:py-28">
        <div className="container-site">
          <Split image="/images/cashier.jpg" alt="A cashier confirming a payment" flip>
            <p className="kicker-light">When things go wrong</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream md:text-[40px] md:leading-[1.12]">
              Failed payment? One tap fixes it.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-cream/75">
              M-Pesa prompts get cancelled, phones run out of battery, PINs get mistyped. When it happens,
              your cashier sees the failed payment instantly and sends the guest a fresh prompt with one tap —
              no awkward conversation, no walking to the table.
            </p>
            <Checks
              light
              items={[
                'Failed payments flagged in the cashier queue immediately',
                'One-tap retry prompt sent straight to the guest’s phone',
                'Every attempt logged — nothing slips through',
                'Day closes with M-Pesa, card and cash already balanced',
              ]}
            />
          </Split>
        </div>
      </section>

      {/* Compliance + security */}
      <section className="py-20 md:py-28">
        <div className="container-site grid gap-8 md:grid-cols-3">
          {[
            { icon: IconReceipt, title: 'KRA eTIMS compliant', text: 'Every sale produces a compliant electronic tax receipt automatically. Your books and the taxman finally agree.' },
            { icon: IconShield, title: 'Credentials encrypted', text: 'Your payment credentials are stored encrypted and are never visible to staff — or to us.' },
            { icon: IconChart, title: 'Reports that add up', text: 'Daily, weekly and monthly summaries per payment method and branch — export-ready for your accountant.' },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="card-surface h-full p-8 text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-[20px] font-semibold">{c.title}</h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-espresso-soft">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand title="Watch a live M-Pesa payment hit your till." sub="Book a free demo — we fire a real STK push and you see the money arrive." />
    </>
  );
}
