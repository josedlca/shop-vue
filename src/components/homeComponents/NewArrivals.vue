<template>
    <section>
        <TitleComponent
        :titlePartOne="titlePartOne"
        :titlePartTwo="titlePartTwo"
        :titleDescription="titleDescription"
        />
    </section>
</template>

<script>

import TitleComponent from '../helpComponents/TitleComponent'
export default {
  components: {
    TitleComponent
  },
  name: 'NewArrivals',
  data () {
    return {
      titlePartOne: 'new',
      titlePartTwo: 'arrivals',
      titleDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore ipsa quo et.'
    }
  }
}
</script>
