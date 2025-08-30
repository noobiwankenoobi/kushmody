<script lang="js" setup>
import { defineProps } from "vue"
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
defineEmits(["click"])

const imgSrc = `/images/music/${props.item.work_title}.webp`

</script>

<template>
  <div
    class=" py-4  h-full w-full cursor-pointer"
    @click="$emit('click')">
      <img :src="imgSrc" :alt="item.work_title" class="w-full object-contain">
  </div>
</template>
