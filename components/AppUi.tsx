import type { ReactNode } from 'react';

/** Small pieces of the app's interface, using its colours, radii and weights. */

export function UiPanel({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-3xl border border-ui-line bg-ui-bg p-4 text-white sm:p-5 ${className}`}>{children}</div>;
}

export function UiChip({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1.5 text-[0.8rem] font-semibold ${
        active ? 'border-brand bg-brand text-ink' : 'border-ui-line text-ui-fg-2'
      }`}
    >
      {children}
    </span>
  );
}

export function CreditChip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-ui-line px-2.5 py-1 text-xs font-semibold text-white">
      <span className="text-brand" aria-hidden="true">✦</span>
      {children}
    </span>
  );
}

export function CalorieRing({
  goal,
  eaten,
  leftLabel,
  size = 132,
}: {
  goal: number;
  eaten: number;
  leftLabel: string;
  size?: number;
}) {
  const r = 44;
  const c = 2 * Math.PI * r;
  const ratio = Math.min(eaten / goal, 1);
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" className="size-full -rotate-90" aria-hidden="true">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#2a2a2a" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="#ff6b35"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - ratio)}
          className="transition-[stroke-dashoffset] duration-700 ease-out motion-reduce:transition-none"
        />
      </svg>
      <div className="absolute inset-0 grid place-content-center text-center">
        <span className="text-2xl font-extrabold tabular-nums">{(goal - eaten).toLocaleString('tr-TR')}</span>
        <span className="text-[0.7rem] text-ui-fg-2">{leftLabel}</span>
      </div>
    </div>
  );
}

export function MacroBar({
  label,
  value,
  goal,
  color,
}: {
  label: string;
  value: number;
  goal: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between text-[0.8rem]">
        <span className="font-semibold">{label}</span>
        <span className="tabular-nums text-ui-fg-2">{value}/{goal} g</span>
      </div>
      <div className="mt-1 h-1.5 rounded-full bg-ui-muted">
        <div className="h-full rounded-full" style={{ width: `${Math.min((value / goal) * 100, 100)}%`, background: color }} />
      </div>
    </div>
  );
}
