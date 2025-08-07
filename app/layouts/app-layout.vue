<template>
  <div>
    <NavNavbar :page="page"  class="sticky top-0 w-full z-50" />
    <main class="px-52 pt-4">
      <slot />
    </main>
  </div>
</template>

<script setup lang="js">
import { useRoute } from 'vue-router'
const route = useRoute()
const path = route.path

const page = ref()
page.value = path === '/' ? 'home' : path.includes('/music') ? 'music' : path.includes('/visual') ? 'visual' : 'other'
</script>