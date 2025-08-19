<template>
  <div
  class=" py-4  h-full w-full cursor-pointer"
  @click="$emit('click')">
    <img :src="item.artwork_url" :alt="item.title" class="w-full object-contain" >
  </div>
</template>

<script lang="js" setup>
import { defineProps } from "vue"
defineProps({
  item: {
    type: Object,
    required: true,
  },
})
defineEmits(["click"])
</script>

<style>

</style>
