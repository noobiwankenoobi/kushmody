<template>
  <form class="max-w-md mx-auto bg-white p-6 rounded space-y-4">
    <h2 class="text-2xl font-bold mb-2 text-center">Contact</h2>
    <div>
      <label class="block text-gray-700 mb-1" for="name">Name</label>
      <input id="name" type="text" v-model="name" class="w-full border border-gray-300 rounded px-3 py-2" required />
    </div>
    <div>
      <label class="block text-gray-700 mb-1" for="email">Email</label>
      <input id="email" type="email" v-model="email" class="w-full border border-gray-300 rounded px-3 py-2" required />
    </div>
    <div>
      <label class="block text-gray-700 mb-1" for="message">Message</label>
      <textarea id="message" v-model="message" class="w-full border border-gray-300 rounded px-3 py-2" rows="4" required></textarea>
    </div>
    <button type="submit" class="w-full bg-gray-600 text-white py-2 rounded font-semibold hover:bg-gray-700">
      Send
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const message = ref('')

// You can add a submit handler here for actual sending
</script>