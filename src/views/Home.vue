<script setup>
    import {Motion} from 'motion-v'
    import { ref } from 'vue'
    const counterState=ref(0)
</script>

<template>
  <div class="home ">
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
    padding-block: 80px;
    z-index: 1;
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
</style>