<template>
  <!-- relative container -->
  <div class="relative w-full h-full ">
      <!-- Background image -->
      <img
src="/images/hero.jpg" alt="My Photo"
      class=" w-full h-full object-cover z-0 opacity-70"
      >

      <!-- Your overlay content here -->
      <div class="absolute font-bold text-xs top-5 left-100 bg-pink z-100">[ CLICK THE EAR FOR MUSIC WORK ]</div>
      <div class="absolute font-bold text-xs top-5 right-100 bg-pink z-100">[ CLICK THE EYE FOR VISUAL WORK ]</div>

      <!-- Header -->
      <div class="absolute inset-20 flex flex-col items-center justify-start z-10">
      <img src="/images/homepage/homepage_header_full.png" alt="Kush Mody Header" class="w-4/10  mt-3" >
          <!-- <NuxtLink to="/music" class="text-white mt-4">EAR</NuxtLink>
          <NuxtLink to="/visual" class="text-white mt-4">EYE</NuxtLink> -->

      <p class="text-black font-light mt-1">PRODUCER  &middot;  MIXER  &middot;  COMPOSER  &middot;  VISUAL ARTIST</p>
    </div>

  </div>
</template>

<script lang="js" setup>

</script>

<style>

</style>
