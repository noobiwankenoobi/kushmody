<script setup lang="js">
// import json file items from 'data/music-items.js'
import items from "~/data/music-items.json"

// get the category from the query param
const route = useRoute()
// const category = route.query.category

const selectedItem = ref(null)

function containsSubstring(str, substring) {
  return str.includes(substring)
}

// computed for items visible -- filtered by category
const visibleItems = computed(() => {
  if (!route.query.category) {
    return items // return all items if no category is specified
  }
  return items.filter(item => containsSubstring(item.categories.toLowerCase(), route.query.category.toLowerCase()))
})

// click on square
function handleSquareClick(item) {
  selectedItem.value = item
  router.replace({ query: { id: item.work_title } }) // stays on page, updates URL
}

// close modal
function closeModal() {
  selectedItem.value = null
  router.replace({ query: {} }) // remove id from URL
}

// Animation trigger flag
const triggerAnimation = ref(false)

// Watch for changes in visibleItems and trigger animation
watch(visibleItems, async () => {
  triggerAnimation.value = false
  await nextTick()
  triggerAnimation.value = true
}, { immediate: true })
</script>

<template>
  <!-- Grid container -->
  <div class="gallery-grid grid grid-cols-4 gap-x-16 gap-y-12 justify-center mx-auto max-w-5xl">

    <!-- Looping items -->
    <div
      v-for="item in visibleItems" :key="item.id"
      class="flex justify-center items-center aspect-[2/3] w-full"
     >
      <GallerySquare
        :key="item.id"
        :item="item"
        :to="`/gallery/${item.id}`"
        @click="handleSquareClick(item)"
        :style="{ transitionDelay: `${idx * 80}ms` }"
      :class="[
        triggerAnimation ? 'animate-fade-in opacity-0 translate-y-8' : '',
        'transition-all duration-500'
      ]"
      />
    </div>
  </div>
    <MediaAudioPlayerModal
    v-if="selectedItem"
    :item="selectedItem"
    @close="closeModal"
  />
</template>

<style scoped>
@keyframes fade-in-wiggle {
  0% {
    opacity: 0;
    transform: translateY(32px) rotate(-2deg) scale(0.98);
  }
  60% {
    opacity: 1;
    transform: translateY(-4px) rotate(2deg) scale(1.04);
  }
  80% {
    transform: translateY(0px) rotate(-1deg) scale(0.99);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(0deg) scale(1);
  }
}
.animate-fade-in {
  animation: fade-in-wiggle 0.6s forwards;
}
</style>