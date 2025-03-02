import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FirstView from '@/views/FirstView.vue'
import FirstSection from '@/views/FirstSection.vue'
import ListOptions from '@/views/ListOptions.vue'
import Details from '@/views/Details.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'quickstart',
      component:FirstView,
    },
    {
      path: '/home',
      name: 'home',
      component:Home,
      children:[
        {
          path:'',
          name:'first-section',
          component:FirstSection
        },
        {
          path:'/home/details',
          name:'details',
          component:ListOptions,
        },
        {
          path:'/home/details/:id',
          name:':id',
          component:Details
        }
      ]
    },
  ],
})

export default router
