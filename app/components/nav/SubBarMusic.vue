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
  router.push({ path: "/music", query: { category: item.data } })
}
</script>

<template>

  <div class="flex justify-evenly items-center py-2 px-4 md:px-52">

    <!-- Desktop: Show all categories in a row -->
    <div class="hidden md:flex justify-evenly items-center w-full">
      <ul v-for="item in subNavItems" :key="item.name" class="list-none">
        <NavSubItem 
          :item="item"
          :isSelected="item.data == selectedCategory" 
          @handleClick="handleClick(item)" />
      </ul>
    </div>

    <!-- Mobile: Show categories with underline -->
    <div class="md:hidden flex flex-wrap gap-3 justify-center w-full">
      <button 
        v-for="item in subNavItems" 
        :key="item.name"
        @click="handleClick(item)"
        :class="[
          'px-2 py-1 text-sm font-bold transition-all border-b-2',
          item.data == selectedCategory 
            ? 'border-kushred text-kushred' 
            : 'border-transparent text-gray-700 hover:text-kushred hover:border-gray-300'
        ]"
      >
        {{ item.name }}
      </button>
    </div>

  </div>

</template>
