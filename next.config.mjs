/** @type {import('next').NextConfig} */
const nextConfig = {
  // On Vercel, run Next natively (pages are prerendered anyway).
  // For static hosts (GitHub Pages etc.): STATIC_EXPORT=1 npm run build → out/
  ...(process.env.STATIC_EXPORT ? { output: 'export' } : {}),
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
