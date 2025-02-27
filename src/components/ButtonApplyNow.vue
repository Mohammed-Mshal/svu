<script setup>
    import VideoIcon from '@/assets/images/video-tick.svg'
    import Plus from '@/assets/images/plus.svg'
</script>

<template>
    <button class="apply-now flex justify-between text-white ">
        <span class="flex items-center gap-2.5">
            <img :src="VideoIcon" alt="">
            Apply Now 
        </span>
        <span class="plus-circle">
            <img :src="Plus" alt="Plus">
        </span>
    </button>
</template>

<style>
    .apply-now{
        background: var(--main-brown);
        padding: 20px 32px 20px 92px;     
        width: 100%;
        font-size: clamp(1.2rem, 1.5vw, 1.5rem);
        font-weight: bold;
        position: absolute;
        bottom: 0;
        max-width: 512px;
        transition: .3s all ease-in-out;
        cursor: pointer;
    }
    @media (max-width:992px) {
        .apply-now{
            max-width: 380px;
            padding: 16px 26px 16px 64px;     
        }
        
    }
    @media (max-width:668px) {
        .apply-now{
            max-width: 320px;
            padding: 12px  24px 12px  48px;     
        }
        
    }
    html[dir='ltr'] .apply-now{
        left: 0;
    }
    html[dir='rtl'] .apply-now{
        right: 0;
    }
    .plus-circle{
        background: #FFF;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: .3s all ease-in-out;
    }
    @media (max-width:992px) {
        .plus-circle{
            width: 42px;
            height: 42px;
        }
        
    }
    @media (max-width:668px) {
        .plus-circle{
            width: 32px;
            height: 32px;
        }
    }
    .apply-now:hover {
        background: #917860;
    }
    .apply-now:hover .plus-circle{
        rotate: 270deg;
    }
</style>