<template>

   <nav class="min-h-24 border-b-gray-300 border-2">

    <div v-if="page === 'music'">
      <NavMusicMainNav />
    </div>
    <div v-else-if="page === 'visual'">
      <NavVisualMainNav />
    </div>

    <div v-else>Default Navbar</div>

  </nav>
</template>

<script setup lang="js">
import { defineProps } from "vue"
defineProps({
  page: {
    type: String,
    required: true,
  },
})
</script>
