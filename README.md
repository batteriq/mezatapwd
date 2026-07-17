# MezaTap — Marketing Website

The public marketing site for [MezaTap](https://mezatap-production-2063.up.railway.app) —
contactless QR ordering & payments for hotels, restaurants and lounges.

**Scan. Order. Pay. Relax.**

## Stack

- **Next.js 14** (App Router, static export) + **Tailwind CSS 3**
- Playfair Display + Inter via `next/font`
- Real photography (Unsplash, free commercial license) in `public/images/`
- Brand logo & favicon set in `public/brand/`
- Custom line-art SVG icon set (`components/Icons.jsx`) — no emoji

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, stats, every section teasing its dedicated page |
| `/why-mezatap` | No-new-hardware promise, same-day setup, reliability |
| `/how-it-works` | The full guest journey in four illustrated steps |
| `/guests` | The guest experience: menus, tracking, payment, reservations, reviews |
| `/team` | Waiter / Cashier / Manager / Owner workspaces (`#waiters`, `#cashiers`, …) |
| `/payments` | M-Pesa STK push, cards, cash, retries, reconciliation, eTIMS |
| `/features` | All twelve features in detail (deep-linkable ids) |
| `/contact` | Channels, what-happens-next, WhatsApp-powered demo request form |

## Develop

```
npm install
npm run dev        # http://localhost:3000
```

## Build & deploy

```
npm run build      # static export to out/
```

`out/` is a fully static site — host on Vercel (zero config), Netlify, GitHub Pages
or any static host. Recommended: connect this repo to Vercel for automatic deploys.

## Contact

- Phone / WhatsApp: 0798 700 024
- Email: swiftsynchsolutions@gmail.com
