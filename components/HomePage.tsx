import type { Dict } from '@/content/tr';
import { PRICES, type Locale } from '@/lib/site';
import { CalorieRing, CreditChip, MacroBar, UiChip, UiPanel } from './AppUi';
import Faq from './Faq';
import FridgeDemo from './FridgeDemo';
import Hero from './Hero';

const wrap = 'mx-auto max-w-[88rem] px-5 md:px-10';
const sectionY = 'py-20 md:py-32';
const h2 = 'font-display text-[clamp(2.3rem,5vw,4.5rem)] leading-[1.03]';
const kicker = 'text-sm font-semibold text-accent';

export default function HomePage({ locale, t }: { locale: Locale; t: Dict }) {
  return (
    <>
      <Hero locale={locale} t={t} />

      {/* The idea */}
      <section className="border-y border-line bg-raised">
        <div className={`${wrap} py-20 md:py-28`}>
          <h2 className="reveal max-w-5xl text-balance font-display text-[clamp(1.9rem,3.9vw,3.5rem)] leading-[1.12]">
            {t.loop.statement}
          </h2>
          <ol className="mt-12 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {t.loop.steps.map((s, i) => (
              <li key={s.title} className="border-t border-fg/25 pt-3">
                <span className="text-sm tabular-nums text-fg-3">{i + 1}</span>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 leading-relaxed text-fg-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Worked example */}
      <section id="how" className={`${wrap} ${sectionY}`}>
        <div className="mb-10 max-w-3xl">
          <p className={kicker}>{t.demo.kicker}</p>
          <h2 className={`${h2} mt-3`}>{t.demo.title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-fg-2">{t.demo.body}</p>
        </div>
        <FridgeDemo t={t.demo} />
      </section>

      {/* Inputs */}
      <section className={`${wrap} pb-20 md:pb-32`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
          <div>
            <p className={kicker}>{t.inputs.kicker}</p>
            <h2 className={`${h2} mt-3`}>{t.inputs.title}</h2>
            <dl className="mt-10 border-t border-line">
              {t.inputs.rows.map((r) => (
                <div key={r.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[1fr_auto] sm:gap-x-6">
                  <dt className="text-lg font-semibold">{r.title}</dt>
                  <dd className="text-sm font-semibold text-accent sm:row-span-2">{r.cost}</dd>
                  <dd className="leading-relaxed text-fg-2">{r.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <UiPanel className="reveal self-start">
            <p className="text-sm font-semibold">{t.ui.textLabel}</p>
            <div className="mt-2 flex min-h-24 items-end justify-between gap-3 rounded-2xl border border-ui-line bg-ui-card p-3.5">
              <p className="self-start text-ui-fg-2">{t.ui.textPlaceholder}</p>
              <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#14100c" strokeWidth="2" strokeLinecap="round" className="size-5">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                </svg>
              </span>
            </div>
            <p className="mt-6 text-sm font-semibold">{t.ui.goalTitle}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.ui.goals.map((g, i) => <UiChip key={g} active={i === 2}>{g}</UiChip>)}
            </div>
            <p className="mt-6 text-sm font-semibold">{t.ui.filtersTitle}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.ui.filters.map((f) => <UiChip key={f}>{f}</UiChip>)}
            </div>
            <div className="mt-6 rounded-xl border border-ui-line bg-ui-card px-3.5 py-3 text-sm text-ui-fg-2">
              {t.ui.hintBanner}
            </div>
          </UiPanel>
        </div>
      </section>

      {/* Tracking */}
      <section id="track" className="border-y border-line bg-raised">
        <div className={`${wrap} ${sectionY} grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20`}>
          <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1">
            <UiPanel className="sm:col-span-2">
              <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
                <CalorieRing goal={1700} eaten={860} leftLabel={t.ui.kcalLeft} />
                <div className="w-full space-y-3">
                  <MacroBar label={t.ui.protein} value={62} goal={120} color="#4ecdc4" />
                  <MacroBar label={t.ui.carbs} value={84} goal={160} color="#74c0fc" />
                  <MacroBar label={t.ui.fat} value={31} goal={55} color="#ffc078" />
                  <MacroBar label={t.ui.fiber} value={14} goal={30} color="#69db7c" />
                </div>
              </div>
            </UiPanel>

            <div className="rounded-3xl bg-brand p-5 text-ink">
              <p className="text-xs font-semibold uppercase tracking-widest">{t.ui.photoKicker}</p>
              <p className="mt-2 text-xl font-extrabold leading-tight">{t.ui.photoTitle}</p>
              <p className="mt-2 text-sm leading-relaxed">{t.ui.photoBody}</p>
            </div>

            <UiPanel>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">{t.ui.reviewKicker}</p>
              <ul className="mt-3 divide-y divide-ui-line text-sm">
                {t.ui.reviewItems.map((item) => (
                  <li key={item.name} className="flex justify-between gap-3 py-2">
                    <span>{item.name}</span>
                    <span className="whitespace-nowrap text-ui-fg-2">{item.amount}</span>
                  </li>
                ))}
              </ul>
            </UiPanel>
          </div>

          <div className="order-1 lg:order-2">
            <p className={kicker}>{t.track.kicker}</p>
            <h2 className={`${h2} mt-3`}>{t.track.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-2">{t.track.body}</p>
            <ul className="mt-8 space-y-3">
              {t.track.points.map((p) => (
                <li key={p} className="flex gap-3 leading-relaxed text-fg-2">
                  <span className="mt-[0.62rem] h-px w-4 shrink-0 bg-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-fg-3">{t.track.note}</p>
          </div>
        </div>
      </section>

      {/* Diet plan */}
      <section id="plan" className={`${wrap} ${sectionY}`}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20">
          <div>
            <p className={kicker}>{t.plan.kicker}</p>
            <h2 className={`${h2} mt-3`}>{t.plan.title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-fg-2">{t.plan.body}</p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <UiPanel className="self-start lg:sticky lg:top-24">
            <div className="flex items-center justify-between gap-3">
              <p className="text-lg font-extrabold">{t.ui.planToday}</p>
              <span className="text-sm text-ui-fg-2">{t.ui.planProgress}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {t.ui.planMeals.map((m) => (
                <li key={m.meal} className="flex items-center justify-between gap-3 rounded-2xl bg-ui-card p-3.5">
                  <div>
                    <p className="text-[0.8rem] text-ui-fg-2">{m.meal}</p>
                    <p className="font-semibold">{m.name}</p>
                  </div>
                  <span className="whitespace-nowrap text-sm text-ui-fg-2">{m.kcal} kcal</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              {t.ui.budgetTiers.map((b, i) => <UiChip key={b} active={i === 0}>{b}</UiChip>)}
            </div>
          </UiPanel>

          <dl className="border-t border-line">
            {t.plan.rows.map((r) => (
              <div key={r.title} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                <dt className="font-semibold">{r.title}</dt>
                <dd className="leading-relaxed text-fg-2">{r.body}</dd>
              </div>
            ))}
          </dl>
        </div>

        <p className="mt-10 max-w-4xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-fg-2">{t.plan.disclaimer}</p>
      </section>

      {/* Privacy and honesty */}
      <section className="border-y border-line bg-raised">
        <div className={`${wrap} grid gap-10 py-20 md:py-28 lg:grid-cols-[1fr_1.4fr] lg:gap-20`}>
          <h2 className="font-display text-[clamp(2rem,3.9vw,3.5rem)] leading-[1.06]">{t.honest.title}</h2>
          <div>
            <p className="text-lg leading-relaxed text-fg-2">{t.honest.body}</p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {t.honest.points.map((p) => (
                <li key={p.title}>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 leading-relaxed text-fg-2">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={`${wrap} ${sectionY}`}>
        <p className={kicker}>{t.pricing.kicker}</p>
        <h2 className={`${h2} mt-3 max-w-3xl`}>{t.pricing.title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-fg-2">{t.pricing.body}</p>

        <div className="mt-12 grid border-y border-line md:grid-cols-3 md:divide-x md:divide-line">
          {t.pricing.plans.map((plan) => (
            <div key={plan.name} className="border-b border-line py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0">
              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-3 font-display text-5xl tabular-nums">
                {plan.id === 'free' ? '₺0' : PRICES[plan.id][locale]}
                {plan.id !== 'free' && <span className="ml-1 font-sans text-base text-fg-2">{t.pricing.perMonth}</span>}
              </p>
              <p className="mt-3 font-semibold text-accent">{plan.credits}</p>
              <ul className="mt-5 space-y-2 leading-relaxed text-fg-2">
                {plan.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <h3 className="text-lg font-semibold">{t.pricing.costsTitle}</h3>
            <table className="mt-3 w-full text-left">
              <tbody>
                {t.pricing.costs.map((c) => (
                  <tr key={c.action} className="border-b border-line">
                    <th scope="row" className="py-2.5 pr-4 font-normal text-fg-2">{c.action}</th>
                    <td className="whitespace-nowrap py-2.5 text-right font-semibold">{c.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="space-y-3 text-sm leading-relaxed text-fg-3">
            {t.pricing.terms.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={`${wrap} grid gap-10 pb-20 md:pb-32 lg:grid-cols-[1fr_2fr] lg:gap-20`}>
        <h2 className="font-display text-[clamp(2.3rem,4vw,3.5rem)] leading-[1.05]">{t.faq.title}</h2>
        <Faq items={t.faq.items.map((i) => ({ q: i.q, a: i.a }))} />
      </section>

      {/* Closing */}
      <section className="bg-brand text-ink">
        <div className={`${wrap} flex flex-col items-start justify-between gap-10 py-20 md:py-28 lg:flex-row lg:items-end`}>
          <h2 className="max-w-4xl text-balance font-display text-[clamp(2.6rem,6vw,5.5rem)] leading-[1]">{t.closing.title}</h2>
          <a href={t.closing.href} className="inline-block shrink-0 p-1">
            <img
              src={`/badges/app-store-${locale}.svg`}
              alt={t.chrome.badgeAlt}
              width={locale === 'tr' ? 182 : 144}
              height={48}
              className="h-12 w-auto"
            />
          </a>
        </div>
      </section>
    </>
  );
}
