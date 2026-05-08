import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rishikeshriverrafting.in'
  const lastModified = new Date()

  const routes = [
    '',
    '/rafting',
    '/extreme',
    '/camps',
    '/tactical',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}
