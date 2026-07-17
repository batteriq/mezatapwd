import Link from 'next/link';
import { PageHero, Checks, CTABand, SectionHead, ArrowLink } from '@/components/UI';
import Reveal from '@/components/Reveal';
import { IconQr, IconBed, IconCalendar, IconWallet, IconStar, IconChart } from '@/components/Icons';

export const metadata = {
  title: 'Our Services',
  description:
    'The MezaTap hospitality suite — QR table ordering at its heart, surrounded by in-room dining, reservations, payments, guest feedback and business insights.',
};

const PILLARS = [
  {
    id: 'room-service',
    icon: IconBed,
    img: '/images/owner-hotel.jpg',
    title: 'In-Room Dining & Room Charge',
    text: 'For hotels and resorts: guests order from their room, the pool or the beach — and can bill it straight to their room account. Room service without the phone calls.',
  },
  {
    id: 'reservations',
    icon: IconCalendar,
    img: '/images/reservation-table.jpg',
    title: 'Reservations & Table Booking',
    text: 'Guests book a table for the time they want; your team sees the day at a glance. Busy nights stay organised, and the best tables go to the guests who planned ahead.',
  },
  {
    id: 'payments-suite',
    icon: IconWallet,
    img: '/images/cashier.jpg',
    title: 'Payments & Reconciliation',
    text: 'M-Pesa, card and cash in one flow — confirmed automatically, receipted compliantly, and balanced at the end of every day without a calculator in sight.',
  },
  {
    id: 'feedback',
    icon: IconStar,
    img: '/images/guests-coffee.jpg',
    title: 'Reviews & Guest Feedback',
    text: 'After the meal, guests rate the experience right where they ordered. You hear the truth early, fix what needs fixing, and build a reputation that fills tables.',
  },
  {
    id: 'insights',
    icon: IconChart,
    img: '/images/manager-analytics.jpg',
    title: 'Insights & Multi-Branch Control',
    text: 'Revenue, top sellers and busy hours — per branch, side by side, from anywhere. The whole business on one calm dashboard built for owners, not accountants.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image="/images/hero-restaurant.jpg"
        kicker="Our services"
        title="One platform. The whole guest experience."
        sub="At the heart of MezaTap is the tap — and around it, every service a modern venue needs to welcome, serve, charge and understand its guests."
      />

      {/* ===== Flagship: the tap ===== */}
      <section className="py-24 md:py-32">
        <div className="container-site">
          <div className="grid items-center gap-14 md:grid-cols-2 md:gap-24" id="ordering">
            <Reveal>
              <div className="img-arch group relative aspect-[4/5] overflow-hidden shadow-lift">
                <img src="/images/scan-phone.jpg" alt="A guest ordering with a tap"
                     className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="kicker">The main event</p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight md:text-[44px] md:leading-[1.1]">
                Dine-in QR ordering — <span className="italic text-gold-deep">the tap</span>.
              </h2>
              <p className="mt-6 text-[17px] leading-relaxed text-espresso-soft">
                This is what your guests will talk about: sit down, tap the card, and the whole
                restaurant is in their hand. It works at the table, by the pool, on the rooftop —
                anywhere you can place a small card, you can serve.
              </p>
              <Checks
                items={[
                  'Restaurants, cafés, lounges and bars',
                  'Menu, ordering and payment in one seamless flow',
                  'The kitchen and waiter see every order the second it’s placed',
                ]}
              />
              <div className="mt-10">
                <ArrowLink href="/how-it-works">See the tap in action</ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== The supporting suite ===== */}
      <section className="bg-parchment py-24 md:py-32">
        <div className="container-site">
          <SectionHead
            kicker="Around the tap"
            title="Everything else a great venue needs."
            sub="Five more services, already inside the same platform — no add-ons to buy, no extra systems to learn."
          />
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 100}>
                <div id={p.id} className="card-surface group h-full scroll-mt-28 overflow-hidden">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={p.img} alt={p.title}
                         className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
                    <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-full bg-cream/95 text-gold-deep">
                      <p.icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-[20px] font-semibold">{p.title}</h3>
                    <p className="mt-2.5 text-[14px] leading-relaxed text-espresso-soft">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            {/* Closing card pointing back to the demo */}
            <Reveal delay={200}>
              <Link href="/contact" className="group flex h-full min-h-[280px] flex-col justify-between rounded-card bg-espresso p-7 text-cream shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div>
                  <p className="kicker-light">All of it, together</p>
                  <h3 className="mt-3 font-display text-[24px] font-semibold leading-snug">
                    One platform. One setup. One partner.
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-cream/70">
                    Every service above is switched on the day we set you up — use what fits your venue today, grow into the rest.
                  </p>
                </div>
                <p className="mt-6 flex items-center gap-2 text-[15px] font-semibold text-gold">
                  Book a free demo
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1">
                    <path d="M4 12h16m0 0-6-6m6 6-6 6" />
                  </svg>
                </p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand title="Start with the tap. Grow into the suite." sub="One free demo shows you all of it — at your venue, on your devices." />
    </>
  );
}
