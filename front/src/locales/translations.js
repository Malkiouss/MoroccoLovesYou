import en from './en';
import fr from './fr';
import es from './es';
import ar from './ar';
import he from './he';
import hi from './hi';
import ja from './ja';
import zh from './zh';
import vi from './vi';
import de from './de';
import nl from './nl';
import it from './it';
import pl from './pl';
import ptBR from './pt-BR';
import ptPT from './pt-PT';
import ro from './ro';
import th from './th';
import ko from './ko';
import ru from './ru';
import cityDesc from './cityDesc';

const translations = {
  en: { ...en, cityDesc: cityDesc.en },
  fr: { ...fr, cityDesc: cityDesc.fr },
  es: { ...es, cityDesc: cityDesc.es },
  'es-AR': { ...es, cityDesc: cityDesc.es },
  ar: { ...ar, cityDesc: cityDesc.ar },
  he: { ...he, cityDesc: cityDesc.he },
  hi: { ...hi, cityDesc: cityDesc.en },
  ja: { ...ja, cityDesc: cityDesc.ja },
  zh: { ...zh, cityDesc: cityDesc.zh },
  vi: { ...vi, cityDesc: cityDesc.vi },
  de: { ...de, cityDesc: cityDesc.de },
  nl: { ...nl, cityDesc: cityDesc.en },
  it: { ...it, cityDesc: cityDesc.it },
  pl: { ...pl, cityDesc: cityDesc.en },
  'pt-BR': { ...ptBR, cityDesc: cityDesc.en },
  'pt-PT': { ...ptPT, cityDesc: cityDesc.en },
  ro: { ...ro, cityDesc: cityDesc.en },
  th: { ...th, cityDesc: cityDesc.en },
  ko: { ...ko, cityDesc: cityDesc.ko },
  ru: { ...ru, cityDesc: cityDesc.ru }
};

// Regional variants fall back to base English
translations['en-US'] = translations.en;
translations['en-AU'] = translations.en;
translations['en-CA'] = translations.en;

export default translations;
