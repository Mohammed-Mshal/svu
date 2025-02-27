<script setup>
    import { computed, onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    import { useI18n } from "vue-i18n";
    import {Motion} from 'motion-v'
    const {t}=useI18n()
    const stateComponent=ref(false)
    const optionsWrapper = ref();
    const router = useRouter();
      // Add Class Of Animate On Mount Component
      onMounted(() => {
        stateComponent.value=true
        optionsWrapper.value.classList.add('animate-in-Details')
    });
      // Function will called to add animation of unmounted to component when the optionsWrapper Ref is exist
      const handleBeforeRoute = () => {
        if (optionsWrapper.value) {
            optionsWrapper.value.classList.remove('animate-in-Details');
            optionsWrapper.value.classList.add('animate-out-Details');
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
    const listOptions=computed(()=>{
        return [
            {
            text:t('listOptions.fitness'),
            linkDetails:'/exploreMore',
            linkPDF:'#',
        },
        {
            text:t('listOptions.wellness'),
            linkDetails:'/exploreMore',
            linkPDF:'#',
        },
        {
            text:t('listOptions.racketCenter'),
            linkDetails:'/exploreMore',
            linkPDF:'#',
        },
        {
            text:t('listOptions.dining'),
            linkDetails:'/exploreMore',
            linkPDF:'#',
        },
        {
            text:t('listOptions.poolAndBeach'),
            linkDetails:'/exploreMore',
            linkPDF:'#',
        },
        {
            text:t('listOptions.spaAndBeauty'),
            linkDetails:'/exploreMore',
            linkPDF:'#',
        },
    ]
    })
</script>
<template>
    <div class="list-options" ref="optionsWrapper">
        <div class="container">
            <ul class="list flex flex-col gap-2">
                <li v-for="option in listOptions" :key="option.text">
                   <button class="cursor-pointer">
                        {{ option.text }}
                   </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="css">
    .animate-in-Details {
        animation: slideUpSection 2s 2s ease forwards;
    }
    .animate-out-Details {
        animation: slideHiddenSection 2s ease forwards;
    }
    .list-options{
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1; 
        color: #FFF;
        transform: translateY(300px);
        opacity: 0;
    }
</style>