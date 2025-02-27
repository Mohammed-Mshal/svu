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
    const activeOption=ref(null)
    const toggleActiveOption=(newOption)=>{
        activeOption.value=newOption===activeOption.value?null:newOption
    }

</script>
<template>
    <div class="list-options" ref="optionsWrapper">
        <div class="container">
            <ul class="list flex flex-col gap-8">
                <li v-for="option in listOptions" :key="option.text">
                   <button class="cursor-pointer font-bold" :class="`${activeOption===option.text&&'active'}`" @click="toggleActiveOption(option.text)">
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
    .list-options .container{
        max-width: 1771px;
        padding-inline: 20px;
    }
    .list-options .container .list button{
        transition: .3s all ease-in-out;
        position: relative;
    }
    .list-options .container .list button.active{
        font-size: 22px;
        color: var(--main-brown);
    }
    .list-options .container .list button::before{
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: var(--main-brown);
        position: absolute;
        translate: -100% -50%;
        top: 50%;
        left: -10px;
        opacity: 0;
        transition: .3s all ease-in-out;
    }
    .list-options .container .list button::after{
        content: '';
        width: 100px;
        height: 2px;
        border-radius: 50%;
        background: #FFF;
        position: absolute;
        translate: 0 -50%;
        top: 50%;
        right: calc(100% + 26px);
        opacity: 0;
        transition: .3s all ease-in-out;
    }
    .list-options .container .list button.active::after,
    .list-options .container .list button.active::before{
        opacity: 1;
    }
    html[dir='rtl'] .list-options .container .list button::before{
        translate: 100% -50%;
        left: auto;
        right: -10px;
    }
    html[dir='rtl'] .list-options .container .list button::after{
        right: auto;
        left: calc(100% + 26px);
    }
    .list-options .container .list button:hover{
        color: var(--main-brown);
    }
</style>