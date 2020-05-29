<template>
    <div>
      <TitleComponent
        class=" mb-16"
        titlePartOne= "Best"
        titlePartTwo= "Sales"
        titleDescription= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rerum maiores nostrum."
      />
      <BestSalesSlider class=" pb-12"/>
    </div>
</template>

<script>
import TitleComponent from '../../helpComponents/TitleComponent'
import BestSalesSlider from './BestSalesSlider'
export default {
  components: {
    TitleComponent,
    BestSalesSlider
  },
  name: 'BestSalesComponent'
}
</script>
