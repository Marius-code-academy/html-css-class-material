import { useTranslation } from "react-i18next";
import { supportedLanguages } from "../../../i18n";

export default function LanguageSelect() {
  const { i18n } = useTranslation();

  function handleChange(e) {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <select onChange={handleChange}>
      {Object.entries(supportedLanguages).map((language) => (
        <option key={language[0]} value={language[0]}>
          {language[1]}
        </option>
      ))}
    </select>
  );
}
