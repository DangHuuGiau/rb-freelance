const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin("./lib/i18n/getTranslations.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
};

module.exports = withNextIntl(nextConfig);
