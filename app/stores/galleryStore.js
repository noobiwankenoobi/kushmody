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

  // INIT ENTIRE STORE
  // this is called when the route is either /music or /visual
  function setEntireStore(items) {

    if (!items || items.length === 0) {
      console.error('No items provided, cannot set entire store')
      setGalleryItems([])
    }
    let allGalleryItems = items
    // randomize
    const randomizedItems = randomizeItems(allGalleryItems)
    // set gallery items
    setGalleryItems(randomizedItems)
    // set all category items
    setAllCategoryItems(randomizedItems)
  }

  // GALLERY ITEMS --------------------------------+

  // function randomizeAndSetGalleryItems(items) {
  //   console.log('Randomizing and setting gallery items...')
  //   const randomizedItems = randomizeItems(items)
  //   setGalleryItems(randomizedItems)
  // }

  function setGalleryItems(items) {
    console.log('Setting gallery items: ', items)
    galleryItems.value = items
  }

  // SET GALLERY CATEGORIZED ITEMS --------------------------+
  function setAllCategoryItems(allItems) {
    if (allItems.length === 0) {
      console.error('No items provided, cannot set category items')
      return
    }
    console.log('Setting all category items...')

    // music
    productionItems.value = reduceAndGetItemsByCategory(allItems, 'production')
    mixingItems.value = reduceAndGetItemsByCategory(allItems, 'mixing')
    filmScoringItems.value = reduceAndGetItemsByCategory(allItems, 'film scoring')
    brandedItems.value = reduceAndGetItemsByCategory(allItems, 'branded')

    // visual
    photographyItems.value = reduceAndGetItemsByCategory(allItems, 'photography')
    videoItems.value = reduceAndGetItemsByCategory(allItems, 'video')
    artAndDesignItems.value = reduceAndGetItemsByCategory(allItems, 'art&design')
  }

  // returns an array of items for a given category from a passed param of all items
  function reduceAndGetItemsByCategory(allItems, category) {
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


  function setGalleryType(type) {
    console.log('Setting gallery type: ', type)
    galleryType.value = type
  }

  function setGalleryCategory(category) {
    if (!category) category = ''
    console.log('Setting gallery category: ', category)
    galleryCategory.value = category
  }



  function getGalleryItems() {
    console.log('Getting gallery items')
    return galleryItems.value
  }

  // function getVisibleItemsByCategory(newCategory) {
  //   if (!newCategory || newCategory == '') {
  //     console.log('No category provided, returning all gallery items')
  //     return getGalleryItems()
  //   }
  //   console.log('Getting visible items by category: ', newCategory)

  //   let items = getGalleryItems()

  //   items = items.filter(item => {
  //     let categories = removeSpaces(item.categories.toLowerCase())
  //     let queryCategory = removeSpaces(route.query.category.toLowerCase())
  //     return containsSubstring(categories, queryCategory)
  //   })

  //   return items
  // }

  function randomizeItems(items) {
    return items
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  // function getVisibleItemsByCategoryAndRandomize(newCategory) {
  //   console.log('Getting visible items by category and randomizing: ', newCategory)
  //   const items = getVisibleItemsByCategory(newCategory)
  //   const randomizedItems = randomizeItems(items)
  //   return randomizedItems
  // }

  // function setVisibleItems(items) {
  //   console.log('Setting visible items: ', items)
  //   visibleItems.value = items
  // }

  // function getAndSetVisibleItemsByCategory(newCategory) {
  //   console.log('Getting and setting visible items by category: ', newCategory)

  //   if (newCategory == '') {
  //     const allItems = getGalleryItems()
  //     setVisibleItems(allItems)
  //     return
  //   }

  //   const items = getVisibleItemsByCategory(newCategory)
  //   setVisibleItems(items)
  // }



  function randomizeCurrentGalleryItems() {
    console.log('Randomizing gallery items...')
    const randomizedItems = randomizeItems(galleryItems.value)
    setGalleryItems(randomizedItems)
  }



  // function randomizeAndSetCurrentVisibleItems() {
  //   console.log('Randomizing visible items...')
  //   const randomizedItems = randomizeItems(visibleItems.value)
  //   setVisibleItems(randomizedItems)
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

  // GALLERY CATEGORY CHANGES --> SET VISIBLE ITEMS
  // watch(galleryCategory, (newCategory, oldCategory) => {
  //   console.log('Gallery category changed: ', newCategory, oldCategory)
  //   if (newCategory === oldCategory) return
  //   if (newCategory && newCategory !== '') {
  //     getAndSetVisibleItemsByCategory(newCategory)
  //   } else {
  //     getAndSetVisibleItemsByCategory('')
  //   }
  // }, { immediate: true })

  // GALLERY ITEMS CHANGES --> RESET ALL ITEM CATEGORIES
  // watch(galleryItems, (newGalleryItems, _) => {
  //   console.log('Gallery items changed: ', newGalleryItems, _)
  //   setAllCategoryItems(newGalleryItems)
  // }, { immediate: true })


  // Watcher that determines the change situation
  // -- Category changes


  return {
    galleryItems,
    galleryType,
    visibleGalleryItems,
    galleryCategory,
    // randomizeCurrentGalleryItems,
    // randomizeAndSetCurrentVisibleItems,
    setGalleryCategory,
  }
})