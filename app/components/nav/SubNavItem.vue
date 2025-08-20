<script lang="js" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineEmits(["handleClick"])

// handle click on subnav item
// const router = useRouter()
// function handleClick(item) {
//   if (item.data == router.currentRoute.value.query.category) {
//     // remove current category from URL
//     router.push({ path: "/music", query: {} })
//     return
//   }
//   router.push({ path: "/music", query: { category: item.data } })
// }

</script>

<template>
  <li class="mx-4">
    <span
    class="text-gray-700 hover:text-gray-800 font-bold text-xl cursor-pointer"
      @click="$emit('handleClick', item)"
    >
      {{ item.name }}
    </span>
  </li>

</template>
