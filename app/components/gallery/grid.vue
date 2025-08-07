<script setup>
const items = [
  { id: 1, title: 'Item 1', image: '/images/item1.jpg' },
  { id: 2, title: 'Item 2', image: '/images/item2.jpg' },
  { id: 3, title: 'Item 3', image: '/images/item3.jpg' },
  { id: 4, title: 'Item 4', image: '/images/item4.jpg' },
  { id: 5, title: 'Item 5', image: '/images/item5.jpg' },
  { id: 6, title: 'Item 6', image: '/images/item6.jpg' },
  { id: 7, title: 'Item 7', image: '/images/item7.jpg' },
  { id: 8, title: 'Item 8', image: '/images/item8.jpg' },
  { id: 9, title: 'Item 9', image: '/images/item9.jpg' },
  { id: 10, title: 'Item 10', image: '/images/item10.jpg' },
  { id: 11, title: 'Item 11', image: '/images/item11.jpg' },
  { id: 12, title: 'Item 12', image: '/images/item12.jpg' },
  { id: 13, title: 'Item 13', image: '/images/item13.jpg' },
  { id: 14, title: 'Item 14', image: '/images/item14.jpg' },
  { id: 15, title: 'Item 15', image: '/images/item15.jpg' },
  { id: 16, title: 'Item 16', image: '/images/item16.jpg' },
  { id: 17, title: 'Item 17', image: '/images/item17.jpg' },
  { id: 18, title: 'Item 18', image: '/images/item18.jpg' },
  { id: 19, title: 'Item 19', image: '/images/item19.jpg' },
  { id: 20, title: 'Item 20', image: '/images/item20.jpg' }
];

const selectedItem = ref(null)
const router = useRouter()

function handleSquareClick(item) {
  selectedItem.value = item
  router.replace({ query: { id: item.id } }) // stays on page, updates URL
}

function closeModal() {
  selectedItem.value = null
  router.replace({ query: {} }) // remove id from URL
}
</script>

<template>
  <!-- Grid container -->
  <div class="gallery-grid grid grid-cols-4 gap-x-4 gap-y-32 my-8 justify-center mx-auto max-w-5xl">
    <!-- Looping items -->
    <div class="flex justify-center items-center"  
      v-for="item in items"
     >
      <GallerySquare 
        :item="item" 
        :to="`/gallery/${item.id}`" 
        :key="item.id" 
        @click="handleSquareClick(item)"
      />  
    </div>
  </div>
    <MediaAudioPlayerModal
    v-if="selectedItem"
    :item="selectedItem"
    @close="closeModal"
  />
</template>