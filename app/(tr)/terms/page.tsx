import type { Metadata } from 'next';
import { LegalDoc } from '@/components/DocPage';
import { dictionaries } from '@/content';
import { terms as doc } from '@/content/legal';
import { pageMetadata } from '@/lib/metadata';
import { LEGAL_UPDATED } from '@/lib/site';

const t = dictionaries.tr;
const d = doc.tr;

export const metadata: Metadata = pageMetadata('tr', '/terms', t.meta.termsTitle, t.meta.termsDescription);

export default function Page() {
  return <LegalDoc title={d.title} updated={`${d.updatedLabel}: ${LEGAL_UPDATED.tr}`} intro={d.intro} sections={d.sections} />;
}
