<script setup>
  import Navbar from '@/components/Navbar.vue'
  import ButtonApplyNow from '@/components/ButtonApplyNow.vue'
  import { useRoute } from 'vue-router';
  import { useI18n } from 'vue-i18n';
  const route=useRoute()
  const {t,locale}=useI18n()
  if (localStorage.getItem('locale')) {
    locale.value=localStorage.getItem('locale')
    document.dir=localStorage.getItem('locale')==='en'?'ltr':'rtl'
  }
</script>

<template>
  <header v-if="route.path!=='/'&&!route.path.startsWith('/home/detail/')">
    <Navbar />
  </header>
  <main class="bg-black min-h-dvh relative flex">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <ButtonApplyNow v-if="route.path!=='/'&&!route.path.includes('/gallery')"/>
  </main>
  <footer v-if="route.path!=='/'">
    <Footer />  </footer>
</template>


<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.page-leave-to {
  opacity: 0;
}
</style>
