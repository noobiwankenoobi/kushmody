<script setup lang="js">
</script>

<template>
    <!-- Kush Mody Logo -->
  <div class="flex flex-row items-center justify-center z-10 h-3/20">
    <!-- sizing container for the image with relative position -->
    <div class="w-4/10 relative ">
      <img src="/images/homepage/homepage_header_full.png" alt="Kush Mody Header" class="w-full" >
      <!-- 2 clickable overlays on the logo -->

      <!-- EAR CLICK AREA -->
      <div class="absolute top-2 left-17/80 w-6/50 h-9/10  z-300 cursor-pointer" @click="routeToMusicPage"
      @mouseenter="earHover = true"
      @mouseleave="earHover = false"
      />

      <!-- EYE CLICK AREA -->
      <div class="absolute top-2 right-9/40 w-6/50 h-9/10  z-300 cursor-pointer" @click="routeToVisualPage"
      @mouseenter="eyeHover = true"
      @mouseleave="eyeHover = false"
      />
    </div>
  </div>
  <!-- END: MAIN HEADER -->
</template>