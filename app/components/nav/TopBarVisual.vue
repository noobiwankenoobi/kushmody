<script lang="js" setup>

const router = useRouter()
const route = useRoute()


function handleClick() {
  router.push({ query: {} })
}

function goToContact() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  // If already on homepage, just scroll
  if (route.path === '/') {
    scrollToContact()
  } else {
    // Navigate to homepage
    router.push('/')
    // Wait for window to fully load, then scroll multiple times to handle layout shifts
    nextTick(() => {
      // First scroll after a delay
      setTimeout(scrollToContact, 1000)
      // Second scroll to correct for any layout shifts from lazy loading images
      setTimeout(scrollToContact, 2000)
    })
  }
}

</script>

<template>
  <div class="flex flex-row items-center w-full px-2 md:px-12 py-2">

    <!-- Left Side - Home Link (hidden on mobile) -->
    <div class="hidden md:flex flex-shrink-0 font-medium w-32 items-center justify-start">
      <NuxtLink to="/" class="text-gray-700 text-sm font-semibold items-center justify-center">
        <span>HOME</span></NuxtLink>
    </div>

    <!-- Mobile Menu Button (left side on mobile) -->
    <div class="md:hidden flex-shrink-0">
      <NavMobileMenu>
        <div class="flex flex-col space-y-4 mt-4">
          <NuxtLink to="/" class="text-gray-700 text-sm font-bold hover:text-kushred transition-colors">HOME</NuxtLink>
          <NuxtLink to="/music" class="text-gray-700 text-sm font-bold hover:text-kushred transition-colors">MUSIC WORK</NuxtLink>
          <button @click="goToContact" class="text-gray-700 text-sm font-bold hover:text-kushred transition-colors text-left">CONTACT</button>
        </div>
      </NavMobileMenu>
    </div>

    <!-- Center Visual Logo -->
    <div class="flex-1 flex items-center justify-center">
      <div @click="handleClick" class="cursor-pointer">
        <img src="/images/homepage/visual_page_visual_eye_work.png" alt="Kush Mody Header" class="max-w-full h-10 md:h-12">
      </div>
    </div>

    <!-- Right Side - Music Link (hidden on mobile) -->
    <div class="hidden md:flex flex-shrink-0 w-18 p-0 items-center justify-end">
      <NuxtLink to="/music" class="text-gray-700 font-bold">
        <img class="hover:scale-105 transition-all" src="/images/nav-elements/visual_page_ear_to_music_work.png" />
      </NuxtLink>
    </div>

    <!-- Spacer for mobile to balance layout -->
    <div class="md:hidden flex-shrink-0 w-10"></div>
  </div>

</template>
