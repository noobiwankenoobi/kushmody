<template>
  <!-- Modal All -->
  <div class="fixed inset-0 flex items-center justify-center z-50 w-screen overflow-y-auto p-4">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gray-500/70 cursor-pointer" @click="$emit('close')" />

    <!--+-------------+-->
    <!-- Modal Content -->
    <!--+-------------+-->
    <div class="bg-white p-4 md:p-6 shadow-sm relative max-w-full max-h-[90vh]">

      <!-- Close Button -->
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer z-10" @click="$emit('close')">✕
      </button>

      <!-- Custom Loading Spinner -->
      <!-- <div v-if="playerIsLoading" class="flex items-center justify-center h-[395px] w-[480px]">
        <div class="relative w-12 h-12">
          <div class="absolute inset-0 rounded-full border-4 border-t-kushmint border-b-gray-300 border-l-gray-300 border-r-gray-300 animate-spin"></div>
          <div class="absolute inset-2 rounded-full bg-kushmint opacity-30"></div>
        </div>
      </div> -->

      <!-- Full Size Image -->
      <img v-if="item && item?.gallery_image_url_thumbnail" :src="determineImgSrc()"
        :alt="item.gallery_image_url_thumbnail || 'Image'" class="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded"
        @load="onImageLoad" />


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
  if (!props.item) return ''
  if (props?.item?.gallery_image_filename) {
    console.log('ImageViewerModal: determineImgSrc running for item: ', props?.item)
    const filename = props?.item?.gallery_image_filename
    const extension = props?.item?.file_extension || '.jpg'
    return `/images/visual/highres/${filename}${extension}`
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
