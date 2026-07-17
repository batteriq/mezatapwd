import Link from 'next/link';
import { IconPhone, IconMail, IconWhatsApp, IconMapPin, IconClock, IconChevronUp } from './Icons';
import { WHATSAPP, PHONE_DISPLAY, PHONE_TEL, EMAIL } from './UI';

const EXPLORE = [
  { href: '/why-mezatap', label: 'Why MezaTap' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/guests', label: 'For Your Guests' },
  { href: '/team', label: 'For Your Team' },
  { href: '/payments', label: 'Payments' },
  { href: '/features', label: 'All Features' },
];

const PLATFORM = [
  { href: '/team#waiters', label: 'Waiter App' },
  { href: '/team#cashiers', label: 'Cashier Command Center' },
  { href: '/team#managers', label: 'Manager Dashboard' },
  { href: '/team#owners', label: 'Owner Analytics' },
  { href: '/features#etims', label: 'KRA eTIMS Receipts' },
  { href: '/features#branding', label: 'White-Label Branding' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70">
      {/* Top: brand + link columns */}
      <div className="container-site grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <img src="/brand/logo.png" alt="MezaTap" className="h-14 w-auto brightness-[1.85]" />
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed">
            Contactless ordering &amp; payments for hotels, restaurants and lounges — built for Kenya,
            running on the devices you already own.
          </p>
          <p className="mt-5 font-display text-[15px] italic text-gold">Scan. Order. Pay. Relax.</p>
          <div className="mt-7 flex gap-3">
            <a href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp"
               className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold">
              <IconWhatsApp className="h-5 w-5" />
            </a>
            <a href={PHONE_TEL} aria-label="Call us"
               className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold">
              <IconPhone className="h-5 w-5" />
            </a>
            <a href={`mailto:${EMAIL}`} aria-label="Email us"
               className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold">
              <IconMail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-display text-lg font-semibold text-cream">Explore</h3>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            {EXPLORE.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-lg font-semibold text-cream">The Platform</h3>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            {PLATFORM.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-gold">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-lg font-semibold text-cream">Talk to Us</h3>
          <ul className="mt-5 space-y-4 text-[14.5px]">
            <li>
              <a href={PHONE_TEL} className="flex items-start gap-3 transition-colors hover:text-gold">
                <IconPhone className="mt-0.5 h-4.5 w-4.5 flex-none text-gold" style={{ height: 18, width: 18 }} />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-start gap-3 break-all transition-colors hover:text-gold">
                <IconMail className="mt-0.5 flex-none text-gold" style={{ height: 18, width: 18 }} />
                {EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <IconMapPin className="mt-0.5 flex-none text-gold" style={{ height: 18, width: 18 }} />
              Nairobi, Kenya — serving venues countrywide
            </li>
            <li className="flex items-start gap-3">
              <IconClock className="mt-0.5 flex-none text-gold" style={{ height: 18, width: 18 }} />
              Mon–Sun · 8:00 AM – 9:00 PM
            </li>
          </ul>
          <Link href="/contact" className="btn-gold mt-7 !px-6 !py-3 !text-[14px]">
            Book a Free Demo
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="container-site flex flex-col items-center justify-between gap-4 py-6 text-[13px] text-cream/50 md:flex-row">
          <p>© 2026 MezaTap. All rights reserved.</p>
          <p>Proudly made in Kenya</p>
          <a href="#top" className="flex items-center gap-1.5 transition-colors hover:text-gold">
            Back to top <IconChevronUp style={{ height: 16, width: 16 }} />
          </a>
        </div>
      </div>
    </footer>
  );
}
