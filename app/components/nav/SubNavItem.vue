<script lang="js" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

</script>

<template>
  <li class="mx-4">
    <NuxtLink
      :to="`/music?category=${item.data}`"
      class="text-gray-700 hover:text-gray-800 font-bold text-xl"
    >
      {{ item.name }}
    </NuxtLink>
  </li>

</template>
