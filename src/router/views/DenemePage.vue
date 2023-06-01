<template>
    <div class="w-full h-screen  flex items-center justify-center p-10 container mx-auto flex-wrap gap-2">
        <post-card-comp v-for=" i in 10" :key="i"></post-card-comp>
    </div>
</template>

<script setup>
import PostCardComp from '../../components/PostCardComp.vue';
</script>