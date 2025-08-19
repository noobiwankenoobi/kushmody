<template>
  <div
  class=" py-4  h-full w-full cursor-pointer"
  @click="$emit('click')">
    <img :src="`/images/music/${item.work_title}.jpg`" :alt="item.work_title" class="w-full object-contain" >
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
