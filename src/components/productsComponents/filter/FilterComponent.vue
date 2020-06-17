<template>
  <div class=" container mx-auto pt-16">
    <div class=" w-1/4">
      <FilterCardsComponent kindOfFilter="Categories"/>
      <FilterCardsComponent kindOfFilter="Sizes"/>
      <FilterCardsComponent kindOfFilter="Brands"/>
    </div>
  </div>
</template>

<script>
import FilterCardsComponent from '@/components/productsComponents/filter/FilterCardsComponent.vue'

export default {
  components: {
    FilterCardsComponent
  },
  name: 'FilterComponent'
}
</script>
