<template>
    <section>
      <TitleComponent
        :titlePartOne="titleProps.titlePartOne"
        :titlePartTwo="titleProps.titlePartTwo"
        :titleDescription="titleProps.titleDescription"
      />
      <div class=" container mx-auto flex flex-row">
        <CardClothesComponent
          v-for="(item,index) in foundPath()" :key="index"
          :srcImg= item
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
  data () {
    return {
      titleProps: {
        titlePartOne: 'new',
        titlePartTwo: 'arrivals',
        titleDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsa quo et.'
      },
      cardsInfo: {
        srcImg: ['img-1.png', 'img-2.png', 'img-3.png', 'img-2.png']
      }
    }
  },
  methods: {
    foundPath: function () {
      var testThis = []
      this.cardsInfo.srcImg.forEach(itemImg => testThis.push(require(`../../assets/img/${itemImg}`)))
      return testThis
    }
  }
}
</script>
