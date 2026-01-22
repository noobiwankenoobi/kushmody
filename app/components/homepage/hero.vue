<template>
  <!-- relative container -->
  <div class="relative w-full h-full">
    <!-- Background image - hidden on mobile, shown on desktop -->
    <img src="/images/hero.jpg" alt="My Photo" class="hidden md:block w-full h-full object-cover z-0 opacity-75" @load="onImageLoad">

    <!-- Mobile offwhite section with logo and submenu -->
    <div class="md:hidden bg-kushoffwhite w-full py-4 px-4">
      <transition name="fade" mode="out-in" appear>
        <div v-if="showHero" class="flex flex-col items-center">
          <!-- MAIN HEADER -->
          <!-- Kush Mody Logo -->
          <div class="flex flex-row items-center justify-center z-10 w-full">
            <!-- sizing container for the "kush mody" logo image with relative position and fixed aspect ratio -->
            <div class="w-full relative max-w-md aspect-[2400/446]">
              <!-- LOGO IMG -->
              <img src="/images/homepage-logo/kushmody_header_no_ear_eye.png" alt="Kush Mody Header" class="w-full h-full object-contain" />

              <!-- 2 clickable overlays on the logo -->
              <!-- EAR CLICK AREA -->
              <div class="absolute top-[-10%] left-[23%] w-[10%] h-[119%] z-300 cursor-pointer" @click="routeToMusicPage"
                @mouseenter="earHover = true" @mouseleave="earHover = false">
                <!-- EAR -->
                <img v-show="showRedEar" src="/images/homepage-logo/red_ear.png"
                  class="text-black h-full w-full object-contain transition-all duration-500 scale-105"
                  :class="[showRedEar ? 'opacity-100' : 'opacity-0', isWiggling ? 'wiggle' : '']" />
                <img v-show="!showRedEar" src="/images/homepage-logo/ear_black.png"
                  class="text-black h-full w-full object-contain transition-all duration-500"
                  :class="[showRedEar ? 'opacity-0' : 'opacity-100', isWiggling ? 'wiggle' : '']" />
              </div>

              <!-- EYE CLICK AREA -->
              <div class="absolute top-[-20%] right-[20%] w-[16%] h-[125%] z-300 cursor-pointer" @click="routeToVisualPage"
                @mouseenter="eyeHover = true" @mouseleave="eyeHover = false">
                <!-- EYE -->
                <img v-show="showRedEye" src="/images/homepage-logo/red_eye.png"
                  class="text-black h-full w-full object-contain transition-all duration-700 scale-105"
                  :class="[showRedEye ? 'opacity-100' : 'opacity-0', isWinking ? 'wink' : '']" />
                <img v-show="!showRedEye" src="/images/homepage-logo/eye_black.png"
                  class="text-black h-full w-full object-contain transition-all duration-700"
                  :class="[showRedEye ? 'opacity-0' : 'opacity-100', isWinking ? 'wink' : '']" />
              </div>
            </div>
          </div>
          <!-- END: MAIN HEADER -->

          <!-- SUB HEADER -->
          <div class="flex flex-row flex-nowrap items-center justify-center z-10 px-1 gap-x-0.5 mt-2">

            <!-- PRODUCER -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="earHover || producerHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="producerHover = true"
              @mouseleave="producerHover = false"
              @click="routeToMusicPage({ category: 'production' })">PRODUCER</span>

            <span
              class="flex flex-row items-center justify-center text-gray-900 font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200"
              :class="showRedEar ? 'text-kushred' : 'text-gray-900'">&middot;</span>

            <!-- MIXER -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="earHover || mixerHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="mixerHover = true"
              @mouseleave="mixerHover = false"
              @click="routeToMusicPage({ category: 'mixing' })">MIXER</span>

            <span
              class="flex flex-row items-center justify-center text-gray-900 font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200"
              :class="showRedEar ? 'text-kushred' : 'text-gray-900'">&middot;</span>

            <!-- COMPOSER -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="earHover || composerHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="composerHover = true"
              @mouseleave="composerHover = false"
              @click="routeToMusicPage({ category: 'film scoring' })">COMPOSER</span>

            <span
              class="flex flex-row items-center justify-center text-gray-900 font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200"
              :class="showRedEye ? 'text-kushred' : 'text-gray-900'">&middot;</span>

            <!-- VISUAL ARTIST -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[2.5vw] sm:text-xs mt-1 mx-0.5 tracking-tight transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="eyeHover || visualArtistHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="visualArtistHover = true"
              @mouseleave="visualArtistHover = false"
              @click="routeToVisualPage()">VISUAL ARTIST</span>

          </div>
          <!-- END: SUB HEADER -->
        </div>
      </transition>
    </div>

    <!-- Mobile: Show hero image below the offwhite section -->
    <div class="md:hidden w-full h-full">
      <img src="/images/hero.jpg" alt="My Photo" class="w-full h-full object-cover opacity-75">
    </div>

    <!-- Desktop overlay -->
    <!-- Start transition -->
    <transition name="fade" mode="out-in" appear>
      <!-- OVERLAY: full size absolute overlay div -- full width and height -->
      <div v-if="showHero" class="hidden md:block absolute top-0 z-105 w-full h-full">

        <!-- START: relative div inside overlay -->
        <div class="flex flex-col w-full h-full z-200">

          <!-- TOP BAR -->
          <div :class="[
            'flex flex-row items-center justify-between w-full px-8 lg:px-16 xl:px-32 2xl:px-48 py-2 transition-opacity duration-1000',
            showTopBar ? 'opacity-100' : 'opacity-0']">
            <div class="font-medium text-[0.75vw] justify-start z-100 tracking-wide cursor-pointer">
              [ CLICK THE EAR FOR MUSIC WORK ]
            </div>
            <div class="font-medium text-[0.75vw] justify-end z-100 tracking-wide">
              [ CLICK THE EYE FOR VISUAL WORK ]
            </div>
          </div>
          <!-- END: TOP BAR -->

          <!-- MAIN HEADER -->
          <!-- Kush Mody Logo -->
          <div class="flex flex-row items-center justify-center z-10 h-4/40 mt-[2vh] lg:mt-[4vh] xl:mt-[5vh] 2xl:mt-[6vh] px-4">
            <!-- sizing container for the "kush mody" logo image with relative position and fixed aspect ratio -->
            <div class="w-4/10 relative aspect-[2400/446]">
              <!-- LOGO IMG -->
              <img src="/images/homepage-logo/kushmody_header_no_ear_eye.png" alt="Kush Mody Header" class="w-full h-full object-contain" />

              <!-- 2 clickable overlays on the logo -->
              <!-- EAR CLICK AREA -->
              <div class="absolute top-[-10%] left-[23%] w-[10%] h-[119%] z-300 cursor-pointer" @click="routeToMusicPage"
                @mouseenter="earHover = true" @mouseleave="earHover = false">
                <!-- EAR -->
                <img v-show="showRedEar" src="/images/homepage-logo/red_ear.png"
                  class="text-black h-full w-full object-contain transition-all duration-500 scale-105"
                  :class="[showRedEar ? 'opacity-100' : 'opacity-0', isWiggling ? 'wiggle' : '']" />
                <img v-show="!showRedEar" src="/images/homepage-logo/ear_black.png"
                  class="text-black h-full w-full object-contain transition-all duration-500"
                  :class="[showRedEar ? 'opacity-0' : 'opacity-100', isWiggling ? 'wiggle' : '']" />
              </div>

              <!-- EYE CLICK AREA -->
              <div class="absolute top-[-20%] right-[20%] w-[16%] h-[125%] z-300 cursor-pointer" @click="routeToVisualPage"
                @mouseenter="eyeHover = true" @mouseleave="eyeHover = false">
                <!-- EYE -->
                <img v-show="showRedEye" src="/images/homepage-logo/red_eye.png"
                  class="text-black h-full w-full object-contain transition-all duration-700 scale-105"
                  :class="[showRedEye ? 'opacity-100' : 'opacity-0', isWinking ? 'wink' : '']" />
                <img v-show="!showRedEye" src="/images/homepage-logo/eye_black.png"
                  class="text-black h-full w-full object-contain transition-all duration-700"
                  :class="[showRedEye ? 'opacity-0' : 'opacity-100', isWinking ? 'wink' : '']" />

              </div>
            </div>
          </div>
          <!-- END: MAIN HEADER -->

          <!-- SUB HEADER -->
          <div class="flex flex-row flex-wrap items-center justify-center z-10 px-2 gap-1 mt-0 lg:mt-1 xl:mt-1.5 2xl:mt-2">

            <!-- PRODUCER -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[0.9vw] mt-1 mx-2 tracking-wider transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="earHover || producerHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="producerHover = true"
              @mouseleave="producerHover = false"
              @click="routeToMusicPage({ category: 'production' })">PRODUCER</span>

            <span
              class="flex flex-row items-center justify-center text-gray-900 font-bold text-[0.9vw] mt-1 mx-2 tracking-wider transition-colors duration-200"
              :class="showRedEar ? 'text-kushred' : 'text-gray-900'">&middot;</span>

            <!-- MIXER -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[0.9vw] mt-1 mx-2 tracking-wider transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="earHover || mixerHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="mixerHover = true"
              @mouseleave="mixerHover = false"
              @click="routeToMusicPage({ category: 'mixing' })">MIXER</span>

            <span
              class="flex flex-row items-center justify-center text-gray-900 font-bold text-[0.9vw] mt-1 mx-2 tracking-wider transition-colors duration-200"
              :class="showRedEar ? 'text-kushred' : 'text-gray-900'">&middot;</span>

            <!-- COMPOSER -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[0.9vw] mt-1 mx-2 tracking-wider transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="earHover || composerHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="composerHover = true"
              @mouseleave="composerHover = false"
              @click="routeToMusicPage({ category: 'film scoring' })">COMPOSER</span>

            <span
              class="flex flex-row items-center justify-center text-gray-900 font-bold text-[0.9vw] mt-1 mx-2 tracking-widest transition-colors duration-200"
              :class="showRedEye ? 'text-kushred' : 'text-gray-900'">&middot;</span>

            <!-- VISUAL ARTIST -->
            <span
              class="flex flex-row items-center justify-center font-bold text-[0.9vw] mt-1 mx-2 tracking-wider transition-colors duration-200 cursor-pointer hover:text-kushred"
              :class="eyeHover || visualArtistHover ? 'text-kushred' : 'text-gray-900'"
              @mouseenter="visualArtistHover = true"
              @mouseleave="visualArtistHover = false"
              @click="routeToVisualPage()">VISUAL ARTIST</span>

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
const showHero = ref(false)
const imageLoaded = ref(false)
const onImageLoad = () => {
  imageLoaded.value = true
  setTimeout(() => {
    showHero.value = true
  }, 200)
}


//+--------------------+
//|      ROUTING       |
//+--------------------+
const router = useRouter()

const routeToMusicPage = (query) => {
  // Navigate to music page
  if (!query) router.push("/music")
  else router.push({ path: "/music", query })
}

const routeToVisualPage = (query) => {
  // Navigate to visual page
  if (!query) router.push("/visual")
  else router.push({ path: "/visual", query })
}

//+--------------------+
//|      HOVERING      |
//+--------------------+
// Hover states for ear and eye
const earHover = ref(false)
const eyeHover = ref(false)

// Hover states for individual submenu items
const producerHover = ref(false)
const mixerHover = ref(false)
const composerHover = ref(false)
const visualArtistHover = ref(false)

// Computed properties to show red ear/eye when either the logo or submenu items are hovered
const showRedEar = computed(() => earHover.value || producerHover.value || mixerHover.value || composerHover.value)
const showRedEye = computed(() => eyeHover.value || visualArtistHover.value)

//+--------------------+
//|     ANIMATION      |
//+--------------------+
// Animate top bar to fade in after 5 seconds
const showTopBar = ref(false)

// Eye winking animation
const isWinking = ref(false)

// Ear wiggle animation
const isWiggling = ref(false)

const scheduleWink = () => {
  // Random interval between 3.5 and 4.5 seconds
  const randomInterval = 3500 + Math.random() * 1000
  setTimeout(() => {
    isWinking.value = true
    setTimeout(() => {
      isWinking.value = false
      scheduleWink() // Schedule next wink
    }, 300) // Wink duration
  }, randomInterval)
}

const scheduleWiggle = () => {
  // Random interval between 4 and 5 seconds
  const randomInterval = 4000 + Math.random() * 1000
  setTimeout(() => {
    isWiggling.value = true
    setTimeout(() => {
      isWiggling.value = false
      scheduleWiggle() // Schedule next wiggle
    }, 500) // Wiggle duration
  }, randomInterval)
}

onMounted(() => {
  setTimeout(() => {
    showTopBar.value = true
  }, 5000)

  // Start winking with random intervals
  scheduleWink()
  
  // Start wiggling with random intervals
  scheduleWiggle()
})


</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-opacity duration-700;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.wink {
  animation: wink 0.3s ease-in-out;
}

@keyframes wink {
  0%, 100% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0.1);
  }
}

.wiggle {
  animation: wiggle 0.5s ease-in-out;
}

@keyframes wiggle {
  0%, 100% {
    transform: scale(1) translate(0, 0);
  }
  50% {
    transform: scale(1.15) translate(8%, -8%);
  }
}
</style>
