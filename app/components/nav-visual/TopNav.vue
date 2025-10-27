<script lang="js" setup>

const router = useRouter()


function handleClick() {
  router.push({ query: {} })
}

</script>

<template>
  <div class="flex flex-row items-center w-full px-12 py-2 ">

    <!-- Left Side -->
    <div class="flex-shrink-0 w-32 flex items-center justify-start">
      <NuxtLink to="/" class="text-gray-700 font-semibold w-1/6 left-0 items-center justify-center"><span>HOME</span></NuxtLink>
    </div>
    <!--  -->

    <!-- Center Music Logo -->
    <div class="flex-1 flex items-center justify-center">
      <div @click="handleClick" class="cursor-pointer">
        <img src="/images/homepage/visual_page_visual_eye_work.png" alt="Kush Mody Header" class="max-w-full h-18">
      </div>
    </div>
    <!--  -->

    <!-- Right Side -->
    <div class="flex-shrink-0 w-22 p-2 flex items-center justify-end">
      <NuxtLink to="/music" class="text-gray-700 font-bold ">
        <img class="hover:scale-105 transition-all" src="/images/nav-elements/visual_page_ear_to_music_work.png" />
      </NuxtLink>
    </div>
    <!--  -->
  </div>

</template>
