<template>
  <!-- Start transition -->
  <transition name="fade" mode="out-in" appear>
    <div class="relative w-full h-full">
      <img src="/images/name.webp" alt="My Photo" class="w-full h-full object-cover z-0 opacity-75" loading="lazy">
      <div class="absolute inset-4 md:inset-12 lg:inset-20 flex flex-col items-center justify-start z-10">
        <!-- Your overlay content here -->

        <p class="text-white mt-2 md:mt-4 text-wrap max-w-full md:max-w-[80%] lg:max-w-[65%] text-sm md:text-lg lg:text-xl font-display leading-relaxed">A QUICK NOTE ON MY NAME -- I PRONOUNCE IT
          <span class="text-red-600">/KOOSH/</span> THOUGH I WON'T BE OFFENDED IF YOU DON'T. FULL NAME IS KUSHAGRA /
          KOO-SHA-GRA /. A FRIEND SHORTENED IT TO KUSH IN KINDERGARTEN AND IT STUCK.
        </p>
      </div>

    </div>
  </transition>
  <!-- End transition -->
</template>

<script lang="js" setup>



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
</style>
