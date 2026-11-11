import type { Metadata } from 'next';
import { LegalDoc } from '@/components/DocPage';
import { dictionaries } from '@/content';
import { deleteAccount as doc } from '@/content/legal';
import { pageMetadata } from '@/lib/metadata';
import { LEGAL_UPDATED } from '@/lib/site';

const t = dictionaries.en;
const d = doc.en;

export const metadata: Metadata = pageMetadata('en', '/delete-account', t.meta.deleteTitle, t.meta.deleteDescription);

export default function Page() {
  return <LegalDoc title={d.title} updated={`${d.updatedLabel}: ${LEGAL_UPDATED.en}`} intro={d.intro} sections={d.sections} />;
}
