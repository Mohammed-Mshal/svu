<script setup>
    import Loading from '@/components/Loading.vue';
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRoute, useRouter } from 'vue-router';
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
        <RouterView v-slot="{ Component }">
            <Transition name="gallery" mode="out-in">
                <component :is="Component" :listOptions="props.listOptions"/>
            </Transition>
        </RouterView>
    </div>
</template>

<style>
.detail{
    flex: 1; 
    
}
.detailSectionWrapper{
    display: flex;
    justify-content: flex-end;
    color: #FFF;
    padding-block: 20px;
    opacity: 0;
    height: 100%;
    overflow: hidden;
}
.detailSectionWrapper .body-box .title{
    font-size: clamp(36px,3.6vw,80px);
    font-weight: bold;
}
.detailSectionWrapper .body-box .description{
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