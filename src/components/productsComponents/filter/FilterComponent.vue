<template>
  <div class=" container mx-auto pt-16 flex flex-row">
    <div class=" w-1/4">
      <FilterCardsComponent
        @passClothes="testArr = $event"
        kindOfFilter="Categories"
        :myClothes = fullInfo[0]
      />
      <FilterCardsComponent kindOfFilter="Sizes"/>
      <FilterCardsComponent kindOfFilter="Brands"/>
    </div>
    <div class="w-3/4 flex flex-row flex-wrap">
      <CardClothesComponent
        colNumbers = '3'
        v-for="(item,index) in this.whoShow()" :key="index"
        :srcImg= item.url
      />
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
    takeInfo: function () {
      return this.$store.getters.aLotOfInfo
    },
    whoShow: function () {
      if (this.testArr.length === 0) {
        this.fullInfo = this.takeInfo()
        return this.fullInfo[0]
      } else {
        this.fullInfo = this.testArr
        return this.fullInfo
      }
    }
  },
  data () {
    return {
      testArr: [],
      fullInfo: this.takeInfo()
    }
  }
}
</script>
