import type { Metadata } from 'next';
import { SupportDoc } from '@/components/DocPage';
import { dictionaries } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const t = dictionaries.tr;

export const metadata: Metadata = pageMetadata('tr', '/support', t.meta.supportTitle, t.meta.supportDescription);

export default function Page() {
  return <SupportDoc t={t.support} />;
}
