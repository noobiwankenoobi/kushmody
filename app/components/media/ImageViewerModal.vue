<template>
  <!-- Modal All -->
  <div class="fixed inset-0 flex items-center justify-center z-50 w-screen overflow-y-auto">
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gray-500/70 cursor-pointer"
      @click="$emit('close')"
    />

    <!--+-------------+-->
    <!-- Modal Content -->
    <!--+-------------+-->
    <div class="bg-white p-6 shadow-sm relative">

      <!-- Close Button -->
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        @click="$emit('close')">✕
      </button>

      <!-- Custom Loading Spinner -->
      <!-- <div v-if="playerIsLoading" class="flex items-center justify-center h-[395px] w-[480px]">
        <div class="relative w-12 h-12">
          <div class="absolute inset-0 rounded-full border-4 border-t-kushmint border-b-gray-300 border-l-gray-300 border-r-gray-300 animate-spin"></div>
          <div class="absolute inset-2 rounded-full bg-kushmint opacity-30"></div>
        </div>
      </div> -->

            <!-- Full Size Image -->
      <img
        v-if="item && item?.gallery_image_url_thumbnail"
        :src="determineImgSrc()"
        :alt="item.gallery_image_url_thumbnail || 'Image'"
        class="max-w-full h-[80vh] object-contain rounded"
        @load="onImageLoad"
      />


    </div>
  </div>
</template>

<script setup lang="js">
import { defineEmits } from "vue"
defineEmits(["close"])
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

function determineImgSrc() {
  if(!props.item) return ''
  if (props?.item?.gallery_image_url_thumbnail) {
    console.log('ImageViewerModal: determineImgSrc running for item: ', props?.item)
    return `/images/visual/thumbnails/${props?.item?.gallery_image_url_thumbnail}.webp`
  }
  return ''
}

//+--------------------+
//|     LOADING        |
//+--------------------+
// loading defaults to true
// const playerIsLoading = ref(true)
// on iframe load, set loading to false
// function onIframeLoad() {
//   playerIsLoading.value = false
// }

watch(() => props?.item?.value, (newVal, _) => {
  console.log('item prop changed: ', newVal, _)
}, { immediate: true })


</script>

<!-- EXAMPLES -->
<!-- EXAMPLES -->
<!-- EXAMPLES -->
