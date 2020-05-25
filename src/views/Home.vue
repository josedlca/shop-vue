<template>
  <div class=" bg-light-gray">
    <Contact/>
    <Navigation/>
    <Slider/>
    <NewArrivals/>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'
import Slider from '@/components/homeComponents/Slider.vue'
import NewArrivals from '@/components/homeComponents/NewArrivals.vue'

export default {
  name: 'Home',
  components: {
    Contact,
    Navigation,
    Slider,
    NewArrivals
  }
}
</script>
