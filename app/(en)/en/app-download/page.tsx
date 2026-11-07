import type { Metadata } from 'next';
import AppDownloadPage from '@/components/AppDownloadPage';
import { dictionaries } from '@/content';
import { pageMetadata } from '@/lib/metadata';

const t = dictionaries.en;

export const metadata: Metadata = {
  ...pageMetadata('en', '/app-download', t.meta.getTitle, t.meta.getDescription),
  robots: { index: false, follow: true },
};

export default function Page() {
  return <AppDownloadPage locale="en" t={t} />;
}
