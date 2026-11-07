import Link from 'next/link';
import { APP_STORE_URL, SUPPORT_EMAIL, prefix, type Locale } from '@/lib/site';
import type { Dict } from '@/content/tr';
import { LogoMark } from './Logo';

export default function Footer({ locale, t }: { locale: Locale; t: Dict['chrome'] }) {
  const p = prefix(locale);
  const linkClass = 'text-fg-2 transition-colors hover:text-fg';

  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-[88rem] gap-10 px-5 py-14 md:grid-cols-[2fr_1fr_1fr] md:px-10">
        <div>
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <span className="text-[1.05rem] font-semibold tracking-tight">FridgeChef</span>
          </div>
          <p className="mt-4 max-w-sm text-fg-2">{t.footerLine}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t.footerProduct}</h2>
          <ul className="mt-3 space-y-2">
            <li><Link className={linkClass} href={`${p}/#how`}>{t.navHow}</Link></li>
            <li><Link className={linkClass} href={`${p}/#pricing`}>{t.navPricing}</Link></li>
            <li><a className={linkClass} href={APP_STORE_URL[locale]}>App Store</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold">{t.footerHelp}</h2>
          <ul className="mt-3 space-y-2">
            <li><Link className={linkClass} href={`${p}/support`}>{t.navSupport}</Link></li>
            <li><Link className={linkClass} href={`${p}/privacy`}>{t.navPrivacy}</Link></li>
            <li><Link className={linkClass} href={`${p}/terms`}>{t.navTerms}</Link></li>
            <li><a className={linkClass} href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-[88rem] space-y-2 border-t border-line px-5 py-6 text-[0.8rem] leading-relaxed text-fg-3 md:px-10">
        <p>{t.medical}</p>
        <p>{t.appleCredit}</p>
        <p>© {new Date().getFullYear()} FridgeChef</p>
      </div>
    </footer>
  );
}
