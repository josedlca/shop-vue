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
        v-for="(item,index) in foundPath()" :key="index"
        :srcImg= item
      />
    </div>
    <div>{{fullInfo[0][2]}}</div>
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
    foundPath: function () {
      var testThis = []
      this.cardsInfo.srcImg.forEach(itemImg => testThis.push(require(`../assets/img/${itemImg}`)))
      return testThis
    }
  },
  data () {
    return {
      cardsInfo: {
        srcImg: ['img-1.png', 'img-2.png', 'img-3.png', 'img-2.png']
      },
      fullInfo: this.takeInfo()
    }
  }
}
</script>
