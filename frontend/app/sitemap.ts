import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
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
=======
  const baseUrl = process.env.NEXTAUTH_URL || 'https://tozdaght.ma'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]
>>>>>>> fddb665599c87882d3b8a8caf043033199a7ea8c
}
