import type { Metadata } from 'next';
import { LegalDoc } from '@/components/DocPage';
import { dictionaries } from '@/content';
import { privacy as doc } from '@/content/legal';
import { pageMetadata } from '@/lib/metadata';
import { LEGAL_UPDATED } from '@/lib/site';

const t = dictionaries.tr;
const d = doc.tr;

export const metadata: Metadata = pageMetadata('tr', '/privacy', t.meta.privacyTitle, t.meta.privacyDescription);

export default function Page() {
  return <LegalDoc title={d.title} updated={`${d.updatedLabel}: ${LEGAL_UPDATED.tr}`} intro={d.intro} sections={d.sections} />;
}
