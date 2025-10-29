<script setup lang="js">

// gallery store ----------+
import { useGalleryStore } from '~/stores/galleryStore'
const galleryStore = useGalleryStore()
const { visibleGalleryItems, galleryType, galleryCategory } = storeToRefs(galleryStore)

const router = useRouter()
const route = useRoute()

const selectedItem = ref(null)


// +-----------------------------------+
// |           SQUARE CLICK            |
// +-----------------------------------+
function handleSquareClick(item) {
  console.log("handleSquareClick running -- item is:: ", item)
  if (!item) return

  // const category = route.query.category
  const category = galleryCategory.value
  
  if (!category || category === '' || category === null || category === undefined) {
    selectedItem.value = item
    router.push({ query: { id: item.work_title } }) // stays on page, updates URL
    return
  }

  selectedItem.value = item
  router.push({ query: { category: category, id: item.work_title } }) // stays on page, updates URL
}

// close modal
function closeModal() {
  selectedItem.value = null
  router.push({ query: {} }) // remove id from URL
}

// Animation trigger flag
const triggerAnimation = ref(false)


const isVisualGrid = computed(() => {
  return galleryType.value == "visual"
})

const isMusicGrid = computed(() => {
  return galleryType.value == "music"
})

// Watch for changes in visibleGalleryItems and trigger animation
watch(() => visibleGalleryItems.value, async () => {
  console.log('GRID WATCHER: visibleGalleryItems changed: ', visibleGalleryItems.value)
  console.log('Number of visible items: ', visibleGalleryItems.value.length)
  console.log('Triggering animation...')
  triggerAnimation.value = false
  await nextTick()
  triggerAnimation.value = true

}, { immediate: false })

</script>

<template>
  <!-- Grid container: Music -->
  <template v-if="isMusicGrid">
    <div class="gallery-grid grid grid-cols-4 gap-x-16 gap-y-12 justify-center mx-auto max-w-5xl">

        <!-- GALLERY SQUARE LOOP -->
          <GalleryMusicSquare
          v-for="(item, idx) in visibleGalleryItems"
            :key="item.id"
            :item="item"
            :to="`/gallery/${item.id}`"
            @click="handleSquareClick(item)"
            :class="[
            triggerAnimation ? 'animate-fade-in opacity-0 translate-y-8' : '',
            'transition-all duration-500'
            ]"
          />
    
      </div>
   </template>

  <template v-if="isVisualGrid">
  <!-- Grid container: Visual Art -->
    <div class="columns-4 gap-x-16 mt-8 mx-auto max-w-5xl">

      <!-- GALLERY VISUAL SQUARE LOOP -->
        <GalleryVisualSquare
          v-for="(item, idx) in visibleGalleryItems"
          :key="item.id"
          :item="item"
          :to="`/gallery/${item.id}`"
          @click="handleSquareClick(item)"
          :class="[
          triggerAnimation ? 'animate-fade-in opacity-0 translate-y-8' : '',
          'transition-all duration-500'
          ]"
        />

    </div>
  </template>


  <!-- MODALS -->
    <MediaAudioPlayerModal
    v-if="selectedItem && !selectedItem.type == `image`"
    :item="selectedItem"
    @close="closeModal"
  />
    <MediaImageViewerModal
    v-if="selectedItem"
    :item="selectedItem"
    @close="closeModal"
  />
</template>

<style scoped>
@keyframes fade-in-wiggle {
  0% {
    opacity: 0;
    transform: translateY(32px) rotate(-1deg) scale(0.98);
  }
  60% {
    opacity: 1;
    transform: translateY(-4px) rotate(1deg) scale(1.04);
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
  animation: fade-in-wiggle 0.4s forwards;
}


</style>