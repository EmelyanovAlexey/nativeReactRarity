import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function useChangeLanguageScreen() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const handleSetLanguage = (lang: string) => {
    i18n.changeLanguage(lang).then(() => {
      setLanguage(lang);
    });
  };

  return {
    language,
    handleSetLanguage,
  };
}
