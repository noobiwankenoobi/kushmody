<template>
  <div class="border border-gray-300 py-4  h-full w-full cursor-pointer"
  @click="$emit('click')">
    <img :src="item.image" :alt="item.title" class="w-full h-48 object-contain mb-2 " />
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