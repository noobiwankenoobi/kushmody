import musicItems from "~/data/music-items.json"
import visualItems from "~/data/visual-items.json"

export const useGalleryStore = defineStore('gallery', () => {

  const route = useRoute()

  //------------------------------------+
  //                                    |
  //             State                  +
  //                                    |
  //------------------------------------+
  const galleryType = ref('')
  const galleryCategory = ref('')

  // all gallery items
  const galleryItems = ref([])

  // split by category ----------+
  // music
  const productionItems = ref([])
  const mixingItems = ref([])
  const filmScoringItems = ref([])
  const brandedItems = ref([])
  // visual
  const photographyItems = ref([])
  const videoItems = ref([])
  const artAndDesignItems = ref([])

  //------------------------------------+
  //                                    |
  //            Actions                 +
  //                                    |
  //------------------------------------+

  // +-----------------------------------+
  // |        INIT ENTIRE STORE          |
  // +-----------------------------------+
  // this is called when the route is either /music or /visual
  function setEntireStore(items) {

    if (!items || items.length === 0) {
      console.error('No items provided, cannot set entire store')
      setGalleryItems([])
    }

    console.log('SETTING ENTIRE STORE with items: ', items)

    let allGalleryItems = items
    // randomize
    const randomizedItems = randomizeItems(allGalleryItems)
    // set gallery items
    setGalleryItems(randomizedItems)
    // set all category items
    setAllCategoryItems(randomizedItems)
  }

  // GALLERY ITEMS --------------------------------+
  function setGalleryItems(items) {
    console.log('Setting gallery items: ', items)
    galleryItems.value = items
  }

  // +-----------------------------------+
  // |  SET GALLERY CATEGORIZED ITEMS    |
  // +-----------------------------------+
  function setAllCategoryItems(allItems) {
    if (allItems.length === 0) {
      console.error('No items provided, cannot set category items')
      return
    }
    console.log('Setting all category items...')

    // music
    productionItems.value = filterAndGetItemsByCategory(allItems, 'production')
    mixingItems.value = filterAndGetItemsByCategory(allItems, 'mixing')
    filmScoringItems.value = filterAndGetItemsByCategory(allItems, 'film scoring')
    brandedItems.value = filterAndGetItemsByCategory(allItems, 'branded')

    // visual
    photographyItems.value = filterAndGetItemsByCategory(allItems, 'photography')
    videoItems.value = filterAndGetItemsByCategory(allItems, 'video')
    artAndDesignItems.value = filterAndGetItemsByCategory(allItems, 'art&design')
  }

  // +---------------------------------------+
  // |   FILTER AND GET ITEMS BY CATEGORY    |
  // +---------------------------------------+
  // returns an array of items for a given category created by filtering allItems
  function filterAndGetItemsByCategory(allItems, category) {
    if (!category || category == '') {
      console.error('No category provided, returning empty array')
      return []
    }
    if (allItems.length === 0) {
      console.error('No items provided, returning empty array')
      return []
    }
    console.log('Getting items for category: ', category)

    let categoryItems
    categoryItems = allItems.filter(item => {
      let associatedCategories = removeSpaces(item.categories.toLowerCase())
      category = removeSpaces(category.toLowerCase())
      return containsSubstring(associatedCategories, category)
    })

    return categoryItems
  }

  // +---------------------------------------+
  // |      GET CURENT CATEGORY'S ITEMS      |
  // +---------------------------------------+
  function getCurrentCategoryItems(galleryCategory) {
    if (!galleryCategory || galleryCategory == '') {
      console.log('No category provided, returning all gallery items')
      return []
    }

    console.log('Getting current category items for category: ', galleryCategory)

    switch (galleryCategory.toLowerCase()) {
      // music
      case 'production':
        return productionItems.value
      case 'mixing':
        return mixingItems.value
      case 'film scoring':
        return filmScoringItems.value
      case 'branded':
        return brandedItems.value
      // visual
      case 'photography':
        return photographyItems.value
      case 'video':
        return videoItems.value
      case 'art&design':
        return artAndDesignItems.value
      default:
        console.log('Category not found, returning empty array')
        return []
    }

  }

  // +------------------------------------------------+
  // |      RANDOMIZE CURRENT ITEMS FOR CATEGORY      |
  // +------------------------------------------------+
  function randomizeCurrentItemsForCategory(category) {
    console.log('Randomizing current category items for category: ', category)
    switch (category.toLowerCase()) {
      // music
      case 'production':
        productionItems.value = randomizeItems(productionItems.value)
        return
      case 'mixing':
        mixingItems.value = randomizeItems(mixingItems.value)
        return
      case 'film scoring':
        filmScoringItems.value = randomizeItems(filmScoringItems.value)
        return
      case 'branded':
        brandedItems.value = randomizeItems(brandedItems.value)
        return
      // visual
      case 'photography':
        console.log('Randomizing photography items...')
        photographyItems.value = randomizeItems(photographyItems.value)
        return
      case 'video':
        videoItems.value = randomizeItems(videoItems.value)
        return
      case 'art&design':
        artAndDesignItems.value = randomizeItems(artAndDesignItems.value)
        return
      default:
        console.error('Category not found, bug state, returning and doing nothing')
        return
    }
  }

  function setGalleryType(type) {
    console.log('Setting gallery type: ', type)
    galleryType.value = type
  }

  function setGalleryCategory(category) {
    if (!category) category = ''
    console.log('Setting gallery category: ', category)
    galleryCategory.value = category
  }

  // function getGalleryItems() {
  //   console.log('Getting gallery items')
  //   return galleryItems.value
  // }

  // function randomizeCurrentGalleryItems() {
  //   console.log('Randomizing gallery items...')
  //   const randomizedItems = randomizeItems(galleryItems.value)
  //   setGalleryItems(randomizedItems)
  // }

  //------------------------------------+
  //                                    |
  //             Getters                +
  //                                    |
  //------------------------------------+
  const visibleGalleryItems = computed(() => {

    let visibleGalleryItems = []
    if (galleryCategory.value && galleryCategory.value !== '') {
      console.log('Computing visible gallery items for available category: ', galleryCategory.value)
      visibleGalleryItems = getCurrentCategoryItems(galleryCategory.value)
    } else {
      console.log('Computing visible gallery items: no category selected, returning all gallery items')
      visibleGalleryItems = galleryItems.value
    }

    return visibleGalleryItems
  })


  //------------------------------------+
  //                                    |
  //            Watchers                +
  //                                    |
  //------------------------------------+

  // PATH CHANGES --> CHANGE GALLERY TYPE
  watch(() => route.path, (newPath, oldPath) => {
    if (newPath === oldPath) return
    console.log('Route path changed: ', newPath, oldPath)
    if (newPath.includes('/music')) {
      setGalleryType('music')
      return
    }
    if (newPath.includes('/visual')) {
      setGalleryType('visual')
      return
    }

    setGalleryType('')

  }, { immediate: true })

  // CATEGORY CHANGES --> CHANGE GALLERY CATEGORY
  watch(() => route.query.category, (newCategory, oldCategory) => {
    if (!newCategory) {
      setGalleryCategory('')
      return
    }
    if (newCategory == oldCategory) return

    console.log('Route category changed: ', newCategory, oldCategory)
    setGalleryCategory(newCategory)
  }, { immediate: true })

  // GALLERY TYPE CHANGES --> SET GALLERY ITEMS
  watch(() => galleryType.value, (newGalleryType, oldGalleryType) => {
    if (!newGalleryType) return
    if (newGalleryType == oldGalleryType) return
    if (newGalleryType === '') {
      console.log('Gallery type cleared, setting empty gallery items')
      setGalleryItems([])
      return
    }
    // happy path
    console.log('Gallery type changed: ', newGalleryType, oldGalleryType)
    if (newGalleryType === 'music') {
      setEntireStore(musicItems, newGalleryType)
      return
    }
    if (newGalleryType === 'visual') {
      setEntireStore(visualItems, newGalleryType)
      return
    }
    // sets to empty if you aren't on music or visual
    setGalleryItems([])

  }, { immediate: true })

  // logging
  watch(galleryItems, (newItems) => {
    console.log('Gallery items updated, new items are: ', newItems)
    console.log('Total gallery items count: ', newItems.length)
  }, { immediate: false })


  return {
    galleryType,
    visibleGalleryItems,
    galleryCategory,
    randomizeCurrentItemsForCategory,
  }
})