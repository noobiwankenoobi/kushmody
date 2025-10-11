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
      <div v-if="playerIsLoading" class="flex items-center justify-center h-[395px] w-[480px]">
        <div class="relative w-12 h-12">
          <div class="absolute inset-0 rounded-full border-4 border-t-kushmint border-b-gray-300 border-l-gray-300 border-r-gray-300 animate-spin"></div>
          <div class="absolute inset-2 rounded-full bg-kushmint opacity-30"></div>
        </div>
      </div>

      <!--+------+-->
      <!-- Player -->
      <!--+------+-->
      <!-- Conditional rendering based on item type -->

       <!-- Disco Audio Player Iframe -->
      <iframe
        v-if="item.disco_embed"
        :src="discoSrc"
        width="480"
        height="395"
        frameborder="0"
        allowfullscreen
        class="disco-embed"
        @load="onIframeLoad"
        style="display: block;"
        v-show="!playerIsLoading"
      ></iframe>

      <!-- Youtube Embed -->
      <iframe
        v-if="item.youtube_embed"
        width="560"
        height="315"
        :src="youtubeSrc"
        title="YouTube video player"
        frameborder="0"
        @load="onIframeLoad"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        class="rounded shadow"
        v-show="!playerIsLoading"
      ></iframe>

      <!-- Vimeo Embed -->


    </div>
  </div>
</template>

<script setup lang="js">
defineEmits(["close"])
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

//+--------------------+
//|     LOADING        |
//+--------------------+
// loading defaults to true
const playerIsLoading = ref(true)
// on iframe load, set loading to false
function onIframeLoad() {
  playerIsLoading.value = false
}


//+--------------------+
//|      YOUTUBE       |
//+--------------------+
// Extracts the YouTube video ID from an iframe embed HTML string
function extractYoutubeSrc(html) {
  const match = html.match(/src="([^"]+)"/)
  return match ? match[1] : null
}

const youtubeSrc = computed(() => {
  if (!props?.item?.youtube_embed) return null
  return extractYoutubeSrc(props?.item?.youtube_embed || "")
})  

//+--------------------+
//|       DISCO        |
//+--------------------+
// Extract src from the disco iframe HTML string
function extractDiscoSrc(html) {
  const match = html.match(/src="([^"]+)"/)
  return match ? match[1] : ""
}

const discoSrc = computed(() => {
  if (!props?.item?.disco_embed) return null
  return extractDiscoSrc(props?.item?.disco_embed || "")
})

//+--------------------+
//|       VIMEO        |
//+--------------------+




// watch youtubeSrc and set isLoading to true when it changes
watch(() => youtubeSrc.value, (newVal, _) => {
  console.log('youtubeSrc changed: ', newVal, _)
  console.log("item is: ", props?.item)

}, { immediate: true})

</script>

<!-- EXAMPLES -->
<!-- EXAMPLES -->
<!-- EXAMPLES -->

<!-- "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UAbH1oErrwQ?si=zp2P32P9SVzxtmx3\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>" -->

 <!-- <iframe id="disco-playlist-16150967" name="disco-playlist-16150967" allowfullscreen frameborder="0" class="disco-embed" src="https://kushmody.disco.ac/e/p/16150967?download=true&s=RZ7mv4QzZziJ5uSJ0SngODJ1dsk%3AKuamgBlS&artwork=true&color=%2332B57C&theme=white" width="480" height="395"/> -->