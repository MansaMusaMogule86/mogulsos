import { enabledLocales } from '../../i18n/config';
// Add alternates only for reviewed/translated matching pages.
export const liveAlternates = (pathname: string) => enabledLocales.map(locale => ({locale, pathname: `/${locale}/${pathname}`}));
