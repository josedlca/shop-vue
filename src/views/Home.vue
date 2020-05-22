<template>
  <div>
    <Contact/>
    <Navigation/>
    <Slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'
import Slider from '@/components/homeComponents/Slider.vue'

export default {
  name: 'Home',
  components: {
    Contact,
    Navigation,
    Slider
  }
}
</script>
