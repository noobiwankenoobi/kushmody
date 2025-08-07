<template>
  <div class="border p-4 rounded-lg shadow-md">
    <NuxtLink  class="block">

      <h3>{{ item.title }}</h3>
    </NuxtLink>
    
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});

</script>

<style>

</style>