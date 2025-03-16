<script setup>
    import {Swiper,SwiperSlide} from 'swiper/vue'
    import Image1 from '@/assets/images/gallery1.png'
    import Image2 from '@/assets/images/gallery2.png'
    import Image3 from '@/assets/images/gallery3.png'
    import 'swiper/css'
</script>
<template>
    <div class="wrapper-slider-gallery">
        <Swiper
            :slides-per-view="1"
            :centered-slides="true"
            :loop="true"
            :spaceBetween="10"
            :navigation="true"
            :thumbs="thumbsSwiper"
            :modules="[FreeMode, Navigation, Thumbs]"
        >
            <SwiperSlide>
                <div class="container-slider">
                    <img :src="Image1" alt="">
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
