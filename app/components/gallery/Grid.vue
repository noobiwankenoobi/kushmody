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
  const category = galleryCategory?.value

  console.log("handleSquareClick running: galleryCategory is:: ", galleryCategory?.value)

  if (!category || category === '' || category === null || category === undefined) {
    selectedItem.value = item
    router.push({ query: { id: item?.gallery_image_url_thumbnail } }) // stays on page, updates URL
    console.log("handleSquareClick running: no category, just pushing id of item: ", item)
    return
  }

  selectedItem.value = item
  router.push({ query: { category: category, id: item?.gallery_image_url_thumbnail } }) // stays on page, updates URL
  console.log("handleSquareClick running: category found, just pushing id of item ", item)
}

function determineShowModal() {
  const idInQuery = route.query.id
  if (!idInQuery || idInQuery === '' || idInQuery === null || idInQuery === undefined) {
    return false
  }
  return true
}

// close modal
function closeModal() {
  selectedItem.value = null
  if (route.query.category) {
    router.push({ query: { category: route.query?.category } }) // remove id from URL
    return
  }
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
  triggerAnimation.value = false
  await nextTick()
  triggerAnimation.value = true

}, { immediate: false })

watch(() => selectedItem, (newVal, _) => {
  console.log('selectedItem changed: ', newVal, _)
}, { immediate: true })

</script>

<template>
  <!-- Grid container: Music -->
  <template v-if="isMusicGrid">
    <div class="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-16 md:gap-y-12 justify-center mx-auto max-w-5xl px-4 md:px-0 pb-8 md:pb-16">

      <!-- GALLERY SQUARE LOOP -->
      <GalleryMusicSquare v-for="(item, idx) in visibleGalleryItems" :key="item.id" :item="item"
        :to="`/gallery/${item.id}`" @click="handleSquareClick(item)" :class="[
          triggerAnimation ? 'animate-fade-in opacity-0 translate-y-8' : '',
          'transition-all duration-500'
        ]" />

    </div>
  </template>

  <template v-if="isVisualGrid">
    <!-- Grid container: Visual Art -->
    <div class="columns-2 md:columns-3 lg:columns-4 gap-x-4 md:gap-x-16 mt-8 mx-auto max-w-5xl px-4 md:px-0 pb-8 md:pb-16">

      <!-- GALLERY VISUAL SQUARE LOOP -->
      <GalleryVisualSquare v-for="(item, idx) in visibleGalleryItems" :key="item.id" :item="item"
        :to="`/gallery/${item.id}`" @click="handleSquareClick(item)" :class="[
          triggerAnimation ? 'animate-fade-in opacity-0 translate-y-8' : '',
          'transition-all duration-500'
        ]" />

    </div>
  </template>


  <!-- MODALS -->
  <MediaAudioPlayerModal v-if="selectedItem && selectedItem?.type == 'audio'" :item="selectedItem"
    @close="closeModal" />
  <MediaVideoViewerModal v-else-if="selectedItem && selectedItem?.type == 'video'" :item="selectedItem"
    @close="closeModal" />
  <MediaImageViewerModal v-else-if="selectedItem && selectedItem?.type == 'image'" :item="selectedItem"
    @close="closeModal" />


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