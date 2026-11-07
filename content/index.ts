import type { Locale } from '@/lib/site';
import { en } from './en';
import { tr, type Dict } from './tr';

export const dictionaries: Record<Locale, Dict> = { tr, en };
