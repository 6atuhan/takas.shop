<template>
    <svg @click="toggleDark" :class="{'fill-dark -rotate-45' : isDark==false, 'fill-light rotate-[135deg]': isDark==true}" class=" fixed -top-5 -right-5 transition-all scale-95 hover:scale-105" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="48" height="48"><path d="M18,6c-7.929.252-7.928,11.749,0,12C25.929,17.748,25.928,6.251,18,6Zm0,9a3,3,0,0,1,0-6A3,3,0,0,1,18,15Zm-4.5,3.9v3.579a1.5,1.5,0,0,1-3,0v-3.15a7.421,7.421,0,0,1-2.627-1.1L5.636,20.466a1.5,1.5,0,0,1-2.121-2.122l2.238-2.237a7.5,7.5,0,0,1-1.094-2.626H1.5a1.5,1.5,0,0,1,0-3H4.659A7.484,7.484,0,0,1,5.753,7.855L3.515,5.617A1.5,1.5,0,0,1,5.636,3.5L7.873,5.732a7.4,7.4,0,0,1,2.627-1.1V1.481a1.5,1.5,0,0,1,3,0V5.059a2.5,2.5,0,0,1-2.141,2.467,4.508,4.508,0,0,0,0,8.91A2.5,2.5,0,0,1,13.5,18.9Z"/></svg>
</template>
  
<script setup>
  import { ref } from "@vue/reactivity"
    const isDark = ref(false)
    const html = document.querySelector("html")
    const toggleDark=()=>{
      isDark.value = !isDark.value
        if ( isDark.value)
        html.setAttribute("class","dark")
        else
        html.setAttribute("class"," ")
    } 
  </script>