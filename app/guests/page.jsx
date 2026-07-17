import { PageHero, Split, Checks, CTABand, SectionHead } from '@/components/UI';
import Reveal from '@/components/Reveal';
import { IconCloche, IconCard, IconCalendar, IconStar, IconReceipt, IconClock } from '@/components/Icons';

export const metadata = {
  title: 'For Your Guests',
  description:
    'What guests experience at a MezaTap venue: instant menus, live order tracking, paying from their own phone, reservations and reviews.',
};

const PERKS = [
  { icon: IconCloche, title: 'A menu that never lies', text: 'Photos, prices and availability update live. If the kitchen runs out, the item disappears — no ordering disappointment.' },
  { icon: IconClock, title: 'Live order tracking', text: 'Confirmed, preparing, on the way. Guests always know where their order is — nobody has to flag down a waiter to ask.' },
  { icon: IconCard, title: 'Pay without waiting', text: 'M-Pesa STK push or card, right from the seat. The bill never becomes the slowest part of the evening.' },
  { icon: IconReceipt, title: 'Receipts, instantly', text: 'A digital KRA eTIMS receipt lands immediately, with a printed copy on request for corporate diners.' },
  { icon: IconCalendar, title: 'Reservations that hold', text: 'Guests book a table for a specific time. You see the day’s bookings at a glance; they walk in to a ready table.' },
  { icon: IconStar, title: 'A voice after the meal', text: 'Ratings and reviews inside the experience — happy guests tell you (and future guests) while it still matters.' },
];

export default function GuestsPage() {
  return (
    <>
      <PageHero
        image="/images/order-food.jpg"
        kicker="For your guests"
        title="Give every table a concierge."
        sub="MezaTap makes your busiest night feel personal — every guest holds the menu, the waiter and the till in their own hand."
      />

      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="The guest experience"
            title="Six things your guests will notice."
            sub="None of them require your guests to learn anything — every step looks and feels like the websites they use every day."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 90}>
                <div className="card-surface h-full p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-semibold">{p.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-espresso-soft">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-parchment py-20 md:py-28">
        <div className="container-site">
          <Split image="/images/guests-coffee.jpg" alt="Friends enjoying drinks together">
            <p className="kicker">Why it matters</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-[40px] md:leading-[1.12]">
              Happier tables spend more — and come back.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed text-espresso-soft">
              When ordering takes seconds instead of minutes, guests order that second round. When paying is
              painless, tables turn faster on your busiest nights. And when the whole visit feels effortless,
              they book again — and bring friends.
            </p>
            <Checks
              items={[
                'Faster ordering means more rounds per table',
                'Self-service payment turns tables quicker at peak hours',
                'In-room QR cards turn hotel rooms into revenue',
                'Reviews build your reputation visit by visit',
              ]}
            />
          </Split>
        </div>
      </section>

      <CTABand title="Let your guests feel it first-hand." sub="Book a free demo — we set up a live table and you order from it yourself." />
    </>
  );
}
