<template>
    <div class="container mx-auto flex flex-wrap items-center justify-center gap-2 py-10 overflow-x-hidden">
        <h1 class="bg-dark basis-full  text-center text-light tracking-[0.3rem] uppercase font-bold mb-8">{{ tab }}</h1>
        <post-card-comp v-for=" i in 10" :key="i" :post="post" v-show="post.type==type"></post-card-comp>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import PostCardComp from '../../components/PostCardComp.vue';
import {  computed, onUpdated, reactive, ref } from "vue"

const route = useRoute();
const type = ref("")
type.value =   route.params.type;

const tab = computed(()=>{
    return  type.value=='electronic' ? 'elektronik' : type.value=='accessory' ? 'aksesuar' : type.value=='toys' ? 'oyuncak' : type.value=='clothes' ? 'giyim' : type.value=='hobby' ? 'hobi' : ''
})
onUpdated(()=>{
type.value =   route.params.type;

})


const post = reactive({
    header:"WWWWWWWWWWWWWWWWWW", //20char
    name:"WWWWWWWWWW",   //10char
    surname:"WWWWWWWWWW",   //10char
    city:"WWWWWWWWWWWWWww", //15char
    plate:45, //2char
    note:"WWWWWWWWWWWWWWWWWWWWWWWWWWWWW", //30char
    new:true,
    work:true,
    age:1,
    value:23030,
    type: "accessory", //electronics, toys,hobby,clothes,accessory
    acceptables:[ 
    {
        name:"elektronik",
        value:false
    },
    {
        name:"aksesuar",
        value:false
    },
    {
        name:"oyuncak",
        value:true
    },
    {
        name:"giyim",
        value:false
    },
    {
        name:"hobi",
        value:true
    },
    ],
    images : [
    "https://www.camhotel.com.tr/uploads/ulkemizin-dort-bir-yanindan-guzel-manzara-fotograflari.jpg",
    "https://i.pinimg.com/originals/40/72/63/407263d8f431b01496788fd79436a102.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq4OwoZ2GeIVV0UoWOzShGcV9IfUJIPmxrbE9uFjfK&s"
]

})
</script>