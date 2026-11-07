import type { Dict } from '@/content/tr';
import type { Locale } from '@/lib/site';
import DownloadCta from './DownloadCta';
import HeroStage from './HeroStage';

/**
 * Holds the opening sequence until the fridge is on screen. It runs inline so the door is
 * closed from the first paint, and visitors without JavaScript just get the finished scene.
 */
const HOLD_UNTIL_SEEN = `(function(){var s=document.currentScript.parentElement,f=s.querySelector('.hero-fridge');if(!f||!window.IntersectionObserver)return;s.classList.add('hero-wait');var o=new IntersectionObserver(function(e){if(e[0].intersectionRatio>=.35){s.classList.remove('hero-wait');o.disconnect()}},{threshold:.35});o.observe(f)})()`;

/** Always the dark kitchen, even in the light theme: the fridge light is the point. */
export default function Hero({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <section suppressHydrationWarning className="dark relative isolate overflow-hidden bg-[#0d0a07] text-fg">
      <div className="hero-room absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-grain absolute inset-0 -z-10" aria-hidden="true" />

      <div className="mx-auto grid max-w-[88rem] items-center gap-10 px-5 pb-14 pt-9 md:px-10 md:pt-16 xl:min-h-[calc(100svh-4rem)] xl:grid-cols-[1.08fr_1fr] xl:py-10">
        <div className="relative z-20">
          <p className="text-sm font-semibold text-accent">{t.hero.kicker}</p>
          <h1 className="mt-4 text-balance font-display md:mt-5 text-[2.6rem] leading-[0.98] sm:text-[3.5rem] md:text-[4.25rem] xl:text-[clamp(4rem,5.5vw,5.5rem)]">
            {t.hero.titleStart}{' '}
            <em className="hero-lit whitespace-nowrap font-display [font-style:italic]">{t.hero.titleLit}</em>{' '}
            {t.hero.titleEnd}
          </h1>
          <p className="mt-6 max-w-[32rem] text-lg leading-relaxed text-fg-2 md:mt-7 xl:text-xl">{t.hero.body}</p>
          <div className="mt-9">
            <DownloadCta locale={locale} badgeAlt={t.chrome.badgeAlt} qrLabel={t.chrome.qrLabel} qrAlt={t.chrome.qrAlt} />
          </div>
          <p className="mt-5 max-w-md text-sm text-fg-3">{t.hero.note}</p>
        </div>

        <HeroStage t={t.hero} />
      </div>
      <script dangerouslySetInnerHTML={{ __html: HOLD_UNTIL_SEEN }} />
    </section>
  );
}
