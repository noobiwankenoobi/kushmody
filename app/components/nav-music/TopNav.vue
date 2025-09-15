<script lang="js" setup>

const router = useRouter()

function handleClick() {
  router.push({ query: {} })
}

</script>

<template>
  <div class="flex flex-row items-center w-full px-4 py-2">

    <!-- Left Side -->
    <div class="flex-shrink-0 w-32 flex items-center justify-start">
      <NuxtLink to="/" class="text-gray-700 font-bold w-1/6 left-0 items-center justify-center hover:text-kushred transition-colors duration-300 tracking-wide"><span>HOME</span></NuxtLink>
    </div>
    <!--  -->

    <!-- Center Music Logo -->
    <div class="flex-1 flex items-center justify-center">
      <div @click="handleClick" class="cursor-pointer">
        <img src="/images/homepage/music_page_header_music_eye_work.png" alt="Kush Mody Header" class="max-w-full h-24">
      </div>
    </div>
    <!--  -->

    <!-- Right Side -->
    <div class="flex-shrink-0 w-28 p-2 flex items-center justify-end">
      <NuxtLink to="/visual" class="text-gray-700 font-bold">
        <img src="/images/nav-elements/music_page_eye_to_visual_work.png" />
      </NuxtLink>
    </div>
    <!--  -->
  </div>

</template>
