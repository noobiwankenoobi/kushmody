<template>
  <div>
    <!-- Hamburger Button -->
    <button 
      @click="toggleMenu"
      class="md:hidden p-2 text-gray-700 hover:text-kushred transition-colors"
      aria-label="Toggle menu"
    >
      <svg 
        v-if="!isOpen" 
        class="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg 
        v-else 
        class="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div 
        v-if="isOpen"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="closeMenu"
      />
    </Transition>

    <!-- Mobile Menu Panel -->
    <Transition name="slide">
      <div 
        v-if="isOpen"
        class="fixed top-0 right-0 h-full w-64 bg-kushoffwhite shadow-lg z-50 md:hidden"
      >
        <div class="flex flex-col h-full">
          <!-- Close Button -->
          <div class="flex justify-end p-4">
            <button 
              @click="closeMenu"
              class="p-2 text-gray-700 hover:text-kushred transition-colors"
              aria-label="Close menu"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Menu Content -->
          <nav class="flex-1 px-4">
            <slot />
          </nav>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

// Close menu on route change
const route = useRoute()
watch(() => route.fullPath, () => {
  closeMenu()
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
