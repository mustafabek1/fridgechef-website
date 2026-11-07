import type { ReactNode } from 'react';
import { display, text } from '@/lib/fonts';
import type { Locale } from '@/lib/site';
import { dictionaries } from '@/content';
import Footer from './Footer';
import Header from './Header';

/**
 * Prerendered dark to match the app's default. Before first paint this picks the
 * saved choice, otherwise the system preference, so the theme never flashes.
 */
const themeScript = `try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}`;

export default function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = dictionaries[locale];
  return (
    <html
      lang={locale}
      className={`dark ${display.variable} ${text.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">
        <Header locale={locale} t={t.chrome} />
        <main id="main">{children}</main>
        <Footer locale={locale} t={t.chrome} />
      </body>
    </html>
  );
}
