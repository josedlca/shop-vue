<template>
    <div>
      <TitleComponent
        titlePartOne= "Best"
        titlePartTwo= "Sales"
        titleDescription= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum maiores nostrum."
      />
    </div>
</template>

<script>
import TitleComponent from '../helpComponents/TitleComponent'
export default {
  components: {
    TitleComponent
  },
  name: 'BestSalesComponent'
}
</script>
