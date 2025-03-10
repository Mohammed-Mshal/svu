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
    
    const router=useRouter()
    const route=useRoute()
    const {t}=useI18n()
    const stateComponent=ref(false)
    const detailWrapper = ref();
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
    props.listOptions.forEach((value)=>{
        value.childLinks.forEach(element => {
            if (router.currentRoute.value.path.includes(element.link)) {
                elementDetail.value=element
            }
        });
    })
    
</script>

<template>
    <div class="detail" ref="detailWrapper">
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
                            <swiper-slide v-for="(slide,index) in elementDetail.images" :key="index">
                                <div class="container-slide">
                                    <img :src="slide" alt="Gallery">
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
.detail{
    display: flex;
    justify-content: flex-end;
    flex: 1; 
    color: #FFF;
    padding-block: 20px;
    opacity: 0;
    height: 100%;
    overflow: hidden;
}
.detail .body-box .title{
    font-size: clamp(36px,3.6vw,80px);
    font-weight: bold;
}
.detail .body-box .description{
    overflow-y: auto;
    max-height: 250px;
    @media (max-width:992px) {
        max-height: 200px;
    }
}
.overview-gallery{
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    gap: 12px;
    padding: 30px;
    position: relative;
    @media (max-width:668px) {
        padding-inline:0;
    }
}
.container-slider{
    width: 292px;
    height: 350px;
}
.container-slider .swiper{
    width: 100%;
    height: 100%;
}
.swiper-slide:not(.swiper-slide-active){
    opacity: 0;
}
.swiper-slide .container-slide {
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.swiper-slide .container-slide img{
    height: 100%;
    width: 100%;
    object-fit: cover;
}
.preview-gallery{
    position: absolute;
    top: 50%;
    right: 0;
    translate: 0 -50%;
    display: flex;
    align-self: flex-end;
    align-items: baseline;
    @media (max-width:668px) {
        position: static;
        translate: 0 0;
    }
}
.preview-gallery .image{
    width: 40px;
    height: 40px;
    background: #E0A184;
    border-radius: 50%;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content:center;
    transition: .3s all ease;
}
.preview-gallery:hover .image{
    background: #628778;
}
.preview-gallery .textView{
    position: absolute;
    top: 50%;
    right: -50px;
    height: 100%;
    translate: 0 -50%;
    width: fit-content;
    text-wrap:nowrap;
    padding: 13px 59px 13px 13px ;
    opacity: 0;
    transition: .3s all ease;
    display: flex;
    align-items: center;
    border: 1px solid #00000000;
    border-radius: 329px;
}
.preview-gallery:hover .textView{
    right: calc(100% - 40px);
    opacity: 1;
    border: 1px solid #0000008f;

}
</style>