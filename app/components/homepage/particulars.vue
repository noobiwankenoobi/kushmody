<template>

  <div class="w-full bg-kushoffwhite py-2 md:py-4 flex flex-col justify-center px-4 md:px-8">

    <!-- Fade in transition wrapper -->
    <transition name="fade" mode="out-in">
      <div v-if="showContent">
        <!-- ------------------------ -->
        <!-- ----- TOP SECTION ----- -->
        <!-- ------------------------ -->

        <!-- FULL WIDTH SECTION with illustration on left and text on right -->
        <div class="flex flex-col md:flex-row items-start justify-center py-2 md:py-4 w-full gap-4 md:gap-0">

          <!-- LEFT OF DIVIDER SECTION -->
          <div class="w-full md:w-4/10 flex flex-col md:flex-row items-center md:items-stretch">

            <!-- Illustration in left divider -->
            <div class="flex items-center justify-center p-2 md:p-4 lg:p-12">
              <img src="/images/homepage/illustrations/homepage_sheet_music_drawing.png" alt="Particulars Illustration"
                class="object-contain w-24 md:w-32 lg:w-2xl h-24 md:h-32 lg:h-2xl" />
            </div>

            <!-- Title in left divider -->
            <div class="w-full">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-right">Particulars</h2>
            </div>

          </div>


          <!-- Divider -->
          <!-- <div class="w-px bg-gray-300 mx-0"></div> -->

          <!-- RIGHT OF DIVIDER SECTION -->
          <div class="w-full md:w-6/10">



            <!-- Right: Accomplishments (2/3) -->
            <div class="flex flex-col justify-center w-full md:w-4/5">
              <ul class="text-sm md:text-base lg:text-lg text-gray-700 font-bold space-y-2 list-none text-left mt-4 md:mt-10">
                <li>Interdiscplinary creative based in LA</li>
                <li>Graduated in 2010 from Berklee College of Music with a degree in film scoring</li>
                <li>Toured worldwide as a bassist and keyboardist for 11 years</li>
                <li>Produces and mixes for major and independent music artists</li>
                <li>Composes for independent films, commercials, and branded content</li>
                <li>Approaches every project with great attention to detail, outside-the-box problem solving,
                  team-mindedness, socially conscious values, empathy and compassion, dedication to the vision, and
                  clear
                  communication</li>
              </ul>
            </div>
          </div>


        </div>

        <!-- Full width dividing line below section -->
        <div class="w-full my-4">
          <hr class="border-t-1 border-gray-700" />
        </div>

        <!-- ------------------------ -->
        <!-- ----- BOTTOM SECTION ----- -->
        <!-- ------------------------ -->

        <!--+------------------+-->
        <!-- FULL WIDTH SECTION -->
        <!--+------------------+-->
        <!-- with illustration on left and text on right -->
        <div class="flex flex-col md:flex-row items-start justify-center py-4 w-full gap-4 md:gap-0">

          <!-- LEFT OF DIVIDER SECTION -->
          <div class="w-full md:w-4/10 flex flex-col md:flex-row items-center md:items-stretch h-full">

            <!-- Illustration above title on mobile, hidden on desktop -->
            <div class="flex md:hidden items-center justify-center mb-4">
              <img src="/images/homepage/illustrations/logos-and-artists.png" alt="Notable Credits Illustration"
                class="object-contain max-w-[200px]" />
            </div>

            <!-- Title in left divider -->
            <div class="w-full">
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-right">Notable<br /> Credits & Collaborators</h2>
            </div>

          </div>

          <!-- RIGHT OF DIVIDER SECTION -->
          <div class="w-full md:w-6/10 flex flex-col md:flex-row gap-4">

            <!-- NOTABLES SECTION -->
            <div class="flex flex-col justify-center w-full md:w-1/2">
              <ul class="flex flex-row w-full gap-4 md:gap-8 mt-4 md:mt-18">
                <!-- Left List -->
                <ul class="flex-1 text-sm md:text-base lg:text-lg text-gray-700 font-bold space-y-1 list-none text-left">
                  <li>Anderson .Paak</li>
                  <li>T-Pain</li>
                  <li>Talib Kweli</li>
                  <li>Eric Krasno</li>
                  <li>Mononeon</li>
                  <li>Rachel Zegler</li>
                  <li>Watsky</li>
                </ul>
                <!-- Right List -->
                <ul class="flex-1 text-sm md:text-base lg:text-lg text-gray-700 font-bold space-y-1 list-none text-left">
                  <li>Apple</li>
                  <li>T-Mobile</li>
                  <li>Target</li>
                  <li>Adidas</li>
                  <li>Brita</li>
                  <li>Snapchat</li>
                  <li>YouTube</li>
                </ul>
              </ul>
            </div>

            <!-- Illustration in right divider - only visible on desktop -->
            <div class="hidden md:flex flex-shrink-0 mr-0 md:mr-8 justify-center md:justify-start">
              <img src="/images/homepage/illustrations/logos-and-artists.png" alt="Notable Credits Illustration"
                class="object-contain px-0 md:px-4 lg:px-12" />
            </div>

          </div>

        </div>

      </div>
    </transition>
    
    <!-- Full width dividing line after section -->
    <div class="w-full my-4">
      <hr class="border-t-1 border-gray-700" />
    </div>
  </div>
</template>

<script lang="js" setup>
const showContent = ref(false)

onMounted(() => {
  // Wait for hero background to load before showing this content
  setTimeout(() => {
    showContent.value = true
  }, 500) // Adjust delay as needed (1500ms = 1.5 seconds)
})
</script>

<style scoped>
/* Optional: add a faint vertical line between sections */
.divider {
  border-left: 2px solid #e5e7eb;
  opacity: 0.3;
}
</style>

<script lang="ts" setup>

</script>

<style></style>
