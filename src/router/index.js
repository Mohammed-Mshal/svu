import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import FirstView from '@/views/FirstView.vue'
import FirstSection from '@/views/FirstSection.vue'
import ListOptions from '@/views/ListOptions.vue'
import Details from '@/views/Details.vue'
import Detail from '@/views/Detail.vue'
import Gallery from '@/views/Gallery.vue'
import DetailSection from '@/components/DetailSection.vue'
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
        },
        {
          path:'/home/detail/:sectionName',
          name:'Detail',
          component:Detail,
          children:[
            {
              path:'/home/detail/:sectionName',
              name:':sectionName',
              component:DetailSection
            },
            {
              path:'/home/detail/:sectionName/gallery',
              name:'Gallery',
              component:Gallery,
            }
          ]
        }
      ]
    },
  ],
})

export default router
