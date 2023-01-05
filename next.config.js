/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/api/auth/callback",
        destination: "/dashboard", 
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
