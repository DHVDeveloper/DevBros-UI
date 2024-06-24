import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { i18nConfig } from '@/i18nConfig';

export default async function initTranslations(
  locale,
  i18nInstance,
) {
  i18nInstance = i18nInstance || createInstance(); //Si no pasamos la instancia la crea
  i18nInstance.use(initReactI18next);
  i18nInstance.use(
    resourcesToBackend(
      (locale) =>
        import(`@/languages/${locale}.json`)
    )
  );

  await i18nInstance.init({
    lng: locale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  };
}