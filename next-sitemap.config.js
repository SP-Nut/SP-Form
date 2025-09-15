/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sp-form-eosin.vercel.app',
  generateRobotsTxt: false, // Use custom robots.txt
  changefreq: 'daily',
  priority: 1.0,
  sitemapSize: 7000,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/admin/*', '/_next/*'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
  ],
  transform: async (config, path) => {
    // Enhanced sitemap with more SEO data
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: [
          {
            href: 'https://sp-form-eosin.vercel.app/',
            hreflang: 'th',
          },
        ],
      };
    }
    
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
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
