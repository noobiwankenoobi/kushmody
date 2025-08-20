<template>
  <!-- relative container -->
  <div class="relative w-full h-full ">
      <!-- Background image -->
      <img
      src="/images/hero.jpg" alt="My Photo"
      class=" w-full h-full object-cover z-0 opacity-75"
      >

      <!-- full size absolute overlay div -- full width and height -->
      <div class="absolute top-0  z-105 w-full h-full">

        <!-- START: relative div inside overlay -->
          <div class="relative w-full h-full  z-200">

            <!-- content with absolute positioning -->
            <!-- content with absolute positioning -->
            <div class="absolute font-bold text-md top-5 left-100  z-100 tracking-wide">[ CLICK THE EAR FOR MUSIC WORK ]</div>
            <div class="absolute font-bold text-md top-5 right-100  z-100 tracking-wide">[ CLICK THE EYE FOR VISUAL WORK ]</div>

            <!-- Header Nav Logo and Nav Items -->
            <!-- Header Nav Logo and Nav Items -->
            <div class="absolute inset-20 flex flex-col items-center justify-start z-10">

              <!-- Kush Mody Logo -->

              <!-- sizing container for the image with relative position -->
              <div class="relative w-4/10 ">
                <img src="/images/homepage/homepage_header_full.png" alt="Kush Mody Header" class="w-full" >
                <!-- 2 clickable overlays on the logo -->
                <!-- <div to="/music" class="absolute top-2 left-40 w-16 h-26 bg-pink-600 z-250 cursor-pointer"/>
                <div to="/visual" class="absolute inset-0 z-10"/> -->
              </div>

              <!-- Nav Links -->
                <p class="text-gray-900 font-bold text-xl mt-1 tracking-widest">PRODUCER  &middot;  MIXER  &middot;  COMPOSER  &middot;  VISUAL ARTIST</p>

            </div>
            <!-- END: Header Nav Logo and Nav Items -->
            <!-- END: Header Nav Logo and Nav Items -->

          </div>
          <!-- END: relative div inside overlay -->
      </div>

  </div>

  <!-- <NuxtLink to="/music" class="text-white mt-4">EAR</NuxtLink>
      <NuxtLink to="/visual" class="text-white mt-4">EYE</NuxtLink> -->
</template>

<script lang="js" setup>

// const routeToMusic = () => {
//   // Navigate to music page
//   router.push("/music")
// }

// const routeToVisual = () => {
//   // Navigate to visual page
//   router.push("/visual")
// }

</script>

<style>

</style>
