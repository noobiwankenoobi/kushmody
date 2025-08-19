<template>
  <nav class="top-0 w-full bg-white  flex items-center justify-between px-4 py-2 z-50">
    <NuxtLink to="/" class="text-black font-semibold">Home</NuxtLink>
    <div class="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold select-none">
      VISUAL WORK
    </div>
    <NuxtLink to="/music" class="text-black font-semibold ml-auto">to music work</NuxtLink>
  </nav>
    <div class=" flex justify-evenly items-center py-3 px-52">
    <span class="font-semibold text-gray-700">PHOTOGRAPHY</span>
    <span class="font-semibold text-gray-700">VIDEO</span>
    <span class="font-semibold text-gray-700">ART & DESIGN</span>
    
  </div>
</template>

<script setup>
// No script needed for static navbar
</script>

<style scoped>
nav {
  min-height: 56px;
}
</style>