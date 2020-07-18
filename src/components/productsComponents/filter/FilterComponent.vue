<template>
  <div class=" container mx-auto pt-16 flex flex-row">
    <div class=" w-1/4">
      <FilterCardsComponent
        @passClothes="testArr = $event"
        kindOfFilter="Categories"
        :myClothes = this.$store.getters.getSpecificInfo
      />
      <FilterCardsComponent kindOfFilter="Sizes"/>
      <FilterCardsComponent kindOfFilter="Brands"/>
    </div>
    <div class="w-3/4 flex flex-row flex-wrap">
      <div class=" hidden">{{this.firstShow()}}</div>
      <CardClothesComponent
        colNumbers = '3'
        v-for="(item,index) in whoShow" :key="index"
        :srcImg= item.url
      />
      <!-- <div>{{testArr.length}}</div> -->
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
    firstShow: function () {
      if (this.$store.state.allTheInfo.length === 0) {
        this.$store.dispatch('setTheInfo')
      }
    }
  },
  computed: {
    getSpecificInfo () {
      return this.$store.getters.getSpecificInfo
    },
    whoShow () {
      if (this.testArr.length === 0) {
        return this.getSpecificInfo
      } else {
        return this.testArr
      }
    }
  },
  data () {
    return {
      testArr: []
    }
  }
}
</script>
