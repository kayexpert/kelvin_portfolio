/** @type {import('next').NextConfig} **/

const createNextIntlPlugin = require("next-intl/plugin");
const withNextIntl = createNextIntlPlugin();

const path = require("path");
// const { defaultLocale, locales } = require('../website/messages/config');
// const { withSentryConfig } = require('@sentry/nextjs')
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig = {
  // i18n: {
  //   locales: ['en', 'ar', 'zh'], // your supported locales
  //   defaultLocale: 'en',
  // },
  images: {
    remotePatterns: [
      

    ],
  },
  env: {
     SERVER_URL: process.env.SERVER_URL,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const moduleExports = withNextIntl(withPWA(nextConfig));

module.exports = moduleExports;
