import i18n from "i18next";

export default function useChangeLanguageScreen() {
  const language = i18n.language;

  // Вернуться обратно
  const handleSetLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return {
    language,
    handleSetLanguage,
  };
}
