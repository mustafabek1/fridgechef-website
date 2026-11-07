import type { Metadata } from 'next';
import { SupportDoc } from '@/components/DocPage';
import { dictionaries } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const t = dictionaries.en;

export const metadata: Metadata = pageMetadata('en', '/support', t.meta.supportTitle, t.meta.supportDescription);

export default function Page() {
  return <SupportDoc t={t.support} />;
}
