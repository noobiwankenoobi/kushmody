<script setup>
const items = [
  { id: 1, title: 'Item 1', image: '/images/item1.jpg' },
  { id: 2, title: 'Item 2', image: '/images/item2.jpg' },
  { id: 3, title: 'Item 3', image: '/images/item3.jpg' },
  { id: 4, title: 'Item 4', image: '/images/item4.jpg' },
];
</script>

<template>
  <div class="gallery-grid grid grid-cols-4 gap-x-4 gap-y-8 my-8">
    <div class=" text-center mb-8"  
      v-for="item in items"
     >
      <GallerySquare 
        :item="item" 
        :to="`/gallery/${item.id}`" 
        :key="item.id" 
      />  
    </div>
  </div>
</template>