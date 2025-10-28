<script lang="js" setup>

// gallery store ----------+
import { useGalleryStore } from '~/stores/galleryStore'
const galleryStore = useGalleryStore()
const { randomizeCurrentItemsForCategory } = galleryStore

const subNavItems = [
  { name: "PRODUCTION", data: "production", work_type: "music" },
  { name: "MIXING", data: "mixing", work_type: "music" },
  { name: "FILM SCORING", data: "film scoring", work_type: "music" },
  { name: "BRANDED", data: "branded", work_type: "music" },
]

// handle click on subnav item
const router = useRouter()
const selectedCategory = computed(() => router.currentRoute.value.query.category || null)

function handleClick(item) {
  // if clicking the selected category, randomize items instead of changing route
  if (item.data == router.currentRoute.value.query.category) {
    // consider adding user feedback here that items have been randomized
    randomizeCurrentItemsForCategory(item.data)
    return
  }

  // navigate to new category
  router.push({ path: "/music", query: { category: item.data } })
}
</script>

<template>

  <div class="flex justify-evenly items-center py-2 px-52">

    <!-- loop through sub nav items -->
    <ul v-for="item in subNavItems" :key="item.name" class="list-none">
      <!-- handle the emit -->
      <NavSubNavItem 
        :item="item"
        :isSelected="item.data == selectedCategory" 
        @handleClick="handleClick(item)" />
    </ul>

  </div>

</template>
