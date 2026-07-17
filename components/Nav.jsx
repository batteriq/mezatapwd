'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/why-mezatap', label: 'Why MezaTap' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/guests', label: 'For Guests' },
  { href: '/team', label: 'Your Team' },
  { href: '/payments', label: 'Payments' },
  { href: '/features', label: 'Features' },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-cream/95 shadow-card backdrop-blur-md' : 'bg-transparent'
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
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span className={`h-[2px] w-6 rounded bg-espresso transition-all duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-[2px] w-6 rounded bg-espresso transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`h-[2px] w-6 rounded bg-espresso transition-all duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 top-[72px] z-40 bg-cream transition-all duration-300 lg:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="container-site flex flex-col pt-6" aria-label="Mobile">
          {LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="border-b border-espresso/10 py-5 font-display text-2xl font-semibold text-espresso"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold mt-8 w-full !py-4 text-center">
            Book a Free Demo
          </Link>
          <p className="mt-8 text-center text-sm text-espresso-mute">
            0798 700 024 · swiftsynchsolutions@gmail.com
          </p>
        </nav>
      </div>
    </header>
  );
}
