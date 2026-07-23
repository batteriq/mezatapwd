import Link from 'next/link';
import Reveal from './Reveal';
import { IconArrow, IconWhatsApp } from './Icons';

export const WHATSAPP = 'https://wa.me/254798700024';
export const PHONE_DISPLAY = '0798 700 024';
export const PHONE_TEL = 'tel:+254798700024';
export const EMAIL = 'info@mezatap.co';
export const SUPPORT_EMAIL = 'support@mezatap.co';

/** Section heading block, optionally centered. */
export function SectionHead({ kicker, title, sub, center = true, light = false }) {
  return (
    <Reveal className={`${center ? 'mx-auto text-center' : ''} max-w-2xl mb-16 md:mb-20`}>
      <p className={light ? 'kicker-light' : 'kicker'}>{kicker}</p>
      <h2
        className={`mt-3 font-display text-3xl md:text-[42px] md:leading-[1.12] font-semibold tracking-tight ${
          light ? 'text-cream' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p className={`mt-5 text-[17px] leading-relaxed ${light ? 'text-cream/75' : 'text-espresso-soft'}`}>{sub}</p>
      )}
      <div className={`hairline mt-7 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  );
}

/** Text link with arrow — used under cards/sections to reach dedicated pages. */
export function ArrowLink({ href, children, light = false }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 text-[15px] font-semibold ${
        light ? 'text-gold' : 'text-gold-deep'
      }`}
    >
      {children}
      <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

/** Page banner used on all inner pages — light, airy, arched photo, entrance animation. */
export function PageHero({ image, kicker, title, sub }) {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Ambient gold decorations */}
      <div className="animate-drift pointer-events-none absolute -right-40 -top-48 h-[560px] w-[560px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-16 hidden h-[430px] w-[430px] rounded-full border border-gold/25 lg:block" />

      <div className="container-site relative z-10 grid items-center gap-12 pb-16 pt-32 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pb-24 md:pt-44">
        <div>
          <p className="kicker enter">{kicker}</p>
          <h1 className="enter enter-d1 mt-5 max-w-2xl font-display text-4xl font-bold tracking-tight text-espresso md:text-6xl md:leading-[1.08]">
            {title}
          </h1>
          {sub && (
            <p className="enter enter-d2 mt-7 max-w-xl text-[17px] leading-relaxed text-espresso-soft md:text-lg">
              {sub}
            </p>
          )}
          <div className="enter enter-d3 hairline mt-10" />
        </div>
        <div className="enter enter-d2 relative mx-auto w-full max-w-md">
          <div className="img-arch group relative aspect-[4/5] overflow-hidden shadow-lift">
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover animate-slow-zoom"
            />
            <div className="img-arch absolute inset-0 ring-1 ring-inset ring-espresso/10" />
          </div>
          <div className="img-arch pointer-events-none absolute -inset-3 -z-10 border border-gold/30" />
        </div>
      </div>
    </section>
  );
}

/** Checklist with gold check marks. */
export function Checks({ items, light = false }) {
  return (
    <ul className="mt-7 space-y-4">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3.5">
          <span
            className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${
              light ? 'bg-gold/20 text-gold' : 'bg-gold/15 text-gold-deep'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
              <path d="m5 12.5 4.5 4.5L19 7.5" />
            </svg>
          </span>
          <span className={`text-[15.5px] leading-relaxed ${light ? 'text-cream/80' : 'text-espresso-soft'}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Split section: photo one side, content the other. */
export function Split({ image, alt, flip = false, children, imageAspect = 'aspect-[4/3]' }) {
  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${flip ? '' : ''}`}>
      <Reveal className={flip ? 'md:order-2' : ''}>
        <div className={`group relative overflow-hidden rounded-[24px] shadow-lift ${imageAspect}`}>
          <img
            src={image}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-espresso/10" />
        </div>
      </Reveal>
      <Reveal className={flip ? 'md:order-1' : ''} delay={120}>
        {children}
      </Reveal>
    </div>
  );
}

/** Closing call-to-action band used across pages. */
export function CTABand({ title = 'Ready to modernise your service?', sub = 'Get a free demo at your venue — we set everything up, you watch the first order arrive.' }) {
  return (
    <section className="bg-gradient-to-br from-gold via-[#d3ab61] to-gold-deep py-20 md:py-24">
      <div className="container-site text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold tracking-tight text-espresso md:text-[42px] md:leading-[1.12]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] text-espresso/75">{sub}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener" className="btn-dark">
              <IconWhatsApp className="h-5 w-5" />
              WhatsApp Us
            </a>
            <Link href="/contact" className="btn border border-espresso/70 text-espresso hover:bg-espresso/10">
              Book a Free Demo
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
