<script setup>
    import { onMounted, ref } from "vue";
    import BackgroundSection from '@/assets/images/FirstSection.png'
    import Button from '@/components/Button.vue'
    import { useRouter } from "vue-router";
    import { useI18n } from "vue-i18n";
    import {Motion} from 'motion-v'
    const {t}=useI18n()
    const stateComponent=ref(false)
    const mainWrapper = ref();
    const router = useRouter();
    // Add Class Of Animate On Mount Component
    onMounted(() => {
        stateComponent.value=true
        mainWrapper.value.classList.add('animate-in-Section')
    });
    // Function will called to add animation of unmounted to component when the mainWrapper Ref is exist
    const handleBeforeRoute = () => {
        if (mainWrapper.value) {
            mainWrapper.value.classList.remove('animate-in-Section');
            mainWrapper.value.classList.add('animate-out-Section');
            stateComponent.value=false
            
            return new Promise(resolve => {
                setTimeout(resolve, 2000); // Match animation duration
            });
        }
        return Promise.resolve()
    }
    // Only applies the animation when navigating away from this component
    router.beforeEach((to, from, next) => {
        if (from.path === '/home') {
            handleBeforeRoute().then(() => next());
        } else {
            next();
        }
    });
</script>
<template>
    <div class="first-section" ref="mainWrapper">
        <div class="container">
            <div class="content">
                <Motion
                    :initial="{
                        y:100,
                        opacity:0
                    }"
                    :animate="{
                        y:0,
                        opacity:1
                    }"
                    :transition="{
                        duration:.2,
                        delay:4,
                        type:'spring',
                        stiffness:50,
                        
                    }"
                    as="h2" class="title">
                    {{ t('firstSection.title') }}
                </Motion>
                <Motion 
                    :initial="{
                        y:100,
                        opacity:0
                    }"
                    :animate="{
                        y:0,
                        opacity:1
                    }"
                    :transition="{
                        duration:.2,
                        delay:4,
                        type:'spring',
                        stiffness:50,
                        
                    }"
                    as="div" class="description">
                    {{ t('firstSection.description') }}
                </Motion>
                <Motion 
                    :initial="{
                        y:100,
                        opacity:0
                    }"
                    :animate="{
                        y:0,
                        opacity:1
                    }"
                    :transition="{
                        duration:.2,
                        delay:4,
                        type:'spring',
                        stiffness:50,
                        
                    }"
                    class="mt-auto"
                    as="div">
                    <Button :textInside="t('buttons.aboutUs')" icon="/src/assets/images/Sound.svg" link="/home/details"/>
                </Motion>
                </div>
        </div>
        <div class="background">
            <img :src="BackgroundSection" alt="">
        </div>
    </div>
</template>
<style>
    .background{
        position: fixed;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
        z-index: -1;
    }
    .background img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .first-section{
        opacity: 0;
        transform: translateY(300px);
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1; 
    }
    .first-section .container{
        display: flex;
        justify-content: flex-end;
        padding: 80px 20px;
        max-width: 1771px;
        height:100%;
    }
    .first-section .container .content{
        display: flex;
        justify-content: center;
        flex-direction: column;
        max-width: 562px;
        height: 100%;
        padding-block: 120px  40px ;
        padding-inline-end: 60px;
    }
    .first-section .container .title{
        font-size: clamp(24px,3.4vw,44px);
        color: #FFF;
        font-weight: bold;
        margin-bottom: 22px;
    }
    .first-section .container .description{
        font-size: clamp(16px,2vw,24px);
        color: #FFF;
    }
    .first-section .container .custom-button{
        margin-top: auto;
        margin-inline-start: 0;
    }
    .animate-in-Section {
        animation: slideUpSection 2s 2s ease forwards;
    }
    @keyframes slideUpSection {
        from {
            opacity: 0;
            transform: translateY(300px);
            pointer-events: none;
        }
        to {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
    }
    .animate-out-Section {
        animation: slideHiddenSection 2s ease forwards;
    }
    @keyframes slideHiddenSection {
        from {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
        to {
            transform: translateY(-100dvh);
            opacity: 0;
            pointer-events: none;
        }
    }
</style>