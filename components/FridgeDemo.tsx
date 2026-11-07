'use client';

import { useState } from 'react';
import type { Dict } from '@/content/tr';
import { CalorieRing, CreditChip, UiChip, UiPanel } from './AppUi';

const GOAL = 1700;
const EATEN = 860;

export default function FridgeDemo({ t }: { t: Dict['demo'] }) {
  const [index, setIndex] = useState(0);
  const [listed, setListed] = useState(false);
  const [cooked, setCooked] = useState(false);

  const sample = t.samples[index];

  const pick = (i: number) => {
    setIndex(i);
    setListed(false);
    setCooked(false);
  };

  return (
    <div>
      <div role="group" aria-label={t.pickLabel} className="flex flex-wrap gap-2">
        {t.samples.map((s, i) => (
          <button
            key={s.tab}
            type="button"
            onClick={() => pick(i)}
            aria-pressed={i === index}
            className={`min-h-11 rounded-full border px-4 text-sm font-semibold transition-colors ${
              i === index ? 'border-fg bg-fg text-bg' : 'border-line text-fg-2 hover:text-fg'
            }`}
          >
            {s.tab}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.35fr_1fr]">
        <UiPanel>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">{t.fridgeKicker}</p>
          <h3 className="mt-1 text-lg font-extrabold">{t.fridgeTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sample.have.map((item) => (
              <li key={item}><UiChip>{item}</UiChip></li>
            ))}
          </ul>
          <p className="mt-4 text-[0.8rem] text-ui-fg-3">{t.fridgeNote}</p>
        </UiPanel>

        <UiPanel>
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">{t.recipeKicker}</p>
              <h3 className="mt-1 text-xl font-extrabold leading-tight">{sample.recipe}</h3>
            </div>
            <CreditChip>{t.creditLeft}</CreditChip>
          </div>
          <p className="mt-2 text-sm text-ui-fg-2">{sample.meta}</p>

          <p className="mt-3 text-sm font-semibold">
            {sample.kcal} {t.kcalPerServing}
            <span className="ml-2 font-normal text-ui-fg-2">{sample.macros}</span>
          </p>

          <div className="mt-4 rounded-2xl bg-ui-card p-3.5">
            <p className="text-sm font-semibold">{sample.summary}</p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <span className="text-sm text-ui-fg-2">{t.missing}: {sample.missing}</span>
              <button
                type="button"
                onClick={() => setListed(true)}
                disabled={listed}
                className={`min-h-11 shrink-0 rounded-xl px-3 text-sm font-semibold ${
                  listed ? 'text-fiber' : 'bg-brand text-ink'
                }`}
              >
                {listed ? `✓ ${t.listed}` : t.addToList}
              </button>
            </div>
          </div>

          <ol className="mt-4 space-y-1.5 text-sm text-ui-fg-2">
            {sample.steps.map((step, i) => (
              <li key={step} className="flex gap-2">
                <span className="font-semibold text-white">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </UiPanel>

        <UiPanel className="flex flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">{t.journalKicker}</p>
          <h3 className="mt-1 text-lg font-extrabold">{t.journalTitle}</h3>
          <div className="my-5 grid place-items-center">
            <CalorieRing goal={GOAL} eaten={cooked ? EATEN + sample.kcal : EATEN} leftLabel={t.kcalLeft} />
          </div>
          <button
            type="button"
            onClick={() => setCooked(true)}
            disabled={cooked}
            className={`mt-auto min-h-12 rounded-xl px-3 text-sm font-semibold ${
              cooked ? 'bg-ui-card text-fiber' : 'bg-brand text-ink'
            }`}
          >
            {cooked ? `✓ ${t.added}` : t.cookedCta}
          </button>
          <p aria-live="polite" className="mt-2 min-h-5 text-center text-[0.8rem] text-ui-fg-2">
            {cooked ? t.fitsDay : ''}
          </p>
        </UiPanel>
      </div>

      <p className="mt-4 max-w-3xl text-sm text-fg-3">{t.disclaimer}</p>
    </div>
  );
}
