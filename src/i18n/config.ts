export const supportedLocales = ['en', 'fr', 'ar', 'zh'] as const;
export type Locale = typeof supportedLocales[number];
// Enable each locale only after real translations, metadata and hreflang are ready.
export const enabledLocales: Locale[] = ['en'];
export const defaultLocale: Locale = 'en';
export const localeDirection = (locale: Locale) => locale === 'ar' ? 'rtl' : 'ltr';
export const localePaths = (locale: Locale, segment = '') => `/${locale}/${segment}`;
