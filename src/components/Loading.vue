<script setup>
    import { onMounted } from 'vue';
    import { ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    const {t}=useI18n()
    const loading=ref()
    const props=defineProps({
        titleLoading:{
            type:String,
            required:true
        },
    })
    const loadingState=ref(true)
    const counterState=ref(0)
    const intervalLoading=()=>{
    const intervalCounter=setInterval(() => {
        counterState.value+=1
        if (counterState.value===100) {
          clearInterval(intervalCounter)
          loading.value.classList.add('animate-out-loading')
          setTimeout(() => {
              loading.value.classList.remove('done')
              loadingState.value=false
            }, 2000);
        }
      }, 50);
    }
    onMounted(()=>{
        setTimeout(() => {
            intervalLoading()
        }, 3000);
    })
</script>
<template>
    <div class="loading" ref="loading" v-if="loadingState">
        <div class="container">
           <h2 class="title">
            {{ props.titleLoading }}
           </h2>
           <div class="counter-loading">
                {{t('loading')}}... {{counterState<10?`0${counterState}`:counterState}}%
           </div>
        </div>
    </div>
</template>
<style>
    .home:has(.loading:not(.done)){
        z-index: 100;
    }
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #628778;
        z-index: 1000;
    }
    .loading .container{
        width: fit-content;
        max-width: 100%;
        padding-inline: 20px;
        position: relative;
    }
    .loading .counter-loading{
        position: absolute;
        width: fit-content;
        top: 50%;
        left: calc(100% + 40px);
        translate: 0 -50%;
        font-size: clamp(16px,2vw,24px);
        font-weight: bold;
        text-wrap: nowrap;
        @media (max-width:668px) {
            left: 50%;
            translate: -50% -50%;
            top: 140%;
        }
    }
    html[dir="rtl"] .loading .counter-loading{
        left: auto;
        right: 100%;
        @media (max-width:886px) {
            right: auto;
            left: 50%;
            translate: -50% -50%;
            top: 140%;
        }
    }
    .loading .title{
        color: #82A395;
        font-size: clamp(36px,3.6vw,80px);
        font-weight: bold;
        text-align: center;
    }
    .animate-out-loading{
        animation: slideHiddenSection 2s ease forwards;
    }
</style>