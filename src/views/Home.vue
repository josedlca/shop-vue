<template>
  <div class=" bg-light-gray">
    <Contact/>
    <Navigation/>
    <Slider/>
    <NewArrivals/>
    <FullWinterComponent/>
    <BestSalesComponent/>
    <NewsLetterComponent/>
    <FooterComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'
import Slider from '@/components/homeComponents/Slider.vue'
import NewArrivals from '@/components/homeComponents/NewArrivals.vue'
import FullWinterComponent from '@/components/homeComponents/FullWinterComponent.vue'
import BestSalesComponent from '@/components/homeComponents/bestSales/BestSalesComponent.vue'
import NewsLetterComponent from '@/components/helpComponents/NewsLetterComponent.vue'
import FooterComponent from '@/components/helpComponents/FooterComponent.vue'

export default {
  name: 'Home',
  components: {
    Contact,
    Navigation,
    Slider,
    NewArrivals,
    FullWinterComponent,
    BestSalesComponent,
    NewsLetterComponent,
    FooterComponent
  }
}
</script>
