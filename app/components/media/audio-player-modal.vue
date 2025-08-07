<template>
  <div class="fixed inset-0 bg-gray-30 bg-opacity-30 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full relative">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 cursor-pointer"
        @click="$emit('close')"
      >✕</button>
      <h2 class="mb-4 text-lg font-bold">{{ item.title }}</h2>
      <audio :src="item.audio" controls autoplay class="w-full" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
defineProps<{ item: any }>()
defineEmits(['close'])
</script>