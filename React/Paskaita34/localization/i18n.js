import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const supportedLanguages = {
  en: "English",
  lt: "Lietuviu",
  de: "Vokieciu"
}

const resources = {
  en: {
    translation: {
      hi: "Hi",
      bye: "Good bye",
      greetingsParagraph: ";laksdnflk nlkasjdnf lkjansflkjansd lfkjnaslkdjnflaskdnflkasjdnf lknaslk jfnasldkjflaskjdnflkas sdlka jn flkajsdfn",
      pie: "Pie"
    }
  },
  lt: {
    translation: {
      hi: "Labas",
      bye: "Viso gero",
      greetingsParagraph: "lkasdf lkasndf kjnasdfn asdnf kasd fnsad f;jnsad fk",
      pie: "Pyragas"
    }
  },
  de: {
    translation: {
      hi: "Hallo",
      bye: "ate vokiskai"
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false
  }
})

export default i18n;