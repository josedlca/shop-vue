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
      const testClothes = []
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => testClothes.push(json.filter(clothes => clothes.id <= 4)))
      return testClothes
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
