<script setup>
    import { computed, onMounted, onUnmounted, ref } from 'vue';
    import {  useRouter } from 'vue-router';
    import Button from '@/components/Button.vue'
    import { useI18n } from 'vue-i18n';
    import {Motion} from 'motion-v'
    const mainWrapper = ref();
    const stateComponent=ref(true)
    const router = useRouter();
    const {t,locale}=useI18n()
    
    // Add Class Of Animate On Mount Component
    onMounted(() => {
        stateComponent.value=true
        mainWrapper.value.classList.add('animate-in')
    });
    
    // Function will called to add animation of unmounted to component when the mainWrapper Ref is exist
    const handleBeforeRoute = () => {
        if (mainWrapper.value) {
            mainWrapper.value.classList.remove('animate-in');
            mainWrapper.value.classList.add('animate-out');
            stateComponent.value=false
            
            return new Promise(resolve => {
                setTimeout(resolve, 500); // Match animation duration
            });
        }
    }
    // Only applies the animation when navigating away from this component
    router.beforeEach((to, from, next) => {
        if (from.path === '/') {
            handleBeforeRoute().then(() => next());
        } else {
            next();
        }
    });

    // Get Word And Make It Reactive when change language
    const wordsHero=computed(()=>{
        return t('firstView.heroTitle').split(' ')
    })

</script>
<template>
    <div class="h-dvh page-content flex flex-col justify-center" v-if="stateComponent" ref="mainWrapper">
        <div class="container lg:max-w-2xl sm:max-w-sm max-w-full w-xs sm:w-full flex-1 flex items-center">
            <div class="hero-title flex flex-col font-bold flex-1">
                <h2 
                    v-for="(word,index) in wordsHero" 
                    class="text-white word"
                    :key="index">
                    <div v-if="locale=='en'">
                        <Motion 
                            as="span"
                            :initial="{
                                y:200,
                                opacity:0
                            }"
                            :animate="{
                                y:0,
                                opacity:1
                            }"
                            :transition="{
                                duration:0.3,
                                type:'spring',
                                mass:20,
                                stiffness:200,
                                damping:120,
                                delay:2+indexLetter*0.2
                            }"
                            v-for="(letter, indexLetter) in word" :key="indexLetter"
                            >
                            {{ letter }}
                        </Motion>
                    </div>
                </h2>
            </div>
        </div>
        <Button :textInside="'Enter'" link="/home" icon="/src/assets/images/Arrow.svg" firstView/>
    </div>
</template>

<style>
    body{
        overflow: hidden;
    }
    .page-content {
        opacity: 0;
        transform: translateY(400px);
        padding:40px 60px ;
    }
    .word{
        font-size: clamp(38px,7.4vw,120px);
    }
    .word:nth-child(EVEN){
        text-align: right;
    }

    .animate-in {
        animation: slideUp 2s ease forwards;
    }
    .animate-out {
        animation: slideHidden .5s ease forwards;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(400px);
            pointer-events: none;
        }
        to {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
    }
    @keyframes slideHidden {
        from {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
        to {
            transform: translateY(0);
            opacity: 0;
            pointer-events: none;
        }
    }
</style>