<template>
  <div>
  <NavNavbar :page="page"  class="top-0 w-full z-50" />
  <AppLayout>
    <!-- Gallery -->
      <GalleryMain :galleryItems="galleryItems" />
    <!-- Gallery End -->
  </AppLayout>
  </div>
</template>

<script lang="js" setup>
import AppLayout from "~/layouts/app-layout.vue"
import musicItems from "~/data/music-items.json"

const galleryItems = ref(musicItems)

const route = useRoute()
const path = route.path

const page = ref()
page.value = path === "/" ? "home" : path.includes("/music") ? "music" : path.includes("/visual") ? "visual" : "other"

</script>

<style>

</style>
