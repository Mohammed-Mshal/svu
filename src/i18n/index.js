import { createI18n } from "vue-i18n";
const messages = {
  en: {
    firstView:{
      heroTitle:'LIFESTYLE MEETS WELLNESS SERENITY'
    },
    listNavbar:{
      home:'Home',
      about:'About Us',
      careers:'Careers',
      contact:'Contact Us'
    }
  },
  ar: {
    firstView:{
      heroTitle:'أسلوب الحياة يلتقي بالعافية والسكينة'
    },
    listNavbar:{
      home:'الرئيسية',
      about:'حول',
      careers:'الوظائف',
      contact:'تواصل معنا'
    }
  },
};
export const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages,
  globalInjection: true,
});
