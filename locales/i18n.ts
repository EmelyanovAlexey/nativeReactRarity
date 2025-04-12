import i18n, { ModuleType } from "i18next";
import { initReactI18next } from "react-i18next";
import * as RNLocalize from "react-native-localize";
import AsyncStorage from "@react-native-async-storage/async-storage";

import translationEN from "@/locales/en/translation.json";
import translationRU from "@/locales/ru/translation.json";

const LANGUAGE_KEY = "user-language";

const language = "en";

const languageDetector = {
  type: "languageDetector" as ModuleType,
  async: true,
  detect: async (callback: (lang: string) => void) => {
    try {
      // Получаем сохраненный язык
      const storedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);
      if (storedLanguage) {
        // Если язык был сохранен, используем его
        callback(storedLanguage);
        return;
      }

      // Получаем лучший доступный язык из устройства
      const bestLanguage = RNLocalize.findBestAvailableLanguage(["en", "ru"]);
      // console.log(bestLanguage?.languageTag); // например: "ru"

      // Если лучший язык найден, возвращаем его. В противном случае возвращаем русский.
      callback(bestLanguage?.languageTag ?? language);
    } catch (e) {
      console.warn("Language detection error", e);
      callback(language); // по умолчанию русский
    }
  },
  init: () => {},
  cacheUserLanguage: (language: string) => {
    // Сохраняем выбранный язык
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
