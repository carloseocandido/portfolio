import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import ptBR from "./locales/pt-BR";

const resources = {
  "pt-BR": ptBR,
  en,
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("portfolio-language") ?? "pt-BR",
  fallbackLng: "pt-BR",
  interpolation: { escapeValue: false },
});

export default i18n;
