import { createI18n } from "vue-i18n";
const messages = {
  en: {
    loading:'Loading',
    buttons:{
      applyNow:'Apply Now',
      learnMore:'Learn More',
      aboutUs:'About Us',
      enter:'Enter',
      exploreMore:'Explore More',
      downloadPDF:'Download PDF',
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
    },
    childListOption:{
      mainGym:'Main Gym',
      femaleOnly:'صالة ألعاب رياضية للسيدات فقط',
      dungeonHome:'منزل الزنزانة',
    }
  },
  ar: {
    loading:'جاري التحميل',
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
      enter:'ادخل',
      aboutUs:'معلومات عنا',
      exploreMore:'استكشاف المزيد',
      downloadPDF:'تحميل PDF',
    },
    listOptions:{
      fitness:'اللياقة البدنية',
      wellness:'العافية',
      racketCenter:'مركز الرياضات المضربية',
      dining:'المطاعم',
      poolAndBeach:'المسبح والشاطئ',
      spaAndBeauty:'السبا والجمال'
    },
    childListOption:{
      mainGym:'الصالة الرياضية الرئيسية',
      femaleOnly:'صالة ألعاب رياضية للسيدات فقط',
      dungeonHome:'منزل الزنزانة',
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
