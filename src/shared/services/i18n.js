import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import en from "../locales/en"
import he from "../locales/he"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { en: { translation: en }, "he-IL": { translation: he } },
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
