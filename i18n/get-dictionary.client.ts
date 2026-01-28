import { Locale } from '@/root/i18n-config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  it: () => import('./dictionaries/it.json').then(module => module.default),
};

export const getDictionaryClient = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.it();
