import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import es from "./locales/es";
import ptBR from "./locales/pt-BR";

const resources = {
  "pt-BR": ptBR,
  en,
  es,
};

type SupportedLanguage = "pt-BR" | "en" | "es";

const supportedLanguages: SupportedLanguage[] = ["pt-BR", "en", "es"];

function getSystemLanguage(): SupportedLanguage {
  const systemLanguages = [
    ...(typeof navigator !== "undefined" ? navigator.languages : []),
    ...(typeof navigator !== "undefined" && navigator.language
      ? [navigator.language]
      : []),
  ];

  const matchingLanguage = systemLanguages.find((language) => {
    const normalizedLanguage = language.toLowerCase();

    if (normalizedLanguage.startsWith("pt")) return true;
    if (normalizedLanguage.startsWith("en")) return true;
    if (normalizedLanguage.startsWith("es")) return true;

    return false;
  });

  if (!matchingLanguage) return "pt-BR";

  const normalizedLanguage = matchingLanguage.toLowerCase();

  if (normalizedLanguage.startsWith("pt")) return "pt-BR";
  if (normalizedLanguage.startsWith("es")) return "es";

  return "en";
}

function getInitialLanguage(): SupportedLanguage {
  const savedLanguage = localStorage.getItem("portfolio-language");

  if (
    savedLanguage &&
    supportedLanguages.includes(savedLanguage as SupportedLanguage)
  ) {
    return savedLanguage as SupportedLanguage;
  }

  return getSystemLanguage();
}

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "pt-BR",
  interpolation: { escapeValue: false },
});

export default i18n;
