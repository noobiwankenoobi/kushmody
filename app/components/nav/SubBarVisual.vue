<script lang="js" setup>

// gallery store ----------+
import { useGalleryStore } from '~/stores/galleryStore'
const galleryStore = useGalleryStore()
const { randomizeCurrentItemsForCategory } = galleryStore

const subNavItems = [
  { name: "PHOTOGRAPHY", data: "photography" },
  { name: "VIDEO", data: "video" },
  { name: "ART & DESIGN", data: "art&design" },
]

// handle click on subnav item
const router = useRouter()
const route = useRoute()
const selectedCategory = computed(() => route.query.category || null)

// +-----------------------------------+
// |           HANDLE CLICK            |
// +-----------------------------------+
function handleClick(item) {
  // if clicking the selected category, randomize items instead of changing route
  if (item.data == route.query.category) {
    // consider adding user feedback here that items have been randomized
    randomizeCurrentItemsForCategory(item.data)
    return
  }
  // navigate to new category
  router.push({ path: "/visual", query: { category: item.data } })
}

</script>

<template>
  <div class="flex justify-evenly items-center py-2 px-52">

    <!-- loop through sub nav items -->
    <ul v-for="item in subNavItems" :key="item.name" class="list-none">
      <!-- handle the emit -->
      <NavSubItem 
      :item="item" 
      @handle-click="handleClick(item)" 
      :isSelected="item.data == selectedCategory"  />
    </ul>

  </div>
</template>
