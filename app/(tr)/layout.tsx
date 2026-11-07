import type { ReactNode } from 'react';
import '../globals.css';
import Shell from '@/components/Shell';
import { siteViewport } from '@/lib/metadata';

export const viewport = siteViewport;

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Shell locale="tr">{children}</Shell>;
}
