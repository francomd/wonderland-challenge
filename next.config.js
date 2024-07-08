const withLinaria = require('next-with-linaria');

/** @type {import('next-with-linaria').LinariaConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    config.externals.push('pino-pretty', 'encoding');
    return config;
  },
};

module.exports = withLinaria(nextConfig);
