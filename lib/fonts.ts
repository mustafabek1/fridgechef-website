import { Fraunces, Onest } from 'next/font/google';

// latin-ext carries ğ, ş, İ and ₺. Without it those glyphs are not preloaded.
export const display = Fraunces({
  subsets: ['latin', 'latin-ext'],
  axes: ['SOFT', 'opsz'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const text = Onest({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-onest',
  display: 'swap',
});
