<template>
  <!-- Modal All -->
  <div class="fixed inset-0 flex items-center justify-center z-50 w-screen overflow-y-auto p-4">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-gray-500/70 cursor-pointer" @click="$emit('close')" />

    <!--+-------------+-->
    <!-- Modal Content -->
    <!--+-------------+-->
    <div class="bg-white p-4 md:p-6 shadow-sm relative max-w-4xl w-full">

      <!-- Close Button -->
      <button class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer z-10" @click="$emit('close')">✕
      </button>

      <!-- Title -->
      <h2 v-if="item?.work_title" class="text-xl md:text-2xl font-bold mb-4 pr-8">{{ item.work_title }}</h2>

      <!-- Video Embed -->
      <div class="relative w-full pb-[56.25%]">
        <div v-if="item?.youtube_embed" v-html="embedHtml" class="absolute inset-0"></div>
        <div v-else-if="item?.vimeo_embed" v-html="embedHtml" class="absolute inset-0"></div>
        <div v-else class="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p class="text-gray-500">Video not available</p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="js">
import { computed } from "vue"
import { defineEmits } from "vue"

defineEmits(["close"])

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

const embedHtml = computed(() => {
  if (!props.item) return ''
  
  // Return YouTube embed if available
  if (props.item.youtube_embed) {
    // Update iframe to be responsive
    return props.item.youtube_embed.replace(
      /width="\d+" height="\d+"/g, 
      'width="100%" height="100%" style="position:absolute;top:0;left:0;width:100%;height:100%;"'
    )
  }
  
  // Return Vimeo embed if available
  if (props.item.vimeo_embed) {
    // Update iframe to be responsive - remove fixed dimensions and add responsive styles
    return props.item.vimeo_embed
      .replace(/width="\d+"/g, '')
      .replace(/height="\d+"/g, '')
      .replace(/style="[^"]*"/g, '')
      .replace(/<iframe/g, '<iframe style="position:absolute;top:0;left:0;width:100%;height:100%;"')
  }
  
  return ''
})

</script>
