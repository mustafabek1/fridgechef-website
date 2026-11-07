import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { dictionaries } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const t = dictionaries.tr;

export const metadata: Metadata = pageMetadata('tr', '', t.meta.homeTitle, t.meta.homeDescription);

export default function Page() {
  return <HomePage locale="tr" t={t} />;
}
