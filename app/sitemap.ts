import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/support', '/privacy', '/terms', '/delete-account'].map((path) => ({
    url: `${SITE_URL}${path || '/'}`,
    alternates: { languages: { tr: `${SITE_URL}${path || '/'}`, en: `${SITE_URL}/en${path}` } },
  }));
}
