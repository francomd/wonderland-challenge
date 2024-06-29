const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },
};

module.exports = withLinaria(nextConfig);
