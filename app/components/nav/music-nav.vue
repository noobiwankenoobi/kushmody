<template>
  <nav class=" bg-white flex items-center justify-between px-4 py-2 z-50 w-screen">

    <!-- Left Side -->
    <NuxtLink to="/" class="text-black font-semibold w-1/6 left-0 items-center justify-center"><span>home</span></NuxtLink>

    <!-- Center Music Logo -->
    <img src="/images/homepage/music_page_header_music_eye_work.png" alt="Kush Mody Header" class="w-1/4 mx-auto mt-3" >

    <!-- Right Side -->
    <NuxtLink to="/visual" class="right-0 flex items-center justify-center text-black font-semibold ml-auto w-1/6"><span>to visual work</span></NuxtLink>
  </nav>
    <div class=" flex justify-evenly items-center py-3 px-52">
    <span class="font-semibold text-gray-700">PRODUCTION</span>
    <span class="font-semibold text-gray-700">MIXING</span>
    <span class="font-semibold text-gray-700">FILM SCORING</span>
    <span class="font-semibold text-gray-700">BRANDED</span>
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
