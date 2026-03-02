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

      <!-- HONEYPOT: hidden from users, bots fill it, web3forms rejects the submission -->
      <input type="checkbox" name="botcheck" style="display:none">

      <!-- EMAIL -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="email">Email</label> -->
        <input id="email" v-model="email" type="email" @blur="validateEmail" class="w-full px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" required placeholder="your email address" >
        <p v-if="emailError" class="text-xs text-red-500 mt-1" aria-live="polite">{{ emailError }}</p>
      </div>

      <!-- MESSAGE -->
      <div>
        <!-- <label class="block text-gray-700 mb-1" for="message">Message</label> -->
        <textarea id="message" v-model="message" class="w-full px-3 py-2 bg-white placeholder:italic placeholder:text-gray-300" rows="4" required placeholder="your message"/>
      </div>

      <!-- SUBMIT BUTTON -->
      <button type="submit" :disabled="isSubmitting" class="w-full bg-gray-600 text-white py-2 font-semibold hover:bg-gray-700 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
        {{ isSubmitting ? "Sending..." : "Send" }}
      </button>

      <p v-if="successMessage" class="text-sm" style="color: #71ddbb" aria-live="polite">{{ successMessage }}</p>
      <p v-if="errorMessage" class="text-sm text-red-600" aria-live="polite">{{ errorMessage }}</p>
    </form>

    </div>


  </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const { web3formsKey } = useRuntimeConfig().public

const email = ref("")
const message = ref("")
const isSubmitting = ref(false)
const successMessage = ref("")
const errorMessage = ref("")
const emailError = ref("")

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateEmail = () => {
  emailError.value = EMAIL_REGEX.test(email.value.trim()) ? "" : "Please enter a valid email address."
}

const handleSubmit = async () => {
  validateEmail()
  if (emailError.value || isSubmitting.value) return

  isSubmitting.value = true
  successMessage.value = ""
  errorMessage.value = ""

  try {
    const res = await $fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: {
        access_key: web3formsKey,
        subject: `kushmody.com inquiry - from ${email.value}`,
        email: email.value,
        message: message.value,
      },
    })

    if (res.success) {
      successMessage.value = "Message sent. Thank you."
      email.value = ""
      message.value = ""
      setTimeout(() => { successMessage.value = "" }, 5000)
    } else {
      errorMessage.value = "Could not send your message right now."
    }
  } catch {
    errorMessage.value = "Could not send your message right now."
  } finally {
    isSubmitting.value = false
  }
}
</script>
