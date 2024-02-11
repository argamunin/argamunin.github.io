/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_HOST:
      process.env.NODE_ENV === 'production'
        ? 'http://localhost:8080'
        : 'http://localhost:8080',
  },
};

export default nextConfig;
