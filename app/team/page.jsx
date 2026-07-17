import { PageHero, Checks, CTABand } from '@/components/UI';
import Reveal from '@/components/Reveal';
import { IconBell, IconWallet, IconChart, IconBuilding, IconRefresh, IconUsers } from '@/components/Icons';

export const metadata = {
  title: 'For Your Team',
  description:
    'Purpose-built workspaces for waiters, cashiers, managers and owners — each designed around a real shift.',
};

const ROLES = [
  {
    id: 'waiters',
    icon: IconBell,
    img: '/images/waiter.jpg',
    kicker: 'The waiter app',
    title: 'Waiters serve — they stop relaying.',
    text: `Every new order arrives with a chime and a push notification, labeled with its table. A live queue
    shows what's new, what's in the kitchen and what's ready to serve — so waiters walk to a table only when
    there's a reason to. Less running, more serving, calmer shifts.`,
    points: [
      'New-order chime and push alerts on their own phone',
      'Live queue of every table’s status',
      'Order details always at hand — no misheard items',
      'PIN login — a waiter is working in five minutes',
    ],
  },
  {
    id: 'cashiers',
    icon: IconWallet,
    img: '/images/cashier.jpg',
    kicker: 'The cashier command center',
    title: 'Every shilling, one screen.',
    text: `M-Pesa, card and cash payments flow into a single live queue. Automatic confirmations mean nobody
    reads codes off a guest's phone. If an M-Pesa payment fails, one tap sends the guest a fresh prompt to
    retry. At close of day, the reconciliation report has already balanced itself.`,
    points: [
      'One queue for M-Pesa, card and cash',
      'Automatic payment confirmation',
      'One-tap retry prompt for failed payments',
      'End-of-day reconciliation, done automatically',
    ],
  },
  {
    id: 'managers',
    icon: IconChart,
    img: '/images/manager-analytics.jpg',
    kicker: 'The manager dashboard',
    title: 'Run the floor without leaving it.',
    text: `Change a price, add a dish, mark an item out of stock — live in seconds, no reprinting menus.
    Create staff accounts with PIN logins and see who's on shift. Sales analytics show what's selling,
    what's slow and when your rush hours actually are.`,
    points: [
      'Menu and price changes go live instantly',
      'Staff accounts, roles and PIN logins',
      'Top sellers, slow movers, busiest hours',
      'Full audit trail of who did what',
    ],
  },
  {
    id: 'owners',
    icon: IconBuilding,
    img: '/images/owner-hotel.jpg',
    kicker: 'The owner view',
    title: 'Know your business from anywhere.',
    text: `Revenue today, this week, this month — per branch, side by side. Top items, order volumes and
    payment breakdowns on one clean dashboard that works on your phone at the beach as well as the office.
    You no longer need to be in the building to know what's happening in it.`,
    points: [
      'Live revenue across every branch',
      'Branch comparison at a glance',
      'Payment method breakdowns — M-Pesa vs card vs cash',
      'Works on any device, anywhere',
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        image="/images/waiter.jpg"
        kicker="For your team"
        title="Four roles. Four purpose-built workspaces."
        sub="MezaTap doesn't give your staff 'software' — it gives each person exactly the screen their shift needs, and nothing else."
      />

      <section className="py-20 md:py-28">
        <div className="container-site space-y-24 md:space-y-32">
          {ROLES.map((r, i) => (
            <div key={r.id} id={r.id} className="scroll-mt-28 grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal className={i % 2 ? 'md:order-2' : ''}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-lift">
                  <img src={r.img} alt={r.kicker}
                       className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 via-transparent to-transparent" />
                  <span className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-full bg-cream/95 px-4 py-2 text-[13px] font-bold text-espresso backdrop-blur-sm">
                    <r.icon className="h-4.5 w-4.5 text-gold-deep" style={{ height: 18, width: 18 }} />
                    {r.kicker}
                  </span>
                </div>
              </Reveal>
              <Reveal className={i % 2 ? 'md:order-1' : ''} delay={120}>
                <p className="kicker">{r.kicker}</p>
                <h2 className="mt-3 font-display text-[28px] font-semibold tracking-tight md:text-[36px] md:leading-[1.15]">
                  {r.title}
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-espresso-soft">{r.text}</p>
                <Checks items={r.points} />
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Push + training note */}
      <section className="bg-parchment py-16 md:py-20">
        <div className="container-site grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="card-surface flex h-full gap-5 p-7">
              <span className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-gold/15 p-3 text-gold-deep">
                <IconRefresh className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-[20px] font-semibold">Live across every device</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-espresso-soft">
                  An order placed at table 12 appears on the waiter's phone, the kitchen screen and the
                  cashier's queue in the same second. Everyone works from one truth.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-surface flex h-full gap-5 p-7">
              <span className="flex h-13 w-13 flex-none items-center justify-center rounded-2xl bg-gold/15 p-3 text-gold-deep">
                <IconUsers className="h-7 w-7" />
              </span>
              <div>
                <h3 className="font-display text-[20px] font-semibold">Five-minute training</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-espresso-soft">
                  If your staff can use WhatsApp, they can use MezaTap. Each role sees only what it needs —
                  there is nothing to memorize and nothing to break.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand title="Put it in your team's hands for a day." />
    </>
  );
}
