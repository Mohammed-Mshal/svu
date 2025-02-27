import { createI18n } from "vue-i18n";
const messages = {
  en: {
    buttons:{
      applyNow:'Apply Now',
      learnMore:'Learn More',
      aboutUs:'About Us'
    },
    firstView:{
      heroTitle:'LIFESTYLE MEETS WELLNESS SERENITY'
    },
    firstSection:{
      title:' A LUXURY WELLNESS',
      description:'Offering Tailored Experience To Individuals Seeking Reprieve From The Fast-Paced Nature Of Everyday Life.'
    },
    listNavbar:{
      home:'Home',
      about:'About Us',
      careers:'Careers',
      contact:'Contact Us'
    },
    listOptions:{
      fitness:'Fitness',
      wellness:'Wellness',
      racketCenter:'Racket Center',
      dining:'Dining',
      poolAndBeach:'Pool And Beach',
      spaAndBeauty:'Spa And Beauty'
    }
  },
  ar: {
    firstView:{
      heroTitle:'أسلوب الحياة يلتقي بالعافية والسكينة'
    },
    firstSection:{
      title:'منتجع صحي فاخر',
      description:'تقديم تجربة مصممة خصيصًا للأفراد الذين يسعون إلى الراحة من طبيعة الحياة اليومية السريعة.'
    },
    listNavbar:{
      home:'الرئيسية',
      about:'حول',
      careers:'الوظائف',
      contact:'تواصل معنا'
    },
    buttons:{
      applyNow:'تقدم الآن',
      learnMore:'معرفة المزيد',
      aboutUs:'معلومات عنا'
    },
    listOptions:{
      fitness:'اللياقة البدنية',
      wellness:'العافية',
      racketCenter:'مركز الرياضات المضربية',
      dining:'المطاعم',
      poolAndBeach:'المسبح والشاطئ',
      spaAndBeauty:'السبا والجمال'
    }
  },
};
export const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('locale')||"en",
  fallbackLocale: localStorage.getItem('locale')||"en",
  messages,
  globalInjection: true,
});
