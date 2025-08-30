<template>
  <div class=" py-12">
  <div class="flex justify-center items-start p-12 m-auto max-w-4xl">

    <h2 class="text-2xl font-bold mb-2 text-right">Contact</h2>

    <!-- FORM -->
    <form class="w-lg p-6 rounded space-y-4">

      <!-- NAME -->
      <!-- <div>
        <label class="block text-gray-700 mb-1" for="name">Name</label>
        <input id="name" v-model="name" type="text" class="w-full border border-gray-300 rounded px-3 py-2" required >
      </div> -->

      <!-- EMAIL -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="email">Email</label> -->
        <input id="email" v-model="email" type="email" class="w-full  rounded px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" required placeholder="your email address" >
      </div>

      <!-- MESSAGE -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="message">Message</label> -->
        <textarea id="message" v-model="message" class="w-full  rounded px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" rows="4" required placeholder="your message"/>
      </div>

      <!-- SUBMIT BUTTON -->
      <button type="submit" class="w-full bg-gray-600 text-white py-2 rounded font-semibold hover:bg-gray-700">
        Send
      </button>
    </form>
  </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
// const name = ref("")
const email = ref("")
const message = ref("")

// You can add a submit handler here for actual sending
</script>
