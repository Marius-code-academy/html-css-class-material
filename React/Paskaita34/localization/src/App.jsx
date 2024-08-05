import { useEffect } from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
import { supportedLanguages } from "../i18n";

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const language = navigator.language.split("-")[0];

    const isSupported = Object.keys(supportedLanguages).includes(language);

    if (i18n.changeLanguage) {
      i18n.changeLanguage(isSupported ? language : "en");
    }
  }, [i18n]);

  return (
    <div>
      <LanguageSelect />
      <h1>{t("bye")}</h1>
      <p>{t("greetingsParagraph")}</p>
      <p>{t("pie")}</p>
    </div>
  );
}

export default App;
