<template>
   <!-- Start transition -->
      <transition name="fade" mode="out-in" appear>
  <div class="relative w-full h-full ">
      <img
src="/images/name.webp" alt="My Photo"
      class=" w-full h-full object-cover z-0 opacity-75"
      @load="onImageLoaded"
      >
      <div class="absolute inset-20 flex flex-col items-center justify-start z-10">
      <!-- Your overlay content here -->

      <p class="text-white mt-4 text-wrap max-w-[65%] text-xl font-display">A QUICK NOTE ON MY NAME -- I PRONOUNCE IT <span class="text-red-600">/KOOSH/</span> THOUGH I WON'T BE OFFENDED IF YOU DON'T. FULL NAME IS KUSHAGRA / KOO-SHA-GRA /. A FRIEND SHORTENED IT TO KUSH IN KINDERGARTEN AND IT STUCK.</p>
    </div>

  </div>
      </transition>
      <!-- End transition -->
</template>

<script lang="js" setup>

const imageLoaded = ref(false)

function onImageLoaded() {
  // Image has loaded, you can perform any actions if needed
  console.log("Background image loaded")
  setTimeout(() => {
    imageLoaded.value = true
  }, 100)
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-700;
}
.fade-enter-from, .fade-leave-to {
  @apply opacity-0;
}

</style>
