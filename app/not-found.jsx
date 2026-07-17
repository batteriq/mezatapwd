import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center bg-cream pt-24">
      <div className="container-site text-center">
        <p className="kicker">404</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
          This table doesn't exist.
        </h1>
        <p className="mx-auto mt-5 max-w-md text-[16px] text-espresso-soft">
          The page you're looking for has been cleared away. Let's seat you somewhere better.
        </p>
        <div className="mt-9 flex justify-center gap-4">
          <Link href="/" className="btn-gold">Back to Home</Link>
          <Link href="/contact" className="btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
