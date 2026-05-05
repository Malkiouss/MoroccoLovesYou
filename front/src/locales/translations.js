import en from './en';
import fr from './fr';
import es from './es';
import ar from './ar';
import he from './he';
import ja from './ja';
import zh from './zh';
import vi from './vi';
import de from './de';
import it from './it';
import ko from './ko';
import ru from './ru';
import cityDesc from './cityDesc';

const translations = {
  en: { ...en, cityDesc: cityDesc.en },
  fr: { ...fr, cityDesc: cityDesc.fr },
  es: { ...es, cityDesc: cityDesc.es },
  ar: { ...ar, cityDesc: cityDesc.ar },
  he: { ...he, cityDesc: cityDesc.he },
  ja: { ...ja, cityDesc: cityDesc.ja },
  zh: { ...zh, cityDesc: cityDesc.zh },
  vi: { ...vi, cityDesc: cityDesc.vi },
  de: { ...de, cityDesc: cityDesc.de },
  it: { ...it, cityDesc: cityDesc.it },
  ko: { ...ko, cityDesc: cityDesc.ko },
  ru: { ...ru, cityDesc: cityDesc.ru }
};

// Regional variants fall back to base English
translations['en-US'] = translations.en;
translations['en-AU'] = translations.en;
translations['en-CA'] = translations.en;

export default translations;
