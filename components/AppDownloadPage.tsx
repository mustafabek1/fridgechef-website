import { headers } from 'next/headers';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Dict } from '@/content/tr';
import { APP_STORE_URL, PLAY_STORE_URL, prefix, type Locale } from '@/lib/site';
import { LogoMark } from './Logo';

/**
 * Short link for the Instagram bio. iPhone and iPad go straight to the App Store,
 * Android to Google Play once PLAY_STORE_URL is set. Everyone else sees this page.
 */
export default async function AppDownloadPage({ locale, t }: { locale: Locale; t: Dict }) {
  const userAgent = (await headers()).get('user-agent') ?? '';
  if (/iPhone|iPad|iPod/.test(userAgent)) redirect(APP_STORE_URL[locale]);
  if (PLAY_STORE_URL && /Android/i.test(userAgent)) redirect(PLAY_STORE_URL);
  const android = /Android/i.test(userAgent);

  const g = t.get;
  const width = locale === 'tr' ? 182 : 144;

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-[-12rem] -z-10 size-[42rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto flex min-h-[calc(100svh-4rem)] max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
        <LogoMark className="size-20 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)]" />
        <p className="mt-7 text-xs font-semibold uppercase tracking-widest text-brand">{g.kicker}</p>
        <h1 className="mt-3 text-balance font-display text-[2.4rem] leading-[1.02] sm:text-5xl">{g.title}</h1>
        <p className="mt-5 max-w-md text-pretty text-lg text-fg-2">{g.body}</p>

        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {g.points.map((point) => (
            <li key={point} className="rounded-full border border-line px-3 py-1 text-sm text-fg-2">
              {point}
            </li>
          ))}
        </ul>

        <a href={APP_STORE_URL[locale]} className="mt-9 inline-block p-1">
          <img src={`/badges/app-store-${locale}.svg`} alt={t.chrome.badgeAlt} width={width} height={48} className="h-14 w-auto" />
        </a>
        <p className="mt-3 text-sm text-fg-3">{g.note}</p>

        <div className="mt-10 hidden flex-col items-center gap-3 rounded-3xl border border-line p-5 md:flex">
          <img src={`/qr/app-store-${locale}.svg`} alt={t.chrome.qrAlt} width={136} height={136} className="size-[136px] rounded-xl" />
          <p className="text-sm text-fg-2">{t.chrome.qrLabel}</p>
        </div>
        <p className="mt-8 text-sm text-fg-3 md:hidden">{android ? g.androidHint : g.phoneHint}</p>

        <Link href={prefix(locale) || '/'} className="mt-8 text-sm font-semibold text-fg-2 underline-offset-4 hover:text-fg hover:underline">
          {g.more} →
        </Link>
      </div>
    </section>
  );
}
