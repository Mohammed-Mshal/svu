<script setup>
    import VideoIcon from '@/assets/images/video-tick.svg'
    import Plus from '@/assets/images/plus.svg'
    import { useI18n } from 'vue-i18n'
    const {t}=useI18n()
</script>

<template>
    <button class="apply-now flex justify-between text-white">
        <span class="flex items-center gap-2.5">
            <img :src="VideoIcon" alt="">
            {{ t('buttons.applyNow') }}
        </span>
        <span class="plus-circle">
            <img :src="Plus" alt="Plus">
        </span>
    </button>
</template>

<style>
    .apply-now{
        background: var(--main-brown);
        padding: 20px 32px 20px 92px;     
        width: 100%;
        font-size: clamp(1.2rem, 1.5vw, 1.5rem);
        font-weight: bold;
        position: absolute;
        bottom: 0;
        max-width: 512px;
        transition: .3s all ease-in-out;
        cursor: pointer;
        z-index: 1;
    }
    @media (max-width:992px) {
        .apply-now{
            max-width: 380px;
            padding: 16px 26px 16px 64px;     
        }
        
    }
    @media (max-width:668px) {
        .apply-now{
            max-width: 320px;
            padding: 12px  24px 12px  48px;     
        }
        
    }
    @media (max-width:558px) {
        .apply-now{
            max-width: 240px;
            padding: 12px 16px 12px  32px;     
        }
        
    }
    
    html[dir='ltr'] .apply-now{
        left: 0;
    }
    html[dir='rtl'] .apply-now{
        right: 0;
        padding: 20px 92px 20px 32px; 
    }
    @media (max-width:992px) {
        html[dir='rtl'] .apply-now{
            padding: 16px 64px 16px 26px ;  
        }        
    }
    @media (max-width:668px) {
        html[dir='rtl'] .apply-now{
            padding: 12px  48px 12px 24px  ;     
        }       
    }
    @media (max-width:558px) {
        html[dir='rtl'] .apply-now{
            padding: 12px 32px 12px 16px  ;    
        }
    }    
    .plus-circle{
        background: #FFF;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: .3s all ease-in-out;
    }
    @media (max-width:992px) {
        .plus-circle{
            width: 42px;
            height: 42px;
        }
        
    }
    @media (max-width:668px) {
        .plus-circle{
            width: 32px;
            height: 32px;
        }
    }
    .apply-now:hover {
        background: #917860;
    }
    .apply-now:hover .plus-circle{
        rotate: 270deg;
    }
</style>