<template>
  <div>
    <Contact/>
    <Navigation/>
  </div>
</template>

<script>
// @ is an alias to /src
import Contact from '@/components/head/Contact.vue'
import Navigation from '@/components/head/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Contact,
    Navigation
  }
}
</script>
