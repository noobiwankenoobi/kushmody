<template>
  <!-- Modal All -->
  <div class="fixed inset-0 flex items-center justify-center z-50 w-screen overflow-y-auto">
    <!-- Overlay -->
    <div
      class="absolute inset-0 bg-gray-500/70 cursor-pointer"
      @click="$emit('close')"
    />
    <!-- Modal Content -->
    <div class="bg-white p-6 shadow-sm relative">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        @click="$emit('close')">✕
      </button>

      <!-- Loading Spinner -->
      <!-- <div v-if="isLoading" class="flex items-center justify-center h-[395px] w-[480px]">
        <svg class="animate-spin h-8 w-8 text-gray-400" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
        </svg>
      </div> -->

      <!-- Custom Loading Spinner -->
      <div v-if="isLoading" class="flex items-center justify-center h-[395px] w-[480px]">
        <div class="relative w-12 h-12">
          <div class="absolute inset-0 rounded-full border-4 border-t-kushmint border-b-gray-300 border-l-gray-300 border-r-gray-300 animate-spin"></div>
          <div class="absolute inset-2 rounded-full bg-kushmint opacity-30"></div>
        </div>
      </div>

      <!-- Audio Player -->

       <!-- Disco Audio Player Iframe -->
      <iframe
        v-if="item.disco_embed"
        :src="extractDiscoSrc(item.disco_embed)"
        width="480"
        height="395"
        frameborder="0"
        allowfullscreen
        class="disco-embed"
        @load="onIframeLoad"
        style="display: block;"
        v-show="!isLoading"
      ></iframe>

      <!-- Youtube Embed -->
      <iframe
        v-if="item.youtube_embed"
        width="560"
        height="315"
        :src="youtubeSrc"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="rounded shadow"
      ></iframe>

      <!-- vhtml -->
      <div v-if="item.vimeo_embed" v-html="item.vimeo_embed" @load="onIframeLoad" style="display: block;" v-show="!isLoading"></div>

      <!-- vhtml for youtube -->
      <!-- <div v-if="item.youtube_embed" v-html="item.youtube_embed" @load="onIframeLoad" style="display: block;" ></div> -->

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

const isLoading = ref(false)



// YOUTUBE

// Extracts the YouTube video ID from an iframe embed HTML string
function extractYoutubeSrc(html) {
  const match = html.match(/src="([^"]+)"/)
  return match ? match[1] : null
}

const youtubeSrc = computed(() => {
  if (!props?.item?.youtube_embed) return null
  return extractYoutubeSrc(props?.item?.youtube_embed || "")
})  
// const youtubeSrc = extractYoutubeSrc(props.item?.youtube_embed)


// DISCO
// Extract src from the disco iframe HTML string
function extractDiscoSrc(html) {
  const match = html.match(/src="([^"]+)"/)
  return match ? match[1] : ""
}

function onIframeLoad() {
  isLoading.value = false
}


// watch youtubeSrc and set isLoading to true when it changes
watch(() => youtubeSrc.value, (newVal, _) => {
  console.log('youtubeSrc changed: ', newVal, _)
  console.log("item is: ", props?.item)

}, { immediate: true})

</script>

 <!-- <iframe id="disco-playlist-16150967" name="disco-playlist-16150967" allowfullscreen frameborder="0" class="disco-embed" src="https://kushmody.disco.ac/e/p/16150967?download=true&s=RZ7mv4QzZziJ5uSJ0SngODJ1dsk%3AKuamgBlS&artwork=true&color=%2332B57C&theme=white" width="480" height="395"/> -->