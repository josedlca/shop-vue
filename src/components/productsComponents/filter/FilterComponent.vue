<template>
  <div class=" container mx-auto pt-16 flex flex-row">
    <div class=" w-1/4">
      <FilterCardsComponent v-on:passClothes='updateClothes($event)' kindOfFilter="Categories"/>
      <FilterCardsComponent kindOfFilter="Sizes"/>
      <FilterCardsComponent kindOfFilter="Brands"/>
    </div>
    <div class="w-3/4">
      <CardClothesComponent/>
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
  methods: {
    updateClothes: function (hereIsTheClothes) {
      console.log(hereIsTheClothes)
    }
  },
  data () {
    return {
      testArr: []
    }
  }
}
</script>
