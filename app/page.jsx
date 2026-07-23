import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SectionHead, ArrowLink, Checks, CTABand } from '@/components/UI';
import {
  IconQr, IconCloche, IconCard, IconArmchair, IconBell, IconWallet, IconChart,
  IconShield, IconBuilding, IconBed, IconStar, IconCalendar, IconSmartphone, IconCheck,
} from '@/components/Icons';

const STEPS = [
  { icon: IconQr, img: '/images/scan-phone.jpg', n: '01', title: 'Scan', text: 'The QR card on the table opens your menu instantly — no app.' },
  { icon: IconCloche, img: '/images/order-food.jpg', n: '02', title: 'Order', text: 'Guests order from the live menu; the kitchen sees it in real time.' },
  { icon: IconCard, img: '/images/pay-card.jpg', n: '03', title: 'Pay', text: 'M-Pesa, card or cash — straight to your paybill or till.' },
  { icon: IconArmchair, img: '/images/served-relax.jpg', n: '04', title: 'Relax', text: 'Live order tracking and an instant receipt. Everyone breathes.' },
];

const ROLES = [
  { href: '/team#waiters', img: '/images/waiter.jpg', icon: IconBell, title: 'Waiters' },
  { href: '/team#cashiers', img: '/images/cashier.jpg', icon: IconWallet, title: 'Cashiers' },
  { href: '/team#managers', img: '/images/manager-analytics.jpg', icon: IconChart, title: 'Managers' },
  { href: '/team#owners', img: '/images/owner-hotel.jpg', icon: IconBuilding, title: 'Owners' },
];

const SERVICES = [
  { href: '/services#room-service', icon: IconBed, title: 'In-room dining & room charge', text: 'Hotel guests order from their room and bill it straight to the room.' },
  { href: '/services#reservations', icon: IconCalendar, title: 'Reservations & table booking', text: 'Guests book ahead; your busiest nights stay organised.' },
  { href: '/services#payments-suite', icon: IconWallet, title: 'Payments & reconciliation', text: 'M-Pesa, card and cash — confirmed, receipted, balanced daily.' },
  { href: '/services#feedback', icon: IconStar, title: 'Reviews & guest feedback', text: 'Hear the truth early and build a reputation that fills tables.' },
  { href: '/services#insights', icon: IconChart, title: 'Insights & multi-branch', text: 'The whole business on one calm dashboard, from anywhere.' },
  { href: '/features', icon: IconShield, title: 'And the fine details', text: 'eTIMS receipts, printing, your branding, security — all handled.' },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO — light, luxurious ============ */}
      <section className="relative overflow-hidden bg-cream">
        {/* Ambient gold atmosphere */}
        <div className="animate-drift pointer-events-none absolute -right-48 -top-56 h-[640px] w-[640px] rounded-full bg-gold/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-52 bottom-0 h-[420px] w-[420px] rounded-full bg-gold/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-24 hidden h-[480px] w-[480px] rounded-full border border-gold/25 lg:block" />

        <div className="container-site relative z-10 grid items-center gap-14 pb-20 pt-32 md:grid-cols-[1.06fr_0.94fr] md:gap-10 md:pb-28 md:pt-48">
          {/* Copy */}
          <div>
            <p className="kicker enter">Scan &nbsp;·&nbsp; Order &nbsp;·&nbsp; Pay &nbsp;·&nbsp; Relax</p>
            <h1 className="enter enter-d1 mt-6 font-display text-[44px] font-bold leading-[1.07] tracking-tight text-espresso md:text-[68px]">
              Your guests scan, order &amp; pay —
              <span className="italic text-gold-deep"> right from the table.</span>
            </h1>
            <p className="enter enter-d2 mt-7 max-w-lg text-[17px] leading-relaxed text-espresso-soft md:text-lg">
              MezaTap turns every table and room into a quiet point of service. Guests use their own
              phones — no app, no waiting — while your team sees every order and every shilling, live.
            </p>
            <div className="enter enter-d3 mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold w-full !px-9 !py-4 !text-base sm:w-auto">Book a Free Demo</Link>
              <Link href="/how-it-works" className="btn-outline w-full !px-9 !py-4 !text-base sm:w-auto">See How It Works</Link>
            </div>

            <Link href="#pricing" className="enter enter-d4 mt-5 flex max-w-lg items-center justify-between gap-4 rounded-2xl border border-gold/30 bg-white/70 px-4 py-3.5 shadow-card backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift">
              <span>
                <span className="block text-[10px] font-semibold uppercase tracking-widest2 text-gold-deep">One-time installation</span>
                <span className="mt-1 block text-[13px] text-espresso-soft">Everything needed to get your venue live.</span>
              </span>
              <span className="shrink-0 font-display text-[22px] font-bold text-espresso">KES 8,000</span>
            </Link>

            {/* Understated stats — no boxes, just air and gold serifs */}
            <div className="enter enter-d4 mt-14 flex max-w-lg items-center justify-between border-t border-espresso/10 pt-7">
              {[
                ['0', 'new gadgets'],
                ['100%', 'to your account'],
                ['1 day', 'to go live'],
              ].map(([big, small]) => (
                <div key={small}>
                  <p className="font-display text-[26px] font-bold text-gold-deep md:text-3xl">{big}</p>
                  <p className="mt-1 text-[12.5px] tracking-wide text-espresso-mute">{small}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Arched hero image with floating details */}
          <div className="enter enter-d2 relative mx-auto w-full max-w-[420px]">
            <div className="img-arch relative aspect-[4/5] overflow-hidden shadow-lift">
              <img
                src="/images/hero-restaurant.jpg"
                alt="An elegant restaurant running MezaTap"
                className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
              />
              <div className="img-arch absolute inset-0 ring-1 ring-inset ring-espresso/10" />
            </div>
            <div className="img-arch pointer-events-none absolute -inset-3.5 -z-10 border border-gold/30" />

            {/* Floating: order confirmed */}
            <div className="animate-floaty absolute -left-8 top-16 hidden rounded-2xl bg-white/95 px-5 py-4 shadow-lift backdrop-blur-sm sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-espresso-mute">Table 12</p>
              <p className="mt-1 flex items-center gap-2 text-[14px] font-semibold text-espresso">
                <IconCheck className="h-4 w-4 text-forest" /> Order confirmed
              </p>
            </div>
            {/* Floating: payment received */}
            <div className="animate-floaty absolute -right-5 bottom-16 rounded-2xl bg-white/95 px-5 py-4 shadow-lift backdrop-blur-sm [animation-delay:1.4s]">
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-forest">M-PESA</p>
              <p className="mt-1 text-[14px] font-semibold text-espresso">KSh 2,350 received</p>
            </div>
          </div>
        </div>

        {/* Trust line — quiet, no borders */}
        <div className="container-site relative z-10 pb-12">
          <div className="enter enter-d5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[11.5px] font-semibold uppercase tracking-widest2 text-espresso-mute">
            <span>Built for Kenya</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>M-Pesa STK Push</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>Card Payments</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>KRA eTIMS Receipts</span>
            <span className="h-1 w-1 rounded-full bg-gold" />
            <span>No App Download</span>
          </div>
        </div>
      </section>

      {/* ============ NO NEW HARDWARE ============ */}
      <section className="py-24 md:py-36">
        <div className="container-site">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
            <Reveal>
              <div className="relative">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-lift">
                  <img src="/images/guests-dining.jpg" alt="A busy café running MezaTap on ordinary devices"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-8 -right-4 w-60 rounded-card bg-white p-6 shadow-lift md:-right-12">
                  <IconSmartphone className="h-7 w-7 text-gold-deep" />
                  <p className="mt-3 font-display text-lg font-semibold leading-snug">MezaTap is a website, not hardware.</p>
                  <p className="mt-2 text-[13px] text-espresso-soft">Nothing to install. Nothing to buy.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="kicker">Zero new hardware</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-[44px] md:leading-[1.1]">
                Runs on what you already own.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-espresso-soft">
                No tablets to import, no terminals to lease. We set you up and you're live the same day —
                a QR card on each table is the only new thing in your venue.
              </p>
              <Checks
                items={[
                  <span key="1">Guests order on <b className="text-espresso">their own phones</b></span>,
                  <span key="2">Staff use the <b className="text-espresso">devices you already have</b></span>,
                  <span key="3">Prints on <b className="text-espresso">your existing receipt printer</b></span>,
                ]}
              />
              <div className="mt-10">
                <ArrowLink href="/why-mezatap">Why venues choose MezaTap</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-parchment py-24 md:py-36">
        <div className="container-site">
          <SectionHead
            kicker="How it works"
            title="Four steps. Zero friction."
            sub="From the moment a guest sits down to the moment they walk out happy."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <Link href="/how-it-works" className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-card transition-shadow duration-300 group-hover:shadow-lift">
                    <img src={s.img} alt={s.title}
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 font-display text-[15px] font-bold text-cream/90">{s.n}</span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <s.icon className="h-6 w-6 text-gold" />
                      <h3 className="mt-2 font-display text-[24px] font-semibold text-cream">{s.title}</h3>
                    </div>
                  </div>
                  <p className="px-1.5 pt-4 text-[14px] leading-relaxed text-espresso-soft">{s.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <ArrowLink href="/how-it-works">Walk through the full guest journey</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ============ FOR GUESTS ============ */}
      <section className="py-24 md:py-36">
        <div className="container-site">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24">
            <Reveal>
              <p className="kicker">For your guests</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-[44px] md:leading-[1.1]">
                Service that feels five-star — even on a busy night.
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-espresso-soft">
                A live menu with photos, real-time order tracking, payment from their own phone,
                reservations ahead of time and a voice after the meal.
              </p>
              <div className="mt-10 grid max-w-md grid-cols-2 gap-x-6 gap-y-7">
                {[
                  [IconCloche, 'Live menu with photos'],
                  [IconCard, 'Pay from their phone'],
                  [IconCalendar, 'Table reservations'],
                  [IconStar, 'Reviews & ratings'],
                ].map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3.5">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15 text-gold-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[14.5px] font-semibold">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <ArrowLink href="/guests">Everything your guests get</ArrowLink>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-6">
                <div className="img-arch group relative aspect-[3/4] overflow-hidden shadow-lift">
                  <img src="/images/order-food.jpg" alt="A beautifully served meal"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="img-arch group relative mt-12 aspect-[3/4] overflow-hidden shadow-lift">
                  <img src="/images/reservation-table.jpg" alt="A reserved waterfront table"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOR YOUR TEAM ============ */}
      <section className="bg-parchment py-24 md:py-36">
        <div className="container-site">
          <SectionHead
            kicker="For your team"
            title="Everyone gets a superpower."
            sub="Four roles, four purpose-built workspaces — each designed around a real shift."
          />
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 110}>
                <Link href={r.href} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-card transition-shadow duration-300 group-hover:shadow-lift">
                    <img src={r.img} alt={r.title}
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <r.icon className="h-6 w-6 text-gold" />
                      <h3 className="mt-2 font-display text-[24px] font-semibold text-cream">{r.title}</h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-[13px] font-semibold text-cream/70 transition-colors group-hover:text-gold">
                        See their workspace
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1">
                          <path d="M4 12h16m0 0-6-6m6 6-6 6" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PAYMENTS — the one deep-contrast moment ============ */}
      <section className="relative overflow-hidden bg-espresso py-24 text-cream md:py-36">
        <div className="animate-drift pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-gold/[0.08] blur-3xl" />
        <div className="container-site relative z-10">
          <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
            <Reveal>
              <p className="kicker-light">Payments</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-cream md:text-[44px] md:leading-[1.1]">
                Money goes straight to <em className="italic text-gold">your</em> account.
              </h2>
              <p className="mt-6 max-w-md text-[17px] leading-relaxed text-cream/70">
                Your venue connects its own M-Pesa paybill or till and its own card gateway.
                MezaTap never touches your money — it just makes sure every shilling is asked for,
                confirmed and accounted for.
              </p>
              <Checks
                light
                items={[
                  <span key="1">Instant <b className="text-cream">M-Pesa STK push</b> to the guest's phone</span>,
                  <span key="2"><b className="text-cream">Automatic confirmation</b> and one-tap retries</span>,
                  <span key="3"><b className="text-cream">Daily reconciliation</b> — M-Pesa, card and cash</span>,
                ]}
              />
              <div className="mt-10">
                <ArrowLink href="/payments" light>How payments work end-to-end</ArrowLink>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative mx-auto max-w-sm">
                <div className="img-arch group relative aspect-[4/5] overflow-hidden shadow-lift">
                  <img src="/images/pay-card.jpg" alt="A guest paying at the counter"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="img-arch pointer-events-none absolute -inset-3.5 -z-10 border border-gold/25" />
                <div className="animate-floaty absolute -bottom-9 -left-6 w-60 rounded-card bg-white p-5 text-espresso shadow-lift md:-left-12">
                  <p className="text-[11px] font-extrabold tracking-widest2 text-forest">M-PESA</p>
                  <p className="mt-2 text-[14px] leading-relaxed">
                    Pay <b>KSh 2,350</b> to<br />SAVANNAH GRILL &amp; LOUNGE
                  </p>
                  <div className="mt-3 rounded-xl border border-espresso/15 bg-cream px-3.5 py-2.5 text-[12px] tracking-[0.2em] text-espresso-soft">
                    Enter PIN: ••••
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — the tap leads, the suite follows ============ */}
      <section className="py-24 md:py-36">
        <div className="container-site">
          <SectionHead
            kicker="Our services"
            title="It starts with the tap. It doesn't end there."
            sub="The tap is the star of the show — and it arrives with a full supporting cast, already inside the same platform."
          />

          {/* Flagship row */}
          <Reveal>
            <Link
              href="/services#ordering"
              className="group mx-auto mb-14 flex max-w-4xl flex-col items-center gap-6 rounded-[28px] border border-gold/30 bg-gold/[0.07] px-8 py-9 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lift md:flex-row md:text-left"
            >
              <span className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gold text-espresso shadow-glow">
                <IconQr className="h-8 w-8" />
              </span>
              <span className="flex-1">
                <h3 className="font-display text-[24px] font-semibold">
                  Dine-in QR ordering — <span className="italic text-gold-deep">the main event</span>
                </h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-espresso-soft">
                  Tables, poolside, rooftop — anywhere you can place a card, guests can order and pay. This is the tap everyone will talk about.
                </p>
              </span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 flex-none text-gold-deep transition-transform duration-200 group-hover:translate-x-1.5">
                <path d="M4 12h16m0 0-6-6m6 6-6 6" />
              </svg>
            </Link>
          </Reveal>

          {/* Supporting suite */}
          <div className="mx-auto grid max-w-4xl gap-x-16 md:grid-cols-2">
            {SERVICES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 80}>
                <Link href={f.href} className="group flex items-start gap-5 border-b border-espresso/[0.08] py-7">
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-gold/15 text-gold-deep transition-colors duration-300 group-hover:bg-gold group-hover:text-espresso">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <h3 className="font-display text-[19px] font-semibold">{f.title}</h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-espresso-soft">{f.text}</p>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-14 text-center">
            <ArrowLink href="/services">Explore the full service suite</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section id="pricing" className="scroll-mt-20 bg-parchment py-24 md:py-36">
        <div className="container-site">
          <SectionHead
            kicker="Simple, fair pricing"
            title="Start with a clear setup. Scale with what you need."
            sub="MezaTap is tailored to your hotel or venue, so you pay for the capacity and features that genuinely support your operation."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-[28px] bg-espresso p-7 text-cream shadow-lift sm:p-8 md:p-10">
                <p className="kicker-light">One-time installation</p>
                <p className="mt-5 font-display text-5xl font-bold tracking-tight text-gold">KES 8,000</p>
                <p className="mt-5 text-[16px] leading-relaxed text-cream/75">
                  Charged once when we set up your venue: your menu, QR codes, staff access and payment flow.
                </p>
                <div className="mt-6 border-t border-cream/15 pt-5 text-[13px] leading-relaxed text-cream/65">
                  No hardware to buy. No installation charge again.
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-[28px] border border-gold/30 bg-white p-8 shadow-card md:p-10">
                <p className="kicker">Monthly subscription</p>
                <h3 className="mt-4 font-display text-[30px] font-semibold leading-tight text-espresso">Customised for your venue</h3>
                <p className="mt-5 text-[16px] leading-relaxed text-espresso-soft">
                  Your monthly fee is based on your hotel&apos;s size, operational needs and selected features. You only pay for the features and capacity you need.
                </p>
                <Link href="/contact" className="btn-gold mt-7 !px-6 !py-3 !text-[14px]">Get your tailored quote</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand />
    </>
  );
}
