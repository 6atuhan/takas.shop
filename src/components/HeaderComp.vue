<template>

        <ul class="bg-gradient-to-b md:bg-gradient-to-l  from-light via-light  to-transparent border-b-2 border-dark flex items-center justify-center w-full flex-wrap gap-4 md:gap-0 ">
            <li class="basis-0 px-4 md:basis-1/2  select-none shrink-0"><logo-comp></logo-comp></li>
            <li class="basis-1/2 px-4 select-none shrink-0 flex items-center justify-evenly gap-2">
                <p @click="router.push('/')" class=" cursor-pointer drop-shadow-md select-none shrink-0 border-b border-transparent hover:border-dark dark:hover:border-light w-20 text-center hover:text-dark dark:hover:text-light">ana sayfa</p>
                <p class=" cursor-pointer drop-shadow-md select-none shrink-0 border-b border-transparent hover:border-dark dark:hover:border-light w-20 text-center hover:text-dark dark:hover:text-light">ara</p>
                <p @click="router.push('/login')" class="cursor-pointer drop-shadow-md select-none shrink-0 border-b border-transparent hover:border-dark dark:hover:border-light w-20 text-center hover:text-dark dark:hover:text-light">giriş yap</p>
            </li>
            <li class="basis-full  border-t border-dark flex items-center flex-wrap justify-evenly bg-white">
                <button @click="router.push('/posts/electronic')" class="bg-white hover:bg-gradient-to-t  from-light via-transparent  to-transparent  px-3 py-1 hover:text-light text-dark text-outline-white-thin hover:text-outline-black-thin w-full basis-1/5 transition-all">elektronik</button>
                <button @click="router.push('/posts/accessory')" class="bg-white hover:bg-gradient-to-t  from-light via-transparent  to-transparent  px-3 py-1 hover:text-light text-dark text-outline-white-thin hover:text-outline-black-thin w-full basis-1/5 transition-all">aksesuar</button>
                <button @click="router.push('/posts/toys')" class="bg-white hover:bg-gradient-to-t  from-light via-transparent  to-transparent  px-3 py-1 hover:text-light text-dark text-outline-white-thin hover:text-outline-black-thin w-full basis-1/5 transition-all">oyuncak</button>
                <button @click="router.push('/posts/clothes')" class="bg-white hover:bg-gradient-to-t  from-light via-transparent  to-transparent  px-3 py-1 hover:text-light text-dark text-outline-white-thin hover:text-outline-black-thin w-full basis-1/5 transition-all">giyim</button>
                <button @click="router.push('/posts/hobby')" class="bg-white hover:bg-gradient-to-t  from-light via-transparent  to-transparent  px-3 py-1 hover:text-light text-dark text-outline-white-thin hover:text-outline-black-thin w-full basis-1/5 transition-all">hobi</button>
            </li>
        </ul>


</template>

<script setup>
import LogoComp from "/src/components/LogoComp.vue";

import router from "/src/router";

</script>