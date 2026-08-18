import { useTranslation } from "react-i18next";
import * as portuguese from "../config/portfolio";
import * as english from "../config/portfolio.en";
import * as spanish from "../config/portfolio.es";

export function usePortfolio() {
  const { i18n } = useTranslation();

  if (i18n.resolvedLanguage === "en") return english;
  if (i18n.resolvedLanguage === "es") return spanish;

  return portuguese;
}
