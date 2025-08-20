<script setup lang="js">
// import json file items from 'data/music-items.js'
import items from "~/data/music-items.json"

const selectedItem = ref(null)
const router = useRouter()

// computed for items visible
const visibleItems = computed(() => {
  return items.filter(item => item)
})

function handleSquareClick(item) {
  selectedItem.value = item
  router.replace({ query: { id: item.work_title } }) // stays on page, updates URL
}

function closeModal() {
  selectedItem.value = null
  router.replace({ query: {} }) // remove id from URL
}
</script>

<template>
  <!-- Grid container -->
  <div class="gallery-grid grid grid-cols-4 gap-x-16 gap-y-22 my-8 justify-center mx-auto max-w-5xl">

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
      />
    </div>
  </div>
    <MediaAudioPlayerModal
    v-if="selectedItem"
    :item="selectedItem"
    @close="closeModal"
  />
</template>
