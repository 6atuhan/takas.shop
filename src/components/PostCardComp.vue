<template>

    <div class="  text-dark h-[600px] w-[300px] md:w-[600px] md:h-[300px] flex  items-center justify-center flex-col md:flex-row">
        <div id="img" class="basis-1/2 border border-dark w-[300px] h-[300px] flex flex-wrap items-center justify-center pb-8">
            <!-- upper info -->
            <div class="flex items-center justify-around h-8 basis-full bg-dark text-white">
                <hobby-svg-comp v-if="post.type=='hobby'" :size="24"></hobby-svg-comp>
                <accessory-svg-comp v-if="post.type=='accessory'" :size="24"></accessory-svg-comp>
                <electronics-svg-comp v-if="post.type=='electronics'" :size="24"></electronics-svg-comp>
                <clothes-svg-comp v-if="post.type=='clothes'" :size="24"></clothes-svg-comp>
                <toys-svg-comp v-if="post.type=='toys'" :size="24"></toys-svg-comp>
                <p> ~ {{ props.post.age }} year</p>
                <p> ~ {{ formatNumber(props.post.value) }} TL</p>
            </div>
            <!-- photos area -->

            <img-carousel :images="props.post.images" ></img-carousel>
        </div>
        <div id="img" class="basis-1/2 border border-dark w-[300px] h-[300px] border-l   flex flex-row items-start justify-between flex-wrap">
            
            <!-- product header -->
            <h1 class=" h-8 text-center basis-full font-bold leading-8 bg-dark text-white">{{ props.post.header }}</h1>
            <!-- user info -->
            <ul class=" h-12 basis-full flex px-2 items-center justify-start gap-2 ">
                <li>
                    <div class="aspect-square h-10 bg-red-500 border-light border hover:scale-110 scale-100 hover:rounded-lg overflow-hidden transition-all">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrmrEt5VMhybwWfN-7_yNcIjlR1gZvsyX_6957yb97rA&s" alt="pp_photo" class="object-cover h-full w-full" >
                    </div>
                </li>
                <li class="font-bold">{{ props.post.name }} {{ props.post.surname[0] }}.</li>
                <li class="ml-auto relative group font-bold select-none cursor-pointer border border-dark rounded-full w-8 h-8 text-center leading-7">{{ props.post.plate }}
                <!-- city plate tooltip -->
                    <div class="px-2 h-8 bg-white absolute invisible -top-8 -left-8 group-hover:visible border border-dark bg-inherit">{{ props.post.city }}</div>
                </li>
            </ul>
            <!-- product note --> 
            <div class="w-full">
            <p class=" h-fit w-[300px] basis-full text-center break-words px-2">{{ props.post.note }}</p>

            </div>
            <!-- acceptable -->
            <ul class=" h-32 basis-1/2 px-2">
                <li v-for="i in props.post.acceptables" :key="i" class="flex w-32  items-center justify-between">
                    <p :class="{'opacity-70 line-through' : i.value==false , 'opacity-100' : i.value==true}" >{{ i.name }}</p>
                    <svg v-if="i.value"  class="cursor-pointer scale-100 hover:scale-105 transition-all fill-light" xmlns="http://www.w3.org/2000/svg"  id="tick" data-name="tick" viewBox="0 0 24 24" width="24" height="24"><path d="m23.637,10.55l-4.252-7.962c-.522-.979-1.536-1.587-2.646-1.587H7.282c-1.107,0-2.12.606-2.644,1.582L.365,10.549c-.488.911-.488,1.999,0,2.911l4.271,7.958c.523.976,1.536,1.582,2.644,1.582h9.457c1.11,0,2.124-.608,2.646-1.587l4.252-7.962c.485-.908.485-1.993,0-2.901Zm-11.728,4.87c-.386.387-.896.58-1.407.58s-1.025-.195-1.416-.585l-2.782-2.696,1.392-1.437,2.793,2.707,5.809-5.701,1.404,1.425-5.793,5.707Z"/></svg>
                    <svg v-if="!i.value" class="cursor-pointer scale-100 hover:scale-105 transition-all fill-red-500" xmlns="http://www.w3.org/2000/svg"  id="cross" data-name="cross" viewBox="0 0 24 24" width="24" height="24"><path d="m23.637,10.55l-4.252-7.962c-.522-.979-1.536-1.587-2.646-1.587H7.282c-1.108,0-2.122.606-2.644,1.582L.366,10.549c-.489.911-.489,2,0,2.911l4.271,7.958c.523.975,1.536,1.581,2.644,1.581h9.457c1.11,0,2.124-.608,2.646-1.587l4.252-7.962c.485-.908.485-1.993,0-2.901Zm-7.395,4.279l-1.414,1.414-2.828-2.828-2.828,2.828-1.414-1.414,2.828-2.829-2.828-2.829,1.414-1.414,2.828,2.828,2.828-2.828,1.414,1.414-2.828,2.829,2.828,2.829Z"/></svg>
                </li>
  
            </ul>
            <!-- product info shortcut-->
            <ul class="  basis-1/2 h-32 flex items-center justify-start p-2 flex-col">
                <li class=" w-5/6">
                    <p class="select-none" :class="{'text-outline-light text-black opacity-100 font-bold ' : props.post.work == true, 'text-outline-black-thin opacity-50': props.post.work == false}">{{ props.post.new ? 'yeni / yeni gibi' : 'kullanılmış/eski' }}</p>

                </li>
                <li class=" w-5/6  ">
                    <p class="select-none" :class="{'text-outline-light text-black opacity-100 font-bold ' : props.post.work == true, 'text-outline-black-thin opacity-50': props.post.work == false}">{{ props.post.work ? 'çalışıyor':'çalışmıyor' }}</p>
                </li>

                <li class="mt-auto self-end">
                    <button class="button group hover:border-light hover:bg-dark bg-light transition-all cursor-pointer hover:scale-105 scale-100">
                        <svg class="group-hover:fill-light fill-black transition-all"  xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width="32" height="32"><path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z"/><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z"/></svg>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import AccessorySvgComp from "./svg/accessorySvgComp.vue";
import ClothesSvgComp from "./svg/clothesSvgComp.vue";
import ElectronicsSvgComp from "./svg/electronicsSvgComp.vue";
import hobbySvgComp from "./svg/hobbySvgComp.vue";
import ToysSvgComp from "./svg/toysSvgComp.vue";

import ImgCarousel from "/src/components/ImgCarouselComp.vue"

const formatNumber=(value)=>{
    return value.toLocaleString('en-US')
}

const props = defineProps(['post'])

</script>