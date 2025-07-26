import i18n, { ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
// import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";

import translationEN from "@/locales/en/translation.json";
import translationRU from "@/locales/ru/translation.json";

import * as Localization from "expo-localization";

const LANGUAGE_KEY = "user-language";

const language = "en";

const languageDetector = {
  type: "languageDetector" as ModuleType,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    try {
      const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
      if (storedLanguage) {
        callback(storedLanguage);
        return;
      }

      const bestLanguage = Localization.locale.split("-")[0]; // например, "ru" из "ru-RU"
      callback(bestLanguage || language);
    } catch (e) {
      console.warn("Language detection error", e);
      callback(language);
    }
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    AsyncStorage.setItem(LANGUAGE_KEY, language).catch(() => {});
  },
};

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v4",
    fallbackLng: language, // язык по умолчанию (если не определен)
    resources,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
