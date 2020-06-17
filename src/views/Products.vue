<template>
  <div class=" bg-light-gray">
    <Contact/>
    <Navigation/>
    <FilterComponent/>
    <NewsLetterComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'
import FilterComponent from '@/components/productsComponents/filter/FilterComponent.vue'
import NewsLetterComponent from '@/components/helpComponents/NewsLetterComponent.vue'
import FooterComponent from '@/components/helpComponents/FooterComponent.vue'
export default {
  name: 'Products',
  components: {
    Contact,
    Navigation,
    NewsLetterComponent,
    FooterComponent,
    FilterComponent
  }
}
</script>
