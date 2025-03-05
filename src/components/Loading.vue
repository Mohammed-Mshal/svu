<script setup>
    const props=defineProps({
        titleLoading:{
            type:String,
            required:true
        },
    })
</script>
<template>
    <div class="loading">
        <div class="container">
            {{ props.titleLoading }}
        </div>
    </div>
</template>