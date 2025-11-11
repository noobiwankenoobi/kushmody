<script lang="js" setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
  isSelected: { type: Boolean, default: false }
})

defineEmits(["handleClick"])

</script>

<template>
  <li class="mx-4">
    <span
      :class="[
          'tracking-wide font-bold text-sm cursor-pointer transition-colors duration-300',
          isSelected ? 'text-kushred' : 'text-gray-700 hover:text-kushred'
        ]"
      @click="$emit('handleClick', item)"
    >
      {{ item.name }}
    </span>
  </li>

</template>
