import type { ReactNode } from 'react';

export default function Faq({ items }: { items: { q: string; a: ReactNode }[] }) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line">
          <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-4 text-lg font-semibold">
            {item.q}
            <span className="faq-mark shrink-0 text-2xl font-normal leading-none text-accent transition-[rotate] motion-reduce:transition-none" aria-hidden="true">+</span>
          </summary>
          <div className="prose-legal max-w-2xl pb-6 leading-relaxed text-fg-2">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
