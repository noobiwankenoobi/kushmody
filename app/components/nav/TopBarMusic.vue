<script lang="js" setup>

const router = useRouter()

function handleClick() {
  router.push({ query: {} })
}

</script>

<template>
  <div class="flex flex-row items-center w-full px-2 md:px-4 py-2">

    <!-- Left Side - Home Link (hidden on mobile) -->
    <div class="hidden md:flex flex-shrink-0 w-32 items-center justify-start">
      <NuxtLink to="/" class="text-gray-700 text-sm font-bold items-center justify-center hover:text-kushred transition-colors duration-300 tracking-wide"><span>HOME</span></NuxtLink>
    </div>

    <!-- Mobile Menu Button (left side on mobile) -->
    <div class="md:hidden flex-shrink-0">
      <NavMobileMenu>
        <div class="flex flex-col space-y-4 mt-4">
          <NuxtLink to="/" class="text-gray-700 text-sm font-bold hover:text-kushred transition-colors">HOME</NuxtLink>
          <NuxtLink to="/visual" class="text-gray-700 text-sm font-bold hover:text-kushred transition-colors">VISUAL WORK</NuxtLink>
        </div>
      </NavMobileMenu>
    </div>

    <!-- Center Music Logo -->
    <div class="flex-1 flex items-center justify-center">
      <div @click="handleClick" class="cursor-pointer">
        <img src="/images/homepage/music_page_header_music_eye_work.png" alt="Kush Mody Header" class="max-w-full h-12 md:h-16">
      </div>
    </div>

    <!-- Right Side - Visual Link (hidden on mobile) -->
    <div class="hidden md:flex flex-shrink-0 w-18 p-0 items-center justify-end">
      <NuxtLink to="/visual" class="text-gray-700 font-bold">
        <img src="/images/nav-elements/music_page_eye_to_visual_work.png" />
      </NuxtLink>
    </div>

    <!-- Spacer for mobile to balance layout -->
    <div class="md:hidden flex-shrink-0 w-10"></div>
  </div>

</template>
