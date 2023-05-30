<template>
  <div class="flex flex-col items-center justify-start  w-full h-full min-h-screen">
    <header-comp  ></header-comp>
    <router-view></router-view>
    <footer-comp class="mt-auto"></footer-comp>
  </div>
</template>

<script setup>
import HeaderComp from "/src/components/HeaderComp.vue";
import FooterComp from "/src/components/FooterComp.vue";

</script>

<style>
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #00f048 transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #00f048;
    border-radius: 10px;

  }
</style>