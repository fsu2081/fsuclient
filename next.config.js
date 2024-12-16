/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["localhost", "placehold.co", "img.daisyui.com"],
  },
}

module.exports = nextConfig
