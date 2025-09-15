<template>
  <div>
  <NavNavbar :page="page"  class="top-0 w-full z-50" />
  <AppLayout>
    <!-- Page-specific content here -->

    <div>
      <GalleryMain :galleryItems="galleryItems" />
    </div>

  </AppLayout>
  </div>
</template>

<script lang="js" setup>
import AppLayout from "~/layouts/app-layout.vue"
import visualItems from "~/data/visual-items.json"

const galleryItems = ref(visualItems)

const route = useRoute()
const path = route.path

const page = ref()
page.value = path === "/" ? "home" : path.includes("/music") ? "music" : path.includes("/visual") ? "visual" : "other"

</script>

<style>

</style>
