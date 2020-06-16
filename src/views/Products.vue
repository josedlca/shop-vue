<template>
  <div class=" bg-light-gray">
    <Contact/>
    <Navigation/>
    <NewsLetterComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'
import NewsLetterComponent from '@/components/helpComponents/NewsLetterComponent.vue'
import FooterComponent from '@/components/helpComponents/FooterComponent.vue'
export default {
  name: 'Products',
  components: {
    Contact,
    Navigation,
    NewsLetterComponent,
    FooterComponent
  },
  methods: {
    takeInfo: function () {
      const testClothes = []
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => testClothes.push(json.filter(clothes => clothes.id <= 20)))
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
