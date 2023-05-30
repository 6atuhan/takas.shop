<template>
    <div class="flex items-start justify-center h-full  w-full">
        <div class=" h-40 w-full border-r border-b-2 hover:bg-gradient-to-r from-light via-transparent to-transparent border-dark hover:text-3xl  basis-1/2 flex items-center justify-center hover:basis-4/5 transition-all">
            <h1 class="text-center cursor-pointer text-dark text-xs md:text-lg">
                eşyalara takas <br> <strong class="text-outline-black-thin  text-light tracking-widest md:tracking-[0.2rem]">teklifleri vermek</strong> <br> istiyorum.
            </h1>
        </div>
        <div class=" h-40 w-full border-l border-b-2 hover:bg-gradient-to-l from-light via-transparent to-transparent border-dark hover:text-3xl  basis-1/2 flex items-center justify-center hover:basis-4/5 transition-all">
            <h1 class="text-center cursor-pointer text-dark text-xs md:text-lg ">
                eşyama takas <br><strong class="text-outline-black-thin  text-light tracking-widest md:tracking-[0.2rem]">teklifleri almak</strong>  <br>istiyorum.
            </h1>
        </div>
    </div>
    <world-map-comp></world-map-comp>
</template>

<script setup>
import WorldMapComp from '../../components/WorldMapComp.vue';

</script>

<style scoped>

</style>