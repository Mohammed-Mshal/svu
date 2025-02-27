<script setup>
    import Logo from '@/assets/images/Logo.svg' 
    import Language from '@/assets/images/global.svg' 
    import { computed } from 'vue';
    import { RouterLink } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    import { ref } from 'vue';
    const {t,locale}=useI18n()
    const menuStatus=ref(false)
    const toggleMenu=()=>{
        menuStatus.value=!menuStatus.value
    }
    const toggleLanguage=()=>{
        locale.value=locale.value==='en'?'ar':'en'
        localStorage.setItem('locale',locale.value)
        document.dir=locale.value==='en'?'ltr':'rtl'
    }
    const listLinks=computed(()=>{
        return [
            {
                link:'/home',
                text: t('listNavbar.home')
            },
            {
                link:'/about',
                text: t('listNavbar.about')
            },
            {
                link:'/careers',
                text: t('listNavbar.careers')
            },
            {
                link:'/contactus',
                text: t('listNavbar.contact')
            },
            
        ]
    })
</script>
<template>
    <nav>
        <div class="container">
            <div class="logo">
                <img :src="Logo" alt="">
            </div>
            <div class="options flex items-center gap-4">
                <ul class="listLinks flex items-center gap-4" :class="`${menuStatus&&'show'}`">
                    <li v-for="linkItem in listLinks" :key="linkItem.text">
                        <RouterLink :to="linkItem.link">
                            {{linkItem.text}}
                        </RouterLink>
                    </li>
                </ul>
                <button @click="toggleLanguage" class="language flex items-center gap-2 cursor-pointer">
                    {{ locale==='ar'?'English':'العربية' }}
                    <img :src="Language" alt="Global" class="">
                </button>
                <button class="toggleMenu"  @click="toggleMenu">
                    <i class="pi pi-bars text-white text-xl cursor-pointer" v-if="!menuStatus"></i>
                    <i class="pi pi-times text-white text-xl cursor-pointer" v-else-if="menuStatus"></i>
                </button>
            </div>
        </div>
    </nav>
</template>

<style>
    nav{
        background: linear-gradient(180deg, #000000 -46.02%, rgba(0, 0, 0, 0) 100%);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100dvw;
        z-index: 10;
    }
    nav .container{
        max-width: 1771px;
        margin: 0 auto;
        padding: 32px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    nav .listLinks {
        border-inline-end: 2px solid #FFF;
        padding-inline-end: 30px;
        transition: .5s all ease-in-out;
    }
    nav .listLinks a{
        color: #FFF;
        font-size: clamp(16px,2vw, 18px);
        font-weight: bold;
        transition: .3s all ease-in-out;
    }
    nav .listLinks a:hover{
        color: var(--main-brown);
    }
    html[dir="rtl"] nav .language{
        font-family: 'HvDTrial Brandon Grotesque';
    }
    html[dir="ltr"] nav .language{
        font-family: "Cairo", serif ;
    }
    nav .language{
        color: #FFF;
        padding-inline-start: 30px;
        transition: .3s all ease-in-out;
    }
    nav .language:hover{
        color: var(--main-brown);
    }
    nav .logo{
        @media (max-width:992px){
            max-width:120px
        }
    }
    nav .toggleMenu{
        display: none;
    }
    @media (max-width:778px) {
        nav .listLinks {
            position: fixed;
            top: 0;
            left: 0;
            width: 100dvw;
            height: 100dvh;
            opacity: 0;
            pointer-events: none;
            border: none;
            justify-content: center;
            flex-direction: column;
            background: #0000008f;
            backdrop-filter: blur(6px);
            z-index: -1;
        }
        nav .listLinks.show{
            opacity: 1;
            pointer-events: all
        }
        nav .toggleMenu{
            display: flex;
        }
    }
</style>