<script setup>
    import {RouterView, useRoute} from 'vue-router'
    import {Motion} from 'motion-v'
    import { ref, watch } from 'vue'
    const counterState=ref(0)
    const route = useRoute()
    const intervalLoading=(target)=>{
      const intervalCounter=setInterval(() => {
        if (target<counterState.value) {
          counterState.value-=1
        }
        else{
          counterState.value+=1
        }
        if (target==counterState.value) {
          clearInterval(intervalCounter)
        }
      }, 100);
    }
    watch(() => route.path, (newPath) => {
      if (newPath === '/home/'||newPath === '/home') {
        intervalLoading(30)
      }
      if (newPath === '/home/details') {
        intervalLoading(60)
      }
    }, { immediate: true })
</script>

<template>
  <div class="home ">
      <RouterView  v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    <div class="container">
      <div class="counter">
        <Motion as="div">
          {{counterState<10?`0${counterState}`:counterState}}%
        </Motion>
      </div>
    </div>
  </div>
</template>

<style>
  .home{
    z-index: 1;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .counter{
    width: 100%;
    color: #FFF;
    font-weight: bold;
    font-size: clamp(18px,2vw,24px);
    position: fixed;
    left: 0; 
    right: 0;
    bottom: 0;
    padding-block: 24px;
  }
  .counter div{
    max-width: 1771px;
    padding-inline: 20px;
    margin-inline: auto;
    text-align: end;
  }
  @media (max-width:668px) {
    .counter{
      padding-block:16px;
    }
  }
</style>