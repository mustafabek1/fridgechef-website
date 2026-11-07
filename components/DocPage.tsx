import { Fragment, type ReactNode } from 'react';
import type { DocSection } from '@/content/legal';
import Faq from './Faq';

/** Wraps emails in the text in a mailto link. */
function withLinks(text: string): ReactNode {
  return text.split(/([\w.]+@[\w.]+\.\w+)/g).map((part, i) =>
    i % 2 === 1 ? <a key={part + i} href={`mailto:${part}`}>{part}</a> : <Fragment key={i}>{part}</Fragment>,
  );
}

export function LegalDoc({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: DocSection[];
}) {
  return (
    <article className="prose-legal mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.03]">{title}</h1>
      <p className="mt-4 text-sm text-fg-3">{updated}</p>
      <p className="mt-8 text-lg leading-relaxed text-fg-2">{withLinks(intro)}</p>

      {sections.map((s) => (
        <section key={s.h} className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight">{s.h}</h2>
          {s.blocks.map((b, i) =>
            typeof b === 'string' ? (
              <p key={i} className="mt-4 leading-relaxed text-fg-2">{withLinks(b)}</p>
            ) : (
              <ul key={i} className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-fg-2 marker:text-fg-3">
                {b.map((li) => <li key={li}>{withLinks(li)}</li>)}
              </ul>
            ),
          )}
        </section>
      ))}
    </article>
  );
}

export function SupportDoc({
  t,
}: {
  t: {
    title: string;
    intro: string;
    contactTitle: string;
    contactBody: string;
    faqTitle: string;
    items: { q: string; a: string }[];
    platformTitle: string;
    platform: string;
  };
}) {
  return (
    <div className="prose-legal mx-auto max-w-3xl px-5 py-16 md:py-24">
      <h1 className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.03]">{t.title}</h1>
      <p className="mt-6 text-lg leading-relaxed text-fg-2">{t.intro}</p>

      <section className="mt-12 rounded-3xl bg-raised p-6 md:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">{t.contactTitle}</h2>
        <p className="mt-3 leading-relaxed text-fg-2">{withLinks(t.contactBody)}</p>
      </section>

      <section className="mt-14">
        <h2 className="mb-5 text-2xl font-semibold tracking-tight">{t.faqTitle}</h2>
        <Faq items={t.items.map((i) => ({ q: i.q, a: withLinks(i.a) }))} />
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold tracking-tight">{t.platformTitle}</h2>
        <p className="mt-3 leading-relaxed text-fg-2">{t.platform}</p>
      </section>
    </div>
  );
}
