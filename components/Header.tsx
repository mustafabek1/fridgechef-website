'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { APP_STORE_URL, prefix, type Locale } from '@/lib/site';
import type { Dict } from '@/content/tr';
import { LogoMark } from './Logo';

function toggleTheme() {
  const isDark = document.documentElement.classList.toggle('dark');
  try {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  } catch {}
}

function ThemeButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      className="grid size-11 place-items-center rounded-full text-fg-2 transition-colors hover:text-fg"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="hidden size-5 dark:block" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1" />
      </svg>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="size-5 dark:hidden" aria-hidden="true">
        <path d="M20.4 14.6A8.5 8.5 0 0 1 9.4 3.6a8.5 8.5 0 1 0 11 11Z" />
      </svg>
    </button>
  );
}

export default function Header({ locale, t }: { locale: Locale; t: Dict['chrome'] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const home = prefix(locale) || '/';
  const links = [
    { href: `${prefix(locale)}/#how`, label: t.navHow },
    { href: `${prefix(locale)}/#track`, label: t.navTrack },
    { href: `${prefix(locale)}/#plan`, label: t.navPlan },
    { href: `${prefix(locale)}/#pricing`, label: t.navPricing },
    { href: `${prefix(locale)}/support`, label: t.navSupport },
  ];

  const otherPath =
    locale === 'tr' ? `/en${pathname === '/' ? '' : pathname}` : pathname.replace(/^\/en/, '') || '/';

  const languageLink = (
    <Link
      href={otherPath}
      hrefLang={locale === 'tr' ? 'en' : 'tr'}
      aria-label={t.switchLanguageLabel}
      className="grid h-11 min-w-11 place-items-center rounded-full text-sm font-semibold text-fg-2 transition-colors hover:text-fg"
    >
      {t.switchLanguage}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
      <a
        href="#main"
        className="absolute -top-20 left-4 rounded-full bg-brand px-4 py-2 font-semibold text-ink focus:top-3"
      >
        {t.skip}
      </a>
      <nav aria-label={t.navLabel} className="mx-auto flex h-16 max-w-[88rem] items-center justify-between gap-4 px-5 md:px-10">
        <Link href={home} className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="text-[1.05rem] font-semibold tracking-tight">FridgeChef</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm text-fg-2 transition-colors hover:text-fg">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          {languageLink}
          <ThemeButton label={t.themeLabel} />
          <a
            href={APP_STORE_URL[locale]}
            className="ml-2 hidden h-10 items-center rounded-full bg-brand px-5 text-sm font-semibold text-ink transition-opacity hover:opacity-85 sm:flex"
          >
            {t.download}
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.menuClose : t.menuOpen}
            className="grid size-11 place-items-center text-fg lg:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-6" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-nav" className="border-t border-line px-5 pb-5 pt-2 lg:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg">
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-2 sm:hidden">
            <a href={APP_STORE_URL[locale]} className="flex h-12 items-center justify-center rounded-full bg-brand font-semibold text-ink">
              {t.download}
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
