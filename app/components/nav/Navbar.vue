<template>

   <nav class="bg-white min-h-32 border-b">

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
