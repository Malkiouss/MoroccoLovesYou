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
import servicePolicyTranslations from './servicePolicyTranslations';

const withServicePolicy = (lang, base, city) => ({
  ...base,
  cityDesc: city,
  servicePolicy: servicePolicyTranslations[lang] || servicePolicyTranslations.en
});

const translations = {
  en: withServicePolicy('en', en, cityDesc.en),
  fr: withServicePolicy('fr', fr, cityDesc.fr),
  es: withServicePolicy('es', es, cityDesc.es),
  'es-AR': withServicePolicy('es', es, cityDesc.es),
  ar: withServicePolicy('ar', ar, cityDesc.ar),
  he: withServicePolicy('he', he, cityDesc.he),
  hi: withServicePolicy('hi', hi, cityDesc.en),
  ja: withServicePolicy('ja', ja, cityDesc.ja),
  zh: withServicePolicy('zh', zh, cityDesc.zh),
  vi: withServicePolicy('vi', vi, cityDesc.vi),
  de: withServicePolicy('de', de, cityDesc.de),
  nl: withServicePolicy('nl', nl, cityDesc.en),
  it: withServicePolicy('it', it, cityDesc.it),
  pl: withServicePolicy('pl', pl, cityDesc.en),
  'pt-BR': withServicePolicy('pt-BR', ptBR, cityDesc.en),
  'pt-PT': withServicePolicy('pt-PT', ptPT, cityDesc.en),
  ro: withServicePolicy('ro', ro, cityDesc.en),
  th: withServicePolicy('th', th, cityDesc.en),
  ko: withServicePolicy('ko', ko, cityDesc.ko),
  ru: withServicePolicy('ru', ru, cityDesc.ru)
};

// Regional variants fall back to base English
translations['en-US'] = translations.en;
translations['en-AU'] = translations.en;
translations['en-CA'] = translations.en;

export default translations;
