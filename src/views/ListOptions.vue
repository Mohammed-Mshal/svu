<script setup>
    import { computed, onMounted, ref } from "vue";
    import { useRouter } from "vue-router";
    import { useI18n } from "vue-i18n";
    import {Motion} from 'motion-v'
    import Button from '@/components/Button.vue'
    import ArrowIcon from '@/assets/images/Arrow.svg'
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
                setTimeout(resolve, 1000); // Match animation duration
            });
        }
        return Promise.resolve()
    }
      // Only applies the animation when navigating away from this component
    router.beforeEach((to, from, next) => {
        if (from.path === '/home/details') {
            handleBeforeRoute().then(() => next());
        } else {
            next();
        }
    });
    const activeOption=ref(null)
    const toggleActiveOption=(newOption)=>{
        activeOption.value=newOption===activeOption.value?null:newOption
    }
    
    const props=defineProps({
        listOptions:{
            type:Array,
            required:true
        }
    })
</script>
<template>
    <div class="list-options" ref="optionsWrapper">
        <div class="container">
            <ul class="list flex flex-1 justify-center flex-col gap-8">
                <li v-for="option in props.listOptions" :key="option.text">
                   <button class="cursor-pointer font-bold" :class="`${activeOption===option.text&&'active'}`" @click="toggleActiveOption(option.text)">
                        {{ option.text }}
                   </button>
                </li>
            </ul>
            <div :class="`actions justify-center md:justify-end flex-wrap ${activeOption&&'show'}`">
                <Button widthFull :textInside="t('buttons.exploreMore')" :icon="ArrowIcon" :link="listOptions.filter((value)=>value.text===activeOption)[0]?.linkDetails" />
                <Button widthFull :textInside="t('buttons.downloadPDF')" :icon="ArrowIcon" :link="listOptions.filter((value)=>value.text===activeOption)[0]?.linkPDF" />
            </div>
        </div>
    </div>
</template>

<style lang="css">
    .animate-in-Details {
        animation: slideUpSection 2s 2s ease forwards;
    }
    .animate-out-Details {
        animation: fadeOut 1s ease forwards;
    }
    @keyframes fadeOut {
        from{
            opacity: 1;
            transform: translateY(0);
        }
        to{
            transform: translateY(0);
            opacity: 0;
        }
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
        padding: 120px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
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
    .list-options .container .actions{
        display: flex;
        gap: 18px;
        translate: 0 80px;
        opacity: 0;
        transition: 0.8s all ease-in-out;
    }
    .list-options .container .actions.show{
        opacity: 1;
        translate: 0 0;
    }
</style>