<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="currentColor"
    :class="customClass"
  >
    <path d="M8 5v14l11-7z" />
  </svg>
</template>

<script setup>
defineProps({
  width: {
    type: [String, Number],
    default: 24
  },
  height: {
    type: [String, Number],
    default: 24
  },
  customClass: {
    type: String,
    default: ''
  }
})
</script>