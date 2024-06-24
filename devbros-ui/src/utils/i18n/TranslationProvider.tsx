'use client'
import { I18nextProvider } from 'react-i18next';
import { createInstance } from 'i18next';
import initTranslations from './i18n';

interface TranslationProvider {
  children: React.ReactNode,
  locale:string
}

export default function TranslationsProvider({
  
  children,
  locale,
}:TranslationProvider) {
  const i18n = createInstance();
  initTranslations(locale, i18n);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}