<script lang="js" setup>

const subNavItems = [
  { name: "PRODUCTION", data: "production" },
  { name: "MIXING", data: "mixing" },
  { name: "FILM SCORING", data: "film-scoring" },
  { name: "BRANDED", data: "branded" },
]

</script>

<template>

  <div class="flex justify-evenly items-center py-12 px-52">

    <!-- loop through sub nav items -->
    <ul v-for="item in subNavItems" :key="item.name" class="list-none">
      <NavSubNavItem :item="item" />
    </ul>

  </div>

</template>
