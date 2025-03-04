<script setup>
    const props=defineProps({
        titleLoading:{
            type:string,
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