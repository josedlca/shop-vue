<template>
  <div class=" bg-light-gray">
    <Contact/>
    <Navigation/>
    <TitleComponent
      titlePartOne="Related"
      titlePartTwo="Products"
      titleDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsa quo et."
    />
    <div class=" container mx-auto flex flex-row">
      <CardClothesComponent
        v-for="(item,index) in fullInfo[0]" :key="index"
        :srcImg= item.url
      />
    </div>
    <NewsLetterComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'
import TitleComponent from '@/components/helpComponents/TitleComponent'
import CardClothesComponent from '@/components/helpComponents/CardClothesComponent'
import NewsLetterComponent from '@/components/helpComponents/NewsLetterComponent.vue'
import FooterComponent from '@/components/helpComponents/FooterComponent.vue'
export default {
  name: 'Products',
  components: {
    Contact,
    Navigation,
    TitleComponent,
    CardClothesComponent,
    NewsLetterComponent,
    FooterComponent
  },
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
      fullInfo: this.takeInfo()
    }
  }
}
</script>
