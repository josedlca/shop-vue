<template>
  <div class=" container mx-auto pt-16 flex flex-row">
    <div class=" w-1/4">
      <FilterCardsComponent @passClothes="testArr = $event" kindOfFilter="Categories"/>
      <FilterCardsComponent kindOfFilter="Sizes"/>
      <FilterCardsComponent kindOfFilter="Brands"/>
    </div>
    <div class="w-3/4">
      <CardClothesComponent/>
      <div>{{testArr}}</div>
    </div>
  </div>
</template>

<script>
import FilterCardsComponent from '@/components/productsComponents/filter/FilterCardsComponent.vue'
import CardClothesComponent from '@/components/helpComponents/CardClothesComponent.vue'

export default {
  components: {
    FilterCardsComponent,
    CardClothesComponent
  },
  name: 'FilterComponent',
  data () {
    return {
      testArr: []
    }
  }
}
</script>
