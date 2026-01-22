<template>
  <div id="contact-section" class="py-8 md:py-12 px-4 md:px-8">

    <!-- FULL WIDTH SECTION -->
  <div class="flex flex-col md:flex-row items-start justify-center py-4 w-full gap-4 md:gap-0">

    <!-- LEFT OF DIVIDER LINE -->
    <div class="w-full md:w-4/10 flex items-stretch">
      <!-- Title in left divider -->
      <div class="w-full">
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-right">Contact</h2>
      </div>



    </div>

    <!-- <h2 class="text-2xl font-bold mb-2 text-right">Contact</h2> -->

    <!-- RIGHT OF DIVIDER LINE -->

    <div class="w-full md:w-6/10">

      <!-- FORM -->
      <form @submit.prevent="handleSubmit" class="w-full md:w-lg py-4 md:py-6 rounded space-y-6 md:space-y-8 mt-2 md:mt-6">

      <!-- EMAIL -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="email">Email</label> -->
        <input id="email" v-model="email" type="email" class="w-full px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" required placeholder="your email address" >
      </div>

      <!-- MESSAGE -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="message">Message</label> -->
        <textarea id="message" v-model="message" class="w-full px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" rows="4" required placeholder="your message"/>
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
const email = ref("")
const message = ref("")

const handleSubmit = () => {
  // Create mailto link with pre-filled fields
  const mailtoLink = `mailto:kush.mody@gmail.com?subject=Message from ${email.value}&body=${encodeURIComponent(message.value)}`
  
  // Open user's default email client
  window.location.href = mailtoLink
}
</script>
