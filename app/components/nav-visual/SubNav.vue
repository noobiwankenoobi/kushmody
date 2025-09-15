<script lang="js" setup>

const subNavItems = [
  { name: "PHOTOGRAPHY", data: "photography" },
  { name: "VIDEO", data: "video" },
  { name: "ART & DESIGN", data: "art-and-design" },
]

// handle click on subnav item
const router = useRouter()
function handleClick(item) {
  if (item.data == router.currentRoute.value.query.category) {
    // remove current category from URL
    router.push({ path: "/visual", query: {} })
    return
  }
  router.push({ path: "/visual", query: { category: item.data } })
}

</script>

<template>

  <div class="flex justify-evenly items-center py-12 px-52">

    <!-- loop through sub nav items -->
    <ul v-for="item in subNavItems" :key="item.name" class="list-none">
      <!-- handle the emit -->
      <NavSubNavItem :item="item" @handle-click="handleClick(item)" />
    </ul>

  </div>

</template>
