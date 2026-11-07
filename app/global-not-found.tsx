import Link from 'next/link';
import './globals.css';
import { display, text } from '@/lib/fonts';

export const metadata = { title: 'Sayfa bulunamadı | FridgeChef' };

export default function GlobalNotFound() {
  return (
    <html lang="tr" className={`dark ${display.variable} ${text.variable}`}>
      <body className="grid min-h-svh place-content-center px-6 text-center antialiased">
        <h1 className="font-display text-5xl">Bu raf boş.</h1>
        <p className="mt-4 text-fg-2">Aradığın sayfayı bulamadık. / We couldn’t find that page.</p>
        <Link href="/" className="mt-8 font-semibold text-accent underline underline-offset-4">FridgeChef</Link>
      </body>
    </html>
  );
}
