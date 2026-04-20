import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tozdaght.ma'
  
  // Basic pages
  const routes = [
    '',
    '/about',
    '/contact',
    '/projects',
    '/projects/tiznit/najma',
    '/projects/tiznit/najma/immeuble',
    '/projects/tiznit/najma/terrain',
    '/projects/tiznit/gelmim',
    '/projects/agadir/tilila',
    '/projects/ait-melloul/touhmo',
    '/projects/l9li3a/hay-ta9adom',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
