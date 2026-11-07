'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dict } from '@/content/tr';
import { CalorieRing, CreditChip } from './AppUi';
import FridgeInterior, { DoorInterior, HERO_ITEMS, VIEW_H, VIEW_W, type HeroItem } from './FridgeInterior';
import { LogoMark } from './Logo';

const INTERVAL = 5000;
const FIRST_DELAY = 6500; // Lets the opening sequence finish before the first change.
const GOAL = 1700;
const EATEN = 860;

export default function HeroStage({ t }: { t: Dict['hero'] }) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [held, setHeld] = useState(false);
  const [live, setLive] = useState(false);
  const stage = useRef<HTMLDivElement>(null);
  const fridge = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  const recipe = t.recipes[index];
  const used = new Set<string>(recipe.uses);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setPlaying(false);
  }, []);

  // On phones the fridge starts below the fold, so the rotation waits until it is seen.
  useEffect(() => {
    const el = fridge.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio < 0.35) return;
        setLive(true);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!live || !playing || held) return;
    const delay = started.current ? INTERVAL : FIRST_DELAY;
    const id = window.setTimeout(() => {
      started.current = true;
      setIndex((i) => (i + 1) % t.recipes.length);
    }, delay);
    return () => window.clearTimeout(id);
  }, [live, playing, held, index, t.recipes.length]);

  // Cards and light follow the pointer slightly. Skipped on touch and reduced motion.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (!window.matchMedia('(pointer: fine) and (prefers-reduced-motion: no-preference)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty('--mx', (e.clientX / window.innerWidth - 0.5).toFixed(3));
        el.style.setProperty('--my', (e.clientY / window.innerHeight - 0.5).toFixed(3));
      });
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <div ref={stage} className="hero-stage relative mx-auto mt-2 w-full max-w-[40rem] sm:mt-16 xl:mt-0 xl:max-w-none">
      <div ref={fridge} className="hero-fridge relative aspect-[520/760]">
        {/* Interior */}
        <div className="absolute inset-0 overflow-hidden rounded-[4.5%]">
          <FridgeInterior title={t.sceneTitle} />

          <div className="hero-interior-dim pointer-events-none absolute inset-0 bg-[#0d0a07]" aria-hidden="true" />
          <div className="hero-scan pointer-events-none absolute inset-x-[5%] top-[4%] h-[3px] rounded-full bg-brand" aria-hidden="true" />

          <div className="hero-boxes absolute inset-0" aria-hidden="true">
            {(Object.keys(HERO_ITEMS) as HeroItem[]).map((id) => {
              const b = HERO_ITEMS[id];
              const on = used.has(id);
              return (
                <div
                  key={id}
                  className={`absolute rounded-lg border-2 border-brand transition-[opacity,scale] duration-500 motion-reduce:transition-none ${
                    on ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'
                  }`}
                  style={{
                    left: `${(b.x / VIEW_W) * 100}%`,
                    top: `${(b.y / VIEW_H) * 100}%`,
                    width: `${(b.w / VIEW_W) * 100}%`,
                    height: `${(b.h / VIEW_H) * 100}%`,
                  }}
                >
                  <span className={`absolute -top-2.5 whitespace-nowrap ${id === 'cheese' ? 'right-1' : 'left-1'} rounded bg-ink px-1.5 py-0.5 text-[clamp(0.56rem,0.8vw,0.72rem)] font-semibold leading-none text-white`}>
                    {t.items[id]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Door, hinged on the left. The open position is the default state. */}
        <div className="hero-door-wrap pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="hero-door absolute inset-0">
            <div className="hero-door-face hero-door-front">
              <span className="absolute right-[7%] top-[16%] h-[26%] w-[2.6%] rounded-full bg-[#8d8578]" />
              <LogoMark className="absolute left-[8%] top-[6%] size-[13%]" />
            </div>
            <div className="hero-door-face hero-door-back">
              <DoorInterior />
            </div>
          </div>
        </div>

        <div className="hero-card hero-card-b absolute right-[-5%] top-[-13%] z-10 hidden sm:block">
          <div className="rounded-3xl border border-white/15 bg-[#121212]/95 p-3 text-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] backdrop-blur-md">
            <CalorieRing goal={GOAL} eaten={EATEN + recipe.kcal} leftLabel={t.kcalLeft} size={108} />
            <p className="mt-1 text-center text-[0.72rem] font-semibold text-fiber">{t.fitsDay}</p>
          </div>
        </div>
      </div>

      {/* Recipe card: below the fridge when stacked, over the open door on wide screens. */}
      <div
        className="hero-card hero-card-a relative z-10 mx-auto -mt-3 max-w-md"
        onPointerEnter={() => setHeld(true)}
        onPointerLeave={() => setHeld(false)}
        onFocusCapture={() => setHeld(true)}
        onBlurCapture={() => setHeld(false)}
      >
        <div className="rounded-3xl border border-white/15 bg-[#121212]/95 p-4 text-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.85)] backdrop-blur-md sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <p className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand">{t.recipeKicker}</p>
            <CreditChip>{t.creditLeft}</CreditChip>
          </div>
          <div key={index} className="hero-swap" aria-live="off">
            <h2 className="mt-2 text-lg font-extrabold leading-tight sm:text-xl">{recipe.name}</h2>
            <p className="mt-1 text-[0.8rem] text-ui-fg-2">{recipe.meta}</p>
            <div className="mt-3 flex items-center justify-between gap-3 rounded-xl bg-ui-card px-3 py-2 text-[0.8rem]">
              <span className="font-semibold">{recipe.summary}</span>
              <span className="whitespace-nowrap text-ui-fg-2">{t.missing}: {recipe.missing}</span>
            </div>
          </div>
          <div className="mt-3 flex items-center justify-between gap-2">
            <div className="flex items-center" role="group" aria-label={t.pickLabel}>
              {t.recipes.map((r, i) => (
                <button
                  key={r.name}
                  type="button"
                  aria-label={r.name}
                  aria-pressed={i === index}
                  onClick={() => {
                    setIndex(i);
                    setPlaying(false);
                  }}
                  className="grid size-8 place-items-center"
                >
                  <span className={`h-1.5 rounded-full transition-all motion-reduce:transition-none ${i === index ? 'w-5 bg-brand' : 'w-1.5 bg-ui-fg-3'}`} />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? t.pause : t.play}
              className="grid size-8 place-items-center rounded-full text-ui-fg-2 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5" aria-hidden="true">
                {playing ? <path d="M7 5h4v14H7zM13 5h4v14h-4z" /> : <path d="M8 5l11 7-11 7z" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
