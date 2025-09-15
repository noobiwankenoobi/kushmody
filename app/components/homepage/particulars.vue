<template>
 
  <div class="w-full bg-kushoffwhite py-4 flex flex-col justify-center">

    <!-- ------------------------ -->
    <!-- ----- TOP SECTION ----- -->
    <!-- ------------------------ -->

    <!-- FULL WIDTH SECTION with illustration on left and text on right -->
    <div class="flex flex-row items-start justify-center py-4 w-full">

      <!-- LEFT OF DIVIDER SECTION -->
      <div class="w-4/10 flex items-stretch ">

        <!-- Illustration in left divider -->
        <div class="flex items-center justify-center p-12">
          <img src="/images/homepage/illustrations/homepage_sheet_music_drawing.png" alt="Particulars Illustration" class="object-contain w-2xl h-2xl" />
        </div>

        <!-- Title in left divider -->
      <div class="align-right w-full">
        <h2 class="text-3xl font-bold text-gray-900 text-right">Particulars</h2>
      </div>

      </div>


      <!-- Divider -->
      <!-- <div class="w-px bg-gray-300 mx-0"></div> -->

      <!-- RIGHT OF DIVIDER SECTION -->
      <div class="w-6/10">

        

        <!-- Right: Accomplishments (2/3) -->
        <div class="flex flex-col justify-center w-4/5">
          <ul class="text-lg text-gray-700 font-bold space-y-2 list-none text-left mt-10">
            <li>Interdiscplinary creative based in LA</li>
            <li>Graduated in 2010 from Berklee College of Music with a degree in film scoring</li>
            <li>Toured worldwide as a bassist and keyboardist for 11 years</li>
            <li>Produces and mixes for major and independent music artists</li>
            <li>Composes for independent films, commercials, and branded content</li>
            <li>Approaches every project with great attention to detail, outside-the-box problem solving, team-mindedness, socially conscious values, empathy and compassion, dedication to the vision, and clear communication</li>
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

    <!-- FULL WIDTH SECTION with illustration on left and text on right -->
    <div class="flex flex-row items-start justify-center py-4 w-full">

      <!-- LEFT OF DIVIDER SECTION -->
      <div class="w-4/10 flex items-stretch ">

        <!-- Title in left divider -->
      <div class="align-right w-full">
        <h2 class="text-3xl font-bold text-gray-900 text-right">Notable<br/> Credits & Collaborators</h2>
      </div>

      </div>

      <!-- RIGHT OF DIVIDER SECTION -->
      <div class="w-6/10 flex ">

        <!-- NOTABLES SECTION -->
        <div class="flex flex-col justify-center w-1/2">
          <ul class="flex flex-row w-full gap-8 mt-18">
              <!-- Left List -->
              <ul class="flex-1 text-lg text-gray-700 font-bold space-y-1 list-none text-left">
                <li>Anderson .Paak</li>
                <li>T-Pain</li>
                <li>Talib Kweli</li>
                <li>Eric Krasno</li>
                <li>Mononeon</li>
                <li>Rachel Zegler</li>
                <li>Watsky</li>
              </ul>
              <!-- Right List -->
              <ul class="flex-1 text-lg text-gray-700 font-bold space-y-1 list-none text-left">
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

        <!-- Illustration in right divider -->
        <div class="flex-shrink-0 mr-8">
          <img src="/images/homepage/illustrations/logos-and-artists.png" alt="Particulars Illustration" class="object-contain px-12" />
        </div>



      </div>


    </div>

  </div>


</template>

<script lang="js" setup>
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

<style>

</style>
