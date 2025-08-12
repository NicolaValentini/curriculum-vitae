export const i18n = {
  defaultLocale: 'it',
  locales: ['en', 'it'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
