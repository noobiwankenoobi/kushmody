<script lang="js" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
})

defineEmits(["handleClick"])

</script>

<template>
  <li class="mx-4">
    <span
    class="text-gray-600 hover:text-gray-900 font-bold text-xl cursor-pointer"
      @click="$emit('handleClick', item)"
    >
      {{ item.name }}
    </span>
  </li>

</template>
