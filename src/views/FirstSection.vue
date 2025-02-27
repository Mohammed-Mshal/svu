<script setup>
    import { onMounted } from "vue";
    import BackgroundSection from '@/assets/images/FirstSection.png'
    const stateComponent=ref(false)
    
    // Add Class Of Animate On Mount Component
    onMounted(() => {
        stateComponent.value=true
        mainWrapper.value.classList.add('animate-in')
    });
</script>
<template>
    <div class="first-section">
        <div class="background">
            <img :src="BackgroundSection" alt="">
        </div>
    </div>
</template>
<style>
    .background{
        position: fixed;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;
    }
    .background img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .first-section{
        translate: 0 300px;
        opacity: 0;
    }

    .animate-in {
        animation: slideUp 2s ease forwards;
    }
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(300px);
            pointer-events: none;
        }
        to {
            opacity: 1;
            transform: translateY(0);
            pointer-events: all;
        }
    }
</style>