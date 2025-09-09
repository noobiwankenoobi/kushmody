<template>
  <div class=" py-12">

    <!-- FULL WIDTH SECTION -->
  <div class="flex flex-row items-start justify-center py-4 w-full">

    <!-- LEFT OF DIVIDER LINE -->
    <div class="w-4/10 flex items-stretch ">
      <!-- Title in left divider -->
      <div class="align-right w-full">
        <h2 class="text-3xl font-bold text-gray-900 text-right">Contact</h2>
      </div>



    </div>

    <!-- <h2 class="text-2xl font-bold mb-2 text-right">Contact</h2> -->

    <!-- RIGHT OF DIVIDER LINE -->

    <div class="w-6/10">

      <!-- FORM -->
      <form class="w-lg py-6 rounded space-y-8 mt-6">

      <!-- EMAIL -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="email">Email</label> -->
        <input id="email" v-model="email" type="email" class="w-full  px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" required placeholder="your email address" >
      </div>

      <!-- MESSAGE -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="message">Message</label> -->
        <textarea id="message" v-model="message" class="w-full  px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" rows="4" required placeholder="your message"/>
      </div>

      <!-- SUBMIT BUTTON -->
      <button type="submit" class="w-full bg-gray-600 text-white py-2 font-semibold hover:bg-gray-700 cursor-pointer">
        Send
      </button>
    </form>

    </div>


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
