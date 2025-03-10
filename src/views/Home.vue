<script setup>
    import {RouterView, useRoute} from 'vue-router'
    import {Motion} from 'motion-v'
    import { computed, ref, watch } from 'vue'
    import { useI18n } from 'vue-i18n'
    const counterState=ref(0)
    const {t}=useI18n()
    const route = useRoute()
    const listOptions=computed(()=>{
        return [
            {
            id:'1',
            text:t('listOptions.fitness'),
            linkDetails:'/home/details/1',
            linkPDF:'#',
            childLinks:[
              {
                text:t('childListOption.mainGym'),
                link:'/home/detail/maingym',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
              {
                text:t('childListOption.femaleOnly'),
                link:'/home/detail/femaleonlygym',
                 description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                   images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
                
              },
              {
                text:t('childListOption.dungeonHome'),
                link:'/home/detail/dungeonhome',
                 description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                    images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
            ]
        },
        {
            id:'2',
            text:t('listOptions.wellness'),
            linkDetails:'/home/details/2',
            linkPDF:'#',
            childLinks:[
              {
                text:t('childListOption.mainGym'),
                link:'/home/detail/maingym',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
              {
                text:t('childListOption.femaleOnly'),
                link:'/home/detail/femaleonlygym',
                                images:[
                                    images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
                
              },
              {
                text:t('childListOption.dungeonHome'),
                link:'/home/detail/dungeonhome',
                                   images:[
                                       images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
            ]
        },
        {
            id:'3',
            text:t('listOptions.racketCenter'),
            linkDetails:'/home/details/3',
            linkPDF:'#',
            childLinks:[
              {
                text:t('childListOption.mainGym'),
                link:'/home/detail/maingym',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
              {
                text:t('childListOption.femaleOnly'),
                link:'/home/detail/femaleonlygym',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
                
              },
              {
                text:t('childListOption.dungeonHome'),
                link:'/home/detail/dungeonhome',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
            ]
        },
        {
            id:'4',
            text:t('listOptions.dining'),
            linkDetails:'/home/details/4',
            linkPDF:'#',
            childLinks:[
              {
                text:t('childListOption.mainGym'),
                link:'/home/detail/maingym',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
              {
                text:t('childListOption.femaleOnly'),
                link:'/home/detail/femaleonlygym',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
                
              },
              {
                text:t('childListOption.dungeonHome'),
                link:'/home/detail/dungeonhome',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
            ]
        },
        {
            id:'5',
            text:t('listOptions.poolAndBeach'),
            linkDetails:'/home/details/5',
            linkPDF:'#',
            childLinks:[
              {
                text:t('childListOption.mainGym'),
                link:'/home/detail/maingym',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
              {
                text:t('childListOption.femaleOnly'),
                link:'/home/detail/femaleonlygym',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
                
              },
              {
                text:t('childListOption.dungeonHome'),
                link:'/home/detail/dungeonhome',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
            ]
        },
        {
            id:'6',
            text:t('listOptions.spaAndBeauty'),
            linkDetails:'/home/details/6',
            linkPDF:'#',
            childLinks:[
              {
                text:t('childListOption.mainGym'),
                link:'/home/detail/maingym',
                description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consectetur, dicta nemo voluptas veniam eaque exercitationem iure quos odio magnam perspiciatis qui illo hic! Fugiat eligendi perspiciatis officiis reprehenderit facilis?',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
              {
                text:t('childListOption.femaleOnly'),
                link:'/home/detail/femaleonlygym',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
                
              },
              {
                text:t('childListOption.dungeonHome'),
                link:'/home/detail/dungeonhome',
                images:[
                  '@/assets/images/gallery1',
                  '@/assets/images/gallery2',
                  '@/assets/images/gallery3',
                ]
              },
            ]
        },
    ]
    })
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
    const currentPath=computed(()=>route.path)
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
          <component :is="Component" :listOptions="listOptions" />
        </Transition>
      </RouterView>
    <div class="container" v-if="currentPath==='/home'||currentPath==='/home/details'">
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