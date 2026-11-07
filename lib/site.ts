/**
 * Facts that appear on more than one page live here, so a change only has to
 * be made once. Values come from the app repo and the App Store listing.
 */
export type Locale = 'tr' | 'en';

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fridgechef-website.vercel.app'
).replace(/\/$/, '');

export const APP_STORE_ID = '6755315106';

export const APP_STORE_URL: Record<Locale, string> = {
  tr: `https://apps.apple.com/tr/app/fridgechef/id${APP_STORE_ID}`,
  en: `https://apps.apple.com/app/fridgechef/id${APP_STORE_ID}`,
};

/**
 * Google Play listing. The app is not on Play yet (com.mustafabek.fridgechef returns 404).
 * Once it is live, set this and /app-download sends Android phones straight to Play.
 */
export const PLAY_STORE_URL: string | null = null;

export const SUPPORT_EMAIL = 'support@fridgechef.app';
export const PRIVACY_EMAIL = 'privacy@fridgechef.app';

/** Same values as SUBSCRIPTION_PLANS in the app's tokenService.ts. */
export const PRICES = {
  premium: { tr: '₺299,99', en: '₺299.99' },
  pro: { tr: '₺799,99', en: '₺799.99' },
} as const;

export const LEGAL_UPDATED: Record<Locale, string> = {
  tr: '6 Kasım 2026',
  en: 'November 6, 2026',
};

/** Prefix for internal links: Turkish lives at the root, English under /en. */
export const prefix = (locale: Locale) => (locale === 'en' ? '/en' : '');
