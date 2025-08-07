<template>
  <div class="border p-4 rounded-sm shadow-sm h-32 w-32 cursor-pointer"
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