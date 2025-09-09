<template>
  <!-- relative container -->
  <div class="relative w-full h-full ">
      <!-- Background image -->
      <img
      src="/images/hero.jpg" alt="My Photo"
      class=" w-full h-full object-cover z-0 opacity-75"
      @load="onImageLoaded"
      >

      <!-- Start transition -->
      <transition name="fade" mode="out-in" appear>
      <!-- OVERLAY: full size absolute overlay div -- full width and height -->
      <div  class="absolute top-0 z-105 w-full h-full">

        <!-- START: relative div inside overlay -->
          <div class="flex flex-col w-full h-full z-200">

            <!-- TOP BAR -->
            <div
:class="[
            'flex flex-row items-center justify-between w-full px-80 py-2 transition-opacity duration-1000',
            showTopBar ? 'opacity-100' : 'opacity-0'
          ]">
              <div class=" font-bold text-md justify-start z-100 tracking-wide ml-20 cursor-pointer">[ CLICK THE EAR FOR MUSIC WORK ]</div>
              <div class=" font-bold text-md  justify-end z-100 tracking-wide">[ CLICK THE EYE FOR VISUAL WORK ]</div>
            </div>
            <!-- END: TOP BAR -->

            <!-- MAIN HEADER -->
            <!-- Kush Mody Logo -->
            <div class="flex flex-row items-center justify-center z-10 h-3/20">
              <!-- sizing container for the image with relative position -->
              <div class="w-4/10 relative ">
                <img src="/images/homepage/homepage_header_full.png" alt="Kush Mody Header" class="w-full" >
                <!-- 2 clickable overlays on the logo -->

                <!-- EAR CLICK AREA -->
                <div class="absolute top-2 left-17/80 w-6/50 h-9/10  z-300 cursor-pointer" @click="routeToMusic"
                @mouseenter="earHover = true"
                @mouseleave="earHover = false"
                />

                <!-- EYE CLICK AREA -->
                <div class="absolute top-2 right-9/40 w-6/50 h-9/10  z-300 cursor-pointer" @click="routeToVisual"
                @mouseenter="eyeHover = true"
                @mouseleave="eyeHover = false"
                />
              </div>
            </div>
            <!-- END: MAIN HEADER -->

            <!-- SUB HEADER -->
            <div class="flex flex-row items-center justify-center z-10 ">
              <span class="flex flex-row items-center justify-center font-bold text-xl mt-1 tracking-widest transition-colors duration-300" :class="earHover ? 'text-kushred' : 'text-gray-900'">PRODUCER</span>
              <span class="flex flex-row items-center justify-center text-gray-900 font-bold text-xl mt-1 mx-2 tracking-widest transition-colors duration-300 " :class="earHover ? 'text-kushred' : 'text-gray-900'">&middot;</span>
              <span class="flex flex-row items-center justify-center font-bold text-xl mt-1 tracking-widest transition-colors duration-300" :class="earHover ? 'text-kushred' : 'text-gray-900'">MIXER</span>
              <span class="flex flex-row items-center justify-center text-gray-900 font-bold text-xl mt-1 mx-2 tracking-widest transition-colors duration-300" :class="earHover ? 'text-kushred' : 'text-gray-900'">&middot;</span>
              <span class="flex flex-row items-center justify-center  font-bold text-xl mt-1 tracking-widest transition-colors duration-300" :class="earHover ? 'text-kushred' : 'text-gray-900'">COMPOSER</span>
              <span class="flex flex-row items-center justify-center text-gray-900 font-bold text-xl mt-1 mx-2 tracking-widest transition-colors duration-300" :class="eyeHover ? 'text-kushred' : 'text-gray-900'">&middot;</span>
              <span class="flex flex-row items-center justify-center  font-bold text-xl mt-1 tracking-widest transition-colors duration-300" :class="eyeHover ? 'text-kushred' : 'text-gray-900'">VISUAL ARTIST</span>
            </div>
            <!-- END: SUB HEADER -->

          </div>
          <!-- END: relative div inside overlay -->
      </div>
      <!-- End transition -->
      </transition>

  </div>

  <!-- <NuxtLink to="/music" class="text-white mt-4">EAR</NuxtLink>
      <NuxtLink to="/visual" class="text-white mt-4">EYE</NuxtLink> -->
</template>

<script lang="js" setup>


import { useRouter } from "vue-router"
const router = useRouter()

const routeToMusic = () => {
  // Navigate to music page
  router.push("/music")
}

const routeToVisual = () => {
  // Navigate to visual page
  router.push("/visual")
}

// Animate top bar to fade in after 5 seconds
const showTopBar = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTopBar.value = true
  }, 5000)
})

const imageLoaded = ref(false)

function onImageLoaded() {
  // Image has loaded, you can perform any actions if needed
  console.log("Background image loaded")

  setTimeout(() => {
    imageLoaded.value = true
  }, 50)
}

const earHover = ref(false)
const eyeHover = ref(false)

</script>

<style>
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-700;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}

</style>
