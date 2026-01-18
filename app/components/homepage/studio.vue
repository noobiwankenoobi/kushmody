<template>
  <div class="relative w-full h-screen min-h-[500px] overflow-hidden bg-kushoffwhite">
    <!-- Carousel Images - all stacked with crossfade -->
    <div 
      v-for="(img, index) in carouselImages"
      :key="index"
      class="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out"
      :class="currentIndex === index ? 'opacity-75' : 'opacity-0'"
    >
      <img 
        :src="img" 
        :alt="`Studio Photo ${index + 1}`" 
        class="w-full h-full object-cover" 
        loading="lazy"
      >
    </div>
    
    <div class="absolute inset-4 md:inset-12 lg:inset-20 flex flex-col items-center justify-start z-10">
      <!-- Your overlay content here -->

      <!-- <p class="text-white mt-4">SOMETHING WITTY</p> -->
    </div>

    <!-- Carousel Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
      <button 
        v-for="(img, index) in carouselImages" 
        :key="index"
        @click="currentIndex = index"
        :class="[
          'w-2 h-2 rounded-full transition-all',
          currentIndex === index ? 'bg-kushred w-4' : 'bg-white/50 hover:bg-white/75'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>

  </div>
</template>

<script lang="js" setup>
const carouselImages = ref([
  '/images/studio.jpg',
  '/images/studio.jpg', // Placeholder - replace with actual image
  '/images/studio.jpg'  // Placeholder - replace with actual image
])

const currentIndex = ref(0)
let intervalId = null

// Auto-advance carousel every 5 seconds
onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % carouselImages.value.length
  }, 5000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
</style>
