import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import { dictionaries } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const t = dictionaries.en;

export const metadata: Metadata = pageMetadata('en', '', t.meta.homeTitle, t.meta.homeDescription);

export default function Page() {
  return <HomePage locale="en" t={t} />;
}
