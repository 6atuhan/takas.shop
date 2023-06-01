<template>
    <div class=" w-full h-full relative ">
    <button class="font-bold text-light text-3xl text-outline-black-thin absolute z-50 top-1/2 left-2 hover:scale-110 scale-100 transition-all" @click="backCarousel"> &lt; </button>
    <button class="font-bold text-light text-3xl text-outline-black-thin absolute z-50 top-1/2 right-2 hover:scale-110 scale-100 transition-all" @click="forwardCarousel"> &gt; </button>
    <div  class="relative w-full h-full ">
        <img  :src="images[slide]" class="w-full h-full object-cover absolute  top-0 left-0">
        <p class="font-bold text-light text-xl text-outline-black-thin absolute z-50 top-1 right-2">{{ slide+1 }}</p>

    </div>
</div>
</template>
<script setup>
import { ref } from "vue"

const slide = ref(0)

const forwardCarousel = ()=>{
    slide.value += 1
    if(slide.value >= props.images.length)
    {
        slide.value=0
    }
}
const backCarousel = ()=>{
    slide.value -= 1
    if(slide.value < 0)
    {
        slide.value=props.images.length -1
    }
}


const props = defineProps(['images'])

</script>