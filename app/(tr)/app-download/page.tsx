import type { Metadata } from 'next';
import AppDownloadPage from '@/components/AppDownloadPage';
import { dictionaries } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const t = dictionaries.tr;

export const metadata: Metadata = {
  ...pageMetadata('tr', '/app-download', t.meta.getTitle, t.meta.getDescription),
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AppDownloadPage locale="tr" t={t} />;
}
