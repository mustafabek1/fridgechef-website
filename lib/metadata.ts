import type { Metadata, Viewport } from 'next';
import { APP_STORE_ID, SITE_URL, type Locale } from './site';

const ogLocale: Record<Locale, string> = { tr: 'tr_TR', en: 'en_US' };

/** `path` is the locale-free route: '' for home, '/privacy', and so on. */
export function pageMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
): Metadata {
  const tr = path || '/';
  const en = `/en${path}`;
  const canonical = locale === 'tr' ? tr : en;

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical,
      languages: { tr, en, 'x-default': tr },
    },
    itunes: { appId: APP_STORE_ID },
    openGraph: {
      title,
      description,
      type: 'website',
      siteName: 'FridgeChef',
      url: canonical,
      locale: ogLocale[locale],
      images: [{ url: `/og-${locale}.png`, width: 1200, height: 630, alt: 'FridgeChef' }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [`/og-${locale}.png`] },
  };
}

export const siteViewport: Viewport = {
  themeColor: '#14100c',
};
