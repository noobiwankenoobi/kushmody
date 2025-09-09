<script lang="js" setup>

const subNavItems = [
  { name: "PRODUCTION", data: "production" },
  { name: "MIXING", data: "mixing" },
  { name: "FILM SCORING", data: "film-scoring" },
  { name: "BRANDED", data: "branded" },
]

// handle click on subnav item
const router = useRouter()
const selectedCategory = computed(() => router.currentRoute.value.query.category || null)

function handleClick(item) {
  if (item.data === selectedCategory.value) {
    router.push({ path: "/music", query: {} })
  } else {
    router.push({ path: "/music", query: { category: item.data } })
  }
}




</script>

<template>

  <div class="flex justify-evenly items-center py-6 px-52">

    <!-- loop through sub nav items -->
    <ul v-for="item in subNavItems" :key="item.name" class="list-none">
      <!-- handle the emit -->
      <NavSubNavItem 
        :item="item"
        :isSelected="item.data === selectedCategory" 
        @handleClick="handleClick(item)" />
    </ul>

  </div>

</template>
