<template>
  <div class="min-h-screen bg-kushoffwhite mt-[90px]">
    <GalleryGrid :galleryItems="galleryItems" />
  </div>
</template>

<script lang="js" setup>
defineProps({
  galleryItems: {
    type: Array,
    required: false,
    default: () => []
  }
})

</script>

<style>

</style>
