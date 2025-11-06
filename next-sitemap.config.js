/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://localhost:3000',

  generateRobotsTxt: true,
  generateIndexSitemap: false,

  additionalPaths: async config => [
    await config.transform(config, '/'),
    await config.transform(config, '/it'),
    await config.transform(config, '/en'),
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/public/', '/i18n/'],
      },
    ],
    additionalSitemaps: [
      `${process.env.SITE_URL || 'https://localhost:3000'}/sitemap.xml`,
    ],
  },
};

export default config;
