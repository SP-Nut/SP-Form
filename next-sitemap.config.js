/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sp-form-eosin.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 1.0,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/_next/', '/api/']
      }
    ],
    additionalSitemaps: [
      'https://sp-form-eosin.vercel.app/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: 'weekly',
      priority: 1.0,
      lastmod: new Date().toISOString(),
      alternateRefs: [
        {
          href: `https://sp-form-eosin.vercel.app${path}`,
          hreflang: 'th'
        }
      ]
    }
  }
}
