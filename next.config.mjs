/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // static export — hostable anywhere (Vercel, Pages, Railway)
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
