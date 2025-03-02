<script setup>
    import { useI18n } from 'vue-i18n'
    import {RouterLink} from 'vue-router'
    const {locale}=useI18n()
    const props=defineProps({
        link:{
            type:String,
            required:false
        },
        textInside:{
            type:String,
            required:true
        },
        firstView:{
            type:Boolean,
            default:false,
        },
        normalButton:{
            type:Boolean,
            default:true,
            required:false
        },
        widthFull:{
            type:Boolean,
            default:true,
            required:true
        },
        icon:{
            type:String,
            required:true
        }
    })
</script>
<template>
    <RouterLink  
        v-if="props.link"   
        :to="props.link" 
        :class="`custom-button text-white flex gap-4 items-center justify-between font-bold ${props.firstView&&'firstView'} ${normalButton&&'normal-floating'} ${widthFull?'widthFullInSmall':'w-fit'}`">
        {{ props.textInside }}
        <img :src="props.icon" alt="Icon" :class="`${locale==='ar'&&'rotate-180'}`">
    </RouterLink>
    <button  
        v-else   
        :to="props.link" 
        :class="`custom-button text-white flex gap-4 items-center justify-between font-bold ${props.firstView&&'firstView'} ${normalButton&&'normal-floating'} ${widthFull?'widthFullInSmall':'w-fit'}`">
        {{ props.textInside }}
        <img :src="props.icon" alt="Icon" :class="`${locale==='ar'&&'rotate-180'}`">
    </button>
</template>

<style lang="css" scoped>
    .custom-button{
        font-size: clamp(16px,4.4vw,21px) ;
        min-width: 150px;
        padding: 8px 12px;
        border: 2px solid white;
        margin-inline-start: auto;
        position: relative;
        transition: .3s all ease-in-out;    
        z-index: 1;
    }
    .custom-button.normal-floating{
        margin-inline-start: 0;
    }
    .custom-button.widthFullInSmall{
        width: fit-content;
    }
    @media (max-width:448px) {
        .custom-button.widthFullInSmall{
            width: 100%;
        }
    }
    .custom-button::before{
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background: var(--main-brown);
        transition: .3s all ease-in-out;    
        z-index: -1;
    }
    html[dir='rtl'] .custom-button::before{
        left: auto;
        right: 0;
    }
    .custom-button:hover{
        border-color: var(--main-brown);
    }
    .custom-button:hover::before{
        width: 100%;
    }
    .firstView{
        margin-top: auto;
    }
</style>