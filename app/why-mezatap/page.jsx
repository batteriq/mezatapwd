import { PageHero, Split, Checks, CTABand, SectionHead } from '@/components/UI';
import Reveal from '@/components/Reveal';
import { IconSmartphone, IconLaptop, IconPrinter, IconQr, IconShield, IconSignal } from '@/components/Icons';

export const metadata = {
  title: 'Why MezaTap',
  description:
    'MezaTap runs on the devices your venue already owns — no tablets to import, no terminals to lease. Here is why hotels and restaurants choose it.',
};

const DEVICES = [
  { icon: IconSmartphone, title: "Guests' own phones", text: 'Every guest already carries the only device they need. They scan, order and pay on their personal phone — nothing to hand out, sanitize or recharge.' },
  { icon: IconLaptop, title: 'Your existing devices', text: 'Waiters, cashiers and managers work from the phones, tablets or computers already in your venue. If it opens a web browser, it runs MezaTap.' },
  { icon: IconPrinter, title: 'Your existing printer', text: 'Receipts print to the thermal printer at your counter today. No proprietary printer, no special paper, no lock-in.' },
];

export default function WhyPage() {
  return (
    <>
      <PageHero
        image="/images/guests-dining.jpg"
        kicker="Why MezaTap"
        title="No new gadgets. No excuses. Live today."
        sub="Most systems ask you to buy hardware before you serve your first order. MezaTap asks for a browser — which your venue already has everywhere."
      />

      {/* Devices */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="Zero new hardware"
            title="Runs on what you already own."
            sub="MezaTap is a website, not equipment. That single decision removes almost every cost and delay of going digital."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {DEVICES.map((d, i) => (
              <Reveal key={d.title} delay={i * 100}>
                <div className="card-surface h-full p-8">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/15 text-gold-deep">
                    <d.icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-[22px] font-semibold">{d.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-espresso-soft">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Same-day setup */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="container-site">
          <Split image="/images/cafe-counter.jpg" alt="A café counter ready for service">
            <p className="kicker">Same-day setup</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[1.12]">
              From signup to first order in one day.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-espresso-soft">
              We onboard your venue personally: menu loaded, staff accounts created, payment details
              connected, QR cards placed on the tables. You watch the first live order arrive before we leave.
            </p>
            <Checks
              items={[
                'We load your full menu with photos and prices',
                'Staff accounts with simple PIN logins — 5-minute training per person',
                'Your M-Pesa paybill or till connected and test-fired',
                'A printed QR card for every table and room',
              ]}
            />
          </Split>
        </div>
      </section>

      {/* Reliability + trust */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <Split image="/images/hero-restaurant.jpg" alt="An elegant restaurant in the evening" flip>
            <p className="kicker">Built for real venues</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[1.12]">
              Designed for a Friday night rush, not a demo room.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-espresso-soft">
              Kenyan venues run on busy Wi-Fi, mixed devices and fast-moving floors. MezaTap was built
              for exactly that reality.
            </p>
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                  <IconSignal className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">Internet hiccup? Service keeps flowing.</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-espresso-soft">
                    Orders keep moving during a connection blip, and everything syncs back the moment you're online.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                  <IconShield className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">Your data, guarded.</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-espresso-soft">
                    Role-based logins, encrypted payment credentials and automatic nightly backups — as standard.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                  <IconQr className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">One QR card is the whole rollout.</h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-espresso-soft">
                    Table 12's card always points to table 12 — orders arrive labeled with the right table, room or seat.
                  </p>
                </div>
              </div>
            </div>
          </Split>
        </div>
      </section>

      <CTABand title="See it running in your venue — free." />
    </>
  );
}
