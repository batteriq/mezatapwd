import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { SectionHead, ArrowLink, Checks, CTABand, WHATSAPP } from '@/components/UI';
import {
  IconQr, IconCloche, IconCard, IconArmchair, IconBell, IconWallet, IconChart,
  IconShield, IconPrinter, IconBuilding, IconPalette, IconReceipt, IconBed,
  IconSignal, IconWhatsApp, IconStar, IconCalendar, IconSmartphone,
} from '@/components/Icons';

const STEPS = [
  { icon: IconQr, img: '/images/scan-phone.jpg', n: '01', title: 'Scan', text: 'Guests scan the QR card on their table or in their room. Your menu opens instantly — no app to download.' },
  { icon: IconCloche, img: '/images/order-food.jpg', n: '02', title: 'Order', text: 'They browse your live menu with photos and order. It lands with the kitchen and waiter in real time.' },
  { icon: IconCard, img: '/images/pay-card.jpg', n: '03', title: 'Pay', text: 'M-Pesa prompt on their phone, card, or cash — money goes straight to your paybill or till.' },
  { icon: IconArmchair, img: '/images/served-relax.jpg', n: '04', title: 'Relax', text: 'They track their order live and get a receipt. Your staff serve more tables with less running.' },
];

const ROLES = [
  { href: '/team#waiters', img: '/images/waiter.jpg', icon: IconBell, title: 'Waiters', text: 'A chime and a live queue for every new order — no more running to check.' },
  { href: '/team#cashiers', img: '/images/cashier.jpg', icon: IconWallet, title: 'Cashiers', text: 'Every M-Pesa, card and cash payment in one command center that reconciles itself.' },
  { href: '/team#managers', img: '/images/manager-analytics.jpg', icon: IconChart, title: 'Managers', text: 'Menus, prices, staff PINs and sales analytics — controlled in seconds.' },
  { href: '/team#owners', img: '/images/owner-hotel.jpg', icon: IconBuilding, title: 'Owners', text: 'Revenue and branch performance on one clean dashboard, from anywhere.' },
];

const FEATURES = [
  { icon: IconReceipt, title: 'KRA eTIMS receipts', text: 'Tax-compliant receipts, automatic.' },
  { icon: IconPrinter, title: 'Receipt printing', text: 'Works with your existing printer.' },
  { icon: IconBed, title: 'Charge to room', text: 'Hotel guests bill straight to their room.' },
  { icon: IconBuilding, title: 'Multi-branch', text: 'Every location under one account.' },
  { icon: IconPalette, title: 'Your brand', text: 'Guests see your colors and logo.' },
  { icon: IconChart, title: 'Sales analytics', text: 'Decisions from data, not guessing.' },
  { icon: IconShield, title: 'Serious security', text: 'Encrypted logins, nightly backups.' },
  { icon: IconSignal, title: 'Internet hiccup?', text: 'Service keeps flowing — syncs when back.' },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: 'url(/images/hero-restaurant.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/95 via-espresso/70 to-espresso/30" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso/80 to-transparent" />

        <div className="container-site relative z-10 pb-24 pt-40">
          <Reveal>
            <p className="kicker-light">Scan &nbsp;·&nbsp; Order &nbsp;·&nbsp; Pay &nbsp;·&nbsp; Relax</p>
            <h1 className="mt-5 max-w-3xl font-display text-[42px] font-bold leading-[1.08] tracking-tight text-cream md:text-7xl">
              Your guests scan, order &amp; pay — right from the table.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream/80">
              MezaTap turns every table and room into a self-service point. Guests use
              <span className="font-semibold text-cream"> their own phones</span> — no app, no waiting,
              no new equipment for you. Your team sees every order and every shilling, live.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold !px-9 !py-4 !text-base">Book a Free Demo</Link>
              <Link href="/how-it-works" className="btn-outline-light !px-9 !py-4 !text-base">See How It Works</Link>
            </div>
          </Reveal>

          {/* Stat strip */}
          <Reveal delay={200}>
            <div className="mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-card bg-cream/15 backdrop-blur-sm md:grid-cols-4">
              {[
                ['0', 'new gadgets to buy'],
                ['100%', 'of payments to your account'],
                ['1 day', 'from signup to first order'],
                ['24/7', 'orders, reservations & reports'],
              ].map(([big, small]) => (
                <div key={small} className="bg-espresso/40 px-6 py-5">
                  <p className="font-display text-2xl font-bold text-gold md:text-3xl">{big}</p>
                  <p className="mt-1 text-[12.5px] leading-snug text-cream/70">{small}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <div className="border-b border-espresso/10 bg-cream">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-[12.5px] font-semibold uppercase tracking-widest2 text-espresso-mute md:justify-between">
          <span>Built for Kenya</span>
          <span className="text-gold-deep">M-Pesa STK Push</span>
          <span>Card Payments</span>
          <span className="text-gold-deep">KRA eTIMS Receipts</span>
          <span>No App Download</span>
        </div>
      </div>

      {/* ============ WHY / NO NEW HARDWARE ============ */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <div className="relative">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-lift">
                  <img src="/images/guests-dining.jpg" alt="A busy café running MezaTap on ordinary devices"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="absolute -bottom-7 -right-4 w-56 rounded-card bg-white p-5 shadow-lift md:-right-10">
                  <IconSmartphone className="h-7 w-7 text-gold-deep" />
                  <p className="mt-2.5 font-display text-lg font-semibold leading-snug">MezaTap is a website, not hardware.</p>
                  <p className="mt-1.5 text-[13px] text-espresso-soft">Nothing to install. Nothing to buy.</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="kicker">Zero new hardware</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[42px] md:leading-[1.12]">
                Runs on what you already own.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-espresso-soft">
                No tablets to import, no terminals to lease, no installation crew. We set you up and
                you are live the same day — a QR card on each table is the only new thing in your venue.
              </p>
              <Checks
                items={[
                  <span key="1">Guests order on <b className="text-espresso">their own phones</b></span>,
                  <span key="2">Staff use the <b className="text-espresso">phones, tablets or computers</b> you already have</span>,
                  <span key="3">Prints on the <b className="text-espresso">receipt printer</b> you already own</span>,
                  <span key="4"><b className="text-espresso">Nothing to buy, nothing to install</b> — we set everything up for you</span>,
                ]}
              />
              <div className="mt-9">
                <ArrowLink href="/why-mezatap">Why venues choose MezaTap</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="How it works"
            title="Four steps. Zero friction."
            sub="From the moment a guest sits down to the moment they walk out happy — everything just flows."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <Link href="/how-it-works" className="card-surface group block overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={s.img} alt={s.title}
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-108 group-hover:scale-105" />
                    <span className="absolute left-4 top-4 rounded-full bg-espresso/80 px-3.5 py-1.5 font-display text-sm font-bold text-gold backdrop-blur-sm">
                      {s.n}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-6 w-6 text-gold-deep" />
                      <h3 className="font-display text-[21px] font-semibold">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-espresso-soft">{s.text}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ArrowLink href="/how-it-works">Walk through the full guest journey</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ============ FOR GUESTS ============ */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="kicker">For your guests</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[42px] md:leading-[1.12]">
                Service that feels five-star — even on a busy night.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-espresso-soft">
                A live menu with photos, real-time order tracking, payment from their own phone and an
                instant receipt. Guests can even reserve a table ahead of time and leave a review after —
                the whole visit, handled beautifully.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-5">
                {[
                  [IconCloche, 'Live menu with photos'],
                  [IconCard, 'Pay from their phone'],
                  [IconCalendar, 'Table reservations'],
                  [IconStar, 'Reviews & ratings'],
                ].map(([Icon, label]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-[14.5px] font-semibold">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-9">
                <ArrowLink href="/guests">Everything your guests get</ArrowLink>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-5">
                <div className="group relative aspect-[3/4] overflow-hidden rounded-[24px] shadow-lift">
                  <img src="/images/order-food.jpg" alt="A beautifully served meal"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="group relative mt-10 aspect-[3/4] overflow-hidden rounded-[24px] shadow-lift">
                  <img src="/images/reservation-table.jpg" alt="A reserved waterfront table"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FOR YOUR TEAM ============ */}
      <section className="bg-parchment py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="For your team"
            title="Everyone gets a superpower."
            sub="Four roles, four purpose-built workspaces — each one designed around a real shift, not a spec sheet."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ROLES.map((r, i) => (
              <Reveal key={r.title} delay={i * 90}>
                <Link href={r.href} className="card-surface group block overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={r.img} alt={r.title}
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <r.icon className="h-6 w-6 text-gold" />
                      <h3 className="mt-2 font-display text-[22px] font-semibold text-cream">{r.title}</h3>
                    </div>
                  </div>
                  <p className="p-5 text-[14px] leading-relaxed text-espresso-soft">{r.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ArrowLink href="/team">See each role's workspace</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ============ PAYMENTS ============ */}
      <section className="bg-espresso py-20 text-cream md:py-28">
        <div className="container-site">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">
            <Reveal>
              <p className="kicker-light">Payments</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-cream md:text-[42px] md:leading-[1.12]">
                Money goes straight to <em className="italic text-gold">your</em> account.
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-cream/75">
                Your venue connects its own M-Pesa paybill or till and its own card gateway.
                MezaTap never touches, holds or delays your money — it just makes sure every shilling
                is asked for, confirmed and accounted for.
              </p>
              <Checks
                light
                items={[
                  <span key="1">Instant <b className="text-cream">M-Pesa STK push</b> to the guest's phone</span>,
                  <span key="2"><b className="text-cream">Automatic confirmation</b> — no reading codes off guests' screens</span>,
                  <span key="3"><b className="text-cream">One-tap retry prompts</b> when a payment fails</span>,
                  <span key="4"><b className="text-cream">Daily reconciliation</b> — M-Pesa, card and cash, all balanced</span>,
                ]}
              />
              <div className="mt-9">
                <ArrowLink href="/payments" light>How payments work end-to-end</ArrowLink>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative mx-auto max-w-md">
                <div className="group relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-lift">
                  <img src="/images/pay-card.jpg" alt="A guest paying at the counter"
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                {/* STK push mock */}
                <div className="absolute -bottom-8 -left-4 w-64 rounded-card bg-white p-5 text-espresso shadow-lift md:-left-10">
                  <p className="text-[12px] font-extrabold tracking-widest2 text-forest">M-PESA</p>
                  <p className="mt-2 text-[14px] leading-relaxed">
                    Pay <b>KSh 2,350</b> to<br />SAVANNAH GRILL &amp; LOUNGE
                  </p>
                  <div className="mt-3 rounded-xl border border-espresso/15 bg-cream px-3.5 py-2.5 text-[12.5px] tracking-[0.2em] text-espresso-soft">
                    Enter PIN: ••••
                  </div>
                  <div className="mt-3 flex justify-between text-[12.5px] font-bold">
                    <span className="text-espresso-mute">CANCEL</span>
                    <span className="text-forest">SEND</span>
                  </div>
                </div>
                <div className="mt-14 flex flex-wrap justify-center gap-3 md:mt-12">
                  {['M-PESA', 'VISA', 'MASTERCARD', 'CASH'].map((b) => (
                    <span key={b} className="rounded-full border border-cream/25 px-5 py-2 text-[12px] font-bold tracking-widest2 text-cream/85">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURE GRID ============ */}
      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="And everything around the meal"
            title="Small details, run properly."
            sub="The unglamorous parts of hospitality — taxes, receipts, branches, backups — handled without you thinking about them."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={(i % 4) * 80}>
                <Link href="/features" className="card-surface group block p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep transition-colors group-hover:bg-gold group-hover:text-espresso">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-[18px] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-espresso-soft">{f.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12 text-center">
            <ArrowLink href="/features">Explore every feature in detail</ArrowLink>
          </Reveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <CTABand />
    </>
  );
}
