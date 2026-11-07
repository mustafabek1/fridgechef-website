import { APP_STORE_URL, type Locale } from '@/lib/site';

/** Apple's own badge artwork, unmodified, at least 40px tall, with clear space. */
export default function DownloadCta({
  locale,
  badgeAlt,
  qrLabel,
  qrAlt,
}: {
  locale: Locale;
  badgeAlt: string;
  qrLabel: string;
  qrAlt: string;
}) {
  const width = locale === 'tr' ? 182 : 144;

  return (
    <div className="flex items-center gap-7">
      <a href={APP_STORE_URL[locale]} className="inline-block p-1">
        <img src={`/badges/app-store-${locale}.svg`} alt={badgeAlt} width={width} height={48} className="h-12 w-auto" />
      </a>
      <div className="hidden items-center gap-3 lg:flex">
        <img src={`/qr/app-store-${locale}.svg`} alt={qrAlt} width={72} height={72} className="size-[72px] rounded-lg" />
        <p className="max-w-[9rem] text-sm leading-snug text-fg-2">{qrLabel}</p>
      </div>
    </div>
  );
}
