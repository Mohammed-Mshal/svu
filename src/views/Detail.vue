<script setup>
    import Loading from '@/components/Loading.vue';
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRoute, useRouter } from 'vue-router';
    import {Motion} from 'motion-v'
    import CloseIcon from '@/assets/images/close.svg'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {EffectFade} from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    
    const router=useRouter()
    const route=useRoute()
    const {t}=useI18n()
    const stateComponent=ref(false)
    const detailWrapper = ref();
    const sectionName=ref('')
    const props=defineProps({
        listOptions:{
            type:Array,
            required:true
        }
    })
    onMounted(() => {
        stateComponent.value=true
        detailWrapper.value.classList.add('animate-in-Section')
        props.listOptions.forEach((val)=>{
            val.childLinks.forEach((e)=>{
                
                if (e.link===router.currentRoute.value.path) {
                    sectionName.value=e.text
                }
            })
        })

    });
    
    // Function will called to add animation of unmounted to component when the detailWrapper Ref is exist
    const handleBeforeRoute = () => {
        if (detailWrapper.value) {
            detailWrapper.value.classList.remove('animate-in-Section');
            detailWrapper.value.classList.add('animate-out-Section');
            stateComponent.value=false
            
            return new Promise(resolve => {
                setTimeout(resolve, 2000); // Match animation duration
            });
        }
        return Promise.resolve()
    }
    
    // Only applies the animation when navigating away from this component
    router.beforeEach((to, from, next) => {
        if (from.path === `/home/detail/${route.params.sectionName}`) {
            handleBeforeRoute().then(() => next());
        } else {
            next();
        }
    });
    
</script>

<template>
    <div class="detail" ref="detailWrapper">
        <Loading :titleLoading="`${sectionName}`" />
        <div class="detail-box bg-white min-h-full max-w-[942px] w-full py-8 px-16">
            <div class="header-box flex justify-end">
                <RouterLink class="flex items-center text-black font-bold text-xl gap-2.5">
                    Close 
                    <div class="icon h-6 w-6 p-1 rounded-lg border">
                        <img :src="CloseIcon" alt="Close">
                    </div>
                </RouterLink>
            </div>
            <div class="body-box">
               <h2 class="title text-black">
                <Motion 
                        as="span"
                        class=""
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
                            delay:1+index*0.1
                        }"
                        v-for="(letter,index) in sectionName" :key="index"
                        >
                        {{ letter }}
                </Motion>
               </h2>
                <div class="overview-gallery text-black">
                    <div class="container-slider" dir="ltr">
                            <Swiper
                            :modules="[EffectFade]"
                            :slides-per-view="1"
                            :centeredSlides="true"
                            :centerInsufficientSlides="true"
                            :autoplay="{delay: 3000}"
                            :loop="true"
                            effect="fade"
                        >
                            <swiper-slide>
                                <div class="container-slide">
                                    <img src="" alt="">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="container-slide">
                                    <img src="" alt="">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="container-slide">
                                    <img src="" alt="">
                                </div>
                            </swiper-slide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.detail .body-box .title{
        font-size: clamp(36px,3.6vw,80px);
        font-weight: bold;
}
</style>