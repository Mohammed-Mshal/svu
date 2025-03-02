<script setup>
    import { computed, onMounted, ref } from "vue";
    import { useRoute, useRouter } from "vue-router";
    import {Motion} from 'motion-v'
    import { useI18n } from "vue-i18n";
    const {t,locale}= useI18n()
    const detailWrapper=ref()
    const stateComponent=ref(false)
    const router = useRouter();
    onMounted(() => {
        stateComponent.value=true
        detailWrapper.value.classList.add('animate-in-Detail')
    });
    // Function will called to add animation of unmounted to component when the detailWrapper Ref is exist
    const handleBeforeRoute = () => {
        if (detailWrapper.value) {
            detailWrapper.value.classList.remove('animate-in-Detail');
            detailWrapper.value.classList.add('animate-out-Detail');
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
    const route=useRoute()
    console.log(route.params);
    const props=defineProps({
        listOptions:{
            type:Array,
            required:true
        }
    })
    const detailSection=computed(()=>props.listOptions.filter((val)=>val.id===route.params.id)[0])
    
</script>

<template>
    <div class="detail" ref="detailWrapper">
        <div class="container">
            <div class="header">
                <h2 class="title">
                    <Motion 
                        as="span"
                        class="word"
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
                        v-for="(letter,index) in detailSection.text.split('')" :key="index"
                        >
                        {{ letter }}
                    </Motion>
                </h2>
            </div>
        </div>
        <div class="content">
            <div class="container">
                <Motion 
                    v-for="(item, index) in detailSection.childLinks" :key="index"
                    as="div"
                    :initial="{
                        y:250,
                        opacity:0
                    }"
                    :animate="{
                        y:0,
                        opacity:1
                    }"
                    :transition="{
                        duration:2,
                        delay:2+index*.3
                    }"
                    class="item">
                    <div class="overlayItem">
                        <h3 class="overlayTitle">
                            {{ item.text }}
                        </h3>
                    </div>
                    <RouterLink :to="item.link">
                        <h4 class="index-item">
                            {{ `${index>10?index+1:`0${index+1}`}` }}
                        </h4>
                        <h3 class="title-item">
                            {{ item.text }}
                        </h3>
                    </RouterLink>
                </Motion>
            </div>
        </div>
    </div>
</template>

<style>
    .animate-in-Detail {
        animation: fadeIn 1s ease forwards;
    }
    .animate-out-Detail {
        animation: fadeOut 1s ease forwards;
    }
    @keyframes fadeIn {
        from{
            opacity:0;
        }
        to{
            opacity:1;
        }
    }
    .detail{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex: 1; 
        color: #FFF;
        padding-block: 120px ;
        opacity: 0;
        height: 100%;
    }
    .detail .container{
        max-width: 1771px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-inline: 20px;
        gap: 60px;
    }
    .detail .container .header{
        text-align: center;
    }
    .detail .container .word{
        font-size: clamp(38px,7.4vw,120px);
        font-weight: bold;
    }   
    .detail  .content {
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    
    .detail  .content .container{
        padding-block: 32px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 20px;
        position: static;
        
    }
    .detail  .content .container .item{
        position:static;
    }
    .detail  .content .container .item .overlayItem{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        translate:-50% -50%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
        font-size: clamp(26px,6.4vw,80px);
        font-weight: bold;
        color: #82A395;
    }
    .detail  .content .container .item .overlayTitle{
        translate: 0 80px;
        opacity: 0;
        transition: .5s all ease-in-out;
    }
    .detail  .content .container .item:hover .overlayTitle{
        translate: 0 0;
        opacity: 1;
    }
    .detail  .content .container .item .overlayItem:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 0;
        top: 50%;
        left: 50%;
        translate:-50% -50%;
        background: #628778;
        transition: .5s all ease-in-out;
    }
    .detail  .content .container .item:hover .overlayItem:before{
        height: 100%;
    }
    .detail .container .index-item{
        font-size: 14px;
    }
    .detail .container .title-item{
        font-weight: bold;
    }
</style>