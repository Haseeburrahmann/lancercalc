/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export - perfect for Vercel + fast load times
  async redirects() {
    return [
      {
        source: "/freelance-tax-calculatorGuide",
        destination: "/blog/self-employment-tax-guide-2025",
        permanent: true, // 301 redirect — preserves SEO value
      },
    ];
  },
};

export default nextConfig;
