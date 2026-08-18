import { useTranslation } from "react-i18next";
import * as portuguese from "../config/portfolio";
import * as english from "../config/portfolio.en";

export function usePortfolio() {
  const { i18n } = useTranslation();

  return i18n.resolvedLanguage === "en" ? english : portuguese;
}
