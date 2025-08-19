<template>
  <div class="fixed inset-0 bg-gray bg-opacity-70 flex items-center justify-center z-50 w-screen overflow-y-auto">
    <div class="bg-white rounded-lg p-6 shadow-lg relative">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        @click="$emit('close')">✕
      </button>

      <!-- Audio Player -->
      <iframe id="disco-playlist-16150967" name="disco-playlist-16150967" allowfullscreen frameborder="0" class="disco-embed" src="https://kushmody.disco.ac/e/p/16150967?download=true&s=RZ7mv4QzZziJ5uSJ0SngODJ1dsk%3AKuamgBlS&artwork=true&color=%2332B57C&theme=white" width="480" height="395"/>

    </div>
  </div>
</template>

<script setup lang="js">
import { defineEmits } from "vue"
defineEmits(["close"])
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
</script>
