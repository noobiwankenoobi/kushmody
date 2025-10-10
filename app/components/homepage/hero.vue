<template>
  <!-- relative container -->
  <div class="relative w-full h-full ">
      <!-- Background image -->
      <img
      src="/images/hero.jpg" alt="My Photo"
      class=" w-full h-full object-cover z-0 opacity-75"
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
              <div class=" font-bold text-sm justify-start z-100 tracking-wide ml-20 cursor-pointer">[ CLICK THE EAR FOR MUSIC WORK ]</div>
              <div class=" font-bold text-sm  justify-end z-100 tracking-wide">[ CLICK THE EYE FOR VISUAL WORK ]</div>
            </div>
            <!-- END: TOP BAR -->

            <!-- MAIN HEADER -->
            <!-- Kush Mody Logo -->
            <div class="flex flex-row items-center justify-center z-10 h-3/20">
              <!-- sizing container for the "kush mody" logo image with relative position -->
              <div class="w-4/10 relative">
                <!-- LOGO IMG -->
                <img src="/images/homepage-logo/kushmody_header_no_ear_eye.png" alt="Kush Mody Header" class="w-full" >
          
                <!-- 2 clickable overlays on the logo -->
                <!-- EAR CLICK AREA -->
                <div class="absolute -top-4 left-18/80 w-6/50 h-30/20 z-300 cursor-pointer" @click="routeToMusicPage"
                  @mouseenter="earHover = true"
                  @mouseleave="earHover = false"
                >
                  <!-- EAR -->
                  <img src="/images/homepage-logo/red_ear.png" class="text-black h-full"/>
                </div>

                <!-- EYE CLICK AREA -->
                <div class="absolute -top-5 right-16/80 w-8/50  z-300 cursor-pointer" @click="routeToVisualPage"
                  @mouseenter="eyeHover = true"
                  @mouseleave="eyeHover = false"
                >
                  <!-- EYE -->
                  <img src="/images/homepage-logo/red_eye.png" class="text-black h-full"/>
                </div>
              </div>
            </div>
            <!-- END: MAIN HEADER -->

            <!-- SUB HEADER -->
            <div class="flex flex-row items-center justify-center z-10 ">

              <!-- PRODUCER -->
              <span class="flex flex-row items-center justify-center font-bold text-xl mt-1 tracking-widest transition-colors duration-300 cursor-pointer hover:text-kushred" :class="earHover ? 'text-kushred' : 'text-gray-900'" @click="routeToMusicPage({category: 'production'})">PRODUCER</span>

              <span class="flex flex-row items-center justify-center text-gray-900 font-bold text-xl mt-1 mx-2 tracking-widest transition-colors duration-300 " :class="earHover ? 'text-kushred' : 'text-gray-900'">&middot;</span>

              <!-- MIXER -->
              <span class="flex flex-row items-center justify-center font-bold text-xl mt-1 tracking-widest transition-colors duration-300 cursor-pointer hover:text-kushred" :class="earHover ? 'text-kushred' : 'text-gray-900'" @click="routeToMusicPage({category: 'mixing'})">MIXER</span>

              <span class="flex flex-row items-center justify-center text-gray-900 font-bold text-xl mt-1 mx-2 tracking-widest transition-colors duration-300" :class="earHover ? 'text-kushred' : 'text-gray-900'">&middot;</span>

              <!-- COMPOSER -->
              <span class="flex flex-row items-center justify-center  font-bold text-xl mt-1 tracking-widest transition-colors duration-300 cursor-pointer hover:text-kushred" :class="earHover ? 'text-kushred' : 'text-gray-900'" @click="routeToMusicPage({category: 'film scoring'})">COMPOSER</span>

              <span class="flex flex-row items-center justify-center text-gray-900 font-bold text-xl mt-1 mx-2 tracking-widest transition-colors duration-300" :class="eyeHover ? 'text-kushred' : 'text-gray-900'">&middot;</span>

              <!-- VISUAL ARTIST -->
              <span class="flex flex-row items-center justify-center  font-bold text-xl mt-1 tracking-widest transition-colors duration-300 cursor-pointer hover:text-kushred" :class="eyeHover ? 'text-kushred' : 'text-gray-900'" @click="routeToVisualPage()">VISUAL ARTIST</span>

            </div>
            <!-- END: SUB HEADER -->

          </div>
          <!-- END: relative div inside overlay -->
      </div>
      <!-- End transition -->
      </transition>

  </div>

</template>

<script lang="js" setup>
//+--------------------+
//|      ROUTING       |
//+--------------------+
const router = useRouter()

const routeToMusicPage = (query) => {
  // Navigate to music page
  if (!query) router.push("/music")
  else router.push({ path: "/music", query } )
}

const routeToVisualPage = (query) => {
  // Navigate to visual page
  if (!query) router.push("/visual")
  else router.push({ path: "/visual", query } )
}

//+--------------------+
//|      HOVERING      |
//+--------------------+
// Hover states for ear and eye
const earHover = ref(false)
const eyeHover = ref(false)

//+--------------------+
//|     ANIMATION      |
//+--------------------+
// Animate top bar to fade in after 5 seconds
const showTopBar = ref(false)

onMounted(() => {
  setTimeout(() => {
    showTopBar.value = true
  }, 5000)
})

</script>

<style>
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-700;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}

</style>
