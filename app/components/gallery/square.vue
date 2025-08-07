<template>
  <div class="border border-gray-300 p-4 rounded-sm  h-full w-full cursor-pointer"
  @click="$emit('click')">
      <h3>{{ item.title }}</h3>
  </div>
</template>

<script lang="js" setup>
import { defineProps } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
});
defineEmits(['click'])
</script>

<style>

</style>