import { Playfair_Display, Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

export const metadata = {
  title: {
    default: 'MezaTap — Scan. Order. Pay. Relax.',
    template: '%s · MezaTap',
  },
  description:
    'Contactless QR ordering and payments for hotels, restaurants and lounges in Kenya. Guests order and pay from their own phones — no app, no new equipment, money straight to your account.',
  icons: {
    icon: [
      { url: '/brand/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/brand/apple-touch-icon.png',
  },
  openGraph: {
    title: 'MezaTap — Scan. Order. Pay. Relax.',
    description:
      'Guests scan a QR code, order and pay with M-Pesa or card. Built for Kenyan hospitality — no app, no new hardware.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="top" className={`${display.variable} ${sans.variable}`}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
