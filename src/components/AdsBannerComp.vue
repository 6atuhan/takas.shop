<template>
    <div id="adBanner" class="w-full h-[120px] md:w-[720px] md:h-[240px] md:my-10   mx-auto bg-cover bg-no-repeat bg-center">
    </div>
</template>

<script setup>
import { onMounted } from "vue";


onMounted(()=>{
const link = "https://www.kucukmenderes.com.tr/wp-content/uploads/2023/04/Cristiano_Ronaldo_2022-23-1024x576.jpg"
const template = `bg-[url('${link}')]`
const banner = document.querySelector("#adBanner")
banner.classList.add(template)
})
</script>