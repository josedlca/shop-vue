<template>
    <section>
      <TitleComponent
        :titlePartOne="titleProps.titlePartOne"
        :titlePartTwo="titleProps.titlePartTwo"
        :titleDescription="titleProps.titleDescription"
      />
      <div class=" container mx-auto flex flex-row">
        <CardClothesComponent
          v-for="(item,index) in fullInfo[0]" :key="index"
          :srcImg= item.url
        />
      </div>
    </section>
</template>

<script>

import TitleComponent from '../helpComponents/TitleComponent'
import CardClothesComponent from '../helpComponents/CardClothesComponent'

export default {
  components: {
    TitleComponent,
    CardClothesComponent
  },
  name: 'NewArrivals',
  methods: {
    takeInfo: function () {
      return this.$store.getters.getTheInfo
    }
  },
  data () {
    return {
      titleProps: {
        titlePartOne: 'new',
        titlePartTwo: 'arrivals',
        titleDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsa quo et.'
      },
      fullInfo: this.takeInfo()
    }
  }
}
</script>
