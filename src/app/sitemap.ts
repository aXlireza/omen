import { MetadataRoute } from 'next'
import { parseCSV } from '../../lib/csvParser';
 
export default function sitemap(): MetadataRoute.Sitemap {
  const poems = parseCSV();
  const poemsSitemap = poems.map((data, index) => ({
    url: `https://omen-seven.vercel.app/poem/${index}`,
    lastModified: new Date(),
    // changeFrequency: 'monthly',
    priority: 2,
  }))
  return [
    {
      url: 'https://omen-seven.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...poemsSitemap
  ]
}