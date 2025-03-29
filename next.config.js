/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      enabled: false, // Отключаем Turbopack
    },
  },
};

module.exports = nextConfig;