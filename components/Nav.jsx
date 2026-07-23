'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/services', label: 'Services' },
  { href: '/why-mezatap', label: 'Why MezaTap' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/guests', label: 'For Guests' },
  { href: '/team', label: 'Your Team' },
  { href: '/payments', label: 'Payments' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300 ${
        open
          ? 'border-transparent bg-cream'
          : scrolled
            ? 'border-espresso/[0.06] bg-cream/70'
            : 'border-transparent bg-cream/40'
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" aria-label="MezaTap home">
          <img src="/brand/icon.png" alt="" className="h-10 w-10 object-contain" />
          <span className={`font-display text-[23px] font-bold tracking-tight ${scrolled || open ? 'text-espresso' : 'text-espresso'}`}>
            Meza<span className="text-gold-deep">Tap</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[14.5px] font-medium transition-colors ${
                pathname?.startsWith(l.href) ? 'text-gold-deep' : 'text-espresso-soft hover:text-espresso'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold !px-6 !py-2.5 !text-[14px]">
            Book a Free Demo
          </Link>
        </nav>

        <button
          className="tap-target relative z-50 inline-flex items-center gap-2 rounded-full border border-espresso/10 bg-white/80 px-3 text-[12px] font-semibold text-espresso shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span className="relative flex h-4 w-5 flex-col justify-center gap-[4px]" aria-hidden="true">
            <span className={`h-[1.5px] w-5 rounded bg-espresso transition-all duration-300 ${open ? 'translate-y-[5.5px] rotate-45' : ''}`} />
            <span className={`h-[1.5px] w-5 rounded bg-espresso transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-[1.5px] w-5 rounded bg-espresso transition-all duration-300 ${open ? '-translate-y-[5.5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 top-[72px] z-40 overflow-y-auto bg-cream/95 pb-8 pt-2 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-3 opacity-0'
        }`}
      >
        <nav className="container-site flex min-h-full flex-col pt-4" aria-label="Mobile">
          <p className="kicker mb-3">Explore MezaTap</p>
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex min-h-[60px] items-center justify-between border-b border-espresso/10 py-3 font-display text-[22px] font-semibold text-espresso transition-all duration-300 ${
                open ? 'translate-x-0 opacity-100' : '-translate-x-3 opacity-0'
              }`}
              style={{ transitionDelay: open ? `${i * 45 + 50}ms` : '0ms' }}
            >
              {l.label}
              <span className="text-lg font-normal text-gold-deep" aria-hidden="true">→</span>
            </Link>
          ))}
          <div className={`mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-4 transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`} style={{ transitionDelay: open ? '320ms' : '0ms' }}>
            <p className="text-[11px] font-semibold uppercase tracking-widest2 text-gold-deep">One-time installation</p>
            <div className="mt-1 flex items-end justify-between gap-4">
              <p className="font-display text-2xl font-bold text-espresso">KES 8,000</p>
              <p className="max-w-[150px] text-right text-[12px] leading-relaxed text-espresso-soft">Menu, QR codes, staff access and payments included.</p>
            </div>
          </div>
          <Link href="/contact" className="btn-gold mt-5 w-full !py-4 text-center">
            Book a Free Demo
          </Link>
          <p className="mt-8 text-center text-sm text-espresso-mute">
            0798 700 024 · info@mezatap.co
          </p>
        </nav>
      </div>
    </header>
  );
}
