import { PageHero, CTABand, SectionHead } from '@/components/UI';
import Reveal from '@/components/Reveal';
import {
  IconReceipt, IconPrinter, IconBed, IconBuilding, IconPalette, IconChart,
  IconShield, IconSignal, IconCalendar, IconStar, IconBell, IconQr,
} from '@/components/Icons';

export const metadata = {
  title: 'Features',
  description:
    'Every MezaTap feature in detail — eTIMS receipts, printing, room charging, multi-branch, white-label branding, analytics, reservations, reviews, security and more.',
};

const FEATURES = [
  {
    id: 'etims',
    icon: IconReceipt,
    title: 'KRA eTIMS tax receipts',
    text: 'Every completed sale generates a compliant electronic tax receipt automatically — no manual entry, no end-of-month panic. Your records stay clean and audit-ready by default.',
  },
  {
    id: 'printing',
    icon: IconPrinter,
    title: 'Receipt printing',
    text: 'Guests who want paper get paper. MezaTap prints to the standard thermal printer at your counter — the one you already own — alongside the digital receipt on the guest’s phone.',
  },
  {
    id: 'room-charge',
    icon: IconBed,
    title: 'Charge to room',
    text: 'For hotels: guests order from the pool or their room and bill it straight to their room account. Integrates with your property management system so checkout stays accurate.',
  },
  {
    id: 'multi-branch',
    icon: IconBuilding,
    title: 'Multi-branch',
    text: 'Run every location under one account. Each branch keeps its own menu, staff and payments, while owners compare performance side by side on one dashboard.',
  },
  {
    id: 'branding',
    icon: IconPalette,
    title: 'White-label branding',
    text: 'Your guests see your name, your colors and your logo — never ours. The ordering experience feels like an extension of your venue, because it is.',
  },
  {
    id: 'analytics',
    icon: IconChart,
    title: 'Sales analytics',
    text: 'Top sellers, slow movers, busiest hours, payment-method breakdowns — clear charts that turn gut feelings into decisions you can defend.',
  },
  {
    id: 'reservations',
    icon: IconCalendar,
    title: 'Time-based reservations',
    text: 'Guests book a table for a specific time slot. Your team sees the day’s bookings at a glance and the floor plan stays under control on busy nights.',
  },
  {
    id: 'reviews',
    icon: IconStar,
    title: 'Reviews & ratings',
    text: 'After the meal, guests rate the experience right where they ordered. You hear the truth early — and future guests see social proof that fills tables.',
  },
  {
    id: 'notifications',
    icon: IconBell,
    title: 'Staff push notifications',
    text: 'New orders and payment events reach the right staff member’s device instantly — with a chime a busy waiter can hear over a full dining room.',
  },
  {
    id: 'qr',
    icon: IconQr,
    title: 'Smart QR cards',
    text: 'Each card is bound to its table, room or seat. Orders arrive labeled with their origin, so food finds its table without a single question asked.',
  },
  {
    id: 'security',
    icon: IconShield,
    title: 'Serious security',
    text: 'Role-based access, PIN logins, encrypted payment credentials and automatic nightly backups. Your data is guarded like the money it represents.',
  },
  {
    id: 'resilience',
    icon: IconSignal,
    title: 'Built for real networks',
    text: 'Venue Wi-Fi has bad moments. When the connection blips, service keeps flowing — and everything syncs back the moment you’re online again.',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        image="/images/kitchen.jpg"
        kicker="Features"
        title="Everything around the meal, run properly."
        sub="Taxes, receipts, branches, bookings, backups — the unglamorous machinery of hospitality, handled so well you stop thinking about it."
      />

      <section className="py-20 md:py-28">
        <div className="container-site">
          <SectionHead
            kicker="The full toolkit"
            title="Twelve features. One calm operation."
            sub="Each one exists because a real venue asked for it — not because a brochure needed another bullet point."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal key={f.id} delay={(i % 3) * 90}>
                <div id={f.id} className="card-surface h-full scroll-mt-28 p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                    <f.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-[20px] font-semibold">{f.title}</h3>
                  <p className="mt-2.5 text-[14.5px] leading-relaxed text-espresso-soft">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand title="Pick the three features you doubt — we'll demo those first." />
    </>
  );
}
