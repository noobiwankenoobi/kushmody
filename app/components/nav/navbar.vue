<template>
  <!-- <nav class="bg-white shadow px-4 py-2 h-48">
    <div v-if="page === 'home'">Home Navbar</div>
    <div v-else-if="page === 'gallery'">Gallery Navbar</div>
    <div v-else>Default Navbar</div>
  </nav> -->
   <nav class="bg-white min-h-32 border-b">

    <div v-if="page === 'music'">
      <NavMusicNav />
    </div>
    <div v-else-if="page === 'visual'">
      <NavVisualNav />
    </div>

    <div v-else>Default Navbar</div>
    
  </nav>
</template>

<script setup lang="js">
import { defineProps } from 'vue';
const props = defineProps({
  page: {
    type: String,
    required: true
  }
});
</script>