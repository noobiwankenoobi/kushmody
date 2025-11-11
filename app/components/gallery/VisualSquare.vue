<script lang="js" setup>
import { defineProps } from "vue"
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})
definePageMeta({ ssr: false})
defineEmits(["click"])

const route = useRoute()
const visualOrMusic = route.path.includes('/music') ? 'music' : 'visual'

const imgSrc = ref('')
if (props?.item?.img_url) {
  imgSrc.value = props.item.img_url
} else if (props?.item?.gallery_image_url_thumbnail) {
  imgSrc.value =`/images/${visualOrMusic}/thumbnails/${props?.item?.gallery_image_url_thumbnail}.webp`
}

</script>

<template>
  <div
    class="flex items-center justify-center cursor-pointer w-full mb-8 relative group"
    @click="$emit('click')">
      <div
        v-if="item.type === 'video'"
        class="absolute top-1/2 left-1/2 z-2 transform -translate-x-1/2 -translate-y-1/2">
        <IconsPlay :width="48" :height="48" custom-class="text-kushmint opacity-50 group-hover:opacity-100    group-hover:scale-[2] transition-all duration-1000" />
      </div>
      <img :src="imgSrc" :alt="item.work_title" class="w-full object-contain">


      
  </div>
</template>

<!-- EXAMPLE URLS -->
<!-- "img_url": "https://img.youtube.com/vi/ {VIDEO ID} /hqdefault.jpg", -->

