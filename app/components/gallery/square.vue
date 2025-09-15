<script lang="js" setup>
import { defineProps } from "vue"
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
defineEmits(["click"])

const route = useRoute()

const visualOrMusic = route.path.includes('/music') ? 'music' : 'visual'

const imgSrc = `/images/${visualOrMusic}/${props.item.work_title}.webp`

</script>

<template>
  <div
    class="flex items-center justify-center py-4  h-full w-full cursor-pointer"
    @click="$emit('click')">
      <img :src="imgSrc" :alt="item.work_title" class="w-full object-contain">
  </div>
</template>
