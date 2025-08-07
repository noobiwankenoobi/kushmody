<template>
  <div class="relative w-full h-full ">
      <img src="/images/hero.jpg" alt="My Photo" 
      class=" w-full h-full object-cover z-0"
      />
      <div class="absolute inset-20 flex flex-col items-center justify-start z-10">
      <!-- Your overlay content here -->
      <h1 class="text-white text-4xl font-bold">Kush Mody</h1>
          <NuxtLink to="/music" class="text-white mt-4">EAR</NuxtLink>
          <NuxtLink to="/visual" class="text-white mt-4">EYE</NuxtLink>


      <p class="text-white mt-4">PRODUCER  MIXER  COMPOSER  VISUAL ARTIST</p>
    </div>

  </div>
</template>

<script lang="js" setup>
import { NuxtLink } from '#components';


</script>

<style>

</style>