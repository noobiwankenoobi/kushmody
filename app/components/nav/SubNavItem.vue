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
    class="text-gray-600 hover:text-kushred font-bold text-xl cursor-pointer transition-colors duration-300"
      @click="$emit('handleClick', item)"
    >
      {{ item.name }}
    </span>
  </li>

</template>
