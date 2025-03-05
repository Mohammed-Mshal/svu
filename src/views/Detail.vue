<script setup>
    import Loading from '@/components/Loading.vue';
    import { onMounted, ref } from 'vue';
    import { useI18n } from 'vue-i18n';
    import { useRoute, useRouter } from 'vue-router';
    const router=useRouter()
    const route=useRoute()
    const {t}=useI18n()
    const stateComponent=ref(false)
    const detailWrapper = ref();
    
    onMounted(() => {
        stateComponent.value=true
        detailWrapper.value.classList.add('animate-in-Section')
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
        <Loading :titleLoading="`${route.params.sectionName}`" />
    </div>
</template>

<style>
</style>