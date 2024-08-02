import { chehraziCSV, parseCSV } from '@/lib/csvParser';
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const poems = parseCSV();
  const chehrazi = chehraziCSV();
  return [
    {
      url: 'https://omen-seven.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },{
      url: 'https://omen-seven.vercel.app/poem/',
      lastModified: new Date(),
      // changeFrequency: 'daily',
      priority: .8,
    },{
      url: 'https://omen-seven.vercel.app/chehrazi/',
      lastModified: new Date(),
      // changeFrequency: 'daily',
      priority: .8,
    },
    ...poems.map((data, index) => ({
      url: `https://omen-seven.vercel.app/poem/${index}`,
      lastModified: new Date(),
      // changeFrequency: 'monthly',
      priority: .5,
    })),
    ...chehrazi.map((data, index) => ({
      url: `https://omen-seven.vercel.app/chehrazi/${data.episode}`,
      lastModified: new Date(),
      // changeFrequency: 'monthly',
      priority: .5,
    })),
    ...chehrazi.map((data, index) => data.quoutes.map((quoute, key) => ({
      url: `https://omen-seven.vercel.app/chehrazi/${data.episode}/${key}`,
      lastModified: new Date(),
      priority: .7,
    }))).flat()
  ]
}