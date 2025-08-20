<template>
  <AppLayout>
    <!-- Page-specific content here -->
    <div>
      <!-- <GalleryMain /> -->
    </div>

  </AppLayout>
</template>

<script lang="js" setup>
import AppLayout from "~/layouts/app-layout.vue"

import { useRoute } from "vue-router"
const route = useRoute()
const path = route.path

const page = ref()
page.value = path === "/" ? "home" : path.includes("/music") ? "music" : path.includes("/visual") ? "visual" : "other"

</script>

<style>

</style>
