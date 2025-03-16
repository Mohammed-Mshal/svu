<script setup>
  import Loading from '@/components/Loading.vue';
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRoute, useRouter } from 'vue-router';
    import {Motion} from 'motion-v'
    import CloseIcon from '@/assets/images/close.svg'
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import {EffectFade,Autoplay} from 'swiper/modules';
    import 'swiper/css';
    import 'swiper/css/effect-fade';
    import Image1 from '@/assets/images/gallery1.png'
    import Image2 from '@/assets/images/gallery2.png'
    import Image3 from '@/assets/images/gallery3.png'
    const router=useRouter()
    const route=useRoute()
    const {t}=useI18n()
    const stateComponent=ref(false)
    const detailSectionWrapper = ref();
    const sectionName=ref('')
    const elementDetail=ref()
    const props=defineProps({
        listOptions:{
            type:Array,
            required:true
        }
    })
    onMounted(() => {
        stateComponent.value=true
        detailSectionWrapper.value.classList.add('animate-in-Section')
        props.listOptions.forEach((val)=>{
            val.childLinks.forEach((e)=>{
                if (router.currentRoute.value.path.includes(e.link)) {
                    sectionName.value=e.text
                }
            })
        })

    });
    
    // Function will called to add animation of unmounted to component when the detailSectionWrapper Ref is exist
    const handleBeforeRoute = () => {
        if (detailSectionWrapper.value) {
            detailSectionWrapper.value.classList.remove('animate-in-Section');
            detailSectionWrapper.value.classList.add('animate-out-Section');
            stateComponent.value=false
            
            return new Promise(resolve => {
                setTimeout(resolve, 2000); // Match animation duration
            });
        }
        return Promise.resolve()
    }
    // Only applies the animation when navigating away from this component
    router.beforeEach((to, from, next) => {
        if (from.path.includes(`/home/detail/${route.params.sectionName}`)) {
            handleBeforeRoute().then(() => next());
        } else {
            next();
        }
    });
    props.listOptions.forEach((value)=>{
        value.childLinks.forEach(element => {
            if (router.currentRoute.value.path.includes(element.link)) {
                elementDetail.value=element
            }
        });
    })
    
</script>
<template>
    <div class="detailSectionWrapper" ref="detailSectionWrapper">
     <Loading :titleLoading="`${sectionName}`" />
        <Motion as="div"
        :initial="{
            x:2000,
            opacity:0
        }"
        :animate="{
            x:0,
            opacity:1,
        }"
        :transition="{
            duration:2, 
            delay:8
        }"
         class="detail-box bg-white min-h-full max-w-[942px] w-full pt-8 lg:pb-20 md:pb-16 pb-12 lg:px-16 md:px-12 sm:px-10 px-8">
            <div class="header-box flex justify-end">
                <RouterLink @click="router.go(-1)" to=""  class="flex items-center text-black font-bold text-xl gap-2.5 group">
                    Close 
                    <div class="icon h-6 w-6 p-1 rounded-lg border  transition-all duration-200 group-hover:p-0.5">
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
                    <RouterLink :to="`/home/detail/${route.params.sectionName}/gallery`" class="preview-gallery">
                        <span class="textView">
                            View Gallery
                        </span>
                        <div class="image">
                            <img src="/src/assets/images/plusWhite.svg" alt="Plus">
                        </div>
                    </RouterLink>
                    <div class="container-slider" >
                            <Swiper
                            dir="ltr"
                            :modules="[EffectFade,Autoplay]"
                            :centeredSlides="true"
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :loop="true"
                            effect="fade"
                        >
                            <swiper-slide>
                                <div class="container-slide">
                                    <img :src="Image1" alt="Gallery">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="container-slide">
                                    <img :src="Image2" alt="Gallery">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="container-slide">
                                    <img :src="Image3" alt="Gallery">
                                </div>
                            </swiper-slide>
                        </Swiper>
                    </div>
                </div>
                <div class="description text-black lg:text-xl md:text-lgm">
                    {{ elementDetail.description }}
                </div>
            </div>
        </Motion>
    </div>
</template>
<style>
.detailSectionWrapper.animate-out-Section {
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