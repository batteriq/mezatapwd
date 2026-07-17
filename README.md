# MezaTap — Marketing Website

The public marketing site for [MezaTap](https://mezatap-production-2063.up.railway.app) —
contactless QR ordering & payments for hotels, restaurants and lounges.

**Scan. Order. Pay. Relax.**

## Stack

Pure static site — no build step, no framework:

- `index.html` — single-page site (hero, how-it-works, features, payments, contact)
- `css/styles.css` — Boutique Fintech design system (cream / espresso / gold, Playfair Display + Inter)
- `js/main.js` — mobile menu, scroll reveal, contact form → WhatsApp
- `assets/` — logo, favicon set (transparent versions generated from the brand PNGs)

## Run locally

Open `index.html` directly, or serve it:

```
npx http-server -p 8080
```

## Deploy

Host anywhere that serves static files (GitHub Pages, Netlify, Vercel, Railway).
For GitHub Pages: Settings → Pages → deploy from `main` branch, root folder.

## Contact

- Phone / WhatsApp: 0798 700 024
- Email: swiftsynchsolutions@gmail.com
