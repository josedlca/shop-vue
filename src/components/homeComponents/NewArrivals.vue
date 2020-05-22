<template>
    <div>
        <TitleComponent :title="title"/>
    </div>
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
      title: 'some dummy text'
    }
  }
}
</script>
